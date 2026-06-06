import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function OurBelief() {
  return (
    <section className="relative bg-brand-light py-24 lg:py-32 overflow-hidden">
      {/* Tiled pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.02]"
        style={{ backgroundImage: "url('/assets/images/header-bg.svg')", backgroundSize: "1400px" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-2">
        <ScrollReveal>
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Belief
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-6xl xl:text-7xl leading-tight">
              We measure quality not only by placements but by trust, process
              integrity, and worker preparedness.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
