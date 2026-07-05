import Image from "next/image";
import Link from "next/link";
import StatsBar from "@/components/StatsBar";

export default function Hero() {
  return (
    <section>
      {/* Main hero */}
      <div className="bg-brand-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">

          {/* Copy — first on mobile */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-7xl">
                Trusted origin
                <br />
                execution for
              </h1>
              <p className="mt-2 font-serif text-4xl font-medium italic text-brand-gold sm:text-5xl lg:text-6xl">
                global workforce
                <br />
                mobility from Africa. 
              </p>
            </div>

            <p className="max-w-md text-medium leading-relaxed text-white/95">
              Source, screen, prepare, and mobilise workforce talent from Africa
              for onsite and remote-enabled roles.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/partners"
                className="bg-brand-gold px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-brand-gold/80"
              >
                Partner With Us
              </Link>
              <Link
                href="/services"
                className="border border-white/40 px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
              >
                See Our Model Work
              </Link>
            </div>
          </div>

          {/* Africa map — second on mobile */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <Image
              src="/assets/images/africamap.svg"
              alt="African workforce talent"
              width={520}
              height={0}
              className="w-full max-w-sm lg:max-w-full"
              priority
            />
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <StatsBar />
    </section>
  );
}
