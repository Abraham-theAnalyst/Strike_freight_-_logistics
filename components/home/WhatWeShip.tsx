import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { shippingCategories } from "@/lib/site-data";
import { categoryIconMap } from "@/components/icons/icon-map";
import { stockImages } from "@/lib/stock-images";

export default function WhatWeShip() {
  const image = stockImages.boxesStack;

  return (
    <section className="py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="What We Ship"
            title="From everyday essentials to commercial cargo."
            description="If it's legal to ship, chances are we've moved it before. Here's what we handle most."
          />

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
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

          <div className="mt-8">
            <Link href="/what-we-ship" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-navy-dark">
              See full list & restricted items
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <PhotoPlaceholder src={image.src} alt={image.alt} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
      </Container>
    </section>
  );
}
