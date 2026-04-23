import Image from "next/image";
import Link from "next/link";
import StatsBar from "@/components/StatsBar";

export default function Hero() {
  return (
    <section>
      {/* Main hero */}
      <div className="bg-brand-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-12 px-6 py-20">
          {/* Left — Africa map with people collage */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/africamap.svg"
              alt="African workforce talent"
              width={520}
              height={554}
              className="w-full max-w-[520px]"
              priority
            />
          </div>

          {/* Right — copy */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-5xl font-semibold leading-tight text-white">
                Trusted origin
                <br />
                execution for
              </h1>
              <p className="mt-2 font-serif text-5xl font-semibold italic leading-tight text-brand-gold">
                global workforce
                <br />
                mobility from Africa.
              </p>
            </div>

            <p className="max-w-sm text-base leading-relaxed text-white/70">
              Source, screen, prepare, and mobilise workforce talent from Africa
              for onsite and remote-enabled roles.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/partner"
                className="bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-gold/80"
              >
                Partner With Us
              </Link>
              <Link
                href="/model"
                className="border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See Our Model Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <StatsBar />
    </section>
  );
}
