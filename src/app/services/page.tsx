import type { Metadata } from "next";
import { MagnifyingGlass, Rocket, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services — Ascent",
  description:
    "Signal audits, growth sprints, and retainer partnerships from an AI-native growth agency. Every engagement starts with data. Defined outcomes before week one.",
  openGraph: {
    title: "Services — Ascent",
    description: "Signal audits, growth sprints, and retainer partnerships from an AI-native growth agency. Every engagement starts with data.",
  },
  twitter: { card: "summary_large_image" },
};

import type { Icon } from "@phosphor-icons/react";

const serviceIcons: Icon[] = [MagnifyingGlass, Rocket, ArrowsClockwise];

const services = [
  {
    id: "signal-audit",
    name: "Signal Audit",
    tagline: "Five days. A complete read of your growth.",
    body: [
      "Before we recommend anything, we need to know what's actually working. The Signal Audit is a five-day diagnostic that maps every meaningful growth signal in your business: inbound channels, conversion data, customer acquisition paths, content performance, and paid activity.",
      "We surface what's driving revenue, what's burning budget, and what you're missing. Most companies discover at least one channel or motion that's significantly under-attributed, or one spend category that isn't earning its place.",
    ],
    details: {
      duration: "5 business days",
      items: [
        "Full channel attribution map",
        "Signals ranked by revenue impact",
        "Budget allocation analysis",
        "Top 3 immediate opportunities",
        "Sprint readiness recommendation",
      ],
      fit: "You have traction but aren't clear on what's driving it, or you've hit a ceiling and want a fresh read before changing strategy.",
    },
    image: "/images/audit-bg.png",
    bg: "#FAF9F6",
    cardBg: "#F5F1EA",
  },
  {
    id: "growth-sprint",
    name: "Growth Sprint",
    tagline: "Eight weeks. Defined outcomes. Strategy and execution in parallel.",
    body: [
      "An 8-week engagement with defined outcomes, set upfront. Not a strategy project that turns into an execution project. We agree on what success looks like before we start, then build and run everything required to get there.",
      "Strategy and execution run in parallel from day one. We're building and testing in week one, refining based on signal in weeks two through four, and scaling what's working in weeks five through eight.",
    ],
    details: {
      duration: "8 weeks",
      items: [
        "Channel strategy and activation",
        "Content at scale (AI-assisted)",
        "Paid acquisition and targeting refinement",
        "Attribution and measurement setup",
        "ICP refinement and messaging",
        "Weekly outcome tracking",
      ],
      fit: "You have product-market fit, a clear ICP, and a budget to put behind growth. You want results in weeks, not a strategy you have to implement yourself.",
    },
    image: "/images/growth-sprint.png",
    bg: "#F5F1EA",
    cardBg: "#ffffff",
  },
  {
    id: "retainer",
    name: "Retainer Partnership",
    tagline: "Post-sprint. Quarterly targets. Ongoing compound growth.",
    body: [
      "Post-sprint partnerships for clients who want to keep compounding. We stay embedded in your growth function, running ongoing experiments, scaling what's working, adapting the strategy as your business changes.",
      "This is not a traditional retainer. We don't bill for hours. We set outcome targets each quarter and measure against them. If we stop being the right partner for your stage, we'll say so.",
    ],
    details: {
      duration: "Quarterly targets. Monthly reviews.",
      items: [
        "Ongoing growth experimentation",
        "Content and channel management",
        "Quarterly signal audit refresh",
        "Monthly performance review",
        "Strategy adaptation as you scale",
      ],
      fit: "Post-sprint clients only. Available on completion of a Growth Sprint where targets were met or exceeded.",
    },
    image: "/images/retainer-partnership.png",
    bg: "#FAF9F6",
    cardBg: "#F5F1EA",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        title="Three ways to work with us."
        subtitle="Every engagement starts with a Signal Audit. What we find determines what comes next."
      />


      {services.map(({ id, name, tagline, body, details, image, bg, cardBg }, i) => {
        const Icon = serviceIcons[i];
        return (
        <section
          key={id}
          id={id}
          className="py-16 md:py-24 border-b last:border-0"
          style={{ background: bg, borderColor: "#E4E4E7" }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div
              className={`grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <AnimateIn className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="mb-6">
                  <Icon size={28} weight="duotone" style={{ color: "#5A4FCF" }} />
                </div>
                <h2
                  className="text-[32px] md:text-[36px] font-normal tracking-tight mb-3"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                >
                  {name}
                </h2>
                <p
                  className="text-[17px] mb-7"
                  style={{ color: "#71717A" }}
                >
                  {tagline}
                </p>
                {body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[16px] leading-[1.75] mb-4 last:mb-0"
                    style={{ color: "#3F3F46" }}
                  >
                    {para}
                  </p>
                ))}
              </AnimateIn>

              {/* Card */}
              <AnimateIn delay={0.1} className={`border rounded-lg p-5 md:p-8 space-y-5${i % 2 === 1 ? " lg:col-start-1 lg:row-start-1" : ""}`}
                style={{ background: cardBg, borderColor: "#E4E4E7" }}
              >
                {image && (
                  <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="text-[15px] font-medium" style={{ color: "#0A0A0A" }}>
                  {details.duration}
                </p>
                <ul className="space-y-2.5">
                  {details.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px]"
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
                <p className="text-[14px] leading-[1.65] italic" style={{ color: "#71717A" }}>
                  {details.fit}
                </p>
                <ButtonLink href="/book" className="w-full justify-center">
                  Book
                </ButtonLink>
              </AnimateIn>
            </div>
          </div>
        </section>
        );
      })}

      <ClosingCTA
        headline="Not sure which engagement is right?"
        body="Thirty minutes, no sales script. A few questions, then a straight answer on what your audit would show."
      />
    </>
  );
}
