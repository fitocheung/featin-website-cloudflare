"use client"

import Link from "next/link"
import { Download, Eye, Scissors, Stethoscope, Syringe } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const catalogueHrefs = [
  "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Ophthalmic-Instruments-Catalogue-.pdf",
  "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Hair-Transplant-Instruments-Catalogue.pdf",
  "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Plastic-Surgery-Catalogue-.pdf",
  "https://www.852featin.com/new/wp-content/uploads/2026/03/HK-Feat-In-Tech-Surgical-Instruments-Catalogue-.pdf",
]

const catalogueKeys = ["pdfOphthalmic", "pdfHair", "pdfPlastic", "pdfSurgical"] as const

const catalogueIcons = [Eye, Scissors, Syringe, Stethoscope]

export function PdfCatalogueSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">{t.pdfTitle}</h2>
        <p className="mt-3 text-base text-slate-600">{t.pdfSubtitle}</p>
        <div className="mt-8 grid gap-3 lg:grid-cols-2">
          {catalogueKeys.map((key, i) => {
            const Icon = catalogueIcons[i]
            return (
              <Button
                key={key}
                asChild
                variant="outline"
                className="h-auto justify-start rounded-md border-blue-200 px-5 py-4 text-left text-[15px] leading-6 text-blue-800 hover:bg-blue-50"
              >
                <Link href={catalogueHrefs[i]} target="_blank">
                  <Icon className="mr-3 size-5 shrink-0" />
                  <span>{t[key]}</span>
                  <Download className="ml-auto size-4 shrink-0 opacity-60" />
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
