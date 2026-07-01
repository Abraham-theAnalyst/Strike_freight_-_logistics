import Image from "next/image";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { stats, statsBandEnabled, courierPartners } from "@/lib/site-data";

/** White chip holding one partner logo — keeps logos legible on the dark navy band. */
function PartnerChip({ partner }: { partner: (typeof courierPartners)[number] }) {
  if (!partner.logo) return null;
  return (
    <span className="flex items-center justify-center rounded-lg bg-white px-3 py-1.5 shadow-sm">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={64}
        height={24}
        className="h-6 object-contain"
        style={{ width: "auto" }}
        loading="eager"
      />
    </span>
  );
}

export default function StatsBand() {
  if (!statsBandEnabled) return null;

  return (
    <section className="bg-brand-navy py-10 sm:py-14" data-reveal>
      <Container className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {stats.map((stat) => {
          const isPartners = stat.value === "Trusted Partners";
          return (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                <StatCounter value={stat.value} />
              </p>
              {isPartners ? (
                /* Replace the text label with actual logo chips */
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  {courierPartners.filter((p) => p.logo).map((partner) => (
                    <PartnerChip key={partner.name} partner={partner} />
                  ))}
                </div>
              ) : (
                <p className="mt-1 text-sm font-semibold text-white/80">{stat.label}</p>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
