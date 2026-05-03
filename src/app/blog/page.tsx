import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCTA } from "@/components/ClosingCTA";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Writing — Ascent",
  description:
    "Thinking on growth signals, attribution, and building a growth function that compounds. No SEO content, just what we've found to be true.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  const formattedFeatured = new Date(featured.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHeader
        variant="dark"
        title="Writing."
        subtitle="What we've found to be true about growth, attribution, and building something that compounds."
      />

      {/* Featured post */}
      <section className="py-16 md:py-20 border-b" style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1"
                    style={{ color: "#5A4FCF", background: "#EAE8FA", borderRadius: "4px" }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-[13px]" style={{ color: "#A1A1AA" }}>
                    {featured.readTime}
                  </span>
                  <span className="text-[13px]" style={{ color: "#A1A1AA" }}>
                    {formattedFeatured}
                  </span>
                </div>
                <h2
                  className="text-[28px] md:text-[36px] font-light leading-[1.1] tracking-tight mb-4 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[17px] leading-[1.75] mb-6 max-w-[560px]" style={{ color: "#71717A" }}>
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[13px] font-semibold group-hover:opacity-70 transition-opacity"
                  style={{ color: "#5A4FCF" }}
                >
                  Read article
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {/* Visual accent block */}
              <div
                className="hidden lg:flex items-end rounded-lg overflow-hidden"
                style={{ background: "#0A0A0A", aspectRatio: "4/3" }}
                aria-hidden="true"
              >
                <div className="p-8 w-full">
                  <p
                    className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4"
                    style={{ color: "#8B82E0" }}
                  >
                    {featured.category}
                  </p>
                  <p
                    className="text-[22px] font-light leading-[1.2] tracking-tight"
                    style={{ color: "#ffffff", letterSpacing: "-0.01em" }}
                  >
                    {featured.title}
                  </p>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Remaining posts */}
      <section className="py-16 md:py-20" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerIn className="divide-y" style={{ borderColor: "#E4E4E7" }} stagger={0.1}>
            {rest.map(({ slug, title, date, excerpt, readTime, category }) => {
              const formatted = new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                <article key={slug} className="py-10 grid grid-cols-1 md:grid-cols-[1fr_160px] gap-6 items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1"
                        style={{ color: "#5A4FCF", background: "#EAE8FA", borderRadius: "4px" }}
                      >
                        {category}
                      </span>
                      <span className="text-[13px]" style={{ color: "#A1A1AA" }}>
                        {readTime}
                      </span>
                    </div>
                    <h2
                      className="text-[20px] font-semibold mb-2 leading-snug tracking-tight"
                      style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                    >
                      <Link href={`/blog/${slug}`} className="hover:opacity-70 transition-opacity">
                        {title}
                      </Link>
                    </h2>
                    <p className="text-[15px] leading-[1.75] mb-4" style={{ color: "#71717A" }}>
                      {excerpt}
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold transition-opacity hover:opacity-70"
                      style={{ color: "#5A4FCF" }}
                    >
                      Read
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  <div className="md:text-right pt-1">
                    <p className="text-[13px]" style={{ color: "#A1A1AA" }}>
                      {formatted}
                    </p>
                  </div>
                </article>
              );
            })}
          </StaggerIn>
        </div>
      </section>

      <ClosingCTA
        headline="Signal problems are solvable."
        body="Thirty minutes, no deck. We'll tell you whether there's a fit and what we'd look for in your audit."
      />
    </>
  );
}
