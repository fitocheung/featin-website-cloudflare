"use client"

import Link from "next/link"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
        <div className="rounded-[32px] border border-blue-100 bg-blue-50/45 px-6 py-10 text-center shadow-[0_30px_80px_-40px_rgba(15,23,42,0.15)] lg:px-12 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            {t.ctaTitle}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            {t.ctaDescription}
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full bg-primary px-7 text-white hover:bg-primary/90"
            >
              <Link href="https://wa.me/85253469889" target="_blank">
                {t.ctaButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
