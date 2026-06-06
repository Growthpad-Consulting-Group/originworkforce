import type { Metadata } from "next";
import ComplianceHero from "@/components/compliance/ComplianceHero";
import OurBelief from "@/components/compliance/OurBelief";
import GeographicFocus from "@/components/GeographicFocus";
import CompliancePillars from "@/components/compliance/CompliancePillars";
import ApprovedStructures from "@/components/compliance/ApprovedStructures";
import GoldBanner from "@/components/compliance/GoldBanner";
import ComplianceCTA from "@/components/compliance/ComplianceCTA";

export const metadata: Metadata = {
  title: "Compliance & Worker Care",
  description:
    "Origin Workforce is committed to responsible workforce mobility — built on trust, process integrity, and worker preparedness.",
  alternates: { canonical: "https://originworkforce.africa/compliance" },
};

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <OurBelief />
      <GeographicFocus
        eyebrow="Our Approach"
        heading={
          <>
            Built on{" "}
            <span className="font-serif italic text-brand-gold">
              responsible execution
            </span>
          </>
        }
        body="We are committed to operating a model that supports transparent communication, disciplined process, and respect for workers throughout the origin-side journey. Our goal is to help partners build workforce pathways that are credible, scalable, and sustainable over time."
        items={[]}
        cta={{ label: "See What It Means", href: "#compliance-pillars" }}
        image="/assets/images/geographic-focus.png"
        imageAlt="Built on responsible execution"
      />
      <CompliancePillars />
      <ApprovedStructures />
      <GoldBanner />
      <ComplianceCTA />
    </>
  );
}
