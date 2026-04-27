import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import WhyOriginExists from "@/components/WhyOriginExists";
import MoreThanRecruitment from "@/components/MoreThanRecruitment";
import MissionVision from "@/components/MissionVision";
import OurValues from "@/components/OurValues";
import GeographicFocus from "@/components/GeographicFocus";
import AboutCTA from "@/components/AboutCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Origin Workforce is a workforce mobility company focused on the origin side of global hiring — built to manage the source side with discipline, structure, and care.",
  alternates: { canonical: "https://originworkforce.africa/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ScrollReveal><WhyOriginExists /></ScrollReveal>
      <ScrollReveal><MoreThanRecruitment /></ScrollReveal>
      <ScrollReveal><MissionVision /></ScrollReveal>
      <ScrollReveal><OurValues /></ScrollReveal>
      <ScrollReveal><GeographicFocus /></ScrollReveal>
      <ScrollReveal><AboutCTA /></ScrollReveal>
    </>
  );
}
