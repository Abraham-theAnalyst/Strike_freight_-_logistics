import type { Metadata } from "next";
import { Building2, ShieldCheck, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import CTABand from "@/components/ui/CTABand";
import { trustReasons, businessInfo } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Our Story & Office",
  description:
    "Strike Freight & Logistics is a Lagos-based cargo, courier and worldwide shopping company with a real office in Ogba. Here's our story and our promise to you.",
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
                or someone shopping your favourite international stores for the first time, we handle your shipment
                the same way: carefully, and on schedule, with nothing hidden from you.
              </p>
              <p className="text-sm text-slate-400">
                [CONFIRM: founding year / years in operation, if you&apos;d like it included here.]
              </p>
            </div>
            <Button href="/contact#map" variant="ghost" className="mt-6">
              See Drop-off / Office Location
            </Button>
          </div>
          <PhotoPlaceholder
            label="Photo: the Strike Freight team at the Ogba office. Replace at /public/images/about-team.jpg"
            aspect="aspect-[4/3]"
            icon={<Building2 className="h-10 w-10 text-slate-400" aria-hidden="true" />}
          />
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
              <PhotoPlaceholder label="Photo: office storefront/signage" aspect="aspect-square" />
              <PhotoPlaceholder label="Photo: inside the office" aspect="aspect-square" />
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
