import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { posts as fallbackPosts, type Post } from "@/data/insights";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-06-06";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

// Extends the original Post type to support Sanity's coverImage, rich text body, tags, and SEO fields
export interface SanityPost extends Omit<Post, "readTime"> {
  readTime?: string; // made optional since we compute it dynamically on the frontend
  coverImage?: any;
  body?: any;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// Helper to extract plain text from Sanity's PortableText block content
export function blocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: any) => child.text).join("");
    })
    .filter(Boolean)
    .join("\n\n");
}

// Helper to calculate reading time dynamically based on body content (average 200 wpm)
export function calculateReadTime(blocks: any[]): string {
  const text = blocksToText(blocks);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount === 0) return "3 min read"; // reasonable default
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

export function urlFor(source: any) {
  if (!builder || !source) return null;
  return builder.image(source);
}

export async function getPosts(): Promise<SanityPost[]> {
  if (!client) {
    console.info("Sanity client not configured. Falling back to local static posts.");
    return fallbackPosts;
  }

  try {
    const sanityPosts = await client.fetch<SanityPost[]>(
      `*[_type == "post"] | order(date desc) {
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        date,
        coverImage,
        body,
        tags,
        seoTitle,
        seoDescription
      }`
    );
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts;
    }
    return fallbackPosts;
  } catch (error) {
    console.error("Failed to fetch posts from Sanity. Falling back to local static posts:", error);
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!client) {
    const localPost = fallbackPosts.find((p) => p.slug === slug);
    return localPost || null;
  }

  try {
    const sanityPost = await client.fetch<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        date,
        coverImage,
        body,
        tags,
        seoTitle,
        seoDescription
      }`,
      { slug }
    );
    if (sanityPost) {
      return sanityPost;
    }
    // Check fallback if not found in Sanity (e.g. for testing/compatibility)
    const localPost = fallbackPosts.find((p) => p.slug === slug);
    return localPost || null;
  } catch (error) {
    console.error(`Failed to fetch post by slug '${slug}' from Sanity. Falling back to local static posts:`, error);
    const localPost = fallbackPosts.find((p) => p.slug === slug);
    return localPost || null;
  }
}
