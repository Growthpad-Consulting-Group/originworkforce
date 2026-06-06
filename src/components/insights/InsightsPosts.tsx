"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { type Post } from "@/data/insights";
import { urlFor, blocksToText, calculateReadTime, type SanityPost } from "@/lib/sanity";

// ─── Helpers ────────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Card ────────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: SanityPost }) {
  const coverImageUrl = post.coverImage ? urlFor(post.coverImage)?.width(600).height(400).url() : null;
  const excerpt = post.excerpt || (post.body ? `${blocksToText(post.body).slice(0, 140)}...` : "");
  const readTime = post.readTime || (post.body ? calculateReadTime(post.body) : "3 min read");
  const category = post.category || "General";

  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      aria-label={`Read article: ${post.title}`}
    >
      <div className="relative h-48 shrink-0 overflow-hidden" style={{ backgroundColor: !coverImageUrl ? (post.coverColor || "#1A253C") : undefined }}>
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        )}
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{category}</span>
        <h3 className="text-xl font-semibold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors duration-200">{post.title}</h3>
        <p className="text-md text-brand-gray leading-relaxed line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-brand-gray/70 mt-auto pt-2 border-t border-brand-gray/10">
          <span>{readTime}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
  );
}

// ─── Empty state ─────────────────────────────────────────────────────────────

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full py-20 flex flex-col items-center gap-4 text-center">
      <p className="text-4xl" aria-hidden="true">🔍</p>
      <h3 className="text-xl font-semibold text-brand-navy">No articles found</h3>
      <p className="text-brand-gray text-sm max-w-sm">
        We couldn&apos;t find anything matching your search or filter. Try adjusting your criteria.
      </p>
      <button
        onClick={onReset}
        className="mt-2 text-sm font-semibold text-brand-gold underline underline-offset-4 hover:text-brand-navy transition-colors"
      >
        Clear filters
      </button>
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Article pagination"
      className="flex items-center justify-center gap-1 mt-12"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-brand-gray border border-brand-gray/30 rounded-sm hover:border-brand-navy hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`w-10 h-10 text-sm font-semibold rounded-sm transition-colors ${
            page === currentPage
              ? "bg-brand-gold text-white"
              : "text-brand-gray border border-brand-gray/30 hover:border-brand-navy hover:text-brand-navy"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium text-brand-gray border border-brand-gray/30 rounded-sm hover:border-brand-navy hover:text-brand-navy disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const ALL_CATEGORIES = "All";
const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "az", label: "A–Z" },
] as const;
type SortValue = (typeof SORT_OPTIONS)[number]["value"];

interface InsightsPostsProps {
  initialPosts: SanityPost[];
}

export default function InsightsPosts({ initialPosts }: InsightsPostsProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [sort, setSort] = useState<SortValue>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Compute categories dynamically from the actual fetched posts
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(initialPosts.map((p) => p.category || "General")));
    return [ALL_CATEGORIES, ...uniqueCats];
  }, [initialPosts]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let result = initialPosts.filter((p) => {
      const postCategory = p.category || "General";
      const matchesCategory = activeCategory === ALL_CATEGORIES || postCategory === activeCategory;
      const matchesSearch =
        q === "" || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    if (sort === "newest") result = result.sort((a, b) => b.date.localeCompare(a.date));
    else if (sort === "oldest") result = result.sort((a, b) => a.date.localeCompare(b.date));
    else if (sort === "az") result = result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [initialPosts, search, activeCategory, sort]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  const paginated = useMemo(
    () => filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE),
    [filtered, currentPage],
  );

  // When filters change, reset to page 1
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };
  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };
  const handleSortChange = (val: SortValue) => {
    setSort(val);
    setCurrentPage(1);
  };
  const handleReset = () => {
    setSearch("");
    setActiveCategory(ALL_CATEGORIES);
    setSort("newest");
    setCurrentPage(1);
  };

  return (
    <section className="bg-brand-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-0">

        {/* ── Controls bar ── */}
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-3">
            {/* Single bar: search | pills | sort */}
            <div className="flex items-center gap-0 bg-white border border-brand-gray/15 overflow-hidden">
              {/* Search — first, widest */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-brand-gray/40" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                </span>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search articles…"
                  className="w-full bg-transparent border-0 pl-8 pr-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-gray/40 focus:outline-none"
                  aria-label="Search articles"
                />
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-brand-gray/15 shrink-0" />

              {/* Category pills */}
              <div role="group" aria-label="Filter by category" className="flex items-center gap-1 px-3 py-2 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-brand-navy text-white"
                        : "text-brand-gray hover:text-brand-navy"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-brand-gray/15 shrink-0" />

              {/* Sort — last */}
              <div className="flex items-center gap-2 px-4 py-2.5 shrink-0">
                <span className="text-xs text-brand-gray whitespace-nowrap">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value as SortValue)}
                  className="text-sm font-semibold text-brand-navy bg-transparent focus:outline-none cursor-pointer"
                  aria-label="Sort articles"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-brand-gray/70" aria-live="polite" aria-atomic="true">
              Showing{" "}
              <span className="font-semibold text-brand-navy">
                {filtered.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, filtered.length)}
              </span>{" "}
              of <span className="font-semibold text-brand-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Grid — uniform 3 cols ── */}
        {paginated.length === 0 ? (
          <EmptyState onReset={handleReset} />
        ) : (
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <StaggerItem key={post.slug}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* ── Pagination ── */}
        {filtered.length > POSTS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

      </div>
    </section>
  );
}
