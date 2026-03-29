"use client"

import { createContext, useContext, useSyncExternalStore, useState, useCallback, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextValue {
  lang: Language
  toggleLang: () => void
  t: typeof translations[Language]
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggleLang: () => {},
  t: translations["en"],
})

const STORE_KEY = "fit-lang"

function getStoredLang(): Language {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(STORE_KEY)
  return stored === "zh" ? "zh" : "en"
}

const emptySubscribe = () => () => {}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Language>(emptySubscribe, getStoredLang, () => "en" as Language)
  const [, rerender] = useState({})

  const toggleLang = useCallback(() => {
    const next = lang === "en" ? "zh" : "en"
    localStorage.setItem(STORE_KEY, next)
    rerender({})
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
