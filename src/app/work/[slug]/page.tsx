import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getSiteUrl } from "@/lib/site";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const url = `${getSiteUrl()}/work/${slug}`;
  return {
    title: `${cs.client} — Work — Ascent`,
    description: cs.headline,
    alternates: { canonical: url },
    openGraph: { title: `${cs.client} — Work`, description: cs.headline, url },
    twitter: { card: "summary_large_image", title: `${cs.client} — Work`, description: cs.headline },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-0" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6 pb-10">
          <h1
            className="text-[32px] md:text-[48px] font-normal leading-[1.05] tracking-tight max-w-[800px] mb-5"
            style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            {cs.headline}
          </h1>
          <p className="text-[18px] leading-[1.7] max-w-[640px]" style={{ color: "#3F3F46" }}>
            {cs.challenge}
          </p>
        </div>
        {cs.coverImage && (
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={cs.coverImage}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Stats */}
      <section className="py-14" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            {cs.stats.map(({ value, label }) => (
              <div key={label} className="border-t pt-5" style={{ borderColor: "#E4E4E7" }}>
                <p className="text-[28px] md:text-[32px] font-normal leading-none mb-1.5 tracking-tight" style={{ color: "#0A0A0A" }}>
                  {value}
                </p>
                <p className="text-[13px] leading-snug" style={{ color: "#71717A" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 md:py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          <h2
            className="text-[18px] font-medium pt-1"
            style={{ color: "#0A0A0A" }}
          >
            The situation
          </h2>
          <p className="text-[18px] leading-[1.85]" style={{ color: "#3F3F46" }}>
            {cs.challenge}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          <h2
            className="text-[18px] font-medium pt-1"
            style={{ color: "#ffffff" }}
          >
            What we did
          </h2>
          <div>
            <p
              className="text-[18px] leading-[1.85] mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {cs.approach}
            </p>
            <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <ol>
                {cs.methodology.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-5 py-3 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="text-[13px] tabular-nums shrink-0"
                      style={{ color: "rgba(255,255,255,0.4)", minWidth: "20px" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-24" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-[720px]">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              className="mb-7"
              aria-hidden="true"
            >
              <path
                d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.84 0.24 11.76 0L13.2 2.4C10.32 3.04 8.2 4.32 6.84 6.24C5.56 8.08 4.96 10.08 5.04 12.24H10.08V24H0ZM18.24 24V14.4C18.24 10.56 19.2 7.28 21.12 4.56C23.12 1.84 26.08 0.24 30 0L31.44 2.4C28.56 3.04 26.44 4.32 25.08 6.24C23.8 8.08 23.2 10.08 23.28 12.24H28.32V24H18.24Z"
                fill="#5A4FCF"
                opacity="0.25"
              />
            </svg>
            <blockquote
              className="text-[22px] md:text-[26px] font-light leading-[1.5] mb-8 tracking-tight"
              style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
            >
              &ldquo;{cs.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="h-px flex-1"
                style={{ background: "#E4E4E7", maxWidth: "40px" }}
              />
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "#0A0A0A" }}>
                  {cs.quote.author}
                </p>
                <p className="text-[13px]" style={{ color: "#71717A" }}>
                  {cs.quote.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <h2
            className="text-[28px] font-normal tracking-tight mb-10"
            style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            Results
          </h2>
          <ul className="space-y-4 max-w-[640px]">
            {cs.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-4">
                <span
                  className="mt-0.5 h-6 w-6 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "#5A4FCF" }}
                >
                  <svg width="11" height="9" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p
                  className="text-[17px] leading-[1.65] font-medium"
                  style={{ color: "#0A0A0A" }}
                >
                  {outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Back link */}
      <section className="py-10 border-t" style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <ButtonLink href="/work" variant="secondary">All case studies</ButtonLink>
        </div>
      </section>

      <ClosingCTA
        headline="Results like these start with 30 minutes."
        body="No deck, no pitch. We'll tell you what an audit would surface and whether a sprint is the right move."
      />
    </>
  );
}
