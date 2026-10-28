import type { JSX } from 'react'

import { site } from '@/data/site'
import { Reveal, SectionLabel } from '@/components/reveal'
import { cn } from '@/lib/utils'

/** One muted accent per hobby — the same token family used by the feature icons. */
const hobbyAccents: Record<
  string,
  { text: string; wash: string; ring: string; dot: string; fill: string }
> = {
  amber: {
    text: 'text-accent-amber',
    wash: 'bg-accent-amber/10',
    ring: 'ring-accent-amber/25',
    dot: 'bg-accent-amber',
    fill: 'bg-accent-amber',
  },
  violet: {
    text: 'text-accent-violet',
    wash: 'bg-accent-violet/10',
    ring: 'ring-accent-violet/25',
    dot: 'bg-accent-violet',
    fill: 'bg-accent-violet',
  },
  sage: {
    text: 'text-accent-sage',
    wash: 'bg-accent-sage/10',
    ring: 'ring-accent-sage/25',
    dot: 'bg-accent-sage',
    fill: 'bg-accent-sage',
  },
  sky: {
    text: 'text-accent-sky',
    wash: 'bg-accent-sky/10',
    ring: 'ring-accent-sky/25',
    dot: 'bg-accent-sky',
    fill: 'bg-accent-sky',
  },
  rose: {
    text: 'text-accent-rose',
    wash: 'bg-accent-rose/10',
    ring: 'ring-accent-rose/25',
    dot: 'bg-accent-rose',
    fill: 'bg-accent-rose',
  },
}

const defaultAccent = hobbyAccents.amber

/* ---------------------------------------------------------------- previews
   Each hobby gets a tiny looping mockup, hand-built in CSS. All of them are
   decorative (aria-hidden) and are frozen by the site-wide reduced-motion rule.
--------------------------------------------------------------------------- */

function ChessPreview({ accent }: { accent: typeof defaultAccent }) {
  const squares = Array.from({ length: 16 })
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="grid size-[86px] grid-cols-4 overflow-hidden rounded-[6px] ring-1 ring-inset ring-white/10">
        {squares.map((_, index) => {
          const row = Math.floor(index / 4)
          const col = index % 4
          const dark = (row + col) % 2 === 1
          return (
            <span
              key={index}
              className={cn('relative', dark && cn('bg-white/[0.06]'))}
            >
              {/* last-move highlight on two squares */}
              {index === 6 && <span className={cn('absolute inset-0 opacity-40', accent.fill)} />}
              {index === 13 && <span className={cn('absolute inset-0 opacity-40', accent.fill)} />}
            </span>
          )
        })}
      </div>
      {/* a piece sliding between the two highlighted squares */}
      <span
        className={cn(
          'absolute size-[15px] animate-drift rounded-[3px] ring-1 ring-inset',
          accent.ring,
          accent.wash,
        )}
        style={{ left: 'calc(50% - 6px)', top: 'calc(50% + 4px)' }}
      />
    </div>
  )
}

function MusicPreview({ accent }: { accent: typeof defaultAccent }) {
  const bars = [0.3, 0.75, 0.5, 1, 0.6, 0.85, 0.4]
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-4">
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'grid size-7 shrink-0 place-items-center rounded-[6px] ring-1 ring-inset',
            accent.ring,
            accent.wash,
          )}
        >
          <span className={cn('size-1.5 rounded-full animate-pulse-soft', accent.dot)} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[0.6rem] text-cream/85">Deep Focus</p>
          <p className="truncate text-[0.5rem] text-mist-dim">Lo-fi · 42 tracks</p>
        </div>
      </div>
      <div className="flex h-9 items-end gap-1">
        {bars.map((height, index) => (
          <span
            key={index}
            className={cn('w-full origin-bottom rounded-full animate-eq', accent.fill)}
            style={{ height: `${height * 100}%`, animationDelay: `${index * 0.12}s` }}
          />
        ))}
      </div>
    </div>
  )
}

function CricketPreview({ accent }: { accent: typeof defaultAccent }) {
  const overs = ['1', '4', '•', '6', 'W', '2', '•', '4']
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[0.5rem] tracking-[0.16em] text-mist-dim uppercase">Score</p>
          <p className="mt-0.5 text-[1.35rem] leading-none font-light tracking-[-0.02em] text-cream">
            142<span className="text-mist-dim">/3</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-[0.5rem] tracking-[0.16em] text-mist-dim uppercase">Overs</p>
          <p className="mt-0.5 text-[0.9rem] leading-none text-cream/80">18.4</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {overs.map((ball, index) => (
          <span
            key={index}
            className={cn(
              'grid size-[19px] place-items-center rounded-full text-[0.55rem] font-medium ring-1 ring-inset transition-colors',
              ball === 'W'
                ? cn('bg-accent-rose/15 text-accent-rose ring-accent-rose/30')
                : ball === '6' || ball === '4'
                  ? cn(accent.wash, accent.text, accent.ring)
                  : 'bg-white/[0.03] text-mist-dim ring-white/10',
            )}
          >
            {ball}
          </span>
        ))}
      </div>
    </div>
  )
}

