import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import { trustReasons, businessInfo } from "@/lib/site-data";

export default function WhyTrust() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Why Trust Strike"
            title="We know you're trusting us with your money and your goods. We don't take that lightly."
            description="In a market full of fly-by-night shippers, here's what makes Strike Freight different."
          />

          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2" data-stagger>
            {trustReasons.map((reason) => (
              <li key={reason.title} data-reveal-item className="flex gap-3 rounded-xl border border-brand-line bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">{reason.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button href="/about" variant="ghost" className="mt-6">
            See our story & office
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* office-front.jpg — H101 shopfront, full-width slot */}
          <figure data-reveal-img className="relative col-span-2 aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/office-front.jpg"
              alt="Strike Freight & Logistics office entrance at Suite H101, Ogba Central Mall, Ogba, Lagos"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_30%]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-2 text-xs text-white">
              Visit us at Suite H101, Ogba Central Mall, Ogba, Lagos.
            </figcaption>
          </figure>

          {/* office-inside.jpg — staff at desk */}
          <figure data-reveal-img className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/office-inside.jpg"
              alt="Inside the Strike Freight & Logistics office in Ogba, Lagos"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover object-[center_30%]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-1.5 text-xs text-white">
              Our team, processing shipments at our Ogba office.
            </figcaption>
          </figure>

          {/* packed-parcels slot — placeholder until real photo is supplied */}
          <PhotoPlaceholder label="Photo: packed parcels ready to ship" aspect="aspect-square" />

          <div className="col-span-2 rounded-xl border border-brand-line bg-brand-cloud p-4 text-sm text-slate-600">
            <p className="font-semibold text-brand-navy">Visit us</p>
            <p className="mt-1">{businessInfo.address.full}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
