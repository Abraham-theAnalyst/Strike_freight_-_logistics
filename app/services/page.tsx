import type { Metadata } from "next";
import { CheckCircle2, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import CTABand from "@/components/ui/CTABand";
import { services } from "@/lib/site-data";
import { serviceIconMap } from "@/components/icons/icon-map";
import { stockImages, serviceStockImages } from "@/lib/stock-images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services: Air Freight, Sea Freight, Courier & Worldwide Shopping",
  description:
    "Air freight, sea freight, courier and worldwide shopping (shop-and-ship) between Nigeria and the USA, UK, Canada, Europe, Germany and beyond.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Whatever you're moving, however fast you need it."
        description="Four services, one promise: safe handling, clear pricing, and a fixed weekly schedule you can plan around."
      />

      <section className="py-14 sm:py-20">
        <Container className="space-y-6">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            const image = stockImages[serviceStockImages[service.id]];
            return (
              <div key={service.id} id={service.id} className="overflow-hidden rounded-2xl border border-brand-line bg-white">
                <PhotoPlaceholder
                  src={image.src}
                  alt={image.alt}
                  aspect="aspect-[16/7]"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
                <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                    <Icon size={28} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-red">0{index + 1}</p>
                    <h2 className="mt-1 text-xl font-extrabold text-brand-navy sm:text-2xl">{service.title}</h2>
                    <p className="mt-2 text-base text-slate-600">{service.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-red" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {service.timeline}
                    </p>
                  </div>
                  <div className="flex lg:items-start">
                    <WhatsAppButton
                      message={`Hi Strike Freight, I'd like to know more about your ${service.title} service.`}
                      label="Book on WhatsApp"
                      variant={index === 0 ? "accent" : "ghost"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTABand />
    </>
  );
}
