import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { getSiteUrl } from "@/lib/site";
import Link from "next/link";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${getSiteUrl()}/insights/${slug}`;
  return {
    title: `${post.title} — Ascent`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: "article" },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  let PostContent: React.ComponentType;
  try {
    PostContent = (await import(`../../../../content/blog/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  const formatted = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pt-16 pb-0 md:pt-24" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[720px] px-6">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="text-[12px] font-medium px-3 py-1"
              style={{ color: "#8B82E0", background: "rgba(139,130,224,0.12)", borderRadius: "4px" }}
            >
              {post.category}
            </span>
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {formatted}
            </span>
            <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {post.readTime}
            </span>
          </div>
          <h1
            className="text-[32px] md:text-[48px] font-light leading-[1.05] tracking-tight mb-6"
            style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            {post.title}
          </h1>
          <p className="text-[18px] leading-[1.7] pb-12" style={{ color: "rgba(255,255,255,0.55)" }}>
            {post.excerpt}
          </p>
        </div>
        {post.coverImage && (
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="rounded-t-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={post.coverImage}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[680px] px-6 post-body">
          <PostContent />
        </div>
      </section>

      <section className="py-14 border-y" style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[680px] px-6 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <p className="text-[18px] font-medium mb-1" style={{ color: "#0A0A0A" }}>
              Found something worth investigating?
            </p>
            <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
              A Signal Audit takes five days. We map what's actually driving revenue and what isn't.
            </p>
          </div>
          <ButtonLink href="/book" size="lg">Book</ButtonLink>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 border-b" style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}>
          <div className="mx-auto max-w-[680px] px-6">
            <p className="text-[12px] font-medium uppercase tracking-[0.06em] mb-8" style={{ color: "#A1A1AA" }}>
              More insights
            </p>
            <div className="space-y-8">
              {related.map((p) => (
                <div key={p.slug} className="border-b pb-8 last:border-0 last:pb-0" style={{ borderColor: "#E4E4E7" }}>
                  <span
                    className="text-[12px] font-medium px-2.5 py-1 mb-3 inline-block"
                    style={{ color: "#5A4FCF", background: "#EAE8FA", borderRadius: "4px" }}
                  >
                    {p.category}
                  </span>
                  <h3 className="text-[18px] font-normal leading-snug mb-2 tracking-tight" style={{ color: "#0A0A0A" }}>
                    <a href={`/insights/${p.slug}`} className="hover:underline underline-offset-4">
                      {p.title}
                    </a>
                  </h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
                    {p.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[680px] px-6">
          <ButtonLink href="/insights" variant="secondary">All insights</ButtonLink>
        </div>
      </section>

      <ClosingCTA
        headline="Growth data is only useful if you know how to read it."
        body="Thirty minutes, no deck. We'll tell you what your audit would likely surface."
      />
    </>
  );
}
