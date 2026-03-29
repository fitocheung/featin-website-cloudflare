"use client"

import { useState, useEffect, ReactNode } from "react"
import { ChevronUp } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteNavigation } from "@/components/site-navigation"

export function SitePageShell({ children }: { children: ReactNode }) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteNavigation />
      {children}
      <SiteFooter />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="size-6" />
      </button>
    </main>
  )
}
