import { site } from '@/data/site'
import { Reveal, SectionLabel } from '@/components/reveal'

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
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {site.hobbies.map((hobby) => (
                <li
                  key={hobby}
                  className="rounded-full border border-line bg-white/[0.02] px-4 py-2 text-[0.68rem] font-medium tracking-[0.14em] text-mist uppercase transition-colors duration-300 hover:border-cream/25 hover:text-cream"
                >
                  {hobby}
                </li>
              ))}
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
                  <span className="text-[0.78rem] leading-[1.5] text-mist">
                    {achievement.label}
                  </span>
                  <span className="font-light text-[1.55rem] leading-none tracking-[-0.03em] text-cream">
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
