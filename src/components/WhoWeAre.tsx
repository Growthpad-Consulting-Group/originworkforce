import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row">

        {/* Left — image bleeds to the left viewport edge */}
        <div className="relative w-full min-h-[420px] lg:w-1/2 lg:min-h-[620px] overflow-visible">
          <Image
            src="/assets/images/whoweare.png"
            alt="Origin Workforce team member"
            fill
            className="object-cover object-top"
          />
          {/* Quote badge — straddles the image/copy boundary, desktop only */}
          <div className="hidden lg:block absolute bottom-12 -right-[110px] w-[220px] bg-brand-gold px-6 py-5 z-10">
            <p className="font-serif text-base italic leading-snug">
              &ldquo;Execution begins at the source not the destination.&rdquo;
            </p>
          </div>
        </div>

        {/* Right — copy constrained to roughly half the max-width */}
        <div className="flex w-full flex-col justify-center gap-6 px-8 py-24 lg:w-1/2 lg:px-16 lg:py-40 xl:px-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Who We Are
          </p>

          <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
            Africa&apos;s origin-side{" "}
            <span className="font-serif italic text-brand-gold">workforce</span>{" "}
            partner
          </h2>

          <p className="max-w-md text-base leading-relaxed text-brand-gray">
            We are a workforce mobility firm built for organisations hiring
            across borders. We work with destination recruiters, global staffing
            firms, and scheme operators that need a reliable partner on the
            ground in Africa.
          <br/>
            We are an execution partner built to manage the source side of
            hiring with discipline, structure, and care.
          </p>

          <div className="pt-2">
            <Link
              href="/partner"
              className="inline-block bg-brand-gold px-12 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 hover:bg-brand-navy"
            >
              Partner With Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
