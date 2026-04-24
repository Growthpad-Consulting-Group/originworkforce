"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { navLinks } from "@/data/nav";

const footerLinks = [
  ...navLinks,
  { label: "Talent Network", href: "/talent" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-light relative overflow-hidden">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-2"
        style={{ backgroundImage: "url('/assets/images/header-bg.svg')", backgroundSize: "1200px" }}
      />

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-2 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Col 1 — Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/images/logo.svg"
              alt="Origin Workforce"
              width={220}
              height={0}
            />
            <p className="text-lg leading-relaxed text-brand-gray max-w-xs">
              Trusted origin execution for global workforce mobility from Africa.
            </p>
          </div>

          {/* Col 2 — Contact */}
          <div className="flex flex-col gap-5">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@originworkforce.africa"
                className="flex items-center gap-3 text-md text-brand-navy hover:text-brand-gold transition-colors duration-200"
              >
                <Icon icon="lucide:mail" width={20} className="shrink-0 text-brand-gold" />
                hello@originworkforce.africa
              </a>
              <a
                href="tel:+254701850850"
                className="flex items-center gap-3 text-md text-brand-navy hover:text-brand-gold transition-colors duration-200"
              >
                <Icon icon="lucide:phone" width={20} className="shrink-0 text-brand-gold" />
                +254 701 850 850
              </a>
            </div>
            <p className="text-md leading-relaxed text-brand-gray">
              The Westwood Office, 6th Floor 6A, Comply Guide Advisory,
              Westlands, Nairobi, Kenya.
            </p>
          </div>

          {/* Col 3 — Nav links */}
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Quicklinks
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-md text-brand-navy hover:text-brand-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-gray/20" />

      {/* Big wordmark */}
      <div className="overflow-hidden px-4 py-6 select-none text-center">
        <p
          className="font-sans font-medium text-brand-navy leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)" }}
        >
          Origin <span className="font-bold">Workforce.</span>
        </p>
      </div>

    </footer>
  );
}
