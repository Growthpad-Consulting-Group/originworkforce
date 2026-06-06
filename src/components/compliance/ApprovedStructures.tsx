"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const structures = [
  {
    title: "Approved Partner Structures",
    description: "We work within approved partner structures built around credible employers and responsible intermediaries.",
  },
  {
    title: "Lawful Mobility Pathways",
    description: "Every corridor we support operates within lawful workforce mobility pathways — no exceptions.",
  },
  {
    title: "Operationally Sound Programmes",
    description: "Our model is designed to support workforce programmes that are operationally sound and sustainable over time.",
  },
];

export default function ApprovedStructures() {
  return (
    <section className="bg-brand-navy pt-16 lg:pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-2">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              We Support Trusted Pathways
            </p>
            <h2 className="text-4xl font-medium text-white lg:text-5xl">
              Working within{" "}
              <span className="font-serif italic text-brand-gold">approved structures</span>
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {structures.map(({ title, description }) => (
            <StaggerItem key={title}>
              <div className="group flex flex-col justify-end gap-4 border border-white/10 p-8 min-h-[280px] transition-colors duration-300 hover:border-brand-gold/40 cursor-default">
                <h3 className="text-xl font-semibold text-brand-gold">{title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
