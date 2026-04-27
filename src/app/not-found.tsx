import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-[70vh] w-full max-w-5xl items-center px-6 py-24 sm:px-10">
        <div className="w-full rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Error 404
          </p>

          <h1 className="mt-4 max-w-3xl font-sans font-medium text-white text-5xl">
            The page you requested is no longer on this route.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            We could not find the page. It may have been moved, renamed, or the
            link might be outdated. Use one of the options below to continue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-brand-gold px-7 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Back to Homepage
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
