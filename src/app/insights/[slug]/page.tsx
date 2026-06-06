import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/insights";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://originworkforce.africa/insights/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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

// ─── Related card (reuses same visual style as InsightsPosts) ─────────────────

function RelatedCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col bg-white overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
      aria-label={`Read article: ${post.title}`}
    >
      <div
        className="h-36 shrink-0"
        style={{ backgroundColor: post.coverColor }}
        aria-hidden="true"
      />
      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-md text-brand-gray leading-relaxed line-clamp-2 mt-auto">
          {post.excerpt}
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
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // If fewer than 3 from same category, pad with recents from other categories
  const padded =
    related.length < 3
      ? [
          ...related,
          ...posts
            .filter((p) => p.slug !== post.slug && p.category !== post.category)
            .slice(0, 3 - related.length),
        ]
      : related;

  return (
    <main className="bg-brand-light min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative -mt-24 overflow-hidden min-h-[480px] flex items-end"
        style={{ backgroundColor: post.coverColor }}
      >
        {/* Dark gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/75" />

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-0 pb-12 pt-40">
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
              {post.category}
            </span>
            <span className="text-xs text-white/60">
              Published on <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-white/60">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-white leading-tight lg:text-5xl max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── Article body ── */}
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Article body placeholder */}
        <ScrollReveal>
          <article>
            <p className="text-brand-gray leading-relaxed text-lg mb-6">{post.excerpt}</p>
            <div className="rounded-sm border border-brand-gold/30 bg-brand-gold/5 px-6 py-5">
              <p className="text-sm font-medium text-brand-navy italic font-serif">
                Article content will be loaded from Sanity CMS.
              </p>
            </div>
          </article>
        </ScrollReveal>

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
