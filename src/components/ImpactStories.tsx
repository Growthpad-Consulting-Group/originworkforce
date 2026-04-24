"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { stories } from "@/data/stories";

export default function ImpactStories() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, stories.length - 1));

  const story = stories[current];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header row */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Impact Stories
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              Real people{" "}
              <span className="block font-serif italic text-brand-gold">
                built for demand
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
            Behind every placement is a life changed. These are the stories
            that drive everything we do.
          </p>
        </div>

        {/* Quote */}
        <div className="relative min-h-[280px] max-w-5xl mx-auto">
          {/* Opening quote mark */}
          <Icon icon="mingcute:quote-left-fill" width={40} height={40} className="mb-4 text-brand-navy" />

          <blockquote className="font-serif font-normal md:font-semibold text-2xl italic text-brand-navy lg:text-4xl">
            {story.quote}{" "}
            <Icon icon="mingcute:quote-left-fill" width={40} height={40} className="inline align-middle text-brand-navy rotate-180" />
          </blockquote>

          {/* Attribution */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-gray/20">
              {story.avatar ? (
                <Image
                  src={story.avatar}
                  alt={story.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Icon icon="lucide:user" width={24} height={24} className="text-brand-gray" />
              )}
            </div>
            <div>
              <p className="text-md font-bold text-brand-navy">{story.name}</p>
              <p className="text-sm font-semibold text-brand-gray">{story.role}</p>
            </div>
          </div>
        </div>

        {/* Footer — dots + arrows */}
        <div className="mt-12 max-w-5xl mx-auto flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to story ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-navy"
                    : "w-4 bg-brand-gray/30"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous story"
              className="flex h-12 w-12 items-center justify-center bg-brand-navy text-white transition-colors duration-300 hover:bg-brand-navy/80"
            >
              <Icon icon="lucide:arrow-left" width={20} height={20} />
            </button>
            <button
              onClick={next}
              disabled={current === stories.length - 1}
              aria-label="Next story"
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
