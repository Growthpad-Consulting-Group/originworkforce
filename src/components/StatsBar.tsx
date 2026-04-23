"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Candidates in Pipeline", gold: true },
  { value: 9, suffix: "", label: "Workforce Sectors", gold: false },
  { value: 6, suffix: "+", label: "Workforce Sectors", gold: false },
  { value: 1, suffix: "st", label: "Workforce Sectors", gold: false },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

export default function StatsBar() {
  return (
    <div className="bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 border-t border-white/10">
        {stats.map(({ value, suffix, label, gold }) => (
          <StatItem
            key={label + value}
            value={value}
            suffix={suffix}
            label={label}
            gold={gold}
          />
        ))}
      </div>
    </div>
  );
}

function StatItem({
  value,
  suffix,
  label,
  gold,
}: {
  value: number;
  suffix: string;
  label: string;
  gold: boolean;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col gap-2 px-10 py-10">
      <span
        className={`text-5xl font-bold tracking-tight ${
          gold ? "text-brand-gold" : "text-white"
        }`}
      >
        {count}
        {suffix}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}
