"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function InsightsHero() {
  return (
    <section className="relative bg-brand-navy -mt-24 overflow-hidden">
      {/* Background image — swap src when available */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/our-service-hero.png')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/60 via-brand-navy/60 to-brand-navy/80" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-2 pt-48 pb-20 lg:pt-56 lg:pb-28">
        <ScrollReveal>
          <div className="flex flex-col gap-5 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Insights
            </p>
            <h1 className="text-4xl font-medium text-white lg:text-6xl leading-tight">
              Insights on workforce mobility,{" "}
              <span className="block font-serif italic text-brand-gold">
                labour demand, and hiring corridors
              </span>
            </h1>
            <p className="text-base leading-relaxed text-white/60 max-w-lg">
              Explore perspectives from Origin Workforce on global labour demand,
              workforce mobility trends, source-market execution, and responsible
              cross-border hiring from Africa.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
