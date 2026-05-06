import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { PageHeader } from "@/components/PageHeader";
import { StaggerIn } from "@/components/AnimateIn";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work — Ascent",
  description:
    "Specific results from Ascent growth sprints and signal audits. Real outcomes, not vague testimonials.",
  openGraph: {
    title: "Work — Ascent",
    description: "Specific results from Ascent growth sprints and signal audits. Real outcomes, not vague testimonials.",
  },
  twitter: { card: "summary_large_image" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        staticShader
        title="The work."
        subtitle="Specific results from signal audits, growth sprints, and retainer partnerships. Numbers, timeframes, and what changed."
      />

      {/* Case studies */}
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-10" stagger={0.12}>
            {caseStudies.map(({ slug, headline, challenge, coverImage }) => (
              <article key={slug}>
                <Link href={`/work/${slug}`} className="block group">
                  {coverImage && (
                    <div className="relative w-full rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={coverImage}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h2
                    className="text-[22px] md:text-[26px] font-normal leading-snug tracking-tight mb-3 group-hover:underline underline-offset-4"
                    style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                  >
                    {headline}
                  </h2>
                  <p
                    className="text-[15px] leading-[1.65] line-clamp-2 max-w-[640px]"
                    style={{ color: "#71717A" }}
                  >
                    {challenge}
                  </p>
                </Link>
              </article>
            ))}
          </StaggerIn>

          <p
            className="text-[12px] mt-12 max-w-[720px]"
            style={{ color: "#A1A1AA" }}
          >
            Client details are anonymised. Specific names are under NDA.
          </p>
        </div>
      </section>

      <ClosingCTA
        headline="Results like these start with 30 minutes."
        body="No deck, no pitch. We'll tell you what an audit would surface and whether a sprint is the right move."
      />
    </>
  );
}
