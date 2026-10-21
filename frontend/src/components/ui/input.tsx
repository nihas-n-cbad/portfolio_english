import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-12 w-full min-w-0 rounded-lg border border-line bg-white/[0.025] px-4 py-2 text-sm text-cream',
        'placeholder:text-mist-dim transition-colors duration-200',
        'hover:border-white/20 focus-visible:border-cream/50 focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-red-500/60',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
