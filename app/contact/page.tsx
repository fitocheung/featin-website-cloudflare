import type { Metadata } from "next"
import { ContactPageContent } from "@/components/contact-page-content"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Contact Us | HK Feat In Technology",
  description: "Get in touch for product consultation, quotation requests, and catalogue support. Contact us via WhatsApp, email, or visit our Hong Kong office.",
  keywords: ["contact surgical instruments", "medical instruments Hong Kong", "quotation request", "surgical instrument supplier contact"],
  alternates: {
    canonical: "/contact",
    languages: {
      "en": "/contact",
      "zh-Hant": "/contact",
    },
  },
  openGraph: {
    title: "Contact Us | HK Feat In Technology",
    description: "Get in touch for product consultation, quotation requests, and catalogue support.",
    url: "/contact",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <SitePageShell>
      <ContactPageContent />
    </SitePageShell>
  )
}
