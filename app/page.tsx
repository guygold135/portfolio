import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/lib/i18n/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-900">
        <SiteHeader />
        <main>
          <HeroSection />
          <PortfolioSection />
          <AboutSection />
          <PricingSection />
          <Suspense fallback={null}>
            <ContactSection />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
