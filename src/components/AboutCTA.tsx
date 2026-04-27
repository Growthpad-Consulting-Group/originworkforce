"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const exploreLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Join the Talent Network", href: "/talent" },
  { label: "Contact Us", href: "/contact" },
];

export default function AboutCTA() {
  return (
    <section className="bg-brand-light pt-16 lg:pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-6 md:px-2 ">
        <div className="border-b border-brand-gray/20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0 lg:items-stretch">

          {/* Left — CTA copy */}
          <div className="flex flex-col gap-8 lg:pr-16 pb-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                Ready to Move Forward?
              </p>
              <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl leading-tight">
                Want to build a workforce corridor with a{" "}
                <span className="font-serif italic text-brand-gold">trusted partner?</span>
              </h2>
              <p className="max-w-sm text-base leading-relaxed text-brand-gray">
                Whether you are testing a new source market or scaling an
                existing corridor — we are ready to talk.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-gold/80"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/services"
                className="border border-brand-navy px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right — explore links */}
          <div className="flex flex-col gap-5 lg:pl-16 lg:border-l lg:border-brand-gray/20">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Explore Further
            </p>
            <div className="flex flex-col divide-y divide-brand-gray/20 border-t border-brand-gray/20">
              {exploreLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between py-5 text-lg font-bold text-brand-navy transition-colors duration-200 hover:text-brand-gold"
                >
                  {label}
                  <Icon
                    icon="lucide:arrow-right"
                    width={18}
                    height={18}
                    className="shrink-0 text-brand-gray opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-brand-gold group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
