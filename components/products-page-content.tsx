"use client"

import Link from "next/link"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { PdfCatalogueSection } from "@/components/pdf-catalogue"
import { ProductCategories } from "@/components/product-categories"
import { WhyChooseUs } from "@/components/why-choose-us"

export function ProductsPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <ProductCategories />
      <PdfCatalogueSection />
      <WhyChooseUs />

      <section className="bg-white pb-16">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <div className="rounded-xl border border-blue-100 bg-blue-50/45 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-slate-900 lg:text-[28px]">
              {t.productsReady}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              {t.productsReadyDesc}
            </p>
            <Button asChild className="mt-5 bg-primary hover:bg-primary/90">
              <Link href="/contact">{t.productsGetTouch}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
