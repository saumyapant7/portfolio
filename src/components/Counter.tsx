"use client";

import { useEffect, useRef } from "react";

/* Hum's counter tick-up: 0 → value over 1200ms with easeOutExpo on view-enter,
 * then one small scale pulse. Server renders the final value, so the number is
 * correct without JS and under reduced motion. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) => `${prefix}${Number.isInteger(value) ? Math.round(n) : n.toFixed(1)}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    el.textContent = fmt(0);
    const io = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
          el.textContent = fmt(value * eased);
          if (t < 1) requestAnimationFrame(tick);
          else {
            el.textContent = fmt(value);
            el.classList.add("counter--done");
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className="counter">
      {fmt(value)}
    </span>
  );
}
