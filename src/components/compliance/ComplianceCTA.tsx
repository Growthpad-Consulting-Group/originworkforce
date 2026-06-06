import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ComplianceCTA() {
  return (
    <section className="bg-brand-light pt-24 pb-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-2 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Work With a Responsible Partner
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-6xl leading-tight">
              Need an origin partner that protects both{" "}
              <span className="font-serif italic text-brand-gold">performance and reputation?</span>
            </h2>
            <p className="max-2xl text-lg leading-relaxed text-brand-gray">
              We are built to help partners move with confidence not just speed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-brand-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
              >
                Partner With Us
              </Link>
              <Link
                href="#our-approach"
                className="border border-brand-navy px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
              >
                Our Compliance Approach
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
