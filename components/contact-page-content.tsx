"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function ContactPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 lg:text-[42px]">
              {t.contactTitle}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 max-w-2xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactPhone}</h3>
                      <p className="mt-1 text-lg text-slate-900">{t.contactPhoneValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactEmail}</h3>
                      <p className="mt-1 text-lg text-slate-900">{t.contactEmailValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.contactAddress}</h3>
                      <p className="mt-1 text-slate-900 leading-relaxed">{t.contactAddressValue}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base rounded-xl">
                    <Link href="https://wa.me/85253469889" target="_blank" className="flex items-center justify-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {t.contactWhatsApp}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex-1 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.086373957854!2d114.1694!3d22.3184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404016e8d2c2d4f%3A0x0!2sWitty%20Commercial%20Building%2C%201A%20Tung%20Choi%20St%2C%20Mong%20Kok%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
