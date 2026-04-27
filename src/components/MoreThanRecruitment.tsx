import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const differentiators = [
  {
    number: "01",
    title: "We help build quality workforce pipeline",
    description: "Structured sourcing, screening, and candidate development — not just referrals.",
  },
  {
    number: "02",
    title: "We manage source-market coordination",
    description: "End-to-end origin-side process management: documentation, readiness, handoff.",
  },
  {
    number: "03",
    title: "We improve worker readiness",
    description: "Practical orientation and expectation-setting so candidates arrive prepared, not surprised.",
  },
  {
    number: "04",
    title: "We support more dependable mobilisation",
    description: "From selection to handoff — structured, tracked, and communicated at every stage.",
  },
];

export default function MoreThanRecruitment() {
  return (
    <section className="bg-brand-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

        {/* Left — bleeds to the left edge, copy sits inside with padding */}
        <div className="flex flex-col gap-10 py-16 lg:py-24 pl-6 pr-6 lg:pl-[max(2rem,calc((100vw-80rem)/2))] lg:pr-12">
          <ScrollReveal>
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
              What Makes Us Different
            </p>
            <h2 className="text-4xl font-medium text-white lg:text-5xl">
              More than recruitment.{" "}
              <span className="block font-serif italic text-brand-gold">
                Built for execution.
              </span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/60">
              We are not positioned as a generic employment agency. Our role is
              broader and more operational — giving our partners a stronger
              foundation for scale and a more credible workforce mobility model.
            </p>
          </div>
          </ScrollReveal>

          {/* Image bleeds to the left */}
          <div className="relative h-[320px] lg:h-[380px] -ml-6 lg:-ml-[max(2rem,calc((100vw-80rem)/2))] overflow-hidden">
            <Image
              src="/assets/images/recruitment.png"
              alt="Origin Workforce execution model"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right — numbered list, padded normally */}
        <StaggerContainer className="flex flex-col divide-y divide-white/10 py-16 lg:py-24 px-6 lg:px-16 xl:pr-[max(4rem,calc((100vw-80rem)/2))]">
          {differentiators.map(({ number, title, description }) => (
            <StaggerItem key={number} className="flex gap-6 py-8 first:pt-0 last:pb-0">
              <span className="shrink-0 font-serif text-3xl italic text-brand-gold w-10">
                {number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-md leading-relaxed text-white/60">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
