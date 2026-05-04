import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About — Ascent",
  description:
    "Ascent is an AI growth agency. We start from signal, not a playbook. Five-day audits, eight-week sprints, defined outcomes before week one.",
  openGraph: {
    title: "About — Ascent",
    description: "Ascent is an AI growth agency. We start from signal, not a playbook. Five-day audits, eight-week sprints, defined outcomes before week one.",
  },
  twitter: { card: "summary_large_image" },
};

const principles = [
  {
    number: "01",
    title: "Read the data before touching the strategy.",
    body: "Every engagement starts with a Signal Audit. Five days to map what's driving revenue, what's burning budget, and what's sitting unattributed. The data tells us where to go. We don't recommend anything before we've read it.",
  },
  {
    number: "02",
    title: "Agree on the number before you agree on the work.",
    body: "We set a specific metric and a timeframe before any engagement begins. If we can't name what success looks like, we shouldn't be charging for it. Most agencies skip this step. We won't start without it.",
  },
  {
    number: "03",
    title: "Build from day one, not week six.",
    body: "Strategy and execution run in parallel. We're testing in week one, adapting in weeks two through four, scaling what works in weeks five through eight. A deck is not a deliverable.",
  },
  {
    number: "04",
    title: "AI is plumbing, not a pitch.",
    body: "We use it for signal detection, content at scale, attribution modelling, and targeting. It's in the infrastructure, not the marketing. It either moves the number or it doesn't. We measure which.",
  },
];

const wontDo = [
  "Take on clients we can't grow. If your stage, model, or market makes eight-week results unlikely, we'll say so on the discovery call, before anything is agreed.",
  "Start a retainer without a sprint. Ongoing work has to follow results. We won't bill for maintenance on a growth function we haven't already built.",
  "Hand you a strategy and disappear. We don't write plans for other people to execute. If we can't run it ourselves, we won't propose it.",
  "Treat AI as a selling point. It's in the workflow the same way spreadsheets are: useful, unremarkable, and only worth keeping if it improves the output.",
  "Drag out a bad fit. If it becomes clear mid-engagement that we're not the right partner, we'll say so directly and work out an honest exit.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        title="We work differently. On purpose."
        subtitle="Most agencies run the same playbook with different tools. We start with a signal audit."
      />

      {/* How we think */}
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">
            <div className="space-y-6">
              <p className="text-[17px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                Most growth agencies are structured around deliverables:
                content calendars, ad packages, monthly reports. Their
                incentive is the retainer. The retainer rewards activity, not
                results. Adding AI to that model doesn't change it.
              </p>
              <p className="text-[17px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                We start every engagement with a Signal Audit. Five days. We
                map which channels are driving revenue, which are burning
                budget, and where pipeline is sitting unattributed.
                Most teams are surprised by at least one finding. Some are
                surprised by three.
              </p>
              <p className="text-[17px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                Then we work. Defined outcomes, agreed upfront, measured
                throughout. Eight weeks or fewer. If we hit the targets, we
                talk about what comes next. If we don't, we own it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-2">
              {[
                { value: "12+", label: "Years combined experience" },
                { value: "5 days", label: "Signal audit turnaround" },
                { value: "8 wks", label: "Standard sprint duration" },
                { value: "100%", label: "Sprint readiness before we start" },
              ].map(({ value, label }) => (
                <div key={label} className="border-t pt-5" style={{ borderColor: "#E4E4E7" }}>
                  <p className="text-[32px] font-normal leading-none mb-1 tracking-tight" style={{ color: "#0A0A0A" }}>
                    {value}
                  </p>
                  <p className="text-[13px]" style={{ color: "#71717A" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 border-t" style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn as="h2"
            className="text-[32px] md:text-[36px] font-normal tracking-tight mb-14"
            style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            How we think
          </AnimateIn>
          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map(({ number, title, body }) => (
              <div key={number} className="flex gap-6">
                <span
                  className="text-[40px] font-light leading-none shrink-0 select-none"
                  style={{ color: "#C4BFEE", fontVariantNumeric: "tabular-nums" }}
                >
                  {number}
                </span>
                <div>
                  <h3
                    className="text-[18px] font-medium mb-2 leading-snug"
                    style={{ color: "#0A0A0A" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[15px] leading-[1.75]" style={{ color: "#3F3F46" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* What we won't do */}
      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-[640px]">
            <AnimateIn as="h2"
              className="text-[32px] md:text-[36px] font-normal tracking-tight mb-4"
              style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              What we won't do
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p
                className="text-[17px] leading-[1.75] mb-10"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Clarity about what we won't take on is the reason the engagements
                we do take on actually work.
              </p>
            </AnimateIn>
            <StaggerIn className="space-y-0 divide-y" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {wontDo.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-5">
                  <span
                    className="mt-[3px] h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(90,79,207,0.2)" }}
                  >
                    <span
                      className="block h-1.5 w-1.5 rounded-full"
                      style={{ background: "#5A4FCF" }}
                    />
                  </span>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.7)" }}>
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
