"use client"

import { useState, useEffect, useCallback } from "react"


import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye, Scissors, Sparkles } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const specialtiesIcons = [Eye, Scissors, Sparkles]

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/85253469889",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1J1MmhxiNT/?mibextid=wwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

const heroBackgroundCards = [
  {
    src: "/hero/ophthalmic.jpg",
    label: "Ophthalmic",
  },
  {
    src: "/hero/tool.jpg",
    label: "Hair Transplant",
  },
  {
    src: "/hero/surgical.jpg",
    label: "Plastic Surgery",
  },
]

export function HomeHero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = heroBackgroundCards.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Full-bleed slide images with fade effect */}
      <div className="absolute inset-0">
        {heroBackgroundCards.map((item, i) => (
          <div
            key={item.src}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              priority={i === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/50" />
        {/* Bottom gradient for smooth fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/50" />
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center gap-2 sm:bottom-8">
        {heroBackgroundCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentSlide ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-white/40 hover:bg-white/20 hover:text-white"
            aria-label={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1200px] flex-col items-center justify-center px-4 py-12 text-center lg:px-6 lg:py-12">
        <div className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm shadow-sm">
          {t.heroBadge}
        </div>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[72px]">
          {t.heroTitle}
        </h1>

        <p className="mt-4 max-w-3xl text-xl leading-8 text-white/80 lg:text-2xl">
          {t.heroDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="h-11 rounded-full bg-white px-7 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white/90">
            <Link href="/products">
              {t.heroExploreNow}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
