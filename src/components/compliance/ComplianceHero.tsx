import Image from "next/image";
import Link from "next/link";

export default function ComplianceHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)] -mt-24">

      {/* Left — navy copy panel */}
      <div className="relative flex flex-col justify-center gap-8 bg-brand-navy px-8 py-32 lg:px-16 lg:py-40 lg:pl-[max(4rem,calc((100vw-80rem)/2))] overflow-hidden">
        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.03]"
          style={{ backgroundImage: "url('/assets/images/header-bg.svg')", backgroundSize: "400px" }}
        />

        <div className="relative flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Compliance &amp; Worker Care
          </p>
          <h1 className="text-4xl font-medium text-white lg:text-5xl xl:text-6xl leading-tight">
            Responsible workforce mobility starts with{" "}
            <span className="block font-serif italic text-brand-gold">
              how you operate
            </span>
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-white/70">
            At Origin Workforce, we believe the quality of a workforce mobility
            business is measured not only by placements, but by trust, process
            integrity, and worker preparedness.
          </p>
        </div>

        <div className="relative flex flex-wrap gap-4">
          <Link
            href="#our-approach"
            className="bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
          >
            Our Approach
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>

      {/* Right — full-bleed image */}
      <div className="relative min-h-[400px] lg:min-h-0">
        <Image
          src="/assets/images/compliance-hero.png"
          alt="Responsible workforce mobility"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  );
}
