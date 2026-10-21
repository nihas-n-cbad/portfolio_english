import { Mail, MapPin, Phone } from 'lucide-react'

import { site } from '@/data/site'
import { ArrowUpRight } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { ContactDialog } from '@/components/contact-dialog'
import { Button } from '@/components/ui/button'

const contactRows = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Mail, label: site.emailAlt, href: `mailto:${site.emailAlt}` },
  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, '')}` },
  { icon: MapPin, label: site.location, href: undefined },
]

export function ContactCta() {
  return (
    <section id="contact" className="container-page pt-20 pb-10 md:pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-[#0d0d0d]">
          {/* Chrome glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/images/chrome.jpg"
              alt=""
              loading="lazy"
              className="absolute top-0 left-0 h-full w-[64%] scale-125 object-cover object-[26%_48%] opacity-55 grayscale contrast-[1.05] brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/50 via-[#0d0d0d]/88 to-[#0d0d0d]" />
            <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-[#0d0d0d]/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d0d0d]/85 to-transparent" />
          </div>

          <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_auto_1fr] lg:items-center lg:gap-10 lg:p-12">
            <div>
              <p className="eyebrow text-cream/60">{site.cta.eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,5vw,3.35rem)] uppercase leading-[0.94] tracking-[-0.01em] text-cream">
                {site.cta.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5 border-t border-white/10 pt-7 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-10">
              <p className="max-w-[17rem] text-[0.82rem] leading-[1.65] text-mist">
                {site.cta.availability}
              </p>
              <ContactDialog>
                <Button className="group gap-3 rounded-[3px]">
                  {site.cta.button}
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </ContactDialog>
            </div>

            <ul className="flex flex-col gap-3.5 border-t border-white/10 pt-7 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-10">
              {contactRows.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-[0.78rem]">
                  <Icon className="size-3.5 shrink-0 text-mist-dim" strokeWidth={1.4} aria-hidden />
                  {href ? (
                    <a
                      href={href}
                      className="text-mist transition-colors duration-300 hover:text-cream"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-mist">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
