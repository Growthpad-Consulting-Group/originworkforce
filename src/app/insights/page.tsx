import type { Metadata } from "next";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsPosts from "@/components/insights/InsightsPosts";
import { getPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives from Origin Workforce on global labour demand, workforce mobility trends, source-market execution, and responsible cross-border hiring from Africa.",
  alternates: { canonical: "https://originworkforce.africa/insights" },
};

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <InsightsHero />
      <InsightsPosts initialPosts={posts} />
    </>
  );
}
