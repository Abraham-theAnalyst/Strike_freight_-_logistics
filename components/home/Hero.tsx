import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Container from "@/components/ui/Container";
import { Plane } from "lucide-react";
import { whatsappMessages } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="bg-brand-navy">
      <Container className="grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div className="order-1">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Send &amp; Receive Anything Between Nigeria and the World by Air, Sea or Courier.
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
            <Button href="#calculator" variant="outline" size="lg">
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="order-2">
          <PhotoPlaceholder
            label="Photo: cargo plane loading or Strike Freight parcels ready for shipment. Replace at /public/images/hero-freight.jpg"
            aspect="aspect-[5/4]"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            icon={<Plane className="h-10 w-10 text-brand-navy/40" aria-hidden="true" />}
            className="border-white/30 bg-white/10 [&>p]:text-white/70"
          />
        </div>
      </Container>
    </section>
  );
}
