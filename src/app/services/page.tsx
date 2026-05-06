import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCTA } from "@/components/ClosingCTA";
import { ButtonLink } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services — Ascent",
  description:
    "Signal audits, growth sprints, and retainer partnerships from an AI-native growth agency. Defined outcomes before week one.",
  openGraph: {
    title: "Services — Ascent",
    description:
      "Signal audits, growth sprints, and retainer partnerships from an AI-native growth agency.",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    id: "signal-audit",
    name: "Signal Audit",
    tagline: "Five days. A complete read of your growth.",
    duration: "5 business days",
    body:
      "We map every channel, score it against revenue, and rank what's actually moving pipeline. Most teams find at least one channel they've been overfunding and one they didn't know was working.",
    items: [
      "Full channel attribution map",
      "Signals ranked by revenue impact",
      "Budget allocation analysis",
      "Top three immediate opportunities",
    ],
    tileImage: "/images/binoculars.png",
    heroImage: "/images/signal-audit-hero.png",
    bg: "#FAF9F6",
  },
  {
    id: "growth-sprint",
    name: "Growth Sprint",
    tagline: "Eight weeks. Outcomes agreed before day one.",
    duration: "8 weeks",
    body:
      "We agree on a number before the sprint starts. Strategy and execution run in parallel from week one. At close: results against the agreed target, not a document about them.",
    items: [
      "Channel strategy and activation",
      "Content at scale, AI-assisted",
      "Paid acquisition refinement",
      "Attribution and measurement",
      "ICP and messaging",
      "Weekly outcome tracking",
    ],
    tileImage: "/images/growth-sprint.png",
    heroImage: "/images/stat-bg-2.png",
    bg: "#F5F1EA",
  },
  {
    id: "retainer",
    name: "Retainer Partnership",
    tagline: "Quarterly targets. Compound growth.",
    duration: "Quarterly. Monthly reviews.",
    body:
      "Post-sprint partnerships for clients who hit their targets and want to keep compounding. Quarterly goals, monthly reviews, no hours billed. We tell you when we're no longer the right partner for your stage.",
    items: [
      "Ongoing experimentation",
      "Content and channel management",
      "Quarterly audit refresh",
      "Monthly performance review",
      "Strategy adaptation as you scale",
    ],
    tileImage: "/images/retainer-partnership.png",
    heroImage: "/images/retainer-partnership-hero.png",
    bg: "#FAF9F6",
  },
];

