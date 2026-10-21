import { site } from '@/data/site'
import { CodeIcon, GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons'

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  code: CodeIcon,
  x: XIcon,
} as const

export function SiteFooter() {
  return (
    <footer className="container-page pb-8">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-line-soft pt-7 sm:flex-row">
        <p className="order-2 text-[0.66rem] tracking-[0.04em] text-mist-dim sm:order-1">
          © 2026 {site.name}. {site.footerNote}
        </p>

        <div className="order-1 flex items-center gap-6 sm:order-2">
          <span className="text-[0.56rem] font-medium tracking-[0.2em] text-mist uppercase">
            Let&apos;s connect
          </span>
          <ul className="flex items-center gap-2.5">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons]
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid size-8 place-items-center rounded-full border border-white/10 text-mist transition-colors duration-300 hover:border-white/30 hover:text-cream"
                  >
                    {Icon && <Icon className="size-3.5" />}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
