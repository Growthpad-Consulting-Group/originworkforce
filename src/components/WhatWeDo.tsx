"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { services } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import { Icon } from "@iconify/react";

function useVisible() {
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return visible;
}

export default function WhatWeDo() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const visible = useVisible();
  const max = Math.max(services.length - visible, 0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, max));

  // Clamp current index when visible count changes (e.g. on resize)
  const clampedCurrent = Math.min(current, max);

  return (
    <section className="bg-brand-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header row */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 justify-items-end items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              What We Do
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              We make source-market{" "}
              <span className="font-serif italic text-brand-gold">hiring work</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-brand-gray lg:text-right">
            International workforce hiring often breaks down at origin. We exist
            to solve that with discipline and structure.
          </p>
        </div>

        {/* Cards carousel */}
        <div className="overflow-hidden" ref={trackRef}>
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${clampedCurrent} * (100% / ${visible} + ${24 / visible}px)))`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex shrink-0 flex-col justify-between border border-brand-gray/15 bg-white p-8 transition-colors duration-500 hover:bg-brand-navy"
                style={{ width: `calc((100% - ${(visible - 1) * 24}px) / ${visible})` }}
              >
                <div className="flex flex-col gap-6">
                  <ServiceIcon
                    icon={service.icon}
                    size={48}
                    className="text-brand-navy transition-colors duration-500 group-hover:text-brand-gold"
                  />
                  <div>
                    <h3 className="mb-3 text-2xl font-medium text-brand-navy transition-colors duration-500 group-hover:text-brand-gold">
                      {service.title}
                    </h3>
                    <p className="text-md leading-relaxed text-brand-gray transition-colors duration-500 group-hover:text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={service.href}
                  className="mt-8 self-start inline-block bg-brand-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 group-hover:bg-white group-hover:text-brand-navy hover:bg-white hover:text-brand-navy"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/services"
            className="border border-brand-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
          >
            View All Services
          </Link>

          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center bg-brand-navy text-white transition-colors duration-300 disabled:opacity-30 hover:bg-brand-navy/80"
            >
              <Icon icon="lucide:arrow-left" width={20} height={20} />
            </button>
            <button
              onClick={next}
              disabled={current === max}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center bg-brand-gold text-brand-navy transition-colors duration-300 disabled:opacity-30 hover:bg-brand-gold/80"
            >
              <Icon icon="lucide:arrow-right" width={20} height={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
