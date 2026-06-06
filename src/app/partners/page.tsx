import type { Metadata } from "next";
import PartnersHero from "@/components/partners/PartnersHero";
import WhoWeServePartners from "@/components/partners/WhoWeServePartners";
import WhatYouGain from "@/components/partners/WhatYouGain";
import PartnersCTA from "@/components/partners/PartnersCTA";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Origin Workforce partners with global recruiters, staffing firms, and mobility operators to deliver stronger origin-side execution for workforce hiring from Africa.",
  alternates: { canonical: "https://originworkforce.africa/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <WhoWeServePartners />
      <WhatYouGain />
      <PartnersCTA />
    </>
  );
}
