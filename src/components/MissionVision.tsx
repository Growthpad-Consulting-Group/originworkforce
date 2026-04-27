import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-2">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">

          {/* Mission — navy card */}
          <div className="relative overflow-hidden bg-brand-navy px-10 py-20 flex flex-col gap-6">
            {/* Watermark icon — right half bleeds off edge */}
            <Image
              src="/assets/images/logo-icon-full.svg"
              alt=""
              aria-hidden="true"
              width={400}
              height={400}
              className="pointer-events-none absolute -right-1/3 bottom-0 w-3/4 opacity-5 rotate-90"
            />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Mission
            </p>
            <blockquote className="relative font-serif text-2xl italic leading-snug text-white lg:text-3xl">
              To build{" "}
              <span className="text-brand-gold">trusted workforce corridors</span>{" "}
              between Africa and the world through disciplined origin-side
              execution, ethical operations, and worker-centered mobility.
            </blockquote>
          </div>

          {/* Vision — white card, offset down */}
          <div className="relative overflow-hidden bg-white px-10 py-20 flex flex-col gap-6 lg:mt-[30%]">
            {/* Watermark icon */}
            <Image
              src="/assets/images/logo-icon-full.svg"
              alt=""
              aria-hidden="true"
              width={400}
              height={400}
              className="pointer-events-none absolute -right-1/3 bottom-0 w-3/4 opacity-5 rotate-90"
            />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Vision
            </p>
            <blockquote className="relative font-serif text-2xl italic leading-snug text-brand-navy lg:text-3xl">
              To become{" "}
              <span className="text-brand-gold">Africa&apos;s most trusted origin execution partner</span>{" "}
              for global workforce mobility — building corridors that are
              credible, scalable, and operationally sound.
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
