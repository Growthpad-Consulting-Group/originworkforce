"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactCTA() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left — heading + CTAs */}
        <div className="flex flex-col justify-center gap-8 px-6 py-16 lg:px-2 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Ready to Move Forward?
          </p>
          <h2 className="text-4xl font-medium text-white lg:text-5xl">
            Looking for a{" "}
            <span className="font-serif italic text-brand-gold">dependable </span>
            origin partner in Africa?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/60">
            Whether you are testing a new source market, expanding an existing
            corridor, or looking for a reliable origin-side execution partner —
            we are ready to talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="border border-brand-gold bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
            >
              Talk to Our Team
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              Submit Workforce Demand
            </Link>
          </div>
        </div>

        {/* Right — info panels */}
        <div className="flex flex-col divide-y divide-white/10 border-l border-white/10">

          {/* Partner Enquiries */}
          <div className="flex flex-col gap-4 px-8 py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Partner Enquiries
            </p>
            <h3 className="text-2xl font-medium text-white">
              For recruiters, staffing firms &amp; scheme operators
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Seeking workforce supply from Africa through a managed, trusted
              execution partner.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a href="mailto:hello@originworkforce.africa" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-gold transition-colors duration-200">
                <Icon icon="lucide:mail" width={16} height={16} className="shrink-0 text-brand-gold" />
                hello@originworkforce.africa
              </a>
              <a href="tel:+254701850850" className="flex items-center gap-3 text-sm text-white/80 hover:text-brand-gold transition-colors duration-200">
                <Icon icon="lucide:phone" width={16} height={16} className="shrink-0 text-brand-gold" />
                +254 701 850 850
              </a>
            </div>
          </div>

          {/* Our Location */}
          <div className="flex flex-col gap-3 px-8 py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Our Location
            </p>
            <h3 className="text-2xl font-medium text-white">Nairobi, Kenya</h3>
            <p className="text-sm leading-relaxed text-white/60">
              The Westwood Office, 6th Floor 6A, Comply Guide Advisory,
              Westlands, Nairobi, Kenya.
            </p>
          </div>

          {/* Are You a Candidate? */}
          <div className="flex flex-col gap-3 px-8 py-10 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Are You a Candidate?
            </p>
            <h3 className="text-2xl font-medium text-white">Join our Talent Network</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Register your interest for future workforce opportunities through
              approved international pathways.
            </p>
            <Link
              href="/contact"
              className="self-start mt-1 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline underline-offset-4 hover:text-brand-gold/70 transition-colors duration-200"
            >
              Talk to Our Team
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
