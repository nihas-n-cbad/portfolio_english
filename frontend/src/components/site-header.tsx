import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { useScrolled } from '@/components/reveal'
import { ArrowUpRight, Monogram } from '@/components/icons'
import { ContactDialog } from '@/components/contact-dialog'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const scrolled = useScrolled(12)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between md:h-[84px]">
          <a
            href="#top"
            aria-label={`${site.name} — home`}
            className="group relative z-10 flex items-baseline"
          >
            <Monogram className="transition-opacity group-hover:opacity-80" />
          </a>

          <div className="flex items-center gap-4 md:gap-9">
            <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-underline text-[0.66rem] font-medium tracking-[0.17em] text-mist uppercase transition-colors duration-300 hover:text-cream"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ContactDialog>
              <Button size="sm" className="hidden h-9 gap-2.5 px-4 md:inline-flex">
                Let&apos;s talk
                <ArrowUpRight className="size-3.5" />
              </Button>
            </ContactDialog>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:border-white/35 md:hidden"
            >
              <Menu className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] flex flex-col bg-[#0a0a0a] transition-all duration-500 md:hidden',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between">
          <Monogram />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/15 text-cream"
          >
            <X className="size-4" strokeWidth={1.5} />
          </button>
        </div>

        <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-center gap-1 pb-16">
          {site.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-line-soft py-5"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-[0.6rem] tracking-[0.2em] text-mist-dim">
                  0{index + 1}
                </span>
                <span className="font-display text-4xl uppercase tracking-tight text-cream">
                  {item.label}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-mist transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream" />
            </a>
          ))}

          <div className="mt-10 flex flex-col gap-4">
            <ContactDialog>
              <Button size="lg" className="w-full" onClick={() => setMenuOpen(false)}>
                Let&apos;s talk
                <ArrowUpRight className="size-3.5" />
              </Button>
            </ContactDialog>
            <a
              href={`mailto:${site.email}`}
              className="text-center text-xs tracking-[0.08em] text-mist"
            >
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