const phases = [
  {
    label: "Discovery",
    when: "Week 0",
    detail: "Scope, access, and the number we're aiming at — agreed in writing before we start.",
  },
  {
    label: "Audit and build",
    when: "Week 1",
    detail: "Signal map delivered. First experiments live by Friday.",
  },
  {
    label: "Adapt",
    when: "Weeks 2–4",
    detail: "Cut what's noise. Double down where the data points.",
  },
  {
    label: "Scale and close",
    when: "Weeks 5–8",
    detail: "Compound the channels that earn it. Close against the week-zero number.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        noShader
        title="Three ways to work with us."
        subtitle="Audit. Sprint. Partner. Each one earns the next."
      />

      {/* ── Hero image ──────────────────────────────────────────── */}
      <div className="px-6" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px]">
          <Image
            src="/images/services-hero.png"
            alt=""
            aria-hidden="true"
            width={1200}
            height={560}
            className="w-full object-cover block rounded-lg"
            style={{ maxHeight: "560px", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* ── Service overview ────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {services.map(({ id, name, tagline, tileImage }) => (
              <a key={id} href={`#${id}`} className="block group">
                <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={tileImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3
                  className="text-[22px] font-normal tracking-tight mb-2"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                >
                  {name}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#71717A" }}
                >
                  {tagline}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Signal Audit — card layout ──────────────────────────── */}
      {(() => {
        const s = services[0];
        return (
          <section
            id={s.id}
            className="py-20 md:py-28 border-b"
            style={{ background: s.bg, borderColor: "#E4E4E7" }}
          >
            <div className="mx-auto max-w-[1200px] px-6">
              <AnimateIn>
                <div className="rounded-xl overflow-hidden flex flex-col lg:flex-row" style={{ background: "#F5F1EA" }}>
                  {/* Image — fills left third */}
                  <div className="relative w-full lg:w-2/5 shrink-0" style={{ minHeight: "360px" }}>
                    <Image
                      src={s.heroImage}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                  {/* Text panel */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:w-1/2">
                    <h2
                      className="text-[32px] md:text-[44px] font-normal tracking-tight leading-[1.05] mb-4"
                      style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                    >
                      {s.name}
                    </h2>
                    <p className="text-[18px] leading-relaxed mb-6" style={{ color: "#3F3F46" }}>
                      {s.tagline}
                    </p>
                    <p className="text-[15px] leading-[1.75] mb-8" style={{ color: "#71717A" }}>
                      {s.body}
                    </p>
                    <ul className="mb-8 border-t" style={{ borderColor: "#E4E4E7" }}>
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="py-3 border-b text-[15px]"
                          style={{ borderColor: "#E4E4E7", color: "#3F3F46" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-6">
                      <ButtonLink href="/book" variant="primary" size="default">Book</ButtonLink>
                      <span className="text-[14px]" style={{ color: "#71717A" }}>{s.duration}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </section>
        );
      })()}

      {/* ── Growth Sprint — card layout, image right ────────────── */}
      {(() => {
        const s = services[1];
        return (
          <section
            id={s.id}
            className="py-20 md:py-28 border-b"
            style={{ background: s.bg, borderColor: "#E4E4E7" }}
          >
            <div className="mx-auto max-w-[1200px] px-6">
              <AnimateIn>
                <div className="rounded-xl overflow-hidden flex flex-col lg:flex-row" style={{ background: "#FFFFFF" }}>
                  {/* Text panel */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:w-3/5">
                    <h2
                      className="text-[32px] md:text-[44px] font-normal tracking-tight leading-[1.05] mb-4"
                      style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                    >
                      {s.name}
                    </h2>
                    <p className="text-[18px] leading-relaxed mb-6" style={{ color: "#3F3F46" }}>
                      {s.tagline}
                    </p>
                    <p className="text-[15px] leading-[1.75] mb-8" style={{ color: "#71717A" }}>
                      {s.body}
                    </p>
                    <ul className="mb-8 border-t" style={{ borderColor: "#E4E4E7" }}>
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="py-3 border-b text-[15px]"
                          style={{ borderColor: "#E4E4E7", color: "#3F3F46" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-6">
                      <ButtonLink href="/book" variant="primary" size="default">Book</ButtonLink>
                      <span className="text-[14px]" style={{ color: "#71717A" }}>{s.duration}</span>
                    </div>
                  </div>
                  {/* Image — right */}
                  <div className="relative w-full lg:w-2/5 shrink-0" style={{ minHeight: "360px" }}>
                    <Image
                      src={s.heroImage}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimateIn>
            </div>
          </section>
        );
      })()}

      {/* ── Retainer — card layout, image left ──────────────────── */}
      {(() => {
        const s = services[2];
        return (
          <section
            id={s.id}
            className="py-20 md:py-28 border-b"
            style={{ background: s.bg, borderColor: "#E4E4E7" }}
          >
            <div className="mx-auto max-w-[1200px] px-6">
              <AnimateIn>
                <div className="rounded-xl overflow-hidden flex flex-col lg:flex-row" style={{ background: "#F5F1EA" }}>
                  {/* Image — left */}
                  <div className="relative w-full lg:w-2/5 shrink-0" style={{ minHeight: "360px" }}>
                    <Image
                      src={s.heroImage}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                  {/* Text panel */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:w-3/5">
                    <h2
                      className="text-[32px] md:text-[44px] font-normal tracking-tight leading-[1.05] mb-4"
                      style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
                    >
                      {s.name}
                    </h2>
                    <p className="text-[18px] leading-relaxed mb-6" style={{ color: "#3F3F46" }}>
                      {s.tagline}
                    </p>
                    <p className="text-[15px] leading-[1.75] mb-8" style={{ color: "#71717A" }}>
                      {s.body}
                    </p>
                    <ul className="mb-8 border-t" style={{ borderColor: "#E4E4E7" }}>
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="py-3 border-b text-[15px]"
                          style={{ borderColor: "#E4E4E7", color: "#3F3F46" }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-6">
                      <ButtonLink href="/book" variant="primary" size="default">Book</ButtonLink>
                      <span className="text-[14px]" style={{ color: "#71717A" }}>{s.duration}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </section>
        );
      })()}

      {/* ── How a sprint runs ───────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <AnimateIn
            as="h2"
            className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-14 md:mb-20 max-w-[640px]"
            style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            How a sprint actually runs.
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            {phases.map(({ label, when, detail }, i) => (
              <AnimateIn key={label} delay={i * 0.08}>
                <p
                  className="text-[13px] mb-4 pb-4 border-b"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    borderColor: "rgba(255,255,255,0.15)",
                  }}
                >
                  {when}
                </p>
                <h3
                  className="text-[22px] md:text-[26px] font-normal tracking-tight leading-snug mb-3"
                  style={{ color: "#ffffff", letterSpacing: "-0.01em" }}
                >
                  {label}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {detail}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        headline="Not sure which engagement is right?"
        body="Thirty minutes, no sales script. A few questions, then a straight answer on what your audit would show."
      />
    </>
  );
}
