"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const locations = [
  {
    icon: "lucide:map-pin",
    title: "Nairobi, Kenya",
    description: "Operational base and primary sourcing market",
  },
  {
    icon: "game-icons:africa",
    title: "20+ African Countries",
    description: "Sourcing talent across the continent",
  },
  {
    icon: "lucide:globe",
    title: "Global Corridors",
    description: "UK, Germany, USA, Middle East, Canada and beyond",
  },
];

export default function GeographicFocus() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left — copy */}
        <div className="flex flex-col justify-center gap-10 px-6 py-16 lg:px-12 lg:py-24 relative z-10 lg:pl-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Geographic Focus
            </p>
            <h2 className="text-4xl font-medium text-white lg:text-5xl">
              Built for{" "}
              <span className="font-serif italic text-brand-gold">Africa</span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-white/70">
              Our operational base begins in Nairobi, Kenya one of Africa&apos;s
              most important workforce markets. Over time, our model is designed
              to support broader African sourcing corridors in partnership with
              approved employers, recruiters, and scheme operators.
            </p>
          </div>

          {/* Location list */}
          <div className="flex flex-col gap-6">
            {locations.map(({ icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon
                  icon={icon}
                  width={26}
                  height={26}
                  className="shrink-0 text-brand-gold mt-0.5"
                />
                <div>
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="text-sm text-white/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image with left gradient fade */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/assets/images/geographic-focus.png"
            alt="Built for Africa"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Fade into navy on the left */}
          <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}
