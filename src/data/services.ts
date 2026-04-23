export type Service = {
  title: string;
  description: string;
  href: string;
  /** Iconify icon id (e.g. "lucide:send") OR a local path starting with "/" */
  icon: string;
};

export const services: Service[] = [
  {
    title: "Candidate Sourcing",
    description:
      "We identify workforce talent through structured local sourcing channels, referral ecosystems, field outreach, and targeted recruitment campaigns.",
    href: "/services/candidate-sourcing",
    icon: "/assets/images/icons/candidate-sourcing.svg",
  },
  {
    title: "Screening and Shortlisting",
    description:
      "We assess candidates against partner requirements for role fit, readiness, availability, communication, and deployment suitability.",
    href: "/services/screening-shortlisting",
    icon: "/assets/images/icons/screening.svg",
  },
  {
    title: "Documentation Coordination",
    description:
      "We support origin-side process readiness by coordinating required documentation workflows in partnership with approved stakeholders and destination-side operators.",
    href: "/services/documentation-coordination",
    icon: "lucide:file-text",
  },
  {
    title: "Pre-Departure Readiness",
    description:
      "We help prepare selected workers through expectation-setting, practical onboarding, and deployment readiness support.",
    href: "/services/pre-departure-readiness",
    icon: "/assets/images/icons/workforce-support.svg",
  },
  {
    title: "Mobilisation Support",
    description:
      "We coordinate the origin-side journey from selection to handoff so global partners can execute with greater control and visibility.",
    href: "/services/mobilisation-support",
    icon: "lucide:send",
  },
  {
    title: "Worker Communication and Care",
    description:
      "We maintain a worker-centered process designed to improve preparedness, trust, and long-term placement quality.",
    href: "/services/worker-communication-care",
    icon: "lucide:heart-handshake",
  },
];
