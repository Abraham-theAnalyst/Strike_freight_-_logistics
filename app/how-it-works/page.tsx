import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import HowItWorks from "@/components/home/HowItWorks";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CTABand from "@/components/ui/CTABand";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How Shipping Works: Lagos to Worldwide in 4 Steps | Strike Freight",
  description:
    "Send cargo or parcels from Lagos in 4 steps: WhatsApp quote → drop off at our Ogba office or Lagos pickup → we pack and ship → track worldwide. Strike Freight & Logistics.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHero
        eyebrow="How It Works"
        title="Sending or receiving, here's exactly how it works."
        description="One clear flow, four simple steps, so there's no guesswork and no surprise fees."
      />

      <HowItWorks />

      <section className="py-14 sm:py-20">
        <Container className="max-w-xl">
          <div className="rounded-2xl border border-brand-line bg-white p-6 text-center">
            <h3 className="text-lg font-bold text-brand-navy">Ready to send something?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Bring your item to our Ogba office, or message us to arrange a pickup nearby in Lagos. We&apos;ll weigh,
              pack and confirm your price before anything ships.
            </p>
            <Button href="/contact#map" variant="ghost" className="mt-5">
              See Drop-off / Office Location
            </Button>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
