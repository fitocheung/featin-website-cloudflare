"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ServicesPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <section className="bg-[#E0F8FF] py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
              {t.servicesTitle}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t.servicesSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/45 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
            {t.servicesFaq}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {t.servicesFaqSubtitle}
          </p>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {t.servicesFaqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="rounded-xl border border-blue-100 bg-white px-5 data-[state=open]:rounded-b-none">
                <AccordionTrigger className="py-4 text-left text-base font-semibold text-slate-900 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
