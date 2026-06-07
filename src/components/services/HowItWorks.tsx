"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  { number: "01", title: "Partner Alignment", description: "We begin by understanding your workforce demand, role profiles, hiring volumes, target destination, compliance requirements, and timelines." },
  { number: "02", title: "Pipeline Design", description: "We map the sourcing approach, screening process, communication flow, and readiness model needed for your hiring corridor." },
  { number: "03", title: "Source-Market Activation", description: "We launch sourcing and candidate engagement across relevant channels and begin structured pipeline building." },
  { number: "04", title: "Assessment and Shortlisting", description: "We screen for suitability, readiness, availability, and fit against agreed selection criteria." },
  { number: "05", title: "Readiness and Documentation Support", description: "We help coordinate the origin-side process required to prepare selected candidates for onward processing and partner handoff." },
  { number: "06", title: "Mobilisation Coordination", description: "We support communication and workflow management through to origin-side completion and deployment readiness." },
  { number: "07", title: "Continuous Improvement", description: "We work with partners to improve quality, efficiency, and worker preparedness as hiring corridors mature." },
];

const VISIBLE = 3;

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const max = steps.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));

  // Carousel offset stops at max so we never show empty space
  const offset = Math.min(current, max);

  return (
    <section className="bg-brand-navy pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">How It Works</p>
              <h2 className="text-4xl font-medium text-white lg:text-5xl">
                A practical model for{" "}
                <span className="block font-serif italic text-brand-gold">workforce deployment</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/60 lg:justify-self-end">
              A practical model for reducing friction at the source and giving partners a more dependable way to recruit and mobilise.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards with prev/next arrows offset outside container */}
        <div className="relative">
          {/* Prev arrow — outside left */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="absolute left-2 lg:left-0 lg:-translate-x-full top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors duration-300 disabled:opacity-30 hover:bg-white/20 z-10"
          >
            <Icon icon="lucide:arrow-left" width={18} height={18} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${offset} * (100% / ${visibleCount} + ${12 / visibleCount}px)))` }}
            >
            {steps.map((step, i) => {
                const isActive = i >= current && i < current + visibleCount;
                return (
                  <div
                    key={step.number}
                    className="flex shrink-0 flex-col gap-6 p-8 transition-all duration-500"
                    style={{
                      width: `calc((100% - ${(visibleCount - 1) * 12}px) / ${visibleCount})`,
                      backgroundColor: i === current ? "#0E2634" : "transparent",
                      opacity: i === current ? 1 : isActive ? 0.45 : 0.15,
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      <span className="font-serif text-5xl italic text-brand-gold">
                        {step.number}
                      </span>
                      <div className="w-10 h-px bg-brand-gold/50" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next arrow — outside right */}
          <button
            onClick={next}
            disabled={current === steps.length - 1}
            aria-label="Next"
            className="absolute right-2 lg:right-0 lg:translate-x-full top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-brand-gold text-brand-navy transition-colors duration-300 disabled:opacity-30 hover:bg-brand-gold/80 z-10"
          >
            <Icon icon="lucide:arrow-right" width={18} height={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-14 grid border-t border-white/10" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {steps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setCurrent(i)}
              className={`py-4 text-center text-sm font-semibold transition-all duration-300 border-t-2 -mt-px border-l border-r ${
                i === current
                  ? "border-t-brand-gold border-l-white/10 border-r-white/10 text-brand-gold"
                  : "border-t-transparent border-l-white/10 border-r-white/10 text-white/30 hover:text-white/50"
              }`}
            >
              {step.number}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
