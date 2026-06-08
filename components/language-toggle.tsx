"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
      className="rounded-md border border-stone-700/60 px-2.5 py-1 text-xs font-semibold tracking-wide text-stone-400 transition-all duration-300 hover:border-stone-500 hover:text-stone-50"
    >
      {locale === "he" ? t.header.switchToEnglish : t.header.switchToHebrew}
    </button>
  )
}
