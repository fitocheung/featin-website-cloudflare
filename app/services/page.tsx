import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"
import { ServicesPageContent } from "@/components/services-page-content"

export const metadata: Metadata = {
  title: "Services | FIT Surgical Instruments - Consultation & After-Sales Support",
  description: "Expert consultation, fast response, and reliable after-sales support for surgical instruments. Customization, repair, and worldwide shipping available from Hong Kong.",
  keywords: ["surgical instrument services", "instrument repair", "surgical instrument customization", "after-sales support", "Hong Kong medical instruments"],
  alternates: {
    canonical: "/services",
    languages: {
      "en": "/services",
      "zh-Hant": "/services",
    },
  },
  openGraph: {
    title: "Services | FIT Surgical Instruments",
    description: "Expert consultation, fast response, and reliable after-sales support for surgical instruments.",
    url: "/services",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <SitePageShell>
      <ServicesPageContent />
    </SitePageShell>
  )
}
