"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-stone-700/60 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm leading-relaxed text-stone-500">
        {t.footer.text(new Date().getFullYear())}
      </div>
    </footer>
  )
}
