import { useState, type ReactNode } from 'react'
import { Check, Loader2 } from 'lucide-react'

import { sendContactMessage } from '@/lib/api'
import { site } from '@/data/site'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const projectTypes = ['Full-stack build', 'Front-end work', 'Backend / API', 'Other']

export function ContactDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [projectType, setProjectType] = useState(projectTypes[0])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    setError(null)

    try {
      await sendContactMessage({
        name: String(data.get('name') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        message: String(data.get('message') ?? '').trim(),
        projectType,
      })
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      // Let the exit animation settle before resetting the panel.
      window.setTimeout(() => {
        setStatus('idle')
        setError(null)
      }, 250)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent aria-describedby="contact-description">
        {status === 'sent' ? (
          <div className="flex flex-col items-start py-6">
            <span className="grid size-12 place-items-center rounded-full border border-cream/25 bg-cream/10 text-cream">
              <Check className="size-5" strokeWidth={1.5} />
            </span>
            <DialogTitle className="mt-6">Message sent.</DialogTitle>
            <DialogDescription id="contact-description">
              Thanks for reaching out — I&apos;ll get back to you at the email you shared, usually
              within two working days.
            </DialogDescription>
            <Button className="mt-8" onClick={() => handleOpenChange(false)}>
              Back to site
            </Button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Start a conversation</p>
            <DialogTitle className="mt-3">Let&apos;s build something</DialogTitle>
            <DialogDescription id="contact-description">
              Tell me a little about what you&apos;re building. I reply personally to every
              message.
            </DialogDescription>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2.5">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Cooper"
                    required
                    minLength={2}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <fieldset className="flex flex-col gap-2.5">
                <legend className="mb-2.5 text-[0.68rem] font-medium tracking-[0.16em] text-mist uppercase">
                  Project type
                </legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      aria-pressed={projectType === type}
                      className={
                        'rounded-full border px-3.5 py-2 text-xs transition-colors duration-200 ' +
                        (projectType === type
                          ? 'border-cream/60 bg-cream text-[#0b0b0b]'
                          : 'border-line text-mist hover:border-white/25 hover:text-cream')
                      }
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2.5">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="A few lines about the product, stack, and timeline…"
                  required
                  minLength={10}
                />
              </div>

              {error && (
                <p role="alert" className="text-xs leading-relaxed text-red-400">
                  {error}
                </p>
              )}

              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.7rem] text-mist-dim">
                  Or email{' '}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-mist underline underline-offset-4 transition-colors hover:text-cream"
                  >
                    {site.email}
                  </a>
                </p>
                <Button type="submit" disabled={status === 'sending'} className="sm:min-w-40">
                  {status === 'sending' ? (
                    <>
                      Sending
                      <Loader2 className="size-3.5 animate-spin" />
                    </>
                  ) : (
                    'Send message'
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
