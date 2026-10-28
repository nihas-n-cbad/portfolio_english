import { Download, Globe, Trophy, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Sparkle } from '@/components/icons'
import { Button } from '@/components/ui/button'

const statIcons = { sparkle: Sparkle, users: Users, trophy: Trophy, globe: Globe } as const

function NameCard({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none select-none', className)}>
      <div className="relative flex h-full w-full items-center">
        {/* Orbital hairline behind the card */}
        <div
          aria-hidden
          className="absolute top-[4%] left-[6%] aspect-square w-[88%] rounded-full border border-white/[0.09]"
        />
        {/* Light pooled behind the card, echoing the old portrait glow */}
        <div
          aria-hidden
          className="absolute inset-x-[10%] top-[12%] h-[76%] rounded-full bg-[radial-gradient(closest-side,rgba(244,241,234,0.08),transparent)] blur-3xl"
        />

        <div className="relative w-full rounded-2xl border border-line bg-gradient-to-b from-[#161616] via-[#101010] to-[#0b0b0b] p-7 md:p-9 lg:p-10">
          <p className="text-[0.6rem] font-medium tracking-[0.22em] text-mist-dim uppercase">
            {site.nameCard.greeting}
          </p>
          <p className="mt-3 font-display text-[clamp(2.7rem,9vw,4.4rem)] uppercase leading-[0.9] tracking-[-0.01em] text-cream">
            {site.nameCard.name}
          </p>

          <div aria-hidden className="mt-6 h-px w-full bg-line" />

          <p className="mt-5 text-[0.72rem] font-medium tracking-[0.2em] text-cream/90 uppercase">
            {site.nameCard.detail}
          </p>
          <p className="mt-2 max-w-[19rem] text-[0.78rem] leading-[1.6] text-mist">
            {site.nameCard.note}
          </p>
          <p className="mt-5 text-[0.6rem] tracking-[0.16em] text-mist-dim uppercase">
            {site.nameCard.availability}
          </p>
        </div>

        <Sparkle className="absolute top-[2%] right-[4%] size-[18px] text-cream/90" />
      </div>
    </div>
  )
}

export function Hero() {
  const reduced = useReducedMotion()

  const rise = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36">
      <div className="container-page">
        <div className="relative">
          {/* Desktop name card, held in the right column */}
          <NameCard className="absolute top-[-1rem] right-[-1%] hidden h-[clamp(420px,40vw,620px)] w-[46%] md:block lg:top-[-2rem] lg:w-[44%]" />

          <div className="relative z-10 max-w-full md:max-w-[52vw]">
            <motion.p className="eyebrow" {...rise(0.05)}>
              {site.eyebrow}
            </motion.p>

            <motion.h1
              className="mt-5 bg-gradient-to-b from-[#f4f1ea] via-[#e7e4dd] to-[#c3c0b9] bg-clip-text font-display text-[clamp(3.2rem,10.5vw,10.5rem)] uppercase leading-[1.02] tracking-[-0.015em] text-transparent md:mt-6 md:leading-[0.86]"
              {...rise(0.12)}
            >
              {site.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[27rem] text-[0.95rem] leading-[1.65] text-mist md:mt-8 md:text-base"
              {...rise(0.24)}
            >
              {site.intro}
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-9"
              {...rise(0.32)}
            >
              <Button asChild className="rounded-[3px] px-6">
                <a href="#work">
                  View my work
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
              <a
                href={site.resumeUrl}
                download
                className="group inline-flex items-center gap-2 text-[0.66rem] font-medium tracking-[0.17em] text-mist uppercase transition-colors hover:text-cream"
              >
                Download resume
                <Download className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile name card */}
        <NameCard className="relative mt-10 w-full md:hidden" />

        {/* Stats */}
        <motion.div
          className="relative z-10 mt-12 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-[#131313] to-[#0e0e0e] md:mt-16"
          {...rise(0.45)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {site.stats.map((stat, index) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons]
              return (
                <div
                  key={stat.label}
                  className={cn(
                    'group relative flex flex-col items-center justify-center px-3 py-8 text-center transition-colors duration-500 hover:bg-white/[0.015] md:py-10',
                    index % 2 === 1 && 'border-l border-line',
                    index < 2 && 'border-b border-line md:border-b-0',
                    index === 2 && 'md:border-l md:border-line',
                    index === 3 && 'md:border-l md:border-line',
                  )}
                >
                  <Icon className="mb-4 size-[18px] text-cream/85" strokeWidth={1.35} />
                  <span className="font-light text-[2.6rem] leading-none tracking-[-0.04em] text-cream md:text-[3.05rem]">
                    {stat.value}
                  </span>
                  <span className="mt-3 text-[0.58rem] font-medium tracking-[0.2em] text-mist uppercase">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
