import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCTA } from "@/components/ClosingCTA";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";
import { X } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About — Ascent",
  description:
    "Ascent is an AI growth agency. We start from signal, not a playbook. Five-day audits, eight-week sprints, defined outcomes before week one.",
  openGraph: {
    title: "About — Ascent",
    description:
      "Ascent is an AI growth agency. We start from signal, not a playbook. Five-day audits, eight-week sprints, defined outcomes before week one.",
  },
  twitter: { card: "summary_large_image" },
};

const principles = [
  {
    title: "Read the data before touching the strategy.",
    body: "Every engagement starts with a Signal Audit. The data tells us where to go. We don't recommend anything before we've read it.",
  },
  {
    title: "Agree on the number before you agree on the work.",
    body: "We set a specific metric and a timeframe before any engagement begins. If we can't name what success looks like, we shouldn't be charging for it.",
  },
  {
    title: "Build from day one, not week six.",
    body: "Strategy and execution run in parallel. Testing in week one, adapting through four, scaling to eight. A deck is not a deliverable.",
  },
  {
    title: "AI is plumbing, not a pitch.",
    body: "Signal detection, content at scale, attribution, targeting. It's in the infrastructure, not the marketing. It either moves the number or it doesn't.",
  },
];

const wontDo = [
  "Take on clients we can't grow.",
  "Start a retainer without a sprint.",
  "Hand you a strategy and disappear.",
  "Treat AI as a selling point.",
  "Drag out a bad fit.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        title="We work differently. On purpose."
        subtitle="Most agencies run the same playbook with different tools. We start with the signal."
      />

      {/* ── Manifesto + image ───────────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
            <AnimateIn
              as="h2"
              className="text-[30px] md:text-[56px] font-normal tracking-tight leading-[1.05]"
              style={{ color: "#ffffff" }}
            >
              The retainer rewards activity. We measure results.
            </AnimateIn>
            <AnimateIn
              delay={0.1}
              className="text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
              as="p"
            >
              Most growth agencies are structured around deliverables: content
              calendars, ad packages, monthly reports. Adding AI to that model
              doesn&rsquo;t change it. We start from signal, agree on the
              number before week one, and close against it.
            </AnimateIn>
          </div>
        </div>

        <div className="relative w-full" style={{ height: "440px" }}>
          <Image
            src="/images/about-manifesto.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0A0A0A 0%, transparent 18%)",
            }}
          />
        </div>
      </section>

      {/* ── How we're built (editorial, not stat cards) ─────────── */}
      <section className="py-20 md:py-28" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24">
            <AnimateIn
              as="h2"
              className="text-[30px] md:text-[44px] font-normal tracking-tight leading-[1.1]"
              style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
            >
              A small team of operators.
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-[17px] leading-[1.75] mb-6" style={{ color: "#3F3F46" }}>
                Ascent is a senior team of practitioners who ran growth inside
                venture-backed companies before building this. Every
                engagement is led by someone who has carried the number
                themselves.
              </p>
              <p className="text-[17px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                We hold a maximum of five active engagements at a time. If
                we&rsquo;re full when you reach out, we&rsquo;ll say so and
                give you a realistic start date.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t" style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn
            as="h2"
            className="text-[30px] md:text-[44px] font-normal tracking-tight leading-[1.1] mb-14 md:mb-20 max-w-[640px]"
            style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            How we think.
          </AnimateIn>

          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {principles.map(({ title, body }) => (
              <div key={title}>
                <h3
                  className="text-[22px] md:text-[24px] font-normal mb-4 leading-snug tracking-tight"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                  {body}
                </p>
              </div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ── What we won't do ─────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">
            <AnimateIn
              as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.05]"
              style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              What we won&rsquo;t do.
            </AnimateIn>

            <StaggerIn>
              {wontDo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 py-6 border-t"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    borderBottom: i === wontDo.length - 1 ? "1px solid rgba(255,255,255,0.1)" : undefined,
                  }}
                >
                  <X size={22} weight="bold" style={{ color: "#5A4FCF", flexShrink: 0 }} />
                  <p
                    className="text-[20px] md:text-[26px] font-normal tracking-tight leading-tight"
                    style={{ color: "#ffffff", letterSpacing: "-0.01em" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </StaggerIn>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Work with a team that measures everything."
        body="Thirty minutes, no deck. We'll tell you whether we're a fit and what we'd find in your audit."
      />
    </>
  );
}
