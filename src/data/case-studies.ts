export interface CaseStudy {
  slug: string;
  tag: string;
  client: string;
  headline: string;
  duration: string;
  challenge: string;
  approach: string;
  methodology: string[];
  outcomes: string[];
  stats: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "series-a-fintech",
    tag: "Growth Sprint",
    client: "Series A fintech — UK",
    headline: "3.2× qualified pipeline. CAC down 28%. Sales cycle back to 34 days.",
    duration: "8-week sprint",
    challenge:
      "They raised their Series A on strong early traction, but pipeline had stalled in the nine months since. CAC was climbing — from £420 to £680 per qualified lead — and the growth team wasn't clear on which channels were responsible. Sales cycle had lengthened from 30 to 90 days without an obvious cause. The internal read was 'we need more content.' The real problem was different.",
    approach:
      "The signal audit surfaced that 60% of paid budget was concentrated in a single channel with deteriorating lead quality — high volume, low conversion, long cycles. Two content channels were generating genuine pipeline but completely untracked, so they looked like cost centres. We reallocated budget away from the underperforming channel, rebuilt their attribution model to surface what was actually working, and overhauled the content operation using AI-assisted production to increase output without increasing headcount. The sales cycle fix came last: it turned out to be a qualification issue in the CRM, not a market problem.",
    methodology: [
      "Five-day signal audit: channel mapping, attribution rebuild, pipeline source analysis",
      "Budget reallocation: shifted 60% of paid spend to validated high-conversion channels",
      "Attribution model rebuild: connected content channels to pipeline for the first time",
      "AI-assisted content operation: 4× output increase, same team, consistent quality",
      "CRM qualification audit: identified and closed the gap extending the sales cycle",
      "Six-week sprint: weekly optimisation cycles, bi-weekly reporting against agreed metric",
    ],
    outcomes: [
      "3.2× qualified pipeline in 11 weeks",
      "CAC down 28% within the first sprint",
      "Sales cycle back to 34 days at 6-month review",
    ],
    stats: [
      { value: "3.2×", label: "Qualified pipeline" },
      { value: "−28%", label: "Customer acquisition cost" },
      { value: "34 days", label: "Sales cycle (from 90)" },
      { value: "11 wks", label: "Time to results" },
    ],
    quote: {
      text: "We'd spent six months trying to diagnose the pipeline stall internally. Ascent identified the root cause in five days and had us moving in the right direction within a week. The attribution clarity alone was worth the engagement.",
      author: "Head of Growth",
      role: "Series A fintech, UK",
    },
  },
  {
    slug: "series-b-saas",
    tag: "Signal Audit",
    client: "Series B SaaS — US",
    headline: "40% of pipeline was invisible. Three positioning gaps. Sprint started the following week.",
    duration: "5-day audit",
    challenge:
      "Strong product, good NRR, but new business acquisition had plateaued for two quarters. They'd hired a growth lead six months prior with no material change in the trend. The board was asking whether the plateau was a strategy problem, an execution problem, or a market problem — and the team didn't have a confident answer. They needed a clear read before committing to more headcount or spend.",
    approach:
      "Standalone signal audit — no sprint commitment required upfront. In five days we mapped every traffic and pipeline source against actual closed revenue. We identified a content channel responsible for 40% of historical pipeline that had been consistently misattributed to direct traffic in their analytics setup. We also ran a structured competitor positioning analysis and found three gaps no one in the market was clearly addressing. We delivered a sprint readiness recommendation with ranked opportunities and confidence scores for each. They proceeded to a full growth sprint the following week.",
    methodology: [
      "Full channel-to-revenue attribution mapping across all traffic sources",
      "Analytics audit: identified misconfigured UTM tracking and direct traffic misattribution",
      "Historical pipeline source reconstruction: 18 months of closed-won data re-attributed",
      "Competitor positioning matrix: six direct competitors, 14 positioning dimensions",
      "Gap analysis: three unaddressed positioning spaces with supporting search intent data",
      "Sprint readiness report: ranked opportunities with effort estimates and confidence scores",
    ],
    outcomes: [
      "Channel driving 40% of pipeline — previously untracked — identified",
      "Three positioning gaps confirmed, two now in market",
      "Proceeded to full growth sprint on completion of audit",
    ],
    stats: [
      { value: "40%", label: "Pipeline hidden in misattribution" },
      { value: "3", label: "Positioning gaps uncovered" },
      { value: "5 days", label: "Audit duration" },
      { value: "2", label: "Positioning plays now live" },
    ],
    quote: {
      text: "The audit gave us more strategic clarity in five days than six months of internal analysis. We went from debating whether to hire another growth person to knowing exactly where to focus the team we already had.",
      author: "CEO",
      role: "Series B SaaS, US",
    },
  },
  {
    slug: "series-b-marketplace",
    tag: "Retainer Partnership",
    client: "Series B marketplace — EU",
    headline: "90-day sales cycle to 22. Zero headcount added. 120 to 340 customers.",
    duration: "6-month retainer",
    challenge:
      "Post-sprint client. The first sprint had focused on supply-side acquisition with strong results — supplier count up 2.4× in eight weeks. The challenge for the retainer was demand-side: scaling buyer acquisition against a new ICP that had emerged from the supply-side growth, without adding headcount. The founding team wanted to stay lean and weren't ready to build an internal growth function.",
    approach:
      "Embedded as their growth function for two quarters. Rather than handing off a strategy, we ran it. Ongoing experimentation across paid, content, and partnership channels — weekly cycles, clear test hypotheses, fast kills on what didn't work. Refreshed the signal audit each quarter as new cohort data came in and the ICP shifted. The 90-to-22-day sales cycle compression came from a combination of qualification tightening, better onboarding sequencing, and removing a manual step in the demo-to-trial flow that we identified in month two.",
    methodology: [
      "Quarterly signal audit refresh: re-mapped channel performance as ICP evolved",
      "Weekly experimentation cycles: structured test-and-kill across paid and content",
      "New ICP buildout: buyer persona research, intent mapping, messaging framework",
      "Sales cycle compression audit: mapped every handoff point from lead to close",
      "Demo-to-trial flow redesign: removed manual qualification step, automated follow-up",
      "Partnership channel launch: three new distribution partnerships live in Q2",
    ],
    outcomes: [
      "4× faster sales cycle (90 days → 22 days)",
      "New ICP segment now 35% of total new business",
      "Zero headcount added to grow from 120 to 340 customers",
    ],
    stats: [
      { value: "4×", label: "Faster sales cycle" },
      { value: "35%", label: "New ICP share of new business" },
      { value: "120→340", label: "Customers, zero headcount added" },
      { value: "6 mo", label: "Retainer duration" },
    ],
    quote: {
      text: "Most consultants hand you a strategy document and disappear. Ascent was in the weeds with us every week — running the experiments, reading the data, adapting the approach. That's the difference between a recommendation and a result.",
      author: "Co-founder & COO",
      role: "Series B marketplace, EU",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
