import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/site-data";

/**
 * Native <details>/<summary> accordion — fully keyboard accessible and
 * works with zero client-side JavaScript, which keeps the FAQ section off
 * the JS bundle entirely.
 */
export default function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-brand-line rounded-xl border border-brand-line bg-white">
      {items.map((item, index) => (
        <details key={item.question} className="group p-5" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-navy">
            {item.question}
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-brand-red transition-transform duration-150 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
