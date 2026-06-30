import Image from "next/image";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Container from "@/components/ui/Container";
import { whatsappMessages, businessInfo } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <Image
        src="/images/hero-freight.jpg"
        alt="Shipping containers stacked at a busy port at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Brand-navy gradient: near-opaque behind the headline so white text
          stays AA-readable, fading out to let the photo show through. Mobile
          stacks the content below the fold of the image, so the overlay runs
          top-to-bottom there instead of left-to-right. */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,42,156,0.92)_0%,rgba(30,42,156,0.85)_55%,rgba(30,42,156,0.78)_100%)] sm:bg-[linear-gradient(100deg,rgba(30,42,156,0.92)_0%,rgba(30,42,156,0.55)_60%,rgba(30,42,156,0.25)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[520px] items-center py-12 sm:min-h-[560px] sm:py-16 lg:min-h-[640px] lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {businessInfo.positioning}
          </h1>
          <p className="mt-4 text-base font-semibold text-white/90 sm:text-lg">
            Cargo in 7–10 days · Courier in 2–5 days · We ship every Friday.
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
            Lagos to London, New York, Toronto, and everywhere in between. Book your shipment or get a free quote
            in minutes, from a real Ogba office staffed by people who actually reply on WhatsApp.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={whatsappMessages.bookNow} size="lg" />
            <Button href="/pricing" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
