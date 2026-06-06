"use client";

import Image from "next/image";
import { sectors } from "@/data/sectors";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function renderDetail(text: string) {
  return text.split("\n\n").map((para, j) => <p key={j}>{para}</p>);
}

export default function SectorsDetail() {
  return (
    <section id="sectors" className="bg-brand-light">

      {/* Intro header */}
      <div className="mx-auto max-w-7xl px-6 md:px-2 pt-16 lg:pt-24 pb-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
                What We Cover
              </p>
              <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
                Every sector we{" "}
                <span className="font-serif italic text-brand-gold">support</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
              Each sector is backed by a structured sourcing and readiness model
              built for employers who need dependable labour supply from Africa.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Alternating sector rows */}
      <div>
        {sectors.map((sector, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={sector.title}>
              <ScrollReveal direction={isEven ? "left" : "right"}>
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

                  {/* Image col */}
                  <div className={`relative min-h-[280px] lg:min-h-0 bg-brand-navy/5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Content col */}
                  <div className={`flex flex-col justify-center gap-5 py-20 px-8 lg:px-20 lg:py-24 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                      {sector.eyebrow}
                    </p>
                    <h3 className="text-2xl font-semibold text-brand-navy lg:text-3xl">
                      {sector.title}
                    </h3>
                    <div className="flex flex-col gap-3 text-base leading-relaxed text-brand-gray max-w-lg">
                      {renderDetail(sector.description)}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>

    </section>
  );
}
