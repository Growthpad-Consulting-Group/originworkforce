import Image from "next/image";
import { partners } from "@/data/partners";

export default function Partners() {
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <p className="mb-10 text-center text-md font-semibold uppercase tracking-widest text-brand-gold">
          Trusted Partners &amp; Affiliate
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map(({ name, logo, url }) => {
            const inner = logo ? (
              <Image
                src={logo}
                alt={name}
                width={160}
                height={0}
                className="max-h-22 w-auto object-contain"
              />
            ) : (
              /* Placeholder until real logos are provided */
              <span className="text-center text-sm font-medium text-brand-gray">
                {name}
              </span>
            );

            return (
              <div
                key={name}
                className="flex min-h-[120px] items-center justify-center bg-white px-6 py-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              >
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
