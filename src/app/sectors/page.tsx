import type { Metadata } from "next";
import SectorsHero from "@/components/sectors/SectorsHero";
import SectorsDetail from "@/components/sectors/SectorsDetail";

export const metadata: Metadata = {
  title: "Workforce Sectors",
  description:
    "Origin Workforce supports international recruiters and staffing firms across key workforce sectors — from construction and manufacturing to hospitality and logistics.",
  alternates: { canonical: "https://originworkforce.africa/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <SectorsDetail />
    </>
  );
}
