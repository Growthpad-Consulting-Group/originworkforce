"use client";

import Image from "next/image";
import Link from "next/link";
import { talentProfiles } from "@/data/talent";

// Design canvas: 1770 × 1180
const W = 1770;
const H = 1180;
const pw = (px: number) => `${(px / W) * 100}%`;
const ph = (px: number) => `${(px / H) * 100}%`;

const images = [
  { profile: talentProfiles[0], left: pw(486),  top: ph(0)   },
  { profile: talentProfiles[1], left: pw(971),  top: ph(0)   },
  { profile: talentProfiles[2], left: pw(1456), top: ph(0)   },
  { profile: talentProfiles[3], left: pw(1213), top: ph(295) },
  { profile: talentProfiles[4], left: pw(971),  top: ph(596) },
  { profile: talentProfiles[5], left: pw(1456), top: ph(590) },
  { profile: talentProfiles[6], left: pw(1213), top: ph(885) },
  { profile: talentProfiles[7], left: pw(729),  top: ph(885) },
];

const imgW = pw(243);
const imgH = ph(295);

function MosaicImage({ profile, left, top }: { profile: typeof talentProfiles[0]; left: string; top: string }) {
  return (
    <div
      className="group absolute overflow-hidden hidden lg:block"
      style={{ left, top, width: imgW, height: imgH }}
    >
      <Image src={profile.image} alt={profile.name} fill sizes="14vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-brand-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-md font-bold text-white leading-tight">{profile.name}</p>
        <p className="text-sm text-brand-gold mt-0.5">{profile.category} · {profile.location}</p>
      </div>
    </div>
  );
}

export default function TalentNetwork() {
  return (
    <section className="bg-brand-navy">

      {/* ── Desktop: absolute mosaic ── */}
      <div className="relative w-full hidden lg:block" style={{ paddingBottom: `${(H / W) * 100}%` }}>
        {images.map(({ profile, left, top }) => (
          <MosaicImage key={profile.name} profile={profile} left={left} top={top} />
        ))}
        <div className="absolute flex flex-col gap-4" style={{ left: pw(72), top: ph(499), width: pw(798) }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Sectors We Support
          </p>
          <h2 className="text-4xl font-medium text-white lg:text-5xl">
            Workforce categories{" "}
            <span className="block font-serif italic text-brand-gold">built for demand</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/70">
            We are building a structured talent network across Africa sourced,
            screened, and prepared for international workforce opportunities.
          </p>
          <Link
            href="/contact"
            className="self-start bg-brand-gold border border-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest text-brand-navy transition-colors duration-300 hover:bg-transparent hover:text-white mt-2"
          >
            Join the Talent Network
          </Link>
        </div>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <div className="lg:hidden">
        {/* Top image strip — 2 col grid */}
        <div className="grid grid-cols-2 gap-2 h-[320px]">
          {talentProfiles.slice(0, 4).map((profile) => (
            <div key={profile.name} className="group relative overflow-hidden">
              <Image src={profile.image} alt={profile.name} fill sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold text-white leading-tight">{profile.name}</p>
                <p className="text-xs text-brand-gold mt-0.5">{profile.category} · {profile.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6 px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Sectors We Support
          </p>
          <h2 className="text-4xl font-medium text-white">
            Workforce categories{" "}
            <span className="block font-serif italic text-brand-gold">built for demand</span>
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            We are building a structured talent network across Africa sourced,
            screened, and prepared for international workforce opportunities.
          </p>
          
        </div>

        {/* Bottom image strip */}
        <div className="grid grid-cols-2 gap-2 h-[320px]">
          {talentProfiles.slice(4).map((profile) => (
            <div key={profile.name} className="group relative overflow-hidden">
              <Image src={profile.image} alt={profile.name} fill sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold text-white leading-tight">{profile.name}</p>
                <p className="text-xs text-brand-gold mt-0.5">{profile.category} · {profile.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
