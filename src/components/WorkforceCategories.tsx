import { sectors } from "@/data/sectors";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function WorkforceCategories() {
  return (
    <section className="bg-brand-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-2">

        {/* Header */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
              Sectors We Support
            </p>
            <h2 className="text-4xl font-medium text-brand-navy lg:text-5xl">
              Workforce categories{" "}
              <span className="block font-serif italic text-brand-gold">
                built for demand
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-brand-gray lg:justify-self-end">
            We focus on sectors where employers need dependable labour supply,
            stronger worker readiness, and disciplined origin-side execution
            from Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="border-t border-l border-brand-gray/20 bg-white">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3">
            {sectors.map(({ number, title, tags }) => (
              <StaggerItem
                key={number}
                className="group border-b border-r border-brand-gray/20 p-8 flex flex-col gap-3 font-semibold transition-colors duration-300 hover:bg-brand-navy cursor-default"
              >
                <span className="font-serif text-2xl italic text-brand-gold transition-colors duration-300 group-hover:text-brand-gold">
                  {number}
                </span>
                <p className="text-lg font-semibold text-brand-navy transition-colors duration-300 group-hover:text-white">{title}</p>
                <p className="text-sm text-brand-gray transition-colors duration-300 group-hover:text-white/50">{tags}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
