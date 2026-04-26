import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "About — Ascent",
  description:
    "Ascent is an AI growth agency built differently. We start with data, build strategy around what we find, and execute faster than traditional teams can match.",
};

const principles = [
  {
    title: "Start with the signal.",
    body: "Every engagement begins with a Signal Audit. Before we recommend anything, we need to know what's actually working. No assumptions, no inherited playbooks.",
  },
  {
    title: "Define the outcome before you start.",
    body: "We agree on what success looks like before an engagement begins. Not a vague direction — a specific metric and a timeframe. If we can't define it, we shouldn't be billing for it.",
  },
  {
    title: "Strategy and execution are the same thing.",
    body: "Traditional agencies separate them. Strategy first, then a deck, then a handoff, then execution. We build and test in week one. The strategy evolves from what we learn.",
  },
  {
    title: "AI is infrastructure, not a differentiator.",
    body: "Every agency claims to use AI now. We don't use it as a headline. We use it for signal detection, content at scale, attribution modelling, and targeting refinement. It either improves results or it doesn't.",
  },
];

const wontDo = [
  "Take on clients we can't grow. If your market, model, or current stage makes results unlikely in the next 8 weeks, we'll say so before we start.",
  "Run open-ended retainers. Every engagement has a defined scope and outcome. Ongoing work follows a sprint — never precedes it.",
  "Deliver a strategy deck and leave you to execute it. We build and run, not advise and watch.",
  "Use AI as a marketing claim. It's infrastructure. It either improves results or it doesn't — and we measure which.",
  "Take the call if it's not the right fit. We'd rather tell you now than discover it six weeks in.",
];

export default function AboutPage() {
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
            About
          </p>
          <h1
            className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Built differently. On purpose.
          </h1>
          <p
            className="text-[20px] leading-relaxed"
            style={{ color: "#3F3F46" }}
          >
            Ascent exists because most growth agencies are AI-augmented at best.
            They run the same playbooks they always have and add a few AI tools
            on top. We started from a different premise.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[720px] space-y-8">
          <div>
            <h2
              className="text-[24px] font-semibold mb-4"
              style={{ color: "#0A0A0A" }}
            >
              The problem with traditional growth agencies
            </h2>
            <p
              className="text-[17px] leading-relaxed"
              style={{ color: "#3F3F46" }}
            >
              Traditional agencies are structured around deliverables: content
              calendars, ad campaigns, monthly reports. Their incentive is
              billable hours, not compounding results. Most of the strategy you
              pay for in month one is the same strategy they gave the last
              client.
            </p>
            <p
              className="text-[17px] leading-relaxed mt-4"
              style={{ color: "#3F3F46" }}
            >
              Adding AI to that model doesn't fix it. It makes the deliverables
              cheaper to produce. You still get the same playbook, slightly
              faster.
            </p>
          </div>

          <div
            className="border-l-4 pl-8 py-2"
            style={{ borderColor: "#5A4FCF" }}
          >
            <p
              className="text-[20px] font-semibold leading-snug"
              style={{ color: "#0A0A0A" }}
            >
              We start with data. We find where growth is already happening —
              and where it should be. Then we build everything around that.
            </p>
          </div>

          <div>
            <h2
              className="text-[24px] font-semibold mb-4"
              style={{ color: "#0A0A0A" }}
            >
              How we work
            </h2>
            <p
              className="text-[17px] leading-relaxed"
              style={{ color: "#3F3F46" }}
            >
              Every engagement at Ascent begins with a Signal Audit. We map your
              growth signals before we recommend anything: which channels are
              actually driving revenue, which are burning budget, and where
              you're leaving pipeline on the table. Most clients find something
              material they weren't tracking.
            </p>
            <p
              className="text-[17px] leading-relaxed mt-4"
              style={{ color: "#3F3F46" }}
            >
              From there, we work in focused sprints with defined outcomes.
              Not open-ended retainers. Not monthly strategy calls. Specific
              results, agreed upfront, measured throughout.
            </p>
            <p
              className="text-[17px] leading-relaxed mt-4"
              style={{ color: "#3F3F46" }}
            >
              We use AI throughout — not as a shortcut, but as infrastructure.
              Signal detection, content at scale, targeting refinement,
              attribution modelling. The things that used to take teams of ten,
              handled by a small, focused group with the right tools.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        className="py-24 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            className="text-[32px] font-bold tracking-tight mb-12"
            style={{ color: "#0A0A0A" }}
          >
            How we think
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {principles.map(({ title, body }) => (
              <div key={title}>
                <h3
                  className="text-[18px] font-semibold mb-3"
                  style={{ color: "#0A0A0A" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "#3F3F46" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we won't do */}
      <section
        className="py-24 px-6 border-t"
        style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[720px]">
          <h2
            className="text-[32px] font-bold tracking-tight mb-6"
            style={{ color: "#0A0A0A" }}
          >
            What we won't do
          </h2>
          <p
            className="text-[17px] leading-relaxed mb-8"
            style={{ color: "#3F3F46" }}
          >
            This is as important as what we do. Clarity about what we won't
            take on is the reason the engagements we do take on actually work.
          </p>
          <ul className="space-y-4">
            {wontDo.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-1 h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "#EAE8FA" }}
                >
                  <span
                    className="block h-1.5 w-1.5 rounded-full"
                    style={{ background: "#5A4FCF" }}
                  />
                </span>
                <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "#3F3F46" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-24 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            className="text-[32px] font-bold tracking-tight mb-12"
            style={{ color: "#0A0A0A" }}
          >
            The team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "[REVIEW]",
                role: "Founder & Lead Strategist",
                bio: "[REVIEW] Background and expertise to be added.",
              },
              {
                name: "[REVIEW]",
                role: "Head of Growth",
                bio: "[REVIEW] Background and expertise to be added.",
              },
              {
                name: "[REVIEW]",
                role: "AI & Data Lead",
                bio: "[REVIEW] Background and expertise to be added.",
              },
            ].map(({ name, role, bio }) => (
              <div
                key={role}
                className="bg-white border rounded-md p-6"
                style={{ borderColor: "#E4E4E7" }}
              >
                <div
                  className="h-14 w-14 rounded-full mb-4"
                  style={{ background: "#EAE8FA" }}
                />
                <p
                  className="text-[17px] font-semibold"
                  style={{ color: "#0A0A0A" }}
                >
                  {name}
                </p>
                <p
                  className="text-[14px] mb-3"
                  style={{ color: "#5A4FCF" }}
                >
                  {role}
                </p>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#3F3F46" }}
                >
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Work with a team that measures everything."
        body="Thirty minutes, no deck. We'll tell you whether we're a fit and what we'd look for in your audit."
      />
    </>
  );
}
