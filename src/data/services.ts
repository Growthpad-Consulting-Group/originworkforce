export type Service = {
  title: string;
  description: string;
  detail: string;
  href: string;
  icon: string;
  image?: string; // optional image for the services page
};

export const services: Service[] = [
  {
    title: "Candidate Sourcing",
    description:
      "We identify workforce talent through structured local sourcing channels, referral ecosystems, field outreach, and targeted recruitment campaigns.",
    detail:
      "We source workforce talent through local outreach, targeted sourcing campaigns, community referrals, referral ecosystems, and practical assessment channels aligned to partner requirements.\n\n*We build pipelines with a focus on visibility, relevance, and scale.*",
    href: "/services/candidate-sourcing",
    icon: "/assets/images/icons/candidate-sourcing.svg",
    image: "/assets/images/candidate-sourcing.jpg",
  },
  {
    title: "Screening and Shortlisting",
    description:
      "We assess candidates against partner requirements for role fit, readiness, availability, communication, and deployment suitability.",
    detail:
      "We evaluate candidates against a firm criteria including work readiness, basic communications, availability, suitability for deployment, and role-specific requirements.\n\n*Our goal is to improve candidate quality before destination-side processing begins.*",
    href: "/services/screening-shortlisting",
    icon: "/assets/images/icons/screening.svg",
    image: "/assets/images/screening-shortlisting.jpg",
  },
  {
    title: "Workforce Readiness Support",
    description:
      "Successful deployment depends on more than candidate selection. We help prepare workers through practical orientation, expectation-setting, employer context, and travel readiness support.",
    detail:
      "Successful deployment depends on more than candidate selection. We help prepare workers through pre-arrival orientation, expectation-setting, employer context, and travel readiness support so that selected candidates are better positioned for successful placement.",
    href: "/services/workforce-readiness",
    icon: "/assets/images/icons/workforce-support.svg",
    image: "/assets/images/workforce-readiness.jpg",
  },
  {
    title: "Documentation and Process Coordination",
    description:
      "We support origin-side process readiness by coordinating required documentation workflows in partnership with approved stakeholders.",
    detail:
      "Successful deployment depends on more than candidate selection. We help prepare workers through pre-arrival orientation, expectation-setting, employer context, and travel readiness support so that selected candidates are better positioned for successful placement.",
    href: "/services/documentation-coordination",
    icon: "lucide:file-text",
    image: "/assets/images/documentation.jpg",
  },
  {
    title: "Mobilisation Coordination",
    description:
      "We help manage the transition from candidate selection to origin-side handoff through structured coordination, communication, and execution tracking.",
    detail:
      "We help manage the transition from candidate selection to origin-side handoff through structured coordination, communication, and execution tracking.\n\n*This enables partners to move from hiring demand to workforce deployment with more discipline.*",
    href: "/services/mobilisation-coordination",
    icon: "lucide:send",
    image: "/assets/images/mobilisation-coordination.jpg",
  },
  {
    title: "Partner Reporting and Visibility",
    description:
      "Global partners need operational transparency. We provide structured and workflow-centric updates on deployment progress, candidate pipeline, and operational relations.",
    detail:
      "Global partners need operational transparency. We provide structured and workflow-centric reports designed to improve pipeline progress, readiness status, and operational relations.",
    href: "/services/partner-reporting",
    icon: "lucide:bar-chart-2",
    image: "/assets/images/partner-reporting-visibility.jpg",
  },
  {
    title: "Worker Communication and Care Support",
    description:
      "We maintain a worker-centered process designed to improve clarity, preparedness, and trust throughout the origin-side journey.",
    detail:
      "Better workforce mobility outcomes require better worker communication and care. We provide a worker-centered process designed to improve clarity, preparedness, and trust throughout the origin-side journey.",
    href: "/services/worker-communication-care",
    icon: "lucide:heart-handshake",
    image: "/assets/images/worker-communication.jpg",
  },
];
