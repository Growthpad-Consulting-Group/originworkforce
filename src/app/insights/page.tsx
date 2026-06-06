import type { Metadata } from "next";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsPosts from "@/components/insights/InsightsPosts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from Origin Workforce on global labour demand, workforce mobility trends, source-market execution, and responsible cross-border hiring from Africa.",
  alternates: { canonical: "https://originworkforce.africa/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsPosts />
    </>
  );
}
