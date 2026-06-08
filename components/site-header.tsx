"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#portfolio", label: "עבודות" },
  { href: "#about", label: "עליי" },
  { href: "#pricing", label: "מחירים" },
  { href: "#contact", label: "צור קשר" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-stone-700/60 bg-stone-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-heading text-xl font-black tracking-tight text-stone-50 transition-all duration-300 hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          סטודיו
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline pb-0.5 text-sm font-medium text-stone-400 transition-all duration-300 hover:text-stone-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-premium inline-flex items-center justify-center">
            בואו נדבר
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-stone-400 transition-all duration-300 hover:text-stone-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-premium mt-4 inline-flex w-full items-center justify-center"
          >
            בואו נדבר
          </a>
        </nav>
      </div>
    </header>
  )
}
