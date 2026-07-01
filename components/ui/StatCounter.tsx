"use client";

import { useEffect, useRef, useState } from "react";

function NumericCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(rafId.current);

        if (entry.isIntersecting) {
          const DURATION = 1400;
          const startTime = performance.now();

          const frame = (now: number) => {
            const progress = Math.min((now - startTime) / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (progress < 1) rafId.current = requestAnimationFrame(frame);
          };

          rafId.current = requestAnimationFrame(frame);
        } else {
          // Element left the viewport — reset so the next entry re-animates
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/** Animates a numeric value (e.g. "100+", "3+") counting up from zero.
 *  Non-numeric values (e.g. "Trusted Partners") render as plain text. */
export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <>{value}</>;
  return <NumericCounter target={parseInt(match[1], 10)} suffix={match[2]} />;
}
