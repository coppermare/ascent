import Link from "next/link";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ — Ascent",
  description:
    "Common questions about signal audits, growth sprints, retainer partnerships, and how Ascent works. Straight answers, no sales copy.",
};

const faqs: { category: string; questions: { q: string; a: string | React.ReactNode }[] }[] = [
  {
    category: "The engagement model",
    questions: [
      {
        q: "Do I have to do a Signal Audit before a Growth Sprint?",
        a: "Yes. Every engagement starts with a Signal Audit, no exceptions. We need to know exactly where your growth is coming from — and where it isn't — before we recommend anything. If you book a Growth Sprint, the audit runs in week one at no additional cost. If you'd rather start with just the audit, that's a standalone option too.",
      },
      {
        q: "How long is a Growth Sprint?",
        a: "Eight weeks. We set the outcome targets before we start, then run strategy and execution in parallel from day one. No waiting for a strategy deck before anything moves. At the end of the sprint, you have a clear picture of what worked, what didn't, and what to do next.",
      },
      {
        q: "Can I go straight to a Retainer Partnership?",
        a: "No. Retainer partnerships are post-sprint only. We don't take on ongoing work cold — we need to understand your business at signal-audit depth before we can commit to ongoing results. If you've already done a sprint with us and want to keep going, we can discuss a retainer after the sprint closes.",
      },
      {
        q: "What happens at the end of a sprint?",
        a: "We deliver a full sprint debrief: what we built, what the results were against the targets we set, what we learned, and a clear recommendation for what to do next. For clients where a retainer makes sense, we'll say so. For clients where it doesn't, we'll say that too.",
      },
      {
        q: "Do you work with agencies or are you only direct to client?",
        a: "Direct to client only. We're embedded in your growth function during the engagement — that model doesn't work through an intermediary.",
      },
    ],
  },
  {
    category: "What you get",
    questions: [
      {
        q: "What does a Signal Audit actually produce?",
        a: "A full channel attribution map, signals ranked by revenue impact, a budget allocation analysis, the top three immediate opportunities, and a sprint readiness recommendation. It takes five business days and tells you what's actually driving your growth — most clients find at least one material gap or hidden channel they weren't tracking.",
      },
      {
        q: "How do you measure success in a sprint?",
        a: "We agree on specific metrics before the sprint starts. Qualified pipeline volume, CAC, sales cycle length, conversion rates — depending on your situation. Nothing vague. Every outcome is tied to a number and a timeframe. We track against those targets weekly throughout the sprint.",
      },
      {
        q: "What does 'AI-native' actually mean in practice?",
        a: "We use AI for signal detection across your channels and data, content production at scale (programmatic SEO, personalised sequences, asset variation), targeting refinement using lookalike and behavioural signals, and attribution modelling. We don't use it as a headline — it's infrastructure. We measure whether it improves results and drop it when it doesn't.",
      },
      {
        q: "Will I own everything you build?",
        a: "Yes. Every asset, system, and piece of content built during the engagement is yours. We document what we've built and hand it over at close. The goal is compounding growth — not a dependency on us.",
      },
    ],
  },
  {
    category: "Fit and eligibility",
    questions: [
      {
        q: "What stage are you right for?",
        a: "Series A and B primarily. You need to have product-market fit — we're not the right fit for pre-revenue companies or businesses still figuring out what they're selling. You also need to have a growth challenge, not just a desire for general marketing support. If pipeline has stalled, CAC is climbing, or you've hit a ceiling with traditional agencies, those are good signals that a sprint makes sense.",
      },
      {
        q: "What if I'm not ready for a sprint but want to understand my growth better?",
        a: "Book a standalone Signal Audit. It's a five-day diagnostic that maps your growth signals without committing to an eight-week engagement. It's also a good way to validate whether your current strategy is working before you change anything.",
      },
      {
        q: "Do you work with B2C companies?",
        a: "Occasionally, but our primary focus is B2B SaaS and marketplace businesses. The signal audit approach is built around revenue-attribution modelling and pipeline analysis — it's most effective where there's a clear sales motion to optimise.",
      },
      {
        q: "What if we don't hit the sprint targets?",
        a: "We agree on targets we believe are achievable based on the signal audit findings. If we miss a target, we'll give you a clear account of why, what we learned, and what we'd do differently. We don't bill for results we can't defend. If something is fundamentally off-track mid-sprint, we flag it early — not in the final debrief.",
      },
      {
        q: "Can I book a call to find out if I'm a good fit before committing to anything?",
        a: "That's exactly what the discovery call is for. It's 30 minutes. We ask about your stage, current growth, and what you've tried. At the end, we'll tell you whether we think there's a fit and what we'd expect to find in a signal audit. No pitch deck, no hard sell.",
      },
    ],
  },
  {
    category: "Pricing and process",
    questions: [
      {
        q: "What does it cost?",
        a: "We don't publish fixed prices because scope varies. A Signal Audit is priced based on the complexity of your growth stack. A Growth Sprint is priced against the defined outcomes and the scope of what we're building. We'll give you a clear number before you commit to anything — typically in the follow-up to the discovery call.",
      },
      {
        q: "How quickly can you start?",
        a: "We take on a limited number of clients at any time. Current availability is discussed on the discovery call. If there's a fit and capacity, we typically aim to start within two to three weeks of final agreement.",
      },
      {
        q: "How much of my team's time does this require?",
        a: "We're designed to run with minimal overhead on your side. We need access to your data, a point of contact who can unblock decisions, and a weekly 30-minute check-in. We don't run discovery workshops or ask you to produce briefs — we figure out what we need and ask for it directly.",
      },
    ],
  },
];

