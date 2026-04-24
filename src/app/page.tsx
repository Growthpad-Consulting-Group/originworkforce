import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeServe from "@/components/WhoWeServe";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImpactStories from "@/components/ImpactStories";
import WorkforceCategories from "@/components/WorkforceCategories";
import TalentNetwork from "@/components/TalentNetwork";
import BuiltFromNairobi from "@/components/BuiltFromNairobi";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Trusted Origin Execution for Global Workforce Mobility",
  description:
    "Origin Workforce connects international employers and recruiters with work-ready talent from Africa. Structured sourcing, screening, compliance and deployment from Nairobi.",
  alternates: {
    canonical: "https://originworkforce.africa",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Origin Workforce",
  url: "https://originworkforce.africa",
  logo: "https://originworkforce.africa/assets/images/logo.svg",
  description:
    "Trusted origin-side execution for international workforce mobility from Africa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Westwood Office, 6th Floor 6A, Comply Guide Advisory, Westlands",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254701850850",
    email: "hello@originworkforce.africa",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Partners />
      <WhoWeAre />
      <WhatWeDo />
      <WhoWeServe />
      <WhyChooseUs />
      <ImpactStories />
      <WorkforceCategories />
      <TalentNetwork />
      <BuiltFromNairobi />
      <ContactCTA />
    </>
  );
}
