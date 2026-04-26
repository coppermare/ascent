import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Work — Ascent",
  description:
    "Specific results from Ascent growth sprints and signal audits. Real outcomes, not vague testimonials.",
};

const caseStudies = [
  {
    client: "Series A fintech — UK",
    tag: "Growth Sprint",
    duration: "8-week sprint",
    challenge:
      "Raised their Series A on strong early traction, but pipeline had stalled in the nine months since. CAC was climbing and the growth team wasn't clear on which channels were responsible. Sales cycle had lengthened from 30 to 90 days without an obvious cause.",
    approach:
      "Signal audit surfaced that 60% of paid budget was concentrated in a single channel with deteriorating lead quality. Two content channels were generating pipeline but completely untracked. We reallocated budget, rebuilt their attribution model, and overhauled the content operation using AI-assisted production.",
    outcomes: [
      "3.2× qualified pipeline in 11 weeks",
      "CAC down 28% within the first sprint",
      "Sales cycle back to 34 days at 6-month review",
    ],
  },
  {
    client: "Series B SaaS — US",
    tag: "Signal Audit",
    duration: "5-day audit",
    challenge:
      "Strong product, good NRR, but new business acquisition had plateaued for two quarters. They'd hired a growth lead six months prior with no material change in the trend. Needed to know whether the problem was strategy, execution, or market.",
    approach:
      "Standalone signal audit. In five days we identified a content channel responsible for 40% of historical pipeline that had been misattributed to direct traffic. Found three competitor positioning gaps no one in the market was addressing. Delivered a sprint readiness recommendation with ranked opportunities.",
    outcomes: [
      "Channel driving 40% of pipeline — previously untracked — identified",
      "Three positioning gaps confirmed, two now in market",
      "Proceeded to full growth sprint on completion of audit",
    ],
  },
  {
    client: "Series B marketplace — EU",
    tag: "Retainer Partnership",
    duration: "6-month retainer",
    challenge:
      "Post-sprint client. The first sprint had focused on supply-side acquisition with strong results. Now scaling demand-side with a new ICP and needed ongoing AI-assisted execution to maintain velocity without expanding headcount.",
    approach:
      "Embedded as their growth function for two quarters. Ran ongoing experimentation across paid, content, and partnerships. Refreshed the signal audit each quarter and adapted strategy as the ICP shifted with new cohort data.",
    outcomes: [
      "4× faster sales cycle (90 days → 22 days)",
      "New ICP segment now 35% of total new business",
      "Zero headcount added to grow from 120 to 340 customers",
    ],
  },
];

const metrics = [
  {
    metric: "Qualified pipeline",
    desc: "Volume and velocity of SQLs generated within the sprint window.",
  },
  {
    metric: "Customer acquisition cost",
    desc: "Blended CAC across all channels, tracked weekly.",
  },
  {
    metric: "Channel attribution",
    desc: "Revenue by source — multi-touch with decay, not last-touch.",
  },
  {
    metric: "Sales cycle length",
    desc: "Days from first touch to closed-won, by ICP segment.",
  },
  {
    metric: "Conversion rates",
    desc: "MQL → SQL → opportunity → close, measured at each stage.",
  },
  {
    metric: "Content signal score",
    desc: "Our internal measure of content-to-pipeline correlation.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 border-b"
        style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[720px]">
          <p
            className="text-[12px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ color: "#5A4FCF" }}
          >
            Work
          </p>
          <h1
            className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Results, not case study decks.
          </h1>
          <p className="text-[20px] leading-relaxed" style={{ color: "#3F3F46" }}>
            We share specific outcomes from our engagements: numbers,
            timeframes, what changed. No vague statements about "driving growth"
            or "transforming the funnel."
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-20">
            {caseStudies.map(
              ({ client, tag, duration, challenge, approach, outcomes }, i) => (
                <article
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 border-t pt-12 first:border-none first:pt-0"
                  style={{ borderColor: "#E4E4E7" }}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span
                        className="inline-block text-[12px] font-semibold tracking-wide border rounded-full px-3 py-1"
                        style={{
                          color: "#5A4FCF",
                          borderColor: "#EAE8FA",
                          background: "#EAE8FA",
                        }}
                      >
                        {tag}
                      </span>
                      <span
                        className="text-[13px]"
                        style={{ color: "#71717A" }}
                      >
                        {duration}
                      </span>
                    </div>

                    <h2
                      className="text-[24px] font-bold mb-7"
                      style={{ color: "#0A0A0A" }}
                    >
                      {client} [REVIEW]
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <p
                          className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                          style={{ color: "#71717A" }}
                        >
                          The situation
                        </p>
                        <p
                          className="text-[16px] leading-relaxed"
                          style={{ color: "#3F3F46" }}
                        >
                          {challenge}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                          style={{ color: "#71717A" }}
                        >
                          What we did
                        </p>
                        <p
                          className="text-[16px] leading-relaxed"
                          style={{ color: "#3F3F46" }}
                        >
                          {approach}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-md p-7 h-fit"
                    style={{ background: "#F5F1EA" }}
                  >
                    <p
                      className="text-[11px] font-bold tracking-[0.1em] uppercase mb-5"
                      style={{ color: "#71717A" }}
                    >
                      Outcomes
                    </p>
                    <ul className="space-y-4">
                      {outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                            style={{ background: "#5A4FCF" }}
                          >
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M1 4L3.5 6.5L9 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span
                            className="text-[15px] font-medium leading-snug"
                            style={{ color: "#0A0A0A" }}
                          >
                            {o}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            )}
          </div>

          <p
            className="text-[12px] mt-16 max-w-[720px]"
            style={{ color: "#A1A1AA" }}
          >
            [REVIEW] All client details are representative. Specific company
            names and details are under NDA and will be updated when approved
            for publication.
          </p>
        </div>
      </section>

      {/* What we measure */}
      <section
        className="py-24 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
            <div>
              <h2
                className="text-[32px] font-bold tracking-tight mb-4"
                style={{ color: "#0A0A0A" }}
              >
                What we measure.
              </h2>
              <p
                className="text-[17px] leading-relaxed"
                style={{ color: "#3F3F46" }}
              >
                We agree on metrics at the start of every engagement. Nothing
                vague. Every outcome is tied to a number and a timeframe, agreed
                before we start.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {metrics.map(({ metric, desc }) => (
                <div
                  key={metric}
                  className="bg-white border rounded-md p-5"
                  style={{ borderColor: "#E4E4E7" }}
                >
                  <p
                    className="text-[16px] font-semibold mb-1"
                    style={{ color: "#0A0A0A" }}
                  >
                    {metric}
                  </p>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "#71717A" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Want results like these for your business?"
        body="Thirty minutes, no deck. We'll tell you what an audit would surface and whether a sprint fits where you are."
      />
    </>
  );
}
