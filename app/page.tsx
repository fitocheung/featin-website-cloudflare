"use client"

import { ContactCta } from "@/components/contact-cta"
import { HomeHero } from "@/components/home-hero"
import { SitePageShell } from "@/components/site-page-shell"
import { SpecialtiesSection } from "@/components/specialties-section"
import { WhyChooseFit } from "@/components/why-choose-fit"

export default function HomePage() {
  return (
    <SitePageShell>
      <HomeHero />
      <SpecialtiesSection />
      <WhyChooseFit />
      <ContactCta />
    </SitePageShell>
  )
}
