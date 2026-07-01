import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import RoutesSection from "@/components/home/RoutesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FridayShipping from "@/components/home/FridayShipping";
import WhatWeShip from "@/components/home/WhatWeShip";
import WhyTrust from "@/components/home/WhyTrust";
import Testimonials from "@/components/home/Testimonials";
import StatsBand from "@/components/home/StatsBand";
import FaqSection from "@/components/home/FaqSection";
import PartnersSection from "@/components/home/PartnersSection";
import CTABand from "@/components/ui/CTABand";
import { getLocalBusinessSchema, getOrganizationSchema, getServicesSchema, getFaqSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cargo & Courier Shipping: Nigeria to UK, USA, Canada | Strike Freight Lagos",
  description:
    "Ship cargo and parcels from Lagos, Nigeria to the UK, USA, Canada, Europe and worldwide by air, sea or courier. Real Ogba office. Ships every Friday. Book on WhatsApp.",
  path: "/",
});

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();
  const servicesSchema = getServicesSchema();
  const faqSchema = getFaqSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <TrustBar />
      <RoutesSection />
      <HowItWorks />
      <FridayShipping />
      <WhatWeShip />
      <WhyTrust />
      <Testimonials />
      <StatsBand />
      <FaqSection />
      <PartnersSection />
      <CTABand />
    </>
  );
}
