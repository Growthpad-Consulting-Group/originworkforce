import Link from "next/link";

export default function GoldBanner() {
  return (
    <section className="bg-brand-light py-0">
      <div className="mx-auto max-w-7xl px-6 md:px-2 -mt-16 -mb-8 relative z-10">
        <div className="bg-brand-gold px-10 py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between shadow-lg">
          <p className="text-2xl font-medium text-brand-navy max-w-2xl">
            Our model is designed to support workforce programmes that are
            operationally sound and sustainable over time.
          </p>
          <Link
            href="/contact"
            className="self-start shrink-0 bg-brand-navy px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-navy/80"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
