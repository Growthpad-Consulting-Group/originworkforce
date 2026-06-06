"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

type ListItem = {
  icon: string;
  title: string;
  description: string;
};

type GeographicFocusProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  body: string;
  items?: ListItem[];
  cta?: { label: string; href: string };
  image: string;
  imageAlt?: string;
};

const defaultProps: GeographicFocusProps = {
  eyebrow: "Geographic Focus",
  heading: (
    <>
      Built for{" "}
      <span className="font-serif italic text-brand-gold">Africa</span>
    </>
  ),
  body: "Our operational base begins in Nairobi, Kenya — one of Africa's most important workforce markets. Over time, our model is designed to support broader African sourcing corridors in partnership with approved employers, recruiters, and scheme operators.",
  items: [
    { icon: "lucide:map-pin", title: "Nairobi, Kenya", description: "Operational base and primary sourcing market" },
    { icon: "game-icons:africa", title: "20+ African Countries", description: "Sourcing talent across the continent" },
    { icon: "lucide:globe", title: "Global Corridors", description: "UK, Germany, USA, Middle East, Canada and beyond" },
  ],
  image: "/assets/images/geographic-focus.png",
  imageAlt: "Built for Africa",
};

export default function GeographicFocus(props: Partial<GeographicFocusProps> = {}) {
  const { eyebrow, heading, body, items, cta, image, imageAlt } = { ...defaultProps, ...props };

  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left — copy */}
        <div className="flex flex-col justify-center gap-10 px-6 py-16 lg:px-12 lg:py-24 relative z-10 lg:pl-[max(3rem,calc((100vw-80rem)/2))]">
          <div className="flex flex-col gap-5">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                {eyebrow}
              </p>
            )}
            <h2 className="text-4xl font-medium text-white lg:text-5xl">
              {heading}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/70">{body}</p>
          </div>

          {/* Location list */}
          {items && items.length > 0 && (
          <div className="flex flex-col gap-6">
            {items.map(({ icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon icon={icon} width={26} height={26} className="shrink-0 text-brand-gold mt-0.5" />
                <div>
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="text-sm text-white/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
          )}
          {cta && (
            <a
              href={cta.href}
              className="self-start border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-white hover:bg-white/10 inline-block"
            >
              {cta.label}
            </a>
          )}
        </div>

        {/* Right — image with left gradient fade */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-navy via-brand-navy/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}
