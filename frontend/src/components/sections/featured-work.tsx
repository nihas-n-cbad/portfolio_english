import { useState } from 'react'

import { site } from '@/data/site'
import { ArrowRight, ArrowUpRight } from '@/components/icons'
import { BrandMockup, FinanceMockup, WellnessMockup } from '@/components/mockups'
import { Reveal, SectionLabel } from '@/components/reveal'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type Project = (typeof site.projects)[number]

function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {project.visual === 'finance' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_80%_0%,#1d1d1d_0%,#111_60%,#0b0b0b_100%)]" />
          <FinanceMockup
            className={cn(
              'top-[12%] -right-[5%] w-[106%]',
              large && 'top-[5%] -right-[5%] w-[102%]',
            )}
          />
        </>
      )}

      {project.visual === 'brand' && <BrandMockup />}

      {project.visual === 'wellness' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_85%_10%,#242424_0%,#141414_55%,#0b0b0b_100%)]" />
          <WellnessMockup
            className={cn(
              'top-[15%] right-[7%]',
              large ? 'top-[9%] right-[30%] scale-105' : 'group-hover:-translate-y-2',
            )}
          />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/45 to-transparent to-[62%]" />
    </div>
  )
}

export function FeaturedWork() {
  const [active, setActive] = useState<number | null>(null)
  const project = active === null ? null : site.projects[active]

  return (
    <section id="work" className="container-page pt-20 md:pt-24">
      <Reveal className="flex items-end justify-between gap-6">
        <SectionLabel>{site.labels.featuredWork}</SectionLabel>
        <a
          href="#work"
          className="group inline-flex items-center gap-3 text-[0.6rem] font-medium tracking-[0.16em] text-mist uppercase transition-colors hover:text-cream"
        >
          {site.labels.exploreAll}
          <ArrowRight className="w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
        {site.projects.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} as="article">
            <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-white/20 sm:aspect-[7/6]">
              <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                <ProjectVisual project={item} />
              </div>

              <button
                type="button"
                onClick={() => setActive(index)}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={`View the ${item.title.replace('\n', ' ')} project`}
              />

              <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-7">
                <h3 className="whitespace-pre-line text-[1.55rem] leading-[1.03] font-medium tracking-[-0.02em] text-cream md:text-[1.7rem]">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <p className="text-[0.56rem] leading-[1.7] font-medium tracking-[0.17em] text-mist uppercase">
                    {item.category}
                    <br />
                    {item.type}
                  </p>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-cream/35 text-cream transition-all duration-400 group-hover:border-cream group-hover:bg-cream group-hover:text-[#0b0b0b]">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={project !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl p-0">
          {project && (
            <>
              <div className="relative h-52 overflow-hidden rounded-t-[14px] border-b border-line bg-surface-2 md:h-64">
                <ProjectVisual project={project} large />
              </div>
              <div className="p-6 md:p-8">
                <p className="eyebrow">
                  {project.category} — {project.year}
                </p>
                <DialogTitle className="mt-3">{project.title.replace('\n', ' ')}</DialogTitle>
                <DialogDescription className="mt-4 max-w-xl">{project.summary}</DialogDescription>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1.5 text-[0.68rem] text-mist"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <p className="text-xs text-mist-dim">{project.type}</p>
                  <a
                    href="#contact"
                    onClick={() => setActive(null)}
                    className="group inline-flex items-center gap-2 text-[0.65rem] font-medium tracking-[0.16em] text-cream uppercase"
                  >
                    Start a similar project
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
