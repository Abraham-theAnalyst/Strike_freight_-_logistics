import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import HowItWorks from "@/components/home/HowItWorks";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import CTABand from "@/components/ui/CTABand";
import { whatsappMessages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How It Works: Import & Export Shipping",
  description:
    "How Strike Freight & Logistics works: get a free shopping address and shop & ship into Nigeria, or send cargo and courier parcels out of Nigeria. Both tracked, both insured.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Bringing something in, or sending something out? Here's exactly how it works."
        description="Two clear flows, four simple steps each, so there's no guesswork and no surprise fees."
      />

      <HowItWorks />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-line bg-white p-6">
            <h3 className="text-lg font-bold text-brand-navy">Importing? Start with a free address.</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We&apos;ll give you a free shopping address in the US, UK or Canada so you can shop any store and have
              it shipped to us, ready for consolidation. Don&apos;t have a card that works internationally? Send us
              the link and we&apos;ll buy it on your behalf.
            </p>
            <WhatsAppButton message={whatsappMessages.usAddress} label="Get My US/UK Address" variant="ghost" className="mt-5" />
          </div>
          <div className="rounded-2xl border border-brand-line bg-white p-6">
            <h3 className="text-lg font-bold text-brand-navy">Exporting? Drop off or request pickup.</h3>
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
