import Link from "next/link";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { EmailCapture } from "@/components/EmailCapture";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Ascent — AI-native growth for companies ready to move",
  description:
    "Ascent is an AI growth agency for Series A and B startups. Signal audits, growth sprints, and retainer partnerships built around data, not guesswork.",
};

const processSteps = [
  {
    num: "01",
    title: "Signal Audit",
    desc: "We map exactly where your growth is coming from — and where it isn't. In five days, we surface the channels, content, and motions that are actually driving revenue. Most companies discover at least one significant gap or hidden opportunity they weren't tracking.",
    note: "Standalone or sprint prerequisite",
  },
  {
    num: "02",
    title: "Growth Sprint",
    desc: "An 8-week engagement built around what the audit found. We set defined outcomes upfront. Strategy, execution, and measurement run in parallel from day one — no waiting for a strategy deck before anything moves.",
    note: "8 weeks. Fixed scope. Defined outcomes.",
  },
  {
    num: "03",
    title: "Retainer Partnership",
    desc: "For clients post-sprint, we stay embedded. Ongoing work tied to compound results, not retainer hours. We only take on retainer clients we've already worked with — we need to know your business at signal-audit depth before we can commit to ongoing results.",
    note: "Post-sprint only",
  },
];

const proofMetrics = [
  { stat: "3.2×", label: "average pipeline increase across growth sprints [REVIEW]" },
  { stat: "8 weeks", label: "from signal audit to measurable, defined results" },
  { stat: "5 days", label: "for a signal audit to surface channel gaps" },
  { stat: "0", label: "open-ended retainers — outcomes only, every time" },
];

const outcomes = [
  {
    metric: "+3.2× qualified pipeline",
    detail:
      "11-week sprint for a Series A fintech. Target was 2×. Exceeded by restructuring the ICP and cutting two underperforming channels. [REVIEW]",
  },
  {
    metric: "−28% customer acquisition cost",
    detail:
      "Signal audit found budget concentration in low-signal channels. Reallocation took three weeks. Results held at the six-month review. [REVIEW]",
  },
  {
    metric: "4× faster sales cycle",
    detail:
      "Content rebuilt around buying signals, not awareness. Average deal time dropped from 90 days to 22. [REVIEW]",
  },
];

