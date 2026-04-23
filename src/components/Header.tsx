import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Header() {
  return (
    <header className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-7xl bg-white shadow-sm">
      <div className="flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/images/logo.svg"
            alt="Origin Workforce"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs font-semibold uppercase tracking-widest text-brand-gray transition-colors hover:text-brand-navy"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="/partner"
          className="shrink-0 bg-brand-gold px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-navy"
        >
          Partner With Us
        </Link>
      </div>
    </header>
  );
}
