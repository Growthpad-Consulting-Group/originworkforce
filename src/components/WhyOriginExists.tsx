import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function WhyOriginExists() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

      {/* Left — full-bleed image */}
      <div className="relative min-h-[400px] lg:min-h-0">
        <Image
          src="/assets/images/why-origin.png"
          alt="Why Origin Workforce exists"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      {/* Right — copy on light bg */}
      <div className="flex flex-col justify-center gap-8 bg-brand-light px-8 py-16 lg:px-16 lg:py-24">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Story
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              Why Origin <br/>Workforce{" "}
              <span className="font-serif italic text-brand-gold">exists</span>
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-brand-gray max-w-lg">
              <p>
                Cross-border hiring often looks efficient on paper but breaks down
                in practice because origin-side execution is weak.
              </p>
              <p>
                Candidate quality is inconsistent. Preparation is uneven.
                Documentation processes are fragmented. Worker expectations are
                poorly managed. All of this creates friction for recruiters,
                employers, and workers alike.
              </p>
              <p>
                Origin Workforce was built to solve that problem. We exist to
                become the trusted origin-side partner that helps global hiring
                organisations execute with more reliability, more visibility, and
                stronger operational discipline.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/partner"
            className="self-start bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
          >
            Partner With Us
          </Link>
        </ScrollReveal>
      </div>

    </section>
  );
}
