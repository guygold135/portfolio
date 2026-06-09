"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
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

let localeListeners: Array<() => void> = []

function emitLocaleChange() {
  localeListeners.forEach((listener) => listener())
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "he"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "en" ? "en" : "he"
}

function subscribeLocale(callback: () => void) {
  localeListeners.push(callback)
  return () => {
    localeListeners = localeListeners.filter((listener) => listener !== callback)
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readStoredLocale,
    () => "he" as Locale,
  )

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next)
    emitLocaleChange()
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === "he" ? "en" : "he")
  }, [locale, setLocale])

  const dir = locale === "he" ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

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
