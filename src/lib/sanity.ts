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

// Extends the original Post type to support Sanity's coverImage and rich text body
export interface SanityPost extends Post {
  coverImage?: any;
  body?: any;
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
        category,
        readTime,
        date,
        coverImage,
        body
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
        category,
        readTime,
        date,
        coverImage,
        body
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
