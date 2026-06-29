import Container from "@/components/ui/Container";
import { trustBarItems } from "@/lib/site-data";
import { trustBarIconMap } from "@/components/icons/icon-map";

export default function TrustBar() {
  return (
    <section className="border-b border-brand-line bg-brand-cloud" aria-label="Why ship with Strike Freight">
      <Container className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
        {trustBarItems.map((item) => {
          const Icon = trustBarIconMap[item.icon];
          return (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                <Icon size={18} />
              </span>
              <span className="text-xs font-semibold text-slate-700 sm:text-sm">{item.label}</span>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
