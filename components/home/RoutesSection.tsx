import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Badge from "@/components/ui/Badge";
import { routes } from "@/lib/site-data";
import { stockImages, routeStockImages } from "@/lib/stock-images";

export default function RoutesSection() {
  return (
    <section id="routes" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Routes We Serve"
          title="Wherever you're sending to, we've got a way there."
          description="Pick your route to see how it ships and how long it takes, then get your exact quote on WhatsApp in minutes."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {routes.map((route) => {
            const image = stockImages[routeStockImages[route.id]];
            return (
              <div
                key={route.id}
                data-reveal-item
                className="flex flex-col overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md"
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

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {route.modes.map((mode) => (
                      <Badge key={mode}>{mode}</Badge>
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-700">{route.duration}</p>
                  {route.note && <p className="mt-1 text-xs leading-relaxed text-slate-500">{route.note}</p>}

                  <WhatsAppButton
                    message={route.whatsappMessage}
                    label="Get a Quote on WhatsApp"
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
