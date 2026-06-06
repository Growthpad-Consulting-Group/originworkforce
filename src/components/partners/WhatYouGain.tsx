"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const gains = [
  "A stronger local execution engine",
  "Better candidate preparation",
  "Improved source-market coordination",
  "Reduced friction across the hiring journey",
  "A partner model designed for scale",
];

export default function WhatYouGain() {
  return (
    <section className="bg-brand-navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">

        {/* Left — copy with pattern strips */}
        <div className="flex flex-col">
          {/* Pattern strip above title */}
          <div
            className="h-20 w-full bg-cover bg-center opacity-2 brightness-0 invert"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />
          <div className="flex flex-col gap-6 px-8 pb-0 lg:px-2 lg:ml-auto lg:w-full lg:max-w-[calc(var(--container-7xl)/2)]">
            <ScrollReveal>
              <div className="flex flex-col gap-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                  What Makes Us Different
                </p>
                <h2 className="text-4xl font-medium text-white lg:text-5xl">
                  What you gain by working with{" "}
                  <span className="block font-serif italic text-brand-gold">
                    Origin Workforce
                  </span>
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/90">
                  A stronger local execution engine that removes the operational
                  burden from your team and gives you more control over the
                  source market.
                </p>
              </div>
              <Link
                href="/demand"
                className="mt-6 self-start border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10 inline-block"
              >
                Submit Workforce Demand
              </Link>
            </ScrollReveal>
          </div>
          {/* Pattern strip below CTA */}
          <div
            className="h-20 w-full bg-cover bg-center opacity-2 brightness-0 invert mt-8"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />
          <div
            className="h-20 w-full bg-cover bg-center opacity-2 brightness-0 invert"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />
        </div>

        {/* Right — checklist, no pattern strips */}
        <StaggerContainer className="flex flex-col justify-center divide-y divide-white/10 border-t border-white/10 lg:border-l lg:border-t-0 lg:border-white/10">
          {gains.map((gain) => (
            <StaggerItem
              key={gain}
              className="flex items-center gap-6 px-8 py-8 lg:px-12"
              direction="left"
            >
              <Icon
                icon="iconoir:check-circle"
                width={34}
                height={34}
                className="shrink-0 text-brand-gold/40"
              />
              <span className="text-2xl font-medium text-white">{gain}</span>
            </StaggerItem>
          ))}
          
        </StaggerContainer>

      </div>
    </section>
  );
}
