"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const audiences = [
  { number: "01", label: "Destination Recruiters" },
  { number: "02", label: "Global Staffing Firms" },
  { number: "03", label: "Scheme Operators" },
  { number: "04", label: "International Employers" },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-2">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — copy */}
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                Who We Serve
              </p>
              <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
                Built for organisations{" "}
                <span className="block font-serif italic text-brand-gold">
                  hiring across borders
                </span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-brand-gray">
                We partner with organisations that need reliable workforce
                access from Africa and a stronger execution model at the origin.
              </p>
            </div>

            <Link
              href="/partner"
              className="self-start border border-brand-navy px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
            >
              Explore Partner Options
            </Link>
          </div>

          {/* Right — numbered list */}
          <StaggerContainer className="flex flex-col divide-y divide-brand-gray/20 border-t border-brand-gray/20">
            {audiences.map(({ number, label }) => (
              <StaggerItem
                key={number}
                className="group flex items-center gap-8 py-6 transition-colors duration-300 hover:cursor-default"
                direction="left"
              >
                <span className="w-10 shrink-0 font-serif text-4xl italic text-brand-gold">
                  {number}
                </span>
                <span className="flex-1 text-xl font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-gold lg:text-2xl">
                  {label}
                </span>
                <Icon
                  icon="lucide:arrow-right"
                  width={30}
                  height={30}
                  className="shrink-0 text-brand-navy opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-brand-gold"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
