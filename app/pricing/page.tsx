import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RoutesSection from "@/components/home/RoutesSection";
import PricingCalculator from "@/components/home/PricingCalculator";
import CTABand from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Quote: Get an Estimate or Book Now",
  description:
    "See starting rates by route, estimate your shipment with our weight calculator, then get your exact price and book on WhatsApp.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & Quote"
        title="Clear starting rates, an instant estimate, and a real quote on WhatsApp."
        description="No hidden fees sprung on you after your goods are already gone. We confirm your price before you commit."
      />

      <RoutesSection />
      <PricingCalculator />
      <CTABand
        title="Have everything you need to book?"
        description="Message us on WhatsApp with your details and we'll confirm your price and shipping slot right away."
      />
    </>
  );
}
