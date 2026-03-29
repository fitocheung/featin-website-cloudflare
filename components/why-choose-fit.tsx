"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, ShieldCheck, Handshake, Settings, Wrench, HeartPulse } from "lucide-react"

const icons = [BadgeCheck, ShieldCheck, Handshake, Settings, Wrench, HeartPulse]

export function WhyChooseFit() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#E0F8FF] py-16 lg:py-24">
      {/* Content */}
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            {t.whyQuality}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.whyTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">{t.whySubtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.whyChooseFitFeatures.map((feature, i) => {
            const Icon = icons[i]
            return (
              <Card
                key={feature.title}
                className="border border-white/50 bg-white py-0 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.2)]"
              >
                <CardHeader className="px-6 py-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
