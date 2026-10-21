import { randomUUID } from 'node:crypto'
import { appendFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const PORT = Number(process.env.PORT) || 4001
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? 'http://localhost:5173'
const CONTACT_TO = process.env.CONTACT_TO ?? ''
const MESSAGES_FILE = path.resolve(rootDir, 'data/messages.jsonl')

const PROJECT_TYPES = ['Full-stack build', 'Front-end work', 'Backend / API', 'Other']
const LIMITS = { name: 80, email: 160, message: 2000 }
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 }

const app = express()
app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(express.json({ limit: '24kb' }))

app.use(
  cors({
    origin(origin, callback) {
      // Same-origin requests and non-browser clients have no Origin header.
      if (!origin || origin === ALLOWED_ORIGIN) return callback(null, true)
      return callback(null, false)
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    maxAge: 86400,
  }),
)

/* ------------------------------------------------------------- rate limit */
const attempts = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs)
  recent.push(now)
  attempts.set(ip, recent)

  // Keep the map from growing without bound on a long-running process.
  if (attempts.size > 5000) {
    for (const [key, times] of attempts) {
      if (times.every((time) => now - time >= RATE_LIMIT.windowMs)) attempts.delete(key)
    }
  }

  return recent.length > RATE_LIMIT.max
}

/* ---------------------------------------------------------------- email */
const smtpConfigured = Boolean(
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
)

const mailer = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null

/* ------------------------------------------------------------ validation */
function validate(body) {
  const errors = {}
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const projectType =
    typeof body.projectType === 'string' && PROJECT_TYPES.includes(body.projectType)
      ? body.projectType
      : PROJECT_TYPES[0]

  if (name.length < 2) errors.name = 'Please share your name.'
  else if (name.length > LIMITS.name) errors.name = 'That name is a little too long.'

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Enter a valid email address.'
  else if (email.length > LIMITS.email) errors.email = 'That email is too long.'

  if (message.length < 10) errors.message = 'Tell me a little more about the project.'
  else if (message.length > LIMITS.message) errors.message = 'Please keep it under 2000 characters.'

  return { errors, value: { name, email, message, projectType } }
}

/* --------------------------------------------------------------- routes */
app.get('/api/health', (_request, response) => {
  response.json({ ok: true, emailDelivery: smtpConfigured ? 'smtp' : 'stored-only' })
})

app.post('/api/contact', async (request, response) => {
  if (isRateLimited(request.ip ?? 'unknown')) {
    return response.status(429).json({
      ok: false,
      message: 'Too many messages from this device. Please try again in a few minutes.',
    })
  }

  const { errors, value } = validate(request.body ?? {})
  if (Object.keys(errors).length > 0) {
    return response.status(422).json({ ok: false, message: 'Please check the form.', errors })
  }

  const submission = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    ...value,
    userAgent: request.get('user-agent') ?? '',
    ip: request.ip ?? '',
  }

  try {
    await mkdir(path.dirname(MESSAGES_FILE), { recursive: true })
    // Newline-delimited JSON is append-only, so concurrent requests cannot clobber each other.
    await appendFile(MESSAGES_FILE, `${JSON.stringify(submission)}\n`, 'utf8')
  } catch (error) {
    console.error('[contact] failed to persist submission', error)
    return response
      .status(500)
      .json({ ok: false, message: 'Could not save your message. Please email me directly.' })
  }

  if (mailer && CONTACT_TO) {
    try {
      await mailer.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: CONTACT_TO,
        replyTo: submission.email,
        subject: `New project enquiry — ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Project type: ${submission.projectType}`,
          '',
          submission.message,
        ].join('\n'),
      })
    } catch (error) {
      // The message is safely stored, so a mail outage should not lose the enquiry.
      console.error('[contact] email delivery failed', error)
    }
  } else {
    console.info(`[contact] stored message ${submission.id} (SMTP not configured)`)
  }

  return response.status(201).json({ ok: true, id: submission.id })
})

/* ----------------------------------------------------- optional frontend */
const distDir = path.resolve(rootDir, '../frontend/dist')
if (process.env.SERVE_STATIC === 'true') {
  app.use(express.static(distDir))
  app.get(/^(?!\/api\/).*/, (_request, response) => {
    response.sendFile(path.join(distDir, 'index.html'))
  })
}

app.use((_request, response) => {
  response.status(404).json({ ok: false, message: 'Not found.' })
})

app.use((error, _request, response, _next) => {
  if (error?.type === 'entity.parse.failed') {
    return response.status(400).json({ ok: false, message: 'Invalid JSON body.' })
  }
  console.error('[server] unhandled error', error)
  return response.status(500).json({ ok: false, message: 'Unexpected server error.' })
})

const server = app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
  console.log(`  email delivery: ${smtpConfigured ? 'SMTP' : 'stored to data/messages.jsonl'}`)
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0))
  })
}
