import type { Metadata } from "next";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import TrackForm from "@/components/forms/TrackForm";
import CTABand from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Track My Shipment",
  description: "Track your Strike Freight & Logistics shipment by name or waybill reference and get a fast status update on WhatsApp.",
  path: "/track",
});

const helpPoints = [
  { icon: Clock, text: "Cargo: 7–10 days. Courier: 2–5 working days. We ship every Friday." },
  { icon: MessageCircle, text: "No live tracking number yet? No problem. We'll look it up and reply on WhatsApp." },
  { icon: ShieldCheck, text: "Your shipment is handled with insured care from pickup to delivery." },
];

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Track Shipment"
        title="Where's my package?"
        description="Enter your name or waybill reference and we'll open WhatsApp with your request ready to send."
      />

      <section className="py-14 sm:py-20">
        <Container className="max-w-2xl">
          <div className="rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
            <TrackForm />
          </div>

          <ul className="mt-8 space-y-4">
            {helpPoints.map((point) => (
              <li key={point.text} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <point.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
                {point.text}
              </li>
            ))}
          </ul>

          {/* TODO: once a real tracking API/system is available, swap the
              WhatsApp-based TrackForm above for a live status lookup. */}
        </Container>
      </section>

      <CTABand title="Shipping something new?" description="Get a quote and book your next shipment before Friday's cutoff." />
    </>
  );
}
