import {
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react'

import { site } from '@/data/site'
import { Reveal, SectionLabel } from '@/components/reveal'
import { cn } from '@/lib/utils'

const capabilityIcons: Record<string, LucideIcon> = {
  layers: Layers,
  server: Server,
  database: Database,
  cloud: Cloud,
  shield: ShieldCheck,
  gauge: Gauge,
}

const processIcons: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  layers: Layers,
  code: Code2,
  shield: ShieldCheck,
  rocket: Rocket,
}

const toolMarks: Record<string, { glyph: string; className: string }> = {
  react: { glyph: 'R', className: 'bg-[#082c38] text-[#61dafb]' },
  ts: { glyph: 'TS', className: 'bg-[#132b45] text-[#5b9ce0]' },
  next: { glyph: 'N', className: 'bg-white text-black' },
  node: { glyph: 'JS', className: 'bg-[#1a2a1a] text-[#7cc47c]' },
  python: { glyph: 'Py', className: 'bg-[#1c2733] text-[#ffd43b]' },
  postgres: { glyph: 'Pg', className: 'bg-[#16283c] text-[#6ba7d8]' },
  docker: { glyph: 'D', className: 'bg-[#0e2b45] text-[#3aa9f0]' },
  aws: { glyph: 'A', className: 'bg-[#1c1c1c] text-[#ff9900]' },
  git: { glyph: 'G', className: 'bg-[#2a1a12] text-[#f05033]' },
}

const certMarks: Record<string, { glyph: string; className: string }> = {
  aws: { glyph: 'AW', className: 'bg-[#1c1c1c] text-[#ff9900]' },
  school: { glyph: 'VIT', className: 'bg-[#1f2a44] text-cream' },
}

export function Capabilities() {
  return (
    <section id="capabilities" className="container-page pt-20 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        {/* Core capabilities */}
        <Reveal>
          <SectionLabel>{site.labels.capabilities}</SectionLabel>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface/60">
            <ul className="grid sm:grid-cols-2">
              {site.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[capability.icon] ?? Layers
                return (
                  <li
                    key={capability.title}
                    className={cn(
                      'group flex gap-4 border-line p-6 transition-colors duration-400 hover:bg-white/[0.015] md:p-7',
                      index < site.capabilities.length - 2 && 'border-b',
                      index % 2 === 0 && 'sm:border-r',
                    )}
                  >
                    <Icon
                      className="mt-0.5 size-[26px] shrink-0 text-cream/85 transition-transform duration-500 group-hover:-translate-y-0.5"
                      strokeWidth={1.1}
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-[0.72rem] font-semibold tracking-[0.12em] text-cream uppercase">
                        {capability.title}
                      </h3>
                      <p className="mt-2 max-w-[15rem] text-[0.78rem] leading-[1.6] text-mist">
                        {capability.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {/* Tools */}
          <Reveal delay={0.08}>
            <h2 className="label-xs text-cream/90">{site.labels.tools}</h2>
            <div className="mt-6 rounded-2xl border border-line bg-surface/60 p-3">
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line/70 sm:grid-cols-3">
                {site.tools.map((tool) => {
                  const mark = toolMarks[tool.mark] ?? toolMarks.notion
                  return (
                    <li
                      key={tool.name}
                      className="group flex items-center gap-3 bg-[#101010] px-3 py-4 transition-colors duration-300 hover:bg-[#161616]"
                    >
                      <span
                        className={cn(
                          'grid size-7 shrink-0 place-items-center rounded-[7px] text-[0.66rem] font-semibold',
                          mark.className,
                        )}
                        aria-hidden
                      >
                        {mark.glyph}
                      </span>
                      <span className="text-[0.68rem] leading-[1.3] text-mist transition-colors group-hover:text-cream">
                        {tool.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.16}>
            <h2 className="label-xs text-cream/90">{site.labels.certifications}</h2>
            <ul className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface/60">
              {site.certifications.map((certification, index) => {
                const mark = certMarks[certification.mark] ?? certMarks.school
                return (
                  <li
                    key={certification.title}
                    className={cn(
                      'flex items-center gap-4 p-4 md:px-5',
                      index !== site.certifications.length - 1 && 'border-b border-line',
                    )}
                  >
                    <span
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-md text-[0.7rem] font-semibold',
                        mark.className,
                      )}
                      aria-hidden
                    >
                      {mark.glyph}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.78rem] text-cream/90">{certification.title}</p>
                      <p className="mt-1 text-[0.68rem] text-mist-dim">
                        {certification.issuer}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section id="about" className="container-page pt-20 md:pt-24">
      <Reveal>
        <SectionLabel>{site.labels.process}</SectionLabel>
      </Reveal>

      <Reveal delay={0.06} className="mt-6">
        <ol className="grid overflow-hidden rounded-2xl border border-line bg-surface/60 sm:grid-cols-2 lg:grid-cols-5">
          {site.process.map((step, index) => {
            const Icon = processIcons[step.icon] ?? Target
            return (
              <li
                key={step.step}
                className={cn(
                  'group relative flex flex-col justify-between gap-8 border-line p-5 md:p-6',
                  index !== site.process.length - 1 && 'border-b sm:border-b-0',
                  index < 4 && 'sm:border-r',
                  index === 4 && 'sm:col-span-2 lg:col-span-1',
                  index === 3 && 'sm:border-b lg:border-b-0',
                  'transition-colors duration-400 hover:bg-white/[0.015]',
                )}
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[0.6rem] font-medium tracking-[0.14em] text-cream/70">
                      {step.step}
                    </span>
                    <h3 className="text-[0.66rem] font-medium tracking-[0.16em] text-cream uppercase">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.74rem] leading-[1.6] text-mist">{step.description}</p>
                </div>
                <div className="flex items-end justify-between">
                  <Icon
                    className="size-[26px] text-cream/80 transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.1}
                    aria-hidden
                  />
                  {index < site.process.length - 1 && (
                    <span className="hidden text-mist-dim/70 lg:block" aria-hidden>
                      <svg viewBox="0 0 28 8" fill="none" className="h-2 w-7">
                        <path
                          d="M0 4h20"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                        />
                        <path
                          d="m20 1 5 3-5 3"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </Reveal>
    </section>
  )
}
