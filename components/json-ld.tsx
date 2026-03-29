export default function JsonLd() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HK Feat In Technology",
    alternateName: "飛英科技",
    url: "https://hkfeatin.com",
    logo: "https://hkfeatin.com/logo.png",
    description:
      "Hong Kong-based surgical instruments supplier specializing in ophthalmic, hair transplant, ENT, and plastic surgery instruments with over 20 years of experience.",
    foundingDate: "2000",
    foundingLocation: "Hong Kong",
    areaServed: "Worldwide",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Chinese", "Cantonese"],
    },
    sameAs: [
      "https://www.facebook.com/hkfeatin",
      "https://www.linkedin.com/company/hkfeatin",
    ],
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hkfeatin.com",
    name: "HK Feat In Technology",
    image: "https://hkfeatin.com/logo.png",
    url: "https://hkfeatin.com",
    telephone: "+85253469889",
    address: {
      "@type": "PostalAddress",
      addressCountry: "HK",
      addressRegion: "Hong Kong",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3193",
      longitude: "114.1694",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HK Feat In Technology",
    url: "https://hkfeatin.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hkfeatin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
    </>
  )
}
