import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RoutesSection from "@/components/home/RoutesSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CTABand from "@/components/ui/CTABand";
import { whatsappMessages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get a Quote: Pricing by Route",
  description:
    "Pricing is quoted per shipment on WhatsApp because rates vary by route, weight and exchange rates. Check delivery times by route, then send your details for an exact price.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Your exact price, confirmed on WhatsApp."
        description="Rates vary by route, weight and exchange rates, so we quote every shipment individually rather than publishing a fixed price list. Check delivery times below, then send your details to get a price."
      />

      <RoutesSection />

      <section id="quote-form" className="bg-brand-cloud py-14 sm:py-20">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Get Your Price"
            title="Tell us what you're sending"
            description="Send us your details below and we'll open WhatsApp with everything pre-filled, or message us directly with your route, weight and what you're shipping."
          />
          <div className="mt-8 rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
            <QuoteForm variant="quote" />
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-slate-600">Prefer to just chat?</p>
            <WhatsAppButton message={whatsappMessages.getQuote} label="Get a Quote on WhatsApp" size="lg" />
          </div>
        </Container>
      </section>

      <CTABand
        title="Have everything you need to book?"
        description="Message us on WhatsApp with your details and we'll confirm your price and shipping slot right away."
      />
    </>
  );
}
