"use client"

import Link from "next/link"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function ProductCategories() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#E0F8FF] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
        <div className="max-w-2xl">
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.productsTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t.productsSubtitle}
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-blue-100 bg-white/80 p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-slate-900 lg:text-[28px]">{t.productsExplore}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {t.productsExploreDesc}
          </p>
          <Button asChild className="mt-5 bg-primary hover:bg-primary/90">
            <Link href="/pdf-catalogue">{t.productsViewCatalogue}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
