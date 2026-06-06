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
  title: {
    absolute: "Origin Workforce | Global Workforce Mobility from Africa",
  },
  description:
    "Origin Workforce helps global recruiters, staffing firms, and labour mobility operators source, screen, prepare, and mobilise workforce talent from Africa.",
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

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal delay={0.1}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Partners />
      </ScrollReveal>
      <ScrollReveal>
        <WhoWeAre />
      </ScrollReveal>
      <ScrollReveal>
        <WhatWeDo />
      </ScrollReveal>
      <ScrollReveal>
        <WhoWeServe />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal>
        <ImpactStories />
      </ScrollReveal>
      <ScrollReveal>
        <WorkforceCategories />
      </ScrollReveal>
      <ScrollReveal>
        <TalentNetwork />
      </ScrollReveal>
      <ScrollReveal>
        <BuiltFromNairobi />
      </ScrollReveal>
      <ScrollReveal>
        <ContactCTA />
      </ScrollReveal>
    </>
  );
}
