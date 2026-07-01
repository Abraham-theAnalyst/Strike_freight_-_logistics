"use client";

import { useEffect } from "react";

/**
 * Mounts once in the root layout and wires up a single IntersectionObserver
 * for all scroll-reveal elements on the page.
 *
 * Elements annotated with [data-reveal] fade+rise into view individually.
 * Elements annotated with [data-stagger] reveal their [data-reveal-item]
 * children in a quick staggered sequence.
 *
 * The observer is never set up when prefers-reduced-motion is active — the
 * global CSS rule in globals.css already shows everything at full opacity,
 * so there's nothing to do.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const STAGGER_MS = 75;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          if (el.dataset.stagger !== undefined) {
            // Stagger the [data-reveal-item] children
            const items = el.querySelectorAll<HTMLElement>("[data-reveal-item]");
            items.forEach((item, i) => {
              item.classList.add("reveal-ready");
              // One rAF to paint the hidden state, then delay by stagger index
              requestAnimationFrame(() => {
                setTimeout(() => item.classList.add("revealed"), i * STAGGER_MS);
              });
            });
          } else {
            // Single element
            el.classList.add("revealed");
          }

          io.unobserve(el);
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -32px 0px" }
    );

    // [data-reveal] — single elements
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible
      el.classList.add("reveal-ready");
      io.observe(el);
    });

    // [data-stagger] — grid/list containers
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
