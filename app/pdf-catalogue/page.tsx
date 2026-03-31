import type { Metadata } from "next"
import { PdfCatalogueSection } from "@/components/pdf-catalogue"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "PDF Catalogues | Download Surgical Instrument Catalogues",
  description: "Download our complete product catalogues including ophthalmic, hair transplant, plastic surgery, and general surgical instruments catalogues in PDF format.",
  keywords: ["surgical instrument catalogues", "PDF download", "ophthalmic catalogue", "hair transplant catalogue", "plastic surgery catalogue"],
  alternates: {
    canonical: "/pdf-catalogue",
    languages: {
      "en": "/pdf-catalogue",
      "zh-Hant": "/pdf-catalogue",
    },
  },
  openGraph: {
    title: "PDF Catalogues | FIT Surgical Instruments",
    description: "Download our complete product catalogues in PDF format.",
    url: "/pdf-catalogue",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
}

export default function PdfCataloguePage() {
  return (
    <SitePageShell>
      <PdfCatalogueSection />
    </SitePageShell>
  )
}
