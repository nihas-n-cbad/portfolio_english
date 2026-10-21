import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-32 w-full rounded-lg border border-line bg-white/[0.025] px-4 py-3 text-sm text-cream',
        'placeholder:text-mist-dim transition-colors duration-200',
        'hover:border-white/20 focus-visible:border-cream/50 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-red-500/60 resize-none',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
