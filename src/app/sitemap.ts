import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://originworkforce.africa";
  const posts = await getPosts();

  // Define the core static pages of the application
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/partners",
    "/contact",
    "/sectors",
    "/compliance",
    "/insights",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamically map all insights / blog pages
  const insightUrls = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...insightUrls];
}
