import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ServicesCTA() {
  return (
    <section className="bg-brand-light py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-2 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Ready to Move Forward?
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-6xl leading-tight">
              Let&apos;s build a stronger{" "}
              <span className="block font-serif italic text-brand-gold">
                hiring corridor.
              </span>
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-brand-gray">
              Whether you are testing a new source market or scaling an existing
              one we are ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-brand-gold px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
              >
                Talk to Our Team
              </Link>
              <Link
                href="/contact"
                className="border border-brand-navy px-10 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
              >
                Submit Demand
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
