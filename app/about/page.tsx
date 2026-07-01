import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABand from "@/components/ui/CTABand";
import { trustReasons, businessInfo } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Our Story & Office",
  description:
    "Strike Freight & Logistics is a Lagos-based cargo and courier company with a real office in Ogba, sending and receiving parcels between Nigeria and the world since 2023. Here's our story and our promise to you.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Lagos team helping you move things across the world, without the wahala."
        description="We started Strike Freight & Logistics to make international shipping feel as simple and trustworthy as sending a parcel across town."
      />

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Why we do this" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Shipping between Nigeria and the rest of the world shouldn&apos;t mean gambling your money on a
                stranger you only know from a flyer or an Instagram page. We built Strike Freight &amp; Logistics
                around a simple idea: a real office you can walk into, a fixed weekly shipping schedule, and a team
                that answers on WhatsApp when you need an update.
              </p>
              <p>
                Whether you&apos;re a family bringing in food and personal items, a small business shipping product,
                or sending something out of Nigeria for the first time, we handle your shipment the same way:
                carefully, and on schedule, with nothing hidden from you.
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Founded in {businessInfo.foundedYear} · {businessInfo.yearsInOperation} years in operation ·{" "}
                {businessInfo.registrationNumber}
              </p>
            </div>
            <Button href="/contact#map" variant="ghost" className="mt-6">
              See Drop-off / Office Location
            </Button>
          </div>
          <figure data-reveal-img className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/office-inside.jpg"
              alt="A Strike Freight & Logistics team member processing shipments at the Ogba office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_30%]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 text-xs text-white">
              Our team, processing shipments at our Ogba office.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-brand-cloud py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Guarantee" title="What you can count on, every shipment" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((reason) => (
              <li key={reason.title} className="flex gap-3 rounded-xl border border-brand-line bg-white p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">{reason.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="office" className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Real Office" title="Visit us in Ogba, Lagos" />
            <p className="mt-4 flex items-start gap-2.5 text-base text-slate-600">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
              {businessInfo.address.full}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {businessInfo.hours.weekdays}. {businessInfo.hours.note}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <figure data-reveal-img className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/office-front.jpg"
                  alt="Strike Freight & Logistics office entrance at Suite H101, Ogba Central Mall, Ogba, Lagos"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover object-[center_25%]"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-1.5 text-xs text-white">
                  Visit us at Suite H101, Ogba Central Mall, Ogba, Lagos.
                </figcaption>
              </figure>
              <figure data-reveal-img className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/office-inside.jpg"
                  alt="Inside the Strike Freight & Logistics office in Ogba, Lagos"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover object-[center_30%]"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-brand-line">
            <iframe
              title="Map showing Strike Freight & Logistics office in Ogba, Lagos"
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessInfo.address.mapQuery)}&output=embed`}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-14 sm:py-16">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">A note on staying safe</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            We know this market has had bad actors take people&apos;s money and disappear. That&apos;s exactly why we operate
            from a real, visitable office, ship on a fixed weekly schedule, accept traceable payment via bank
            transfer and Paystack, and reply fast on WhatsApp. If anything ever feels off about a payment request,
            call our office line directly before sending money.
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
