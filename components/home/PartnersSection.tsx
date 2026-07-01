import Image from "next/image";
import Container from "@/components/ui/Container";
import { courierPartners } from "@/lib/site-data";

export default function PartnersSection() {
  const partners = courierPartners.filter((p) => p.logo);

  return (
    <section className="bg-brand-cloud py-14 sm:py-20" data-reveal>
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Our Partners</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
          The carriers behind our courier service
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
          For courier and last-mile delivery, we work with DHL, FedEx, UPS and Aramex. Your parcel moves on
          their networks, tracked from pickup to the door.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 w-36 items-center justify-center rounded-xl border border-brand-line bg-white px-4 py-3 shadow-sm sm:h-18 sm:w-40"
            >
              <Image
                src={partner.logo!}
                alt={partner.name}
                width={120}
                height={48}
                className="h-10 max-w-full object-contain"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
