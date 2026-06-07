"use client";

import { useEffect, useState, useRef } from "react";

interface Heading {
  text: string;
  id: string;
  style: string;
}

interface ArticleSidebarProps {
  headings: Heading[];
}

export default function ArticleSidebar({ headings }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const headingsRef = useRef<Heading[]>(headings);

  // Keep ref updated
  useEffect(() => {
    headingsRef.current = headings;
  }, [headings]);

  useEffect(() => {
    const currentHeadings = headingsRef.current;
    if (currentHeadings.length === 0) return;

    // Scroll spy logic
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset to match header and viewport margin

      // Find the heading that is closest above the scroll position
      let currentActive = "";
      for (const heading of currentHeadings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentActive = heading.id;
          } else {
            break;
          }
        }
      }

      // If we haven't scrolled past any heading, activate the first one
      if (!currentActive && currentHeadings.length > 0) {
        currentActive = currentHeadings[0].id;
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getLinkedInShareUrl = () => {
    if (typeof window !== "undefined") {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    }
    return "#";
  };

  const getTwitterShareUrl = () => {
    if (typeof window !== "undefined") {
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`;
    }
    return "#";
  };

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* ── Table of Contents ── */}
      {headings.length > 0 && (
        <div className="bg-white border border-brand-gray/10 p-6 rounded-sm shadow-xs">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-navy mb-4 border-b border-brand-gray/10 pb-2">
            Table of Contents
          </h2>
          <nav aria-label="Table of contents" className="flex flex-col gap-1">
            {headings.map((heading) => {
              const isSubHeading = heading.style === "h3";
              const isActive = activeId === heading.id;

              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => scrollToHeading(e, heading.id)}
                  className={`text-sm py-1.5 transition-all duration-200 border-l-2 pl-3 ${
                    isSubHeading ? "ml-3 text-xs" : ""
                  } ${
                    isActive
                      ? "border-brand-gold font-semibold text-brand-gold bg-brand-gold/5"
                      : "border-transparent text-brand-gray hover:text-brand-navy hover:border-brand-gray/30"
                  }`}
                >
                  {heading.text}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* ── Share Widget ── */}
      <div className="bg-white border border-brand-gray/10 p-6 rounded-sm shadow-xs">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-navy mb-4 border-b border-brand-gray/10 pb-2">
          Share this article
        </h2>
        <div className="flex flex-col gap-3">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold border border-brand-gray/15 hover:border-brand-navy hover:text-brand-navy rounded-sm text-brand-gray transition-colors text-left"
            aria-label="Copy article link to clipboard"
          >
            <span>{copied ? "Link Copied!" : "Copy Link"}</span>
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            )}
          </button>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* LinkedIn */}
            <a
              href={getLinkedInShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold border border-brand-gray/15 hover:border-brand-navy hover:text-brand-navy rounded-sm text-brand-gray transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* X / Twitter */}
            <a
              href={getTwitterShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold border border-brand-gray/15 hover:border-brand-navy hover:text-brand-navy rounded-sm text-brand-gray transition-colors"
              aria-label="Share on X (Twitter)"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Share</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
