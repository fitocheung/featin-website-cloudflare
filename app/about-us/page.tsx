import type { Metadata } from "next"
import { AboutPageContent } from "@/components/about-page-content"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "About Us | HK Feat In Technology - 20+ Years of Excellence",
  description: "Established in Hong Kong with over 20 years of experience. We provide high-quality precision surgical instruments including ophthalmic, hair transplant, ENT, and plastic surgery instruments.",
  keywords: ["about HK Feat In", "surgical instruments Hong Kong", "ophthalmic instruments", "hair transplant tools", "plastic surgery equipment", "medical instruments supplier"],
  alternates: {
    canonical: "/about-us",
    languages: {
      "en": "/about-us",
      "zh-Hant": "/about-us",
    },
  },
  openGraph: {
    title: "About Us | HK Feat In Technology",
    description: "Established in Hong Kong with over 20 years of experience providing high-quality surgical instruments.",
    url: "/about-us",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
}

export default function AboutUsPage() {
  return (
    <SitePageShell>
      <AboutPageContent />
    </SitePageShell>
  )
}