export default function FAQPage() {
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
            FAQ
          </p>
          <h1
            className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Straight answers to common questions.
          </h1>
          <p className="text-[20px] leading-relaxed" style={{ color: "#3F3F46" }}>
            About how we work, what you get, and whether we're the right fit.
            If your question isn't here,{" "}
            <Link
              href="/book"
              className="font-semibold hover:underline"
              style={{ color: "#5A4FCF" }}
            >
              book a call
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start">

            {/* Sticky category navigation — desktop */}
            <nav className="hidden lg:block sticky top-24 space-y-1">
              {faqs.map(({ category }) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-[14px] py-1.5 px-3 rounded transition-colors hover:bg-[#F5F1EA]"
                  style={{ color: "#71717A" }}
                >
                  {category}
                </a>
              ))}
            </nav>

            {/* Questions */}
            <div className="space-y-20">
              {faqs.map(({ category, questions }) => (
                <div
                  key={category}
                  id={category.toLowerCase().replace(/\s+/g, "-")}
                >
                  <h2
                    className="text-[22px] font-bold tracking-tight mb-8 pb-4 border-b"
                    style={{ color: "#0A0A0A", borderColor: "#E4E4E7" }}
                  >
                    {category}
                  </h2>
                  <div className="space-y-0 divide-y" style={{ borderColor: "#E4E4E7" }}>
                    {questions.map(({ q, a }) => (
                      <div key={q} className="py-7">
                        <h3
                          className="text-[17px] font-semibold mb-3"
                          style={{ color: "#0A0A0A" }}
                        >
                          {q}
                        </h3>
                        <p
                          className="text-[16px] leading-relaxed max-w-[640px]"
                          style={{ color: "#3F3F46" }}
                        >
                          {a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section
        className="py-20 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[720px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white border rounded-md p-7"
            style={{ borderColor: "#E4E4E7" }}
          >
            <h3 className="text-[18px] font-semibold mb-2" style={{ color: "#0A0A0A" }}>
              Book a discovery call
            </h3>
            <p
              className="text-[15px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              30 minutes. We'll tell you whether there's a fit and what we'd expect to find in your signal audit.
            </p>
            <ButtonLink href="/book">
              Book a 30-minute call
            </ButtonLink>
          </div>

          <div
            className="bg-white border rounded-md p-7"
            style={{ borderColor: "#E4E4E7" }}
          >
            <h3 className="text-[18px] font-semibold mb-2" style={{ color: "#0A0A0A" }}>
              Run your own audit first
            </h3>
            <p
              className="text-[15px] leading-relaxed mb-5"
              style={{ color: "#3F3F46" }}
            >
              Download the Signal Audit Guide — the exact framework we use with new clients, adapted for you to run yourself.
            </p>
            <ButtonLink href="/#lead-magnet" variant="secondary">
              Get the free guide
            </ButtonLink>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Still not sure if we're the right fit?"
        body="Book a 30-minute call. We don't pitch on it — we ask questions and tell you honestly whether a sprint makes sense for where you are."
      />
    </>
  );
}
