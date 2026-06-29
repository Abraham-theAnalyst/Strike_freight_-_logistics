import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import RoutesSection from "@/components/home/RoutesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FridayShipping from "@/components/home/FridayShipping";
import WhatWeShip from "@/components/home/WhatWeShip";
import PricingCalculator from "@/components/home/PricingCalculator";
import WhyTrust from "@/components/home/WhyTrust";
import Testimonials from "@/components/home/Testimonials";
import StatsBand from "@/components/home/StatsBand";
import FaqSection from "@/components/home/FaqSection";
import CTABand from "@/components/ui/CTABand";
import { businessInfo } from "@/lib/site-data";
import { getLocalBusinessSchema, getServicesSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${businessInfo.name} | Cargo, Courier & Worldwide Shopping`,
  description: businessInfo.metaDescription,
  path: "/",
});

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const servicesSchema = getServicesSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <Hero />
      <TrustBar />
      <RoutesSection />
      <HowItWorks />
      <FridayShipping />
      <WhatWeShip />
      <PricingCalculator />
      <WhyTrust />
      <Testimonials />
      <StatsBand />
      <FaqSection />
      <CTABand />
    </>
  );
}
