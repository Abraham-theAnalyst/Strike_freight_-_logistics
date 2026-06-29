"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CalendarClock } from "lucide-react";
import { timelines, whatsappMessages } from "@/lib/site-data";
import { getNextCutoff, diffToCountdown, type Countdown } from "@/lib/next-cutoff";

const UNITS: { key: keyof Countdown; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export default function FridayShipping() {
  // Computed immediately (server and client both run this on first render)
  // so the page never shows a blank "--" state. The server's and client's
  // "now" differ by the hydration delay, which can tick the seconds digit
  // by one — see suppressHydrationWarning below, the documented fix for
  // this exact live-clock scenario.
  const [countdown, setCountdown] = useState<Countdown>(() =>
    diffToCountdown(getNextCutoff(new Date(), timelines.cutoffDayOfWeek, timelines.cutoffHour), new Date())
  );

  useEffect(() => {
    const tick = () => {
      const target = getNextCutoff(new Date(), timelines.cutoffDayOfWeek, timelines.cutoffHour);
      setCountdown(diffToCountdown(target, new Date()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-brand-red py-10 sm:py-14">
      <Container className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex max-w-xl flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-4 lg:text-left">
          <CalendarClock className="h-9 w-9 flex-shrink-0 text-white" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">We Ship Every Friday</h2>
            <p className="mt-1 text-sm text-white sm:text-base">{timelines.cutoffNote}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2" role="timer" aria-live="off" aria-label="Time remaining until this week's shipping cutoff">
            {UNITS.map((unit) => (
              <div key={unit.key} className="flex w-16 flex-col items-center rounded-lg bg-black/20 py-2.5">
                <span className="text-xl font-extrabold text-white tabular-nums sm:text-2xl" suppressHydrationWarning>
                  {String(countdown[unit.key]).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide text-white">{unit.label}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton message={whatsappMessages.bookNow} label="Book Before Cutoff" variant="outline" />
        </div>
      </Container>
    </section>
  );
}
