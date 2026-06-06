import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import HowItWorks from "@/components/services/HowItWorks";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Origin-side services for global workforce mobility — sourcing, screening, readiness, and mobilisation coordination designed to reduce friction at the source.",
  alternates: { canonical: "https://originworkforce.africa/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <HowItWorks />
      <ServicesCTA />
    </>
  );
}
