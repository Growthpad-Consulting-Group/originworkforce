"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const values = [
  {
    icon: "lucide:shield",
    title: "Trust",
    description: "We build confidence through disciplined delivery and honest communication.",
  },
  {
    icon: "lucide:timer-reset",
    title: "Responsivity",
    description: "We move with urgency and adapt quickly to the needs of our partners and candidates.",
  },
  {
    icon: "lucide:zap",
    title: "Execution",
    description: "We follow through. Every process, every placement, every time.",
  },
  {
    icon: "lucide:users",
    title: "Partnership",
    description: "We work as an extension of our clients — invested in their outcomes, not just our deliverables.",
  },
  {
    icon: "lucide:handshake",
    title: "Integrity",
    description: "We operate with transparency and hold ourselves accountable to the highest ethical standards.",
  },
];

export default function OurValues() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header row */}
        <ScrollReveal>
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              How We Operate
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              The values that drive{" "}
              <span className="block font-serif italic text-brand-gold">
                everything we do
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
            Our values are not statements on a wall. They are the operating
            principles that shape how we source, screen, prepare, and mobilise
            every time.
          </p>
        </div>
        </ScrollReveal>

        {/* Two-column body */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — accordion */}
          <div className="flex flex-col divide-y divide-brand-gray/20 border-t border-brand-gray/20">
            {values.map(({ icon, title, description }, i) => (
              <div key={title}>
                <button
                  onClick={() => setOpen(i === open ? -1 : i)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <Icon
                    icon={icon}
                    width={26}
                    height={26}
                    className={`shrink-0 transition-colors duration-300 ${open === i ? "text-brand-gold" : "text-brand-gray"}`}
                  />
                  <span className="flex-1 text-xl font-semibold text-brand-navy">
                    {title}
                  </span>
                  <Icon
                    icon={open === i ? "lucide:x" : "lucide:plus"}
                    width={20}
                    height={20}
                    className={`shrink-0 transition-colors duration-300 ${open === i ? "text-brand-gold" : "text-brand-gray"}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="pl-9 text-md leading-relaxed text-brand-gray">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — image */}
          <div className="relative h-[420px] lg:h-full min-h-[420px] overflow-hidden">
            <Image
              src="/assets/images/values.png"
              alt="Our values in action"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
