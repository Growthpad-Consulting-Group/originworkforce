"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ServicesHero() {
  return (
    <section className="relative bg-brand-navy -mt-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/images/our-service-hero.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-brand-navy/40 via-brand-navy/50 to-brand-navy/80" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-2 pt-48 pb-20 lg:pt-56 lg:pb-28">
        <ScrollReveal>
          <div className="flex flex-col gap-5 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Services
            </p>
            <h1 className="text-4xl font-medium text-white lg:text-6xl leading-tight">
              Origin-side services for{" "}
              <span className="block font-serif italic text-brand-gold">
                global workforce mobility
              </span>
            </h1>
            <p className="text-base leading-relaxed text-white/60 max-w-md">
              A practical service model built around sourcing, screening,
              readiness, and mobilisation coordination — designed to reduce
              friction at the source.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
