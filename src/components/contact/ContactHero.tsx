"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactHero() {
  return (
    <section className="relative bg-brand-navy -mt-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: "url('/assets/images/our-service-hero.png')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/40 via-brand-navy/50 to-brand-navy/80" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-2 pt-48 pb-20 lg:pt-56 lg:pb-28">
        <ScrollReveal>
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Contact
            </p>
            <h1 className="text-4xl font-medium text-white lg:text-6xl leading-tight">
              Let&apos;s build a stronger{" "}
              <span className="block font-serif italic text-brand-gold">
                workforce corridor
              </span>
            </h1>
            <p className="text-base leading-relaxed text-white/60 max-w-xl">
              Whether you are testing a new source market, expanding an existing
              corridor, or looking for a reliable origin-side execution partner,
              we are ready to talk.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
