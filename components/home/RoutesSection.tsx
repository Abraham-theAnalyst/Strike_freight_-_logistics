import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { routes, currencySymbols } from "@/lib/site-data";
import { stockImages, routeStockImages } from "@/lib/stock-images";

export default function RoutesSection() {
  return (
    <section id="routes" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Routes We Serve"
          title="Wherever you're sending to, we've got a way there."
          description="Pick your route to see a starting rate, then get your exact quote on WhatsApp in minutes."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => {
            const image = stockImages[routeStockImages[route.id]];
            return (
              <div
                key={route.id}
                className="flex flex-col overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <PhotoPlaceholder src={image.src} alt={image.alt} aspect="aspect-[16/9]" sizes="(min-width: 1024px) 400px, 100vw" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {route.flag}
                    </span>
                    <h3 className="text-lg font-bold text-brand-navy">{route.name}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{route.blurb}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    Cargo from {currencySymbols[route.cargoRate.currency]}
                    {route.cargoRate.amount}/kg{" "}
                    {!route.cargoRate.confirmed && <span className="font-normal text-brand-red">[CONFIRM]</span>}
                  </p>
                  <p className="text-sm font-semibold text-slate-700">
                    Courier from {currencySymbols[route.courierRate.currency]}
                    {route.courierRate.amount}/kg{" "}
                    {!route.courierRate.confirmed && <span className="font-normal text-brand-red">[CONFIRM]</span>}
                  </p>
                  <WhatsAppButton
                    message={`Hi Strike Freight, I'd like a quote for shipping to/from ${route.name}.`}
                    label="Get exact quote"
                    variant="ghost"
                    className="mt-5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
