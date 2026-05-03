import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCTA } from "@/components/ClosingCTA";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Insights — Ascent",
  description:
    "Thinking on growth signals, attribution, and building a growth function that compounds. No SEO content, just what we've found to be true.",
};

export default function InsightsPage() {
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
        title="Insights."
        subtitle="What we've found to be true about growth, attribution, and building something that compounds."
      />

      {/* Featured post */}
      <section className="py-16 md:py-20 border-b" style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="text-[12px] font-medium px-3 py-1"
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
                  className="text-[28px] md:text-[36px] font-normal leading-[1.1] tracking-tight mb-4 group-hover:underline underline-offset-4"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[17px] leading-[1.75] max-w-[560px]" style={{ color: "#71717A" }}>
                  {featured.excerpt}
                </p>
              </div>
              {/* Cover image */}
              {featured.coverImage && (
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={featured.coverImage}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
              )}
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Remaining posts */}
      <section className="py-16 md:py-20" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerIn className="divide-y" style={{ borderColor: "#E4E4E7" }} stagger={0.1}>
            {rest.map(({ slug, title, date, excerpt, readTime, category, coverImage }) => {
              const formatted = new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                <article key={slug} className="py-10 grid grid-cols-[1fr_120px] md:grid-cols-[1fr_160px] gap-6 items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-[12px] font-medium px-3 py-1"
                        style={{ color: "#5A4FCF", background: "#EAE8FA", borderRadius: "4px" }}
                      >
                        {category}
                      </span>
                      <span className="text-[13px]" style={{ color: "#A1A1AA" }}>
                        {readTime}
                      </span>
                      <span className="text-[13px]" style={{ color: "#A1A1AA" }}>
                        {formatted}
                      </span>
                    </div>
                    <h2
                      className="text-[20px] font-normal mb-2 leading-snug tracking-tight"
                      style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                    >
                      <Link href={`/insights/${slug}`} className="hover:underline underline-offset-4 transition-opacity">
                        {title}
                      </Link>
                    </h2>
                    <p className="text-[15px] leading-[1.75]" style={{ color: "#71717A" }}>
                      {excerpt}
                    </p>
                  </div>
                  {/* Cover thumbnail */}
                  {coverImage ? (
                    <Link href={`/insights/${slug}`} className="block">
                      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <img
                          src={coverImage}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="text-right pt-1">
                      <p className="text-[13px]" style={{ color: "#A1A1AA" }}>
                        {formatted}
                      </p>
                    </div>
                  )}
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