function FootballPreview({ accent }: { accent: typeof defaultAccent }) {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="relative h-[74px] w-full max-w-[168px] rounded-[7px] border border-white/10 bg-white/[0.02]">
        {/* halfway line + centre circle */}
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10" />
        <span className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        {/* penalty boxes */}
        <span className="absolute top-1/2 left-0 h-8 w-3 -translate-y-1/2 rounded-r-[4px] border-y border-r border-white/10" />
        <span className="absolute top-1/2 right-0 h-8 w-3 -translate-y-1/2 rounded-l-[4px] border-y border-l border-white/10" />
        {/* ball drifting across the pitch */}
        <span
          className={cn('absolute top-1/2 left-3 size-2 -translate-y-1/2 rounded-full animate-drift', accent.dot)}
        />
        {/* two players holding position */}
        <span className={cn('absolute top-3 left-8 size-1.5 rounded-full bg-white/25')} />
        <span className={cn('absolute right-8 bottom-3 size-1.5 rounded-full bg-white/25')} />
      </div>
    </div>
  )
}

function GymPreview({ accent }: { accent: typeof defaultAccent }) {
  const days = [1, 1, 1, 0, 1, 1, 0]
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-4">
      <div className="flex items-center gap-3">
        <div className="relative grid size-[54px] shrink-0 place-items-center">
          <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_250deg,currentColor_360deg)] opacity-70" />
          <span className={cn('absolute inset-[4px] rounded-full bg-surface')} />
          <span className="relative text-[0.6rem] font-medium text-cream">68%</span>
        </div>
        <div>
          <p className="text-[0.5rem] tracking-[0.16em] text-mist-dim uppercase">Weekly goal</p>
          <p className="mt-0.5 text-[0.9rem] leading-none text-cream/85">4 sessions</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {days.map((done, index) => (
          <span
            key={index}
            className={cn(
              'h-6 flex-1 rounded-[3px]',
              done ? cn(accent.wash, 'ring-1 ring-inset', accent.ring) : 'bg-white/[0.04]',
            )}
          />
        ))}
      </div>
    </div>
  )
}

const previews: Record<string, (props: { accent: typeof defaultAccent }) => JSX.Element> = {
  chess: ChessPreview,
  music: MusicPreview,
  cricket: CricketPreview,
  football: FootballPreview,
  gym: GymPreview,
}

export function Hobbies() {
  return (
    <section id="hobbies" className="container-page pt-20 md:pt-24">
      <Reveal>
        <SectionLabel>{site.labels.hobbies}</SectionLabel>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Hobbies */}
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 md:p-7">
            <h2 className="text-[0.66rem] font-medium tracking-[0.16em] text-cream uppercase">
              {site.labels.hobbiesOnly}
            </h2>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {site.hobbies.map((hobby) => {
                const accent = hobbyAccents[hobby.accent] ?? defaultAccent
                const Preview = previews[hobby.preview] ?? ChessPreview

                return (
                  <li
                    key={hobby.name}
                    className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white/[0.015] transition-colors duration-400 hover:border-cream/15"
                  >
                    <div className={cn('h-[132px] border-b border-line/70', accent.wash)}>
                      <Preview accent={accent} />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={cn('size-1.5 rounded-full', accent.dot)} aria-hidden />
                          <h3 className="text-[0.95rem] leading-none font-medium tracking-[0.02em] text-cream">
                            {hobby.name}
                          </h3>
                        </div>
                        <p className="mt-2 text-[0.76rem] leading-[1.5] text-mist">{hobby.note}</p>
                      </div>
                      <p className={cn('text-[0.58rem] tracking-[0.16em] uppercase', accent.text)}>
                        {hobby.detail}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={0.12}>
          <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 md:p-7">
            <h2 className="text-[0.66rem] font-medium tracking-[0.16em] text-cream uppercase">
              {site.labels.achievementsOnly}
            </h2>
            <ul className="mt-4 divide-y divide-line/70">
              {site.achievements.map((achievement) => (
                <li
                  key={achievement.label}
                  className="flex items-baseline justify-between gap-4 py-4 first:pt-2 last:pb-0"
                >
                  <span className="text-[0.8rem] leading-[1.5] text-mist">{achievement.label}</span>
                  <span className="font-light text-[1.7rem] leading-none tracking-[-0.03em] text-cream">
                    {achievement.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
