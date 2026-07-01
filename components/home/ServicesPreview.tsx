import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-data";
import { serviceIconMap } from "@/components/icons/icon-map";

const BLURB: Record<string, string> = {
  "air-freight":
    "Ships in 7–10 days. Works for documents, electronics, gifts, and anything that can't sit in a container for weeks.",
  "sea-freight":
    "Slower than air, but the rate per kg is much better for heavy or bulky loads. Good when you're not pressed for time.",
  courier:
    "Door to door in 2–5 working days via DHL, FedEx, UPS or Aramex. Best for smaller parcels that need to move fast.",
};

export default function ServicesPreview() {
  return (
    <section className="bg-brand-cloud py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Air, sea or courier"
          description="Three ways to ship. Pick whichever fits your cargo and your timeline."
        />

        <div data-stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            const blurb = BLURB[service.id];
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                data-reveal-item
                className="group flex flex-col gap-4 rounded-xl border border-brand-line bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                  <Icon size={24} />
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-extrabold text-brand-navy">{service.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{blurb}</p>
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-brand-red group-hover:underline">
                  Learn more <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
