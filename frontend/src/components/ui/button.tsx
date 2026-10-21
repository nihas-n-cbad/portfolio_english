import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.7rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:outline-1 focus-visible:outline-cream focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary:
          'bg-cream text-[#0b0b0b] hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_10px_40px_-12px_rgba(255,255,255,0.35)]',
        outline:
          'border border-white/25 bg-transparent text-cream hover:border-cream/70 hover:bg-white/[0.06]',
        ghost: 'bg-transparent text-cream hover:bg-white/[0.06]',
        surface:
          'border border-line bg-white/[0.04] text-cream hover:border-white/25 hover:bg-white/[0.08]',
        dark: 'bg-[#141414] text-cream border border-line hover:bg-[#1c1c1c]',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-6',
        lg: 'h-12 px-7',
        icon: 'size-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
