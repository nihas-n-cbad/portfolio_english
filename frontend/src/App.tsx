import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Capabilities, Process } from '@/components/sections/capabilities'
import { ContactCta } from '@/components/sections/contact-cta'

function App() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-page">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-cream focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-[#0a0a0a]"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main>
        <Hero />
        <FeaturedWork />
        <Capabilities />
        <Process />
        <ContactCta />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
