import { site } from '@/data/site'
import { cn } from '@/lib/utils'

/** Four-point editorial sparkle used across the hero and CTA. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn('size-5', className)}
    >
      <path
        d="M12 0c.35 6.2 5.8 11.65 12 12-6.2.35-11.65 5.8-12 12C11.65 17.8 6.2 12.35 0 12 6.2 11.65 11.65 6.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={cn('size-4', className)}>
      <path
        d="M4.2 11.8 11.8 4.2M5.4 4.2h6.4v6.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 12" fill="none" aria-hidden className={cn('h-3 w-4', className)}>
      <path
        d="M0 6h16M11 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DashedArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 8" fill="none" aria-hidden className={cn('h-2 w-10', className)}>
      <path
        d="M0 4h30"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <path
        d="m30 1 5 3-5 3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* Brand marks — lucide dropped brand icons, so these are drawn inline. */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn('size-4', className)}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.4 2.6 4.4 6V21h-4v-5.5c0-1.4-.3-2.6-1.9-2.6s-2.1 1.2-2.1 2.5V21h-4V9Z" />
    </svg>
  )
}

export function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn('size-4', className)}>
      <path d="M8.6 5.4c1.9 0 3.2.9 3.2 2.6 0 1.1-.6 1.8-1.6 2.2 1.3.4 2.1 1.3 2.1 2.8 0 2.1-1.7 3.3-4 3.3H2V5.4h6.6Zm-.5 4.2c.9 0 1.4-.4 1.4-1.1 0-.8-.5-1.1-1.4-1.1H4.6v2.2h3.5Zm.2 4.7c1 0 1.6-.4 1.6-1.3s-.6-1.3-1.6-1.3H4.6v2.6h3.7ZM18.6 8.6c2.6 0 4.4 1.9 4.4 4.6v.6h-6.5c.1 1.2 1 1.9 2.1 1.9 1 0 1.7-.4 2-1.2h2.3c-.4 1.9-2.1 3.1-4.3 3.1-2.7 0-4.6-1.9-4.6-4.5s1.8-4.5 4.6-4.5Zm-2 3.6h4c-.1-1.1-.9-1.8-2-1.8s-1.9.7-2 1.8Zm.3-5.6h3.9v1.3h-3.9V6.6Z" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn('size-4', className)}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </svg>
  )
}

export function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn('size-4', className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 8.4c5.2.6 9.2-.3 12.3-3M3.6 13.6c4.4-1.6 9.3-.8 12.6 3.1M9 20.2c1.6-4.9 4-8.4 8.2-10.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn('size-4', className)}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

/** Generic code mark, used for the LeetCode profile. */
export function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn('size-4', className)}>
      <path
        d="m8.5 6-5.5 6 5.5 6M15.5 6l5.5 6-5.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn('size-4', className)}>
      <path d="M17.7 3H21l-7.3 8.3L21.7 21h-6.3l-4.4-5.6L5.6 21H2.3l7.7-8.8L2 3h6.4l4 5.2L17.7 3Zm-1.1 16h1.7L7.4 4.7H5.6L16.6 19Z" />
    </svg>
  )
}

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn('font-serif text-[1.65rem] leading-none tracking-[-0.04em] text-cream', className)}
      aria-hidden
    >
      {site.monogram.slice(0, 1)}
      <span className="italic">{site.monogram.slice(1)}</span>
    </span>
  )
}
