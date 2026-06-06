"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isGlass = scrolled || menuOpen;

  return (
    <>
      <div className="h-24" />

      <header
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500
          w-[calc(100%-2rem)] max-w-7xl
          ${isGlass
            ? "backdrop-blur-md bg-brand-navy/70 border border-white/10 shadow-lg shadow-black/30"
            : "bg-white shadow-sm"
          }`}
      >
        <div className="flex h-20 items-center justify-between px-6 relative">
          {/* Background pattern — white state only */}
          {!isGlass && (
            <div
              className="pointer-events-none absolute inset-0 opacity-2 bg-no-repeat bg-center bg-cover z-0"
              style={{ backgroundImage: "url('/assets/images/header-bg.svg')" }}
            />
          )}
          <div className="relative z-10 flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src={isGlass ? "/assets/images/logo-darkmode.svg" : "/assets/images/logo.svg"}
              alt="Origin Workforce"
              width={140}
              height={42}
              priority
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map(({ label, href }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300
                        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform after:duration-300 hover:after:scale-x-100
                        ${isActive ? "text-brand-gold after:scale-x-100" : isGlass ? "text-white/80 hover:text-white" : "text-brand-navy hover:text-brand-gray"}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/partners"
            className="hidden lg:block shrink-0 bg-brand-gold px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-navy"
          >
            Partner With Us
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isGlass ? "bg-white" : "bg-brand-navy"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isGlass ? "bg-white" : "bg-brand-navy"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isGlass ? "bg-white" : "bg-brand-navy"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
          </div>{/* end z-10 wrapper */}
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col border-t border-white/10 px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                        isActive ? "text-brand-gold" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/partners"
              onClick={() => setMenuOpen(false)}
              className="mt-6 block bg-brand-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-brand-navy"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
