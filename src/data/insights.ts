export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  coverColor: string; // placeholder bg color until Sanity image
};

export const posts: Post[] = [
  {
    slug: "origin-side-execution",
    category: "Workforce Mobility",
    title: "Why origin-side execution is the hidden driver of successful workforce mobility",
    excerpt:
      "Most global staffing failures happen before a worker ever boards a plane. We explore how disciplined origin-side processes change outcomes.",
    readTime: "5 min read",
    date: "2026-06-01",
    coverColor: "#0F2A3A",
  },
  {
    slug: "global-staffing-friction",
    category: "Compliance",
    title: "How global staffing firms can reduce hiring friction in African source markets",
    excerpt:
      "Friction in African labour markets is rarely about talent supply. It is about process gaps, communication failure, and weak origin infrastructure.",
    readTime: "6 min read",
    date: "2026-05-15",
    coverColor: "#1A3D50",
  },
  {
    slug: "trusted-labour-corridors",
    category: "Compliance",
    title: "Building trusted labour corridors from Kenya to the world",
    excerpt:
      "A credible corridor is built on compliance, worker preparedness, and consistent execution — not just candidate volume and good intentions.",
    readTime: "4 min read",
    date: "2026-04-22",
    coverColor: "#2C4D3E",
  },
  {
    slug: "candidate-readiness",
    category: "Worker Preparedness",
    title: "Why candidate readiness matters more than candidate volume",
    excerpt:
      "Sending unprepared workers into demanding environments damages trust on all sides. Readiness is the multiplier that makes placements sustainable.",
    readTime: "5 min read",
    date: "2026-03-18",
    coverColor: "#3B2F1E",
  },
  {
    slug: "compliance-first",
    category: "Compliance",
    title: "A compliance-first approach to workforce mobility from Africa",
    excerpt:
      "Regulatory complexity is not a barrier — it is a filter. Organisations that treat compliance as infrastructure build durable cross-border pipelines.",
    readTime: "7 min read",
    date: "2026-02-10",
    coverColor: "#1C2B4A",
  },
  {
    slug: "corridor-design",
    category: "Compliance",
    title: "What makes a workforce corridor credible, scalable, and sustainable",
    excerpt:
      "Not all hiring corridors are equal. We break down the structural elements that separate high-performing corridors from costly misfires.",
    readTime: "6 min read",
    date: "2026-01-28",
    coverColor: "#2E1A47",
  },
  {
    slug: "worker-orientation-gaps",
    category: "Worker Preparedness",
    title: "The orientation gap: what workers are not told before they deploy",
    excerpt:
      "Pre-departure orientation is often thin, rushed, or absent. The consequences range from early attrition to exploitation — all of which are preventable.",
    readTime: "5 min read",
    date: "2025-12-09",
    coverColor: "#3A2020",
  },
  {
    slug: "origin-execution-model",
    category: "Origin Execution",
    title: "What a high-performance origin execution model actually looks like",
    excerpt:
      "Origin execution is not a set of tasks — it is a disciplined operating model. We outline the components that make it work at scale.",
    readTime: "8 min read",
    date: "2025-11-17",
    coverColor: "#1F3B2A",
  },
  {
    slug: "compliance-documentation-pipeline",
    category: "Compliance",
    title: "Documentation pipelines that hold up under regulatory scrutiny",
    excerpt:
      "Weak documentation workflows are the most common reason strong candidates never complete deployment. Here is how to build a pipeline that holds.",
    readTime: "6 min read",
    date: "2025-10-03",
    coverColor: "#2A2A1F",
  },
];
