"use client";

import { useEffect, useRef, useState } from "react";

type Stat =
  | { type: "number"; value: number; suffix: string; label: string; gold: boolean }
  | { type: "text"; display: React.ReactNode; label: string };

const stats: Stat[] = [
  { type: "number", value: 20, suffix: "+", label: "African Countries", gold: true },
  {
    type: "text",
    display: (
      <span className="text-3xl font-medium tracking-tight text-white lg:text-5xl">
        Multi<span className="font-serif italic text-brand-gold">lingual</span>
      </span>
    ),
    label: "English, French, German",
  },
  { type: "number", value: 6, suffix: "+", label: "Workforce Sectors", gold: false },
  { type: "number", value: 1, suffix: "st", label: "Workforce Sectors", gold: false },
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
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

function NumberStat({
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
    <div ref={ref} className="flex flex-col gap-2 px-6 py-8 lg:px-10 lg:py-10">
      <span className={`text-3xl font-medium tracking-tight lg:text-7xl ${gold ? "text-brand-gold" : "text-white"}`}>
        {count}<span className="font-serif italic">{suffix}</span>
      </span>
      <span className="text-sm font-medium uppercase tracking-widest text-white">
        {label}
      </span>
    </div>
  );
}

function TextStat({ display, label }: { display: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col justify-end gap-2 px-6 py-8 lg:px-10 lg:py-10">
      {display}
      <span className="text-sm font-semibold uppercase tracking-widest text-white">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 border-t border-white/10 lg:grid-cols-4">
        {stats.map((stat, i) =>
          stat.type === "number" ? (
            <NumberStat key={i} value={stat.value} suffix={stat.suffix} label={stat.label} gold={stat.gold} />
          ) : (
            <TextStat key={i} display={stat.display} label={stat.label} />
          )
        )}
      </div>
    </div>
  );
}
