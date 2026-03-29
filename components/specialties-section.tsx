"use client"

import Link from "next/link"
import Image from "next/image"
import { Eye, Scissors, Sparkles } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const specialtiesIcons = [Eye, Scissors, Sparkles]

const specialtiesImages = [
  {
    src: "/hero/ophthalmic-card.jpg",
    alt: "Ophthalmic Instruments",
  },
  {
    src: "/hero/hair-card.png",
    alt: "Hair Transplant Tools",
  },
  {
    src: "/hero/plastic-card.png",
    alt: "Plastic Surgery Equipment",
  },
]

export function SpecialtiesSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto w-full max-w-300 px-4 lg:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.specialtiesTitle}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.specialties.map((item, i) => {
            const Icon = specialtiesIcons[i]
            const image = specialtiesImages[i]

            return (
              <Link key={item.title} href="/products">
                <Card className="h-full cursor-pointer overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50">
                  {/* Image Section */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader className="px-6 pt-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="mt-4 text-[17px] font-semibold text-slate-900">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-slate-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="rounded-2xl bg-blue-50/70 px-4 py-3 text-sm font-medium text-blue-700">
                      {item.highlight}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
