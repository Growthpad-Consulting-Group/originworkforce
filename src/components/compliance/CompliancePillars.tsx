import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Clear Communication",
    description: "Workers and partners should understand the process, expectations, and next steps throughout the entire journey.",
  },
  {
    number: "02",
    title: "Structured Process",
    description: "We assess candidates against agreed role criteria: work readiness, communication ability, availability, and deployment suitability.",
  },
  {
    number: "03",
    title: "Worker Preparedness",
    description: "Practical orientation, expectation-setting, and employer context so selected candidates are better positioned for successful placement.",
  },
  {
    number: "04",
    title: "Partner Confidence",
    description: "International recruiters need an origin partner they can trust to execute carefully and communicate clearly at every stage.",
  },
  {
    number: "05",
    title: "Long-term Credibility",
    description: "The strength of any labour corridor depends on how responsibly it is built — we invest in that from day one.",
  },
];

export default function CompliancePillars() {
  return (
    <section id="compliance-pillars" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
                In Practice
              </p>
              <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
                What responsible execution{" "}
                <span className="font-serif italic text-brand-gold">looks like</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
              These are not aspirational statements. They are the operational
              commitments that shape how we work with partners and workers every day.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map(({ number, title, description }) => (
            <StaggerItem key={number}>
              <div className="group flex flex-col gap-6 p-8 h-full bg-brand-light transition-colors duration-500 hover:bg-brand-navy cursor-default">
                <span className="font-serif text-3xl font-bold italic text-brand-gold/60 transition-colors duration-500 group-hover:text-brand-gold">
                  {number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-brand-navy transition-colors duration-500 group-hover:text-brand-gold">
                    {title}
                  </h3>
                  <p className="text-md leading-relaxed text-brand-gray transition-colors duration-500 group-hover:text-white/70">
                    {description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}

          {/* CTA card */}
          <StaggerItem>
            <div className="flex flex-col justify-between gap-8 p-8 h-full bg-brand-navy">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  How We Operate
                </p>
                <h3 className="text-2xl font-medium text-white">
                  Ready to work with a{" "}
                  <span className="font-serif italic text-brand-gold">responsible partner?</span>
                </h3>
              </div>
              <Link
                href="/contact"
                className="self-start bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
              >
                Talk to Our Team
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
}
