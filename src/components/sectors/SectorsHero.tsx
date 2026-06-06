import Image from "next/image";
import Link from "next/link";

export default function SectorsHero() {
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
            Workforce Sectors
          </p>
          <h1 className="text-4xl font-medium text-white lg:text-5xl xl:text-6xl leading-tight">
            Workforce sectors{" "}
            <span className="block font-serif italic text-brand-gold">
              we support
            </span>
          </h1>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-white/70 max-w-sm">
            <p>
              Origin Workforce is structured around partner-facing sectors so
              international recruiters, staffing firms, and labour mobility
              operators can quickly understand where we operate and where we
              create the most value.
            </p>
            <p>
              Our model spans workforce, skilled trades, and selected
              essential-service pathways. We focus on sectors where employers
              need dependable labour supply, stronger worker readiness, and
              disciplined origin-side execution from Africa.
            </p>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
          >
            Discuss Your Workforce Need
          </Link>
          <Link
            href="#sectors"
            className="border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
          >
            Explore Sectors
          </Link>
        </div>
      </div>

      {/* Right — full-bleed image */}
      <div className="relative min-h-[400px] lg:min-h-0">
        <Image
          src="/assets/images/sector-hero.png"
          alt="Workforce sectors we support"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  );
}
