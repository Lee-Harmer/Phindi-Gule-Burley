"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  duration?: number;
}

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years in Media", duration: 1800 },
  { value: 4,  suffix: "",  label: "Comrades Finishes", duration: 1200 },
  { value: 900, suffix: "km", label: "Across KZN Run", duration: 2200 },
  { value: 100, suffix: "s", label: "Women Inspired", duration: 1600 },
];

function Counter({ value, suffix, duration = 1800 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out expo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function CounterStats() {
  return (
    <section className="bg-[#B83A2E] relative overflow-hidden">
      {/* Subtle crosshatch texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {stats.map(({ value, suffix, label, duration }, i) => (
            <div
              key={label}
              className="text-center"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div
                className="font-display font-black text-white leading-none mb-3 tabular-nums"
                style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
              >
                <Counter value={value} suffix={suffix} duration={duration} />
              </div>
              <div className="text-white/55 text-xs tracking-[0.22em] uppercase font-semibold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