const services = [
  {
    title: "Signal Audit",
    desc: "A five-day diagnostic. We map every growth signal: what's working, what's wasting budget, and what you're missing.",
    href: "/services#signal-audit",
  },
  {
    title: "Growth Sprint",
    desc: "8-week engagements with defined outcomes. Strategy and execution run in parallel from day one.",
    href: "/services#growth-sprint",
  },
  {
    title: "Retainer Partnership",
    desc: "Post-sprint only. Ongoing work for clients who want to keep compounding what we started.",
    href: "/services#retainer",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#5A4FCF" }} className="py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <p
            className="text-[12px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            AI Growth Agency
          </p>
          <h1
            className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] max-w-[820px] mb-6"
            style={{ color: "#ffffff" }}
          >
            Most agencies add AI on top. We build growth from it.
          </h1>
          <p
            className="text-[18px] md:text-[20px] leading-relaxed max-w-[500px] mb-10"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            AI-native growth for Series A and B companies ready to move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/book" variant="inverted" size="lg">
              Book
            </ButtonLink>
            <ButtonLink href="/work" variant="onInverse" size="lg">
              Our Work
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section
        className="py-14 px-6 border-b"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {proofMetrics.map(({ stat, label }) => (
            <div key={stat}>
              <p
                className="text-[36px] font-bold tracking-tight"
                style={{ color: "#5A4FCF" }}
              >
                {stat}
              </p>
              <p className="text-[14px] leading-snug mt-1" style={{ color: "#71717A" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[540px] mb-16">
            <h2
              className="text-[36px] font-bold tracking-tight leading-tight mb-4"
              style={{ color: "#0A0A0A" }}
            >
              Three phases. Every engagement.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Every client starts with a Signal Audit. No exceptions. What we find
              determines everything that follows.
            </p>
          </div>

          <div className="divide-y" style={{ borderColor: "#E4E4E7" }}>
            {processSteps.map(({ num, title, desc, note }) => (
              <div
                key={num}
                className="py-10 grid grid-cols-1 lg:grid-cols-[72px_1fr_auto] gap-6 lg:gap-12 items-start"
              >
                <p
                  className="text-[12px] font-bold tracking-[0.1em] pt-1"
                  style={{ color: "#5A4FCF" }}
                >
                  {num}
                </p>
                <div>
                  <h3
                    className="text-[22px] font-semibold mb-3"
                    style={{ color: "#0A0A0A" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed max-w-[640px]"
                    style={{ color: "#3F3F46" }}
                  >
                    {desc}
                  </p>
                </div>
                <div className="lg:text-right shrink-0">
                  <span
                    className="inline-block text-[12px] font-medium tracking-wide border rounded-full px-3 py-1"
                    style={{ color: "#71717A", borderColor: "#E4E4E7" }}
                  >
                    {note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pull quote */}
          <div>
            <div
              className="border-l-4 pl-8"
              style={{ borderColor: "#5A4FCF" }}
            >
              <blockquote
                className="text-[26px] font-semibold leading-snug mb-4"
                style={{ color: "#0A0A0A" }}
              >
                "We'd been running ads for two years. The signal audit found a
                content channel responsible for 40% of our pipeline — completely
                untracked."
              </blockquote>
              <p className="text-[14px]" style={{ color: "#71717A" }}>
                Head of Growth, Series B SaaS [REVIEW]
              </p>
            </div>
          </div>

          {/* Outcomes */}
          <div className="space-y-8">
            <p
              className="text-[12px] font-bold tracking-[0.1em] uppercase"
              style={{ color: "#5A4FCF" }}
            >
              Recent outcomes
            </p>
            {outcomes.map(({ metric, detail }) => (
              <div key={metric}>
                <p
                  className="text-[20px] font-bold mb-1"
                  style={{ color: "#0A0A0A" }}
                >
                  {metric}
                </p>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#3F3F46" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-[36px] font-bold tracking-tight leading-tight mb-6"
              style={{ color: "#0A0A0A" }}
            >
              We don't take on clients we can't grow.
            </h2>
            <p
              className="text-[17px] leading-relaxed mb-8"
              style={{ color: "#3F3F46" }}
            >
              Every engagement starts with a signal audit. We find where your
              growth is actually coming from before we touch anything. Then we
              move fast — no strategy decks, no lengthy onboarding, no committee
              sign-offs.
            </p>
            <Link
              href="/services"
              className="text-[15px] font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#5A4FCF" }}
            >
              How we work →
            </Link>
          </div>

          <div className="divide-y" style={{ borderColor: "#E4E4E7" }}>
            {services.map(({ title, desc, href }) => (
              <div key={title} className="py-6">
                <Link href={href} className="group block">
                  <h3
                    className="text-[17px] font-semibold mb-2 group-hover:underline"
                    style={{ color: "#0A0A0A" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "#3F3F46" }}
                  >
                    {desc}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section
        id="lead-magnet"
        className="py-24 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[720px] text-center">
          <p
            className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4"
            style={{ color: "#5A4FCF" }}
          >
            Free resource
          </p>
          <h2
            className="text-[32px] font-bold tracking-tight leading-tight mb-4"
            style={{ color: "#0A0A0A" }}
          >
            Run your own signal audit.
          </h2>
          <p
            className="text-[17px] leading-relaxed mb-8 max-w-[480px] mx-auto"
            style={{ color: "#3F3F46" }}
          >
            The exact framework we use to map growth signals for new clients —
            adapted for founders and growth leads to run themselves. 12 pages.
            No fluff.
          </p>
          <EmailCapture />
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
