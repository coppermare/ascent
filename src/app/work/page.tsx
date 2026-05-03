import Link from "next/link";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { PageHeader } from "@/components/PageHeader";
import { StaggerIn } from "@/components/AnimateIn";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work — Ascent",
  description:
    "Specific results from Ascent growth sprints and signal audits. Real outcomes, not vague testimonials.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        title="The work."
        subtitle="Specific results from signal audits, growth sprints, and retainer partnerships. Numbers, timeframes, and what changed."
      />

      {/* Case studies */}
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerIn className="space-y-0 divide-y" style={{ borderColor: "#E4E4E7" }} stagger={0.12}>
            {caseStudies.map(({ slug, tag, client, headline, duration, outcomes, stats }) => (
              <article key={slug} className="py-14 first:pt-0 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="inline-block text-[12px] font-semibold border rounded-full px-3 py-1"
                      style={{ color: "#5A4FCF", borderColor: "#EAE8FA", background: "#EAE8FA" }}
                    >
                      {tag}
                    </span>
                    <span className="text-[13px]" style={{ color: "#71717A" }}>
                      {duration}
                    </span>
                  </div>

                  <p className="text-[13px] mb-2" style={{ color: "#71717A" }}>
                    {client}
                  </p>

                  <h2
                    className="text-[22px] md:text-[26px] font-semibold leading-snug mb-6 tracking-tight"
                    style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                  >
                    {headline}
                  </h2>

                  <ul className="space-y-2.5 mb-8">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                          style={{ background: "#5A4FCF" }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-[15px] leading-snug" style={{ color: "#3F3F46" }}>
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/work/${slug}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "#5A4FCF" }}
                  >
                    Read case study
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* Stat highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-lg p-4 border"
                      style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
                    >
                      <p className="text-[24px] font-semibold leading-none mb-1" style={{ color: "#0A0A0A" }}>
                        {value}
                      </p>
                      <p className="text-[12px] leading-snug" style={{ color: "#71717A" }}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
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
