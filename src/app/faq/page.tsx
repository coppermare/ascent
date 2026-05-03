import Link from "next/link";
import type { Metadata } from "next";
import { ClosingCTA } from "@/components/ClosingCTA";
import { PageHeader } from "@/components/PageHeader";
import { FAQContent } from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQ — Ascent",
  description:
    "Common questions about signal audits, growth sprints, retainer partnerships, and how Ascent works.",
};

export const faqs = [
  {
    category: "Engagement model",
    questions: [
      {
        q: "Do I have to do a Signal Audit before a Growth Sprint?",
        a: "Yes. Every engagement starts with a Signal Audit, no exceptions. We need to know exactly where your growth is coming from — and where it isn't — before we recommend anything. If you book a Growth Sprint, the audit runs in week one at no additional cost.",
      },
      {
        q: "How long is a Growth Sprint?",
        a: "Eight weeks. We set the outcome targets before we start, then run strategy and execution in parallel from day one. No waiting for a strategy deck before anything moves.",
      },
      {
        q: "Can I go straight to a Retainer Partnership?",
        a: "No. Retainer partnerships are post-sprint only. We don't take on ongoing work cold — we need to understand your business at signal-audit depth before we can commit to ongoing results.",
      },
      {
        q: "What happens at the end of a sprint?",
        a: "We deliver a full sprint debrief: what we built, what the results were against the targets we set, what we learned, and a clear recommendation for what to do next.",
      },
      {
        q: "Do you work with agencies or direct to client only?",
        a: "Direct to client only. We're embedded in your growth function during the engagement — that model doesn't work through an intermediary.",
      },
    ],
  },
  {
    category: "What you get",
    questions: [
      {
        q: "What does a Signal Audit actually produce?",
        a: "A full channel attribution map, signals ranked by revenue impact, a budget allocation analysis, the top three immediate opportunities, and a sprint readiness recommendation. Five business days. Most clients find at least one material gap they weren't tracking.",
      },
      {
        q: "How do you measure success in a sprint?",
        a: "We agree on specific metrics before the sprint starts — qualified pipeline volume, CAC, sales cycle length, conversion rates. Nothing vague. Every outcome is tied to a number and a timeframe.",
      },
      {
        q: "What does 'AI-native' actually mean in practice?",
        a: "Signal detection across your channels and data, content production at scale, targeting refinement using lookalike and behavioural signals, and attribution modelling. Infrastructure, not marketing copy.",
      },
      {
        q: "Will I own everything you build?",
        a: "Yes. Every asset, system, and piece of content built during the engagement is yours. We document what we've built and hand it over at close.",
      },
    ],
  },
  {
    category: "Fit and eligibility",
    questions: [
      {
        q: "What stage are you right for?",
        a: "Series A and B primarily. You need product-market fit — we're not the right fit for pre-revenue companies. If pipeline has stalled, CAC is climbing, or you've hit a ceiling with traditional agencies, those are good signals that a sprint makes sense.",
      },
      {
        q: "What if I'm not ready for a sprint?",
        a: "Book a standalone Signal Audit. Five days, no commitment to an 8-week engagement. It's also a good way to validate whether your current strategy is working before you change anything.",
      },
      {
        q: "Do you work with B2C companies?",
        a: "Occasionally, but our primary focus is B2B SaaS and marketplace businesses. The signal audit approach is built around revenue-attribution modelling and pipeline analysis.",
      },
      {
        q: "What if we don't hit the sprint targets?",
        a: "We agree on targets we believe are achievable based on the audit findings. If we miss a target, we'll give you a clear account of why, what we learned, and what we'd do differently. If something is fundamentally off-track mid-sprint, we flag it early.",
      },
    ],
  },
  {
    category: "Pricing and process",
    questions: [
      {
        q: "What does it cost?",
        a: "We don't publish fixed prices because scope varies. A Signal Audit is priced based on the complexity of your growth stack. A Growth Sprint is priced against the defined outcomes and scope. Clear number before you commit — typically in the follow-up to the discovery call.",
      },
      {
        q: "How quickly can you start?",
        a: "We take on a limited number of clients at a time. Current availability is discussed on the discovery call. If there's a fit and capacity, we typically start within two to three weeks of final agreement.",
      },
      {
        q: "How much of my team's time does this require?",
        a: "Minimal. Access to your data, a point of contact who can unblock decisions, and a weekly 30-minute check-in. We don't run discovery workshops or ask you to produce briefs — we figure out what we need and ask for it directly.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        variant="light"
        title="Common questions."
        subtitle={
          `About how we work, what you get, and whether we're the right fit. If yours isn't here, book a call.`
        }
      />

      <FAQContent faqs={faqs} />

      <ClosingCTA
        headline="Still not sure if we're the right fit?"
        body="Thirty minutes, no pitch — just questions and an honest read on whether a sprint fits you."
      />
    </>
  );
}
