export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-growth-signals",
    title: "The signals your growth stack is sending that no one is reading",
    date: "2025-04-18",
    excerpt:
      "Most companies have more growth data than they know what to do with. The problem isn't access, it's attribution. Here's how to find what's actually driving revenue.",
    readTime: "6 min read",
    category: "Signal Audit",
    coverImage: "/images/visual-statement.png",
  },
  {
    slug: "cac-attribution-gaps",
    title: "Why your CAC looks wrong (and what to do about it)",
    date: "2025-03-28",
    excerpt:
      "Misattributed pipeline is the most expensive quiet problem in B2B growth. Here's the pattern we see across almost every audit, and how to fix it.",
    readTime: "5 min read",
    category: "Attribution",
    coverImage: "/images/channels-bg.png",
  },
  {
    slug: "icp-refinement-series-b",
    title: "ICP refinement at Series B: when to narrow and when to expand",
    date: "2025-03-10",
    excerpt:
      "The ICP that got you to Series A is rarely the ICP that gets you to Series B. Here's how to decide whether to double down or open up.",
    readTime: "7 min read",
    category: "Strategy",
    coverImage: "/images/audit-bg.png",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
