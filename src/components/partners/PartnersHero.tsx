import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section className="bg-brand-navy -mt-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)] lg:items-stretch">

        {/* Left — copy */}
        <div className="flex flex-col justify-center gap-8 px-8 py-32 lg:py-40 lg:pl-[max(4rem,calc((100vw-80rem)/2))] lg:pr-12">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              For Global Partners
            </p>
            <h1 className="text-4xl font-medium text-white lg:text-5xl xl:text-6xl leading-tight">
              For recruiters, staffing firms, and{" "}
              <span className="font-serif italic text-brand-gold">mobility operators</span>
            </h1>
            <p className="max-w-sm text-base leading-relaxed text-white/70">
              Origin Workforce is built for organisations that need stronger
              execution at the source. We help global partners improve workforce
              access from Africa without having to build every operational layer
              themselves.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
            >
              Submit Demand
            </Link>
            <Link
              href="/services"
              className="border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Right — staggered two-column mosaic (desktop) */}
        <div className="hidden lg:flex gap-4 pt-24 pr-8 self-stretch">
          {/* Left sub-column */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative flex-1 overflow-hidden">
              <Image src="/assets/images/partner-hero-img-1.png" alt="Partner workforce" fill sizes="25vw" className="object-cover object-center" priority />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image src="/assets/images/partner-hero-img-3.png" alt="Partner workforce" fill sizes="25vw" className="object-cover object-center" />
            </div>
          </div>
          {/* Right sub-column — extra offset down for stagger */}
          <div className="flex flex-col gap-4 flex-1 mt-16">
            <div className="relative flex-1 overflow-hidden">
              <Image src="/assets/images/partner-hero-img-2.png" alt="Partner workforce" fill sizes="25vw" className="object-cover object-center" priority />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image src="/assets/images/partner-hero-img-4.png" alt="Partner workforce" fill sizes="25vw" className="object-cover object-center" />
            </div>
          </div>
        </div>

        {/* Mobile — simple 2×2 grid */}
        <div className="grid grid-cols-2 gap-2 h-[360px] lg:hidden">
          <div className="relative overflow-hidden"><Image src="/assets/images/partner-hero-img-1.png" alt="" fill sizes="50vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/assets/images/partner-hero-img-2.png" alt="" fill sizes="50vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/assets/images/partner-hero-img-3.png" alt="" fill sizes="50vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/assets/images/partner-hero-img-4.png" alt="" fill sizes="50vw" className="object-cover" /></div>
        </div>

      </div>
    </section>
  );
}
