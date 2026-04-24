import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "We understand the origin side",
    description:
      "Our entire model is built around source-market execution — the layer most global partners lack on the ground.",
  },
  {
    number: "02",
    title: "We reduce execution risk",
    description:
      "Better screening, process consistency, and candidate readiness reducing friction before deployment begins.",
  },
  {
    number: "03",
    title: "We protect partner reputation",
    description:
      "Disciplined process, ethical conduct, and clear communication built to protect the credibility of every corridor.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-navy">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — copy + image, constrained to max-w */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-6 px-8 py-16 lg:px-2 lg:py-20 lg:ml-auto lg:w-full lg:max-w-[calc(var(--container-7xl)/2)]">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Why Origin Workforce
            </p>
            <h2 className="text-4xl font-medium text-white lg:text-5xl">
              Why partners choose{" "}
              <span className="block font-serif italic text-brand-gold">
                Origin Workforce
              </span>
            </h2>
            <p className="max-w-nd text-base leading-relaxed text-white">
              Many hiring challenges begin long before arrival. We focus on
              strengthening the source-market stage where trust and execution
              matter most.
            </p>
            <Link
              href="/partner"
              className="self-start border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-brand-navy"
            >
              Explore Partner Options
            </Link>
          </div>

          {/* Image — fills remaining height */}
          <div className="relative min-h-[320px] flex-1">
            <Image
              src="/assets/images/why-partners-choose.png"
              alt="Origin Workforce partner"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right — numbered reasons */}
        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10 lg:border-l lg:border-t-0 lg:border-white/10">
          {/* Decorative bg image */}
          <div
            className="h-28 w-full bg-cover bg-center opacity-5 brightness-0 invert"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />
          {reasons.map(({ number, title, description }) => (
            <div key={number} className="flex gap-8 px-8 py-10 lg:px-12">
              <span className="w-10 shrink-0 font-serif text-4xl italic text-brand-gold">
                {number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-white lg:text-2xl">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div
            className="h-28 w-full bg-cover bg-center opacity-5 brightness-0 invert"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />
          <div
            className="h-28 w-full bg-cover bg-center opacity-5 brightness-0 invert"
            style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
          />

        </div>

      </div>
    </section>
  );
}
