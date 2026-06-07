import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPosts, getPostBySlug, urlFor, blocksToText, calculateReadTime, type SanityPost } from "@/lib/sanity";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import ArticleSidebar from "@/components/insights/ArticleSidebar";

// ─── PortableText Rendering Components ────────────────────────────────────────

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imgUrl = urlFor(value)?.width(800).url();
      if (!imgUrl) return null;
      return (
        <div className="my-8 relative rounded-sm overflow-hidden max-w-3xl mx-auto shadow-xs border border-brand-gray/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgUrl} alt="Article image" className="w-full h-auto object-cover" />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: any) => <p className="mb-6 text-brand-gray text-base lg:text-lg leading-relaxed">{children}</p>,
    h2: ({ children, value }: any) => {
      const text = value.children ? value.children.map((c: any) => c.text).join("") : "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return <h2 id={id} className="text-2xl lg:text-3xl font-semibold text-brand-navy mt-12 mb-4 leading-tight scroll-mt-24">{children}</h2>;
    },
    h3: ({ children, value }: any) => {
      const text = value.children ? value.children.map((c: any) => c.text).join("") : "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return <h3 id={id} className="text-xl lg:text-2xl font-semibold text-brand-navy mt-8 mb-3 leading-tight scroll-mt-24">{children}</h3>;
    },
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-gold bg-brand-gold/5 pl-6 py-4 pr-4 my-8 italic text-brand-navy rounded-sm font-serif text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-brand-gray flex flex-col gap-2 text-base lg:text-lg">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-brand-gray flex flex-col gap-2 text-base lg:text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : undefined}
          className="text-brand-gold hover:text-brand-navy font-semibold underline underline-offset-4 transition-colors"
        >
          {children}
        </a>
      );
    },
    bold: ({ children }: any) => <strong className="font-semibold text-brand-navy">{children}</strong>,
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const metaTitle = post.seoTitle || post.title;
  const metaDescription =
    post.seoDescription ||
    post.excerpt ||
    (post.body ? `${blocksToText(post.body).slice(0, 155)}...` : "");

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `https://originworkforce.africa/insights/${post.slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://originworkforce.africa/insights/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Related card ─────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: SanityPost }) {
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage)?.width(600).height(400).url() : null;
  const excerpt = post.excerpt || (post.body ? `${blocksToText(post.body).slice(0, 120)}...` : "");

  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col bg-white overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
      aria-label={`Read article: ${post.title}`}
    >
      <div
        className="h-36 shrink-0 relative overflow-hidden"
        style={{ backgroundColor: !coverImageUrl ? (post.coverColor || "#1A253C") : undefined }}
        aria-hidden="true"
      >
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
          {post.category || "General"}
        </span>
        <h3 className="text-xl font-semibold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-md text-brand-gray leading-relaxed line-clamp-2 mt-auto">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const headings = post.body
    ? post.body
        .filter((block: any) => block._type === "block" && (block.style === "h2" || block.style === "h3"))
        .map((block: any) => {
          const text = block.children ? block.children.map((c: any) => c.text).join("") : "";
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return { text, id, style: block.style };
        })
    : [];

  const allPosts = await getPosts();

  const postCategory = post.category || "General";
  const related = allPosts
    .filter((p) => p.slug !== post.slug && (p.category || "General") === postCategory)
    .slice(0, 3);

  // If fewer than 3 from same category, pad with recents from other categories
  const padded =
    related.length < 3
      ? [
          ...related,
          ...allPosts
            .filter((p) => p.slug !== post.slug && (p.category || "General") !== postCategory)
            .slice(0, 3 - related.length),
        ]
      : related;

  const heroImageUrl = post.coverImage ? urlFor(post.coverImage)?.width(1600).height(600).url() : null;
  const excerpt = post.excerpt || (post.body ? `${blocksToText(post.body).slice(0, 160)}...` : "");
  const readTime = post.readTime || (post.body ? calculateReadTime(post.body) : "3 min read");

  return (
    <main className="bg-brand-light min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative -mt-24 overflow-hidden min-h-[480px] flex items-end bg-brand-navy"
        style={{ backgroundColor: !heroImageUrl ? (post.coverColor || "#1A253C") : undefined }}
      >
        {heroImageUrl && (
          <Image
            src={heroImageUrl}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        )}
        
        {/* Dark gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/75 z-10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-0 pb-12 pt-40 z-20">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors mb-6 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200" aria-hidden="true">←</span>
            Back to Insights
          </Link>

          {/* Meta row */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-navy">
              {post.category || "General"}
            </span>
            <span className="text-xs text-white/60">
              Published on <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-white/60">{readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-white leading-tight lg:text-5xl max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Article body ── */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              {post.body ? (
                <article className="prose max-w-none text-brand-navy">
                  <PortableText value={post.body} components={portableTextComponents} />
                </article>
              ) : (
                <article>
                  <p className="text-brand-gray leading-relaxed text-lg mb-6">{excerpt}</p>
                  <div className="rounded-sm border border-brand-gold/30 bg-brand-gold/5 px-6 py-5">
                    <p className="text-sm font-medium text-brand-navy italic font-serif">
                      Article content will be loaded from Sanity CMS once available.
                    </p>
                  </div>
                </article>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <ArticleSidebar headings={headings} />
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts */}
      {padded.length > 0 && (
        <section
          className="bg-white border-t border-brand-gray/10 py-16"
          aria-labelledby="related-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <ScrollReveal>
              <h2
                id="related-heading"
                className="text-2xl font-semibold text-brand-navy mb-8"
              >
                Related articles
              </h2>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {padded.map((p) => (
                <StaggerItem key={p.slug}>
                  <RelatedCard post={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </main>
  );
}
