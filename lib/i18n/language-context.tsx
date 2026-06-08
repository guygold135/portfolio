"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { translations, type Locale } from "@/lib/i18n/translations"

const STORAGE_KEY = "studio-locale"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (typeof translations)["he"]
  dir: "rtl" | "ltr"
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "he"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "en" ? "en" : "he"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("he")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === "he" ? "en" : "he")
  }, [locale, setLocale])

  const dir = locale === "he" ? "rtl" : "ltr"

  useEffect(() => {
    if (!ready) return
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir, ready])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
      dir,
    }),
    [locale, setLocale, toggleLocale, dir],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
