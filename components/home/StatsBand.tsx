import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { stats, statsBandEnabled } from "@/lib/site-data";

/** Renders only [CONFIRM] placeholders — never fabricated numbers. Set
 * `statsBandEnabled = false` in site-data.ts to hide this section entirely
 * once you decide whether to keep or remove it. */
export default function StatsBand() {
  if (!statsBandEnabled) return null;

  return (
    <section className="bg-brand-navy py-10 sm:py-14" data-reveal>
      <Container className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-extrabold text-white sm:text-4xl">
              <StatCounter value={stat.value} />
            </p>
            <p className="mt-1 text-sm font-semibold text-white/80">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
