import type { Metadata } from "next";
import { AlertTriangle, Ban } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import CTABand from "@/components/ui/CTABand";
import {
  shippingCategories,
  prohibitedItemsNote,
  universallyProhibitedItems,
  prohibitedItemsByDestination,
} from "@/lib/site-data";
import { categoryIconMap } from "@/components/icons/icon-map";
import { stockImages } from "@/lib/stock-images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What We Ship: Categories & Restricted Items",
  description:
    "See the categories of goods Strike Freight & Logistics ships most, plus a destination-by-destination guide to prohibited and restricted items.",
  path: "/what-we-ship",
});

const destinationLabels: Record<string, string> = {
  usa: "🇺🇸 USA",
  uk: "🇬🇧 UK",
  canada: "🇨🇦 Canada",
  europe: "🇪🇺 Europe / Germany",
};

export default function WhatWeShipPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Ship"
        title="From food to gadgets, if it's legal to ship, we've probably moved it."
        description="Browse what we handle most, then check the restricted items list for your destination before you pack."
      />

      <section className="pt-14 sm:pt-20">
        <Container>
          <PhotoPlaceholder src={stockImages.boxesStack.src} alt={stockImages.boxesStack.alt} aspect="aspect-[21/7]" sizes="100vw" />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Categories" title="What we ship most" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {shippingCategories.map((category) => {
              const Icon = categoryIconMap[category.icon];
              return (
                <div
                  key={category.id}
                  className="flex flex-col items-center gap-3 rounded-xl border border-brand-line bg-white p-5 text-center transition-shadow hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{category.label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cloud py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Before You Pack"
            title="Prohibited & restricted items"
            description={prohibitedItemsNote}
          />

          <div className="mt-8 rounded-2xl border border-brand-red/30 bg-white p-6">
            <div className="flex items-center gap-2 text-brand-red">
              <Ban className="h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-bold">Never accepted, on any route</h3>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {universallyProhibitedItems.map((item) => (
                <li key={item} className="text-sm text-slate-600">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {Object.entries(prohibitedItemsByDestination).map(([destination, items]) => (
              <div key={destination} className="rounded-xl border border-brand-line bg-white p-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  <h4 className="text-sm font-bold text-brand-navy">{destinationLabels[destination] ?? destination}</h4>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-600">Not sure if your item is allowed?</p>
            <WhatsAppButton
              message="Hi Strike Freight, I'd like to check if an item is allowed for shipping."
              label="Ask us on WhatsApp"
              variant="ghost"
            />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
