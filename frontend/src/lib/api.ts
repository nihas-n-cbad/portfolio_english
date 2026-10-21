export type ContactPayload = {
  name: string
  email: string
  message: string
  projectType?: string
}

export class ApiError extends Error {}

/** Posts a contact message to the Express backend. */
export async function sendContactMessage(payload: ContactPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const body = (await response.json().catch(() => null)) as
    | { ok: boolean; message?: string; errors?: Record<string, string> }
    | null

  if (!response.ok || !body?.ok) {
    throw new ApiError(body?.message ?? 'Something went wrong. Please try again.')
  }

  return body
}
