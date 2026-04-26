import Link from "next/link";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services — Ascent",
  description:
    "Signal audits, growth sprints, and retainer partnerships. AI-native growth built around data, not guesswork.",
};

export default function ServicesPage() {
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
            Services
          </p>
          <h1
            className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Three ways to work with us.
          </h1>
          <p className="text-[20px] leading-relaxed" style={{ color: "#3F3F46" }}>
            Every engagement starts with a Signal Audit. What we find determines
            what comes next. No retainers without a sprint. No sprints without
            an audit.
          </p>
        </div>

        {/* Jump links */}
        <div className="mx-auto max-w-[720px] mt-10 flex flex-wrap gap-3">
          {[
            { href: "#signal-audit", label: "01 Signal Audit" },
            { href: "#growth-sprint", label: "02 Growth Sprint" },
            { href: "#retainer", label: "03 Retainer Partnership" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center text-[13px] font-semibold border rounded-full px-4 py-1.5 transition-colors hover:bg-[#EAE8FA]"
              style={{ borderColor: "#5A4FCF", color: "#5A4FCF" }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Signal Audit */}
      <section
        id="signal-audit"
        className="py-24 px-6 border-b"
        style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">
          <div>
            <p
              className="text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
              style={{ color: "#5A4FCF" }}
            >
              01
            </p>
            <h2
              className="text-[36px] font-bold tracking-tight mb-6"
              style={{ color: "#0A0A0A" }}
            >
              Signal Audit
            </h2>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              Before we recommend anything, we need to know what's actually
              working. The Signal Audit is a five-day diagnostic that maps every
              meaningful growth signal in your business: inbound channels,
              conversion data, customer acquisition paths, content performance,
              and paid activity.
            </p>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              We surface what's driving revenue, what's burning budget, and what
              you're missing. Most companies discover at least one channel or
              motion that's significantly under-attributed — or one spend
              category that isn't earning its place.
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              The audit is available as a standalone engagement for companies
              that aren't ready for a full sprint, or want to validate their
              current direction before committing to one. It's also how every
              Growth Sprint begins.
            </p>
          </div>

          <div
            className="border rounded-md p-8 space-y-7"
            style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
          >
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Duration
              </p>
              <p className="text-[17px] font-semibold" style={{ color: "#0A0A0A" }}>
                5 business days
              </p>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#71717A" }}
              >
                What you get
              </p>
              <ul className="space-y-2.5">
                {[
                  "Full channel attribution map",
                  "Signals ranked by revenue impact",
                  "Budget allocation analysis",
                  "Top 3 immediate opportunities",
                  "Sprint readiness recommendation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px]"
                    style={{ color: "#3F3F46" }}
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#5A4FCF" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Right for you if
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
                You have traction but aren't clear on what's driving it. Or
                you've hit a ceiling and want a fresh read before changing
                strategy.
              </p>
            </div>
            <ButtonLink href="/book" className="w-full">
              Book a call to discuss
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Growth Sprint */}
      <section
        id="growth-sprint"
        className="py-24 px-6 border-b"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">
          <div>
            <p
              className="text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
              style={{ color: "#5A4FCF" }}
            >
              02
            </p>
            <h2
              className="text-[36px] font-bold tracking-tight mb-6"
              style={{ color: "#0A0A0A" }}
            >
              Growth Sprint
            </h2>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              An 8-week engagement with defined outcomes, set upfront. Not a
              strategy project that turns into an execution project that turns
              into a retainer. We agree on what success looks like before we
              start, then we build and run everything required to get there.
            </p>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              Strategy and execution run in parallel from day one. No waiting
              for decks. We're building and testing in week one, refining based
              on signal in weeks two through four, and scaling what's working in
              weeks five through eight.
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Every sprint begins from audit findings. If you haven't run a
              Signal Audit with us yet, it runs in the first week of the sprint
              at no additional cost.
            </p>
          </div>

          <div
            className="bg-white border rounded-md p-8 space-y-7"
            style={{ borderColor: "#E4E4E7" }}
          >
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Duration
              </p>
              <p className="text-[17px] font-semibold" style={{ color: "#0A0A0A" }}>
                8 weeks
              </p>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#71717A" }}
              >
                What we work on
              </p>
              <ul className="space-y-2.5">
                {[
                  "Channel strategy and activation",
                  "Content at scale (AI-assisted production)",
                  "Paid acquisition and targeting refinement",
                  "Attribution and measurement setup",
                  "ICP refinement and messaging",
                  "Weekly outcome tracking against sprint targets",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px]"
                    style={{ color: "#3F3F46" }}
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#5A4FCF" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Right for you if
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
                You have product-market fit, a clear ICP, and a budget to put
                behind growth. You want results in weeks, not a strategy you
                have to implement yourself.
              </p>
            </div>
            <ButtonLink href="/book" className="w-full">
              Book a call to discuss
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Retainer Partnership */}
      <section
        id="retainer"
        className="py-24 px-6"
        style={{ background: "#FAF9F6" }}
      >
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">
          <div>
            <p
              className="text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
              style={{ color: "#5A4FCF" }}
            >
              03
            </p>
            <h2
              className="text-[36px] font-bold tracking-tight mb-6"
              style={{ color: "#0A0A0A" }}
            >
              Retainer Partnership
            </h2>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              Post-sprint partnerships for clients who want to keep compounding.
              We stay embedded in your growth function — running ongoing
              experiments, scaling what's working, adapting the strategy as your
              business changes.
            </p>
            <p
              className="text-[17px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              This is not a traditional retainer. We don't bill for hours. We
              set outcome targets each quarter and measure against them. If we
              stop being the right partner for your stage, we'll say so.
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Available to post-sprint clients only. We don't take on retainer
              engagements cold — we need to understand your business at
              signal-audit depth before we can commit to ongoing results.
            </p>
          </div>

          <div
            className="border rounded-md p-8 space-y-7"
            style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
          >
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Structure
              </p>
              <p className="text-[17px] font-semibold" style={{ color: "#0A0A0A" }}>
                Quarterly targets. Monthly reviews.
              </p>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#71717A" }}
              >
                What's included
              </p>
              <ul className="space-y-2.5">
                {[
                  "Ongoing growth experimentation",
                  "Content and channel management",
                  "Quarterly signal audit refresh",
                  "Monthly performance review",
                  "Strategy adaptation as you scale",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px]"
                    style={{ color: "#3F3F46" }}
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#5A4FCF" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ color: "#71717A" }}
              >
                Eligibility
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
                Post-sprint clients only. Available on completion of a Growth
                Sprint where targets were met or exceeded.
              </p>
            </div>
            <div
              className="rounded border p-4 bg-white"
              style={{ borderColor: "#E4E4E7" }}
            >
              <p className="text-[14px]" style={{ color: "#71717A" }}>
                Not a post-sprint client yet? Start with a{" "}
                <a
                  href="#signal-audit"
                  className="font-medium hover:underline"
                  style={{ color: "#5A4FCF" }}
                >
                  Signal Audit
                </a>{" "}
                or{" "}
                <a
                  href="#growth-sprint"
                  className="font-medium hover:underline"
                  style={{ color: "#5A4FCF" }}
                >
                  Growth Sprint
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Not sure which engagement is right?"
        body="Book a 30-minute call. We'll ask a few questions and tell you what we'd expect to find in your signal audit."
      />
    </>
  );
}
