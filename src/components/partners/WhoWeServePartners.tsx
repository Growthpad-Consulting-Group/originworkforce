"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const audiences = [
  {
    number: "01",
    label: "Destination Recruiters",
    description: "Expand your hiring capacity with a reliable origin-side execution partner.",
  },
  {
    number: "02",
    label: "Global Staffing Firms",
    description: "Strengthen candidate quality, visibility, and source-market coordination.",
  },
  {
    number: "03",
    label: "Labour Mobility Scheme Operators",
    description: "Build more disciplined candidate preparation and mobilisation support at origin.",
  },
  {
    number: "04",
    label: "International Employers",
    description: "Access workforce talent from Africa through a structured and managed partner model.",
  },
];

export default function WhoWeServePartners() {
  return (
    <section className="bg-brand-light">
      <div className="flex flex-col lg:flex-row">

        {/* Left — copy + image, no outer container, image bleeds left */}
        <div className="flex w-full flex-col bg-brand-light lg:w-1/2">
          {/* Copy — padded */}
          <div className="flex flex-col gap-6 px-8 pt-16 pb-8 lg:px-16 lg:pt-24 lg:pb-10 xl:px-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Story
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              Built for organisations{" "}
              <span className="block font-serif italic text-brand-gold">
                hiring across borders
              </span>
            </h2>
            <div className="flex flex-col gap-3 text-base leading-relaxed text-brand-gray">
              <p>
                We partner with organisations that need reliable workforce
                access from Africa and want a stronger execution model at the origin.
              </p>
              <p>
                Whether you are testing a new corridor or scaling an existing
                one, we bring the local execution capacity needed to move with confidence.
              </p>
            </div>
          </div>
          {/* Image — full width of left column, bleeds to left edge */}
          <div className="relative h-[520px] lg:h-[480px]">
            <Image
              src="/assets/images/built-for-org.png"
              alt="Built for organisations hiring across borders"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right — numbered list */}
        <div className="flex w-full flex-col justify-center bg-white px-8 py-16 lg:w-1/2 lg:px-16 lg:py-24 xl:px-24">
          <StaggerContainer className="flex flex-col divide-y divide-brand-gray/20">
            {audiences.map(({ number, label, description }) => (
              <StaggerItem
                key={number}
                className="group flex items-start gap-8 py-6 transition-colors duration-300 hover:cursor-default"
                direction="left"
              >
                <span className="w-10 shrink-0 font-serif text-3xl italic text-brand-gold mt-0.5">
                  {number}
                </span>
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-2xl font-semibold text-brand-navy transition-colors duration-300 group-hover:text-brand-gold">
                    {label}
                  </span>
                  <p className="text-lg leading-relaxed text-brand-gray">
                    {description}
                  </p>
                </div>
                <Icon
                  icon="lucide:arrow-right"
                  width={22}
                  height={22}
                  className="shrink-0 text-brand-navy opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-brand-gold mt-1"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
