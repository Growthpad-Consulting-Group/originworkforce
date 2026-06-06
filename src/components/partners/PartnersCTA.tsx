import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PartnersCTA() {
  return (
    <section className="bg-brand-light py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-2 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Work With Us
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-6xl leading-tight">
              Ready to build a stronger{" "} <br/>
              <span className="font-serif italic text-brand-gold">
                hiring corridor?
              </span>
            </h2>
            <p className="max-w-6xl text-base leading-relaxed text-brand-gray">
              Tell us what roles you need and where you are hiring. Our team
              will assess fit and revert with a practical next step.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-brand-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
              >
                Partner With Us
              </Link>
              <Link
                href="/compliance"
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
