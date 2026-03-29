"use client"

import Link from "next/link"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#E0F8FF] py-16 lg:py-24">
      {/* Content */}
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.whyUsTitle}
          </h2>
          <Button asChild className="mt-6 bg-slate-900 text-white hover:bg-slate-800">
            <Link href="/about-us">{t.whyLearnMore}</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.whyChooseUsFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border border-white/50 bg-white py-0 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.2)]"
            >
              <CardHeader className="px-6 py-6">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm leading-6 text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
