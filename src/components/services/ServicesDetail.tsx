"use client";

import Image from "next/image";
import { services } from "@/data/services";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function renderDetail(text: string) {
  return text.split("\n\n").map((para, j) => {
    // ***text*** = font-bold black, **text** = font-semibold black, *text* = normal weight black
    const parts = para.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g);
    return (
      <p key={j}>
        {parts.map((part, k) => {
          if (part.startsWith("***") && part.endsWith("***")) {
            return <strong key={k} className="font-bold text-black">{part.slice(3, -3)}</strong>;
          }
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={k} className="font-semibold text-black">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith("*") && part.endsWith("*")) {
            return <span key={k} className="font-normal text-black">{part.slice(1, -1)}</span>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function ServicesDetail() {
  return (
    <section className="bg-brand-light">

      {/* Intro header */}
      <div className="mx-auto max-w-7xl px-6 md:px-2 pt-16 lg:pt-24 pb-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
                What We Do
              </p>
              <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
                A full origin-side{" "}
                <span className="block font-serif italic text-brand-gold">service model</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
              Every service is designed to reduce friction at the source and give international partners a more dependable way to recruit and mobilise workforce talent from Africa.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Alternating service rows */}
      <div>
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={service.title}>
              <ScrollReveal direction={isEven ? "left" : "right"}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[480px]`}>

                  {/* Image col */}
                  <div className={`relative min-h-[280px] lg:min-h-0 bg-brand-navy/5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                      />
                    ) : (
                      /* Plain empty placeholder */
                      <div className="absolute inset-0 bg-brand-navy/5" />
                    )}
                  </div>

                  {/* Content col */}
                  <div className={`flex flex-col justify-center gap-5 py-20 px-8 lg:px-20 lg:py-24 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <h3 className="text-2xl font-semibold text-brand-navy lg:text-3xl">
                      {service.title}
                    </h3>
                    <div className="flex flex-col gap-3 text-base leading-relaxed text-brand-gray max-w-lg">
                      {renderDetail(service.detail)}
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
