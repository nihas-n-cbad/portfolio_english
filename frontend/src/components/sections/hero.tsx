import { Download, Globe, Trophy, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Sparkle } from '@/components/icons'
import { Button } from '@/components/ui/button'

const statIcons = { sparkle: Sparkle, users: Users, trophy: Trophy, globe: Globe } as const

function Portrait({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none select-none', className)}>
      <div className="relative h-full w-full">
        {/* Orbital hairline behind the portrait */}
        <div
          aria-hidden
          className="absolute top-[6%] left-[16%] aspect-square w-[92%] rounded-full border border-white/[0.09]"
        />

        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_7%,#000_58%,transparent_94%)]">
          {/* Left edge blends the photograph into the page */}
          <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,#000_26%,#000_78%,transparent_99%)] md:[mask-image:linear-gradient(to_right,transparent_2%,#000_34%,#000_86%,transparent_100%)]">
            <img
              src="/images/portrait.jpg"
              alt={`${site.name}, ${site.role}`}
              width={900}
              height={1349}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_26%] saturate-[0.5] contrast-[1.05] brightness-[0.82]"
            />
          </div>
          {/* Bottom dissolves the torso into shadow */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-page via-page/65 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(105%_85%_at_78%_22%,transparent_28%,rgba(10,10,10,0.72)_100%)]" />
        </div>

        <Sparkle className="absolute top-[53%] right-[2%] size-[18px] text-cream/90" />
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
          {/* Desktop portrait, bleeding into the headline */}
          <Portrait className="absolute top-[-3.5rem] right-[-1%] hidden h-[clamp(560px,56vw,1040px)] w-[54%] md:block lg:top-[-4rem] lg:w-[51%]" />

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

          <motion.div
            className="absolute right-0 bottom-6 z-10 hidden text-right lg:block"
            {...rise(0.4)}
          >
            <p className="text-[0.58rem] tracking-[0.22em] text-mist-dim uppercase">
              {site.heroBadge.label}
            </p>
            <p className="mt-1.5 text-[1.05rem] font-medium tracking-[0.1em] text-cream uppercase">
              {site.heroBadge.value}
            </p>
            <p className="mt-0.5 text-[0.58rem] tracking-[0.22em] text-mist-dim uppercase">
              {site.heroBadge.detail} <span aria-hidden>↗</span>
            </p>
          </motion.div>
        </div>

        {/* Mobile portrait */}
        <Portrait className="relative mt-10 h-[clamp(360px,104vw,500px)] w-full md:hidden" />

        <div className="mt-3 flex items-center justify-end gap-2 text-[0.58rem] tracking-[0.2em] text-mist-dim uppercase md:hidden">
          {site.availability}
          <span aria-hidden>↗</span>
        </div>

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
