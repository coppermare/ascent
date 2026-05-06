import Link from "next/link";
import Image from "next/image";
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
                  className="text-[28px] md:text-[36px] font-normal leading-[1.1] tracking-tight mb-4 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                >
                  {featured.title}
                </h2>
                <p className="text-[17px] leading-[1.75] mb-6 max-w-[560px]" style={{ color: "#71717A" }}>
                  {featured.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[13px] font-medium group-hover:opacity-70 transition-opacity"
                  style={{ color: "#5A4FCF" }}
                >
                  Read
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {/* Cover image */}
              {featured.coverImage && (
                <div
                  className="hidden lg:block relative rounded-lg overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={featured.coverImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="360px"
                    className="object-cover group-hover:opacity-90 transition-opacity"
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
                <article key={slug} className="py-10 grid grid-cols-1 md:grid-cols-[1fr_160px] gap-6 items-start">
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
                      <Link href={`/blog/${slug}`} className="hover:opacity-70 transition-opacity">
                        {title}
                      </Link>
                    </h2>
                    <p className="text-[15px] leading-[1.75] mb-4" style={{ color: "#71717A" }}>
                      {excerpt}
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-70"
                      style={{ color: "#5A4FCF" }}
                    >
                      Read
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  {/* Cover thumbnail */}
                  {coverImage ? (
                    <Link href={`/blog/${slug}`} className="hidden md:block">
                      <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <Image
                          src={coverImage}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="160px"
                          className="object-cover hover:opacity-90 transition-opacity"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="hidden md:block md:text-right pt-1">
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
