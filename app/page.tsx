import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
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
      <footer className="border-t border-stone-700/60 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm leading-relaxed text-stone-500">
          © {new Date().getFullYear()} סטודיו · פיתוח אתרים ודפי נחיתה לעסקים
        </div>
      </footer>
    </div>
  )
}
