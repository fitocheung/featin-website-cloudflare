import type { Metadata } from "next"
import { ProductsPageContent } from "@/components/products-page-content"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Products | FIT Surgical Instruments - Ophthalmic, Hair Transplant & Plastic Surgery",
  description: "Explore our range of precision surgical instruments. Ophthalmic tools, hair transplant equipment, and plastic surgery instruments. Download PDF catalogues and request quotations.",
  keywords: ["surgical instruments", "ophthalmic instruments", "hair transplant tools", "plastic surgery equipment", "Hong Kong medical instruments"],
  alternates: {
    canonical: "/products",
    languages: {
      "en": "/products",
      "zh-Hant": "/products",
    },
  },
  openGraph: {
    title: "Products | FIT Surgical Instruments",
    description: "Explore our range of precision surgical instruments. Ophthalmic tools, hair transplant equipment, and plastic surgery instruments.",
    url: "/products",
    siteName: "FIT 飛英科技",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | FIT Surgical Instruments",
    description: "Explore our range of precision surgical instruments.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FIT 飛英科技",
  "url": "https://www.852featin.com",
  "logo": "https://www.852featin.com/logo.png",
  "description": "Hong Kong Surgical Instruments Supplier specializing in ophthalmic, hair transplant, and plastic surgery instruments.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Room 1712A, 17/F, Witty Commercial Building, 1A Tung Choi Street",
    "addressLocality": "Kowloon",
    "addressRegion": "Hong Kong",
    "addressCountry": "HK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+852-5346-9889",
    "contactType": "customer service",
    "email": "hkfeatin@gmail.com"
  },
  "sameAs": [
    "https://wa.me/85253469889"
  ]
}

export default function ProductsPage() {
  return (
    <SitePageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageContent />
    </SitePageShell>
  )
}
