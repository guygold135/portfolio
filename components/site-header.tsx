"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/i18n/language-context"
const navHrefs = [
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#about", key: "about" as const },
  { href: "#pricing", key: "pricing" as const },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-stone-700/60 bg-stone-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-heading text-xl font-black tracking-tight text-stone-50 transition-all duration-300 hover:opacity-70"
            onClick={() => setOpen(false)}
          >
            {t.header.brand}
          </a>
          <LanguageToggle />
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10">
            {navHrefs.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline pb-0.5 text-sm font-medium text-stone-400 transition-all duration-300 hover:text-stone-50"
              >
                {t.header.nav[link.key]}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-premium inline-flex items-center justify-center">
            {t.header.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.header.menuClose : t.header.menuOpen}
          aria-expanded={open}
          className="flex size-10 items-center justify-center text-stone-50 transition-all duration-300 hover:opacity-60 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-stone-700/60 transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6">
          {navHrefs.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-stone-400 transition-all duration-300 hover:text-stone-50"
            >
              {t.header.nav[link.key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-premium mt-4 inline-flex w-full items-center justify-center"
          >
            {t.header.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}
