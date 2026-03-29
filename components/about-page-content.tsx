"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-700">{t.aboutLabel}</p>
              <p className="mt-4 text-base leading-7 text-slate-600 whitespace-pre-line">
                {t.aboutIntroNew}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/logo.png" 
                alt="HK Feat In Technology Logo" 
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
