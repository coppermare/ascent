import type { Metadata } from "next";
import React from "react";
import {
  Binoculars,
  Rocket,
  ArrowsClockwise,
  CurrencyDollar,
  MagnifyingGlass,
  Article,
  EnvelopeSimple,
  Funnel,
  ChartBar,
  TrendUp,
  Buildings,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ClosingCTA } from "@/components/ClosingCTA";
import { EmailCapture } from "@/components/EmailCapture";
import { ButtonLink } from "@/components/Button";
import { HeroShader } from "@/components/HeroShader";
import { SectionShader } from "@/components/SectionShader";
import { BrandVisual } from "@/components/BrandVisual";
import { GrainGradient } from "@paper-design/shaders-react";
import { StatCard } from "@/components/StatCard";

export const metadata: Metadata = {
  title: "Ascent — Find your signal. Sprint to results.",
  description:
    "Ascent maps every growth signal in your business, cuts what is not working, and builds from what is. Signal audits, growth sprints, and retainer partnerships for Series A and B companies.",
};

const clientLogos: { name: string; Mark: () => React.ReactElement }[] = [
  {
    name: "Linear",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="m12 1.608 12 20.784H0Z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
      </svg>
    ),
  },
  {
    name: "Intercom",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z" />
      </svg>
    ),
  },
  {
    name: "Loom",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z" />
      </svg>
    ),
  },
  {
    name: "Mixpanel",
    Mark: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.967 9.996h3.053c-.763-.477-1.048-1.145-1.431-2.384L7.443 3.366C6.919 1.458 6.49.551 4.39.551H.004v1.145h.621c1.286 0 1.431.477 1.814 1.908L3.44 7.326c.524 1.814 1.337 2.67 3.53 2.67h-.003Zm7.06 0h3.053c2.194 0 2.956-.86 3.484-2.67l1.001-3.722c.382-1.431.57-1.908 1.814-1.908H24V.551h-4.34c-2.146 0-2.576.86-3.053 2.815l-1.145 4.246c-.384 1.286-.673 1.907-1.435 2.384Zm-4.007 4.008h4.007V9.996H10.02v4.008ZM0 23.449h4.39c2.1 0 2.529-.907 3.053-2.815l1.146-4.246c.383-1.239.668-1.907 1.431-2.384H6.967c-2.194 0-3.007.86-3.531 2.67l-1.001 3.722c-.383 1.431-.524 1.907-1.814 1.907H0v1.146Zm19.65 0h4.343v-1.146h-.622c-1.239 0-1.431-.476-1.814-1.907l-1.001-3.722c-.524-1.814-1.286-2.67-3.483-2.67h-3.046c.762.477 1.041 1.098 1.424 2.384l1.145 4.246c.477 1.955.907 2.815 3.054 2.815Z" />
      </svg>
    ),
  },
];

const engagementStats = [
  {
    value: "5 days",
    label: "To complete the signal audit and rank every channel by revenue impact",
  },
  {
    value: "8 wks",
    label: "From audit findings to agreed results — not a presentation of them",
  },
  {
    value: "≤5",
    label: "Active client engagements at any time. A hard limit, not a target",
  },
  {
    value: "0",
    label: "Open-ended retainers. Every engagement closes against a defined result",
  },
];

const services: {
  num: string;
  figure?: string;
  title: string;
  desc: string;
  tag: string;
  href: string;
  Icon: Icon;
  image?: string;
}[] = [
  {
    num: "01",
    figure: "Binoculars",
    title: "Signal Audit",
    desc: "Five days to map your entire growth picture. Every channel, every conversion path, every spend category ranked by its actual revenue contribution. Most clients find at least one channel they have been overfunding and one they did not know was working.",
    tag: "5 days",
    href: "/services#signal-audit",
    Icon: Binoculars,
    image: "/images/binoculars.png",
  },
  {
    num: "02",
    figure: "Seedling",
    title: "Growth Sprint",
    desc: "Eight weeks. Outcomes agreed before day one, not aspired to. We build and test from week one, adapt from signal in weeks two through four, scale what is working in five through eight. At close: results against the agreed targets, not a document about them.",
    tag: "8 weeks",
    href: "/services#growth-sprint",
    Icon: Rocket,
    image: "/images/growth-sprint.png",
  },
  {
    num: "03",
    figure: "Handshake",
    title: "Retainer Partnership",
    desc: "For clients who hit their sprint targets and want to keep compounding. Quarterly goals, not hours billed. We stay in the data, keep running experiments, and tell you honestly when we are no longer the right partner for your stage.",
    tag: "Post-sprint only",
    href: "/services#retainer",
    Icon: ArrowsClockwise,
    image: "/images/retainer-partnership.png",
  },
];

const coverageAreas: { label: string; desc: string; Icon: Icon }[] = [
  {
    label: "Paid acquisition",
    desc: "Search, social, and programmatic targeted by signal, not assumption.",
    Icon: CurrencyDollar,
  },
  {
    label: "SEO and organic",
    desc: "Content and structure built around what your buyers actually search.",
    Icon: MagnifyingGlass,
  },
  {
    label: "Content strategy",
    desc: "Production at scale, anchored to the signals that precede closed deals.",
    Icon: Article,
  },
  {
    label: "Email and lifecycle",
    desc: "Sequences that move buyers forward, not just keep you visible.",
    Icon: EnvelopeSimple,
  },
  {
    label: "ICP refinement",
    desc: "Who you should be selling to, defined by who has actually bought.",
    Icon: Funnel,
  },
  {
    label: "Channel attribution",
    desc: "Every source ranked by revenue contribution, not traffic volume.",
    Icon: ChartBar,
  },
  {
    label: "Conversion optimisation",
    desc: "Remove what slows buyers down. Keep what moves them to yes.",
    Icon: TrendUp,
  },
  {
    label: "Account-based marketing",
    desc: "Focused outbound for companies where the ICP is small and known.",
    Icon: Buildings,
  },
];


const outcomes = [
  {
    metric: "+3.2× qualified pipeline",
    detail:
      "Series A fintech. Target was 2×. We rebuilt the ICP definition and cut two channels generating volume but not qualified pipeline. Closed the sprint at 3.2×.",
  },
  {
    metric: "−28% customer acquisition cost",
    detail:
      "The audit found 60% of paid budget sitting in three channels accounting for less than 15% of closed revenue. Three weeks to reallocate. The CAC drop held at the six-month mark.",
  },
  {
    metric: "4× faster sales cycle",
    detail:
      "The content strategy was built for awareness, not conversion. We rebuilt it around the signals that preceded closed deals. Average deal time went from 90 days to 22.",
  },
];

const testimonials = [
  {
    quote:
      "The audit was the most useful thing we did that year. We thought we knew where our pipeline came from. We were wrong about two of the top three sources.",
    name: "Sarah Chen",
    role: "VP Growth",
    company: "Series B Fintech",
  },
  {
    quote:
      "We had three channels we thought were working and two we had written off. After the audit, we shut two of the three and scaled what we had ignored. Pipeline doubled in six weeks.",
    name: "Tom Bergman",
    role: "CEO",
    company: "Series A Developer Tools",
  },
];

const teamStats = [
  {
    value: "12+",
    label: "Years combined operator experience at venture-backed companies",
  },
  {
    value: "3",
    label: "Senior practitioners on every engagement, not handed to juniors",
  },
  {
    value: "5",
    label: "Maximum active client engagements at any time, by design",
  },
  {
    value: "100%",
    label: "Of post-sprint clients offered a retainer chose to continue",
  },
];

const faqs = [
  {
    q: "Do I need a Signal Audit before a Growth Sprint?",
    a: "Yes. Every sprint begins from audit findings. If you haven't worked with us before, the audit runs in week one of the sprint at no additional cost.",
  },
  {
    q: "What does 'defined outcomes' actually mean?",
    a: "Before the sprint starts, we agree on a specific, measurable target. Not a directional goal. A number. We hold ourselves against it at close and tell you exactly how we got there.",
  },
  {
    q: "How is this different from a traditional growth agency?",
    a: "Most agencies optimise for retained hours. Our engagement structure ends when we hit the target. We have no incentive to extend the work beyond what was agreed.",
  },
  {
    q: "What stage are you right for?",
    a: "Series A and B. You need product-market fit and some traction. We help companies who are growing but don't know why, or who have hit a ceiling they can't explain.",
  },
  {
    q: "How many clients do you work with at once?",
    a: "Five or fewer. We limit active engagements deliberately. If we're at capacity when you reach out, we'll tell you and give you a realistic start date.",
  },
  {
    q: "Can I start with just the Signal Audit?",
    a: "Yes. The audit is available as a standalone engagement. Many clients run it before deciding whether a sprint is the right next step.",
  },
];

const frameworkItems = [
  "Channel attribution mapping",
  "Revenue signal scoring",
  "Budget allocation analysis",
  "Sprint readiness checklist",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden -mt-16 py-40 md:py-52 px-6">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
<div className="relative mx-auto max-w-[1200px]">
          <h1
            className="text-[44px] md:text-[62px] lg:text-[76px] font-bold leading-[1.0] tracking-[-0.03em] max-w-[740px] mb-8"
            style={{ color: "#ffffff" }}
          >
            You&rsquo;re growing.
            <br />
            You just don&rsquo;t know why.
          </h1>
          <p
            className="text-[18px] md:text-[20px] leading-relaxed max-w-[460px] mb-10"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            We find what&rsquo;s actually driving your revenue and what
            isn&rsquo;t. Then we build from it. Series A and B only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/book" variant="inverted" size="lg">
              Book a call
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ── Client bar ───────────────────────────────────────────── */}
      <section
        className="py-14 px-6 border-b"
        style={{ background: "#FAF9F6", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <p
            className="text-[13px] text-center mb-8"
            style={{ color: "#A1A1AA" }}
          >
            Trusted by growth teams at Series A and B companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {clientLogos.map(({ name, Mark }) => (
              <div
                key={name}
                className="flex items-center gap-2.5"
                style={{ color: "#BCBCC2" }}
              >
                <Mark />
                <span className="text-[15px] font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Visual ─────────────────────────────────────────── */}
      <BrandVisual />

      {/* ── Visual Statement ─────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: "#0A0A0A" }}>
        {/* Text row */}
        <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
            <h2
              className="text-[44px] md:text-[56px] font-normal tracking-tight leading-[1.05]"
              style={{ color: "#ffffff" }}
            >
              You&rsquo;re reading the wrong signals.
            </h2>
            <p
              className="text-[17px] leading-relaxed lg:pb-2"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Not because you lack data. Because no one has looked at which data
              actually precedes closed revenue — and which is just noise. Most
              clients arrive having confidently funded the wrong channels for 12
              months or more.
            </p>
          </div>
        </div>

        {/* Image */}
        {/* Replace src with generated image.
            Prompt: "Wide aerial photograph of a murmuration of starlings mid-formation
            — a dense, shifting mass of thousands of birds twisting against a pale grey
            sky. Shot on large format film. Heavy grain. Desaturated base with a deep
            indigo #5A4FCF cast pulled into the darker mass areas. No ground visible.
            The formation reads as a single organism made of ten thousand parts." */}
        <div className="relative w-full" style={{ height: "520px" }}>
          <img
            src="/images/visual-statement.png"
            alt="Astronaut standing at the edge of a diagonal beam of light"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0A0A0A 0%, transparent 20%)",
            }}
          />
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-x-16 gap-y-5 md:items-start">
            <h2
              className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] md:col-start-1 md:row-start-1"
              style={{ color: "#0A0A0A" }}
            >
              The sequence is the strategy.
            </h2>
            <p
              className="text-[17px] leading-relaxed md:col-start-2 md:row-start-1 md:row-span-2 md:pt-1"
              style={{ color: "#3F3F46" }}
            >
              We audit before we touch your budget. We sprint before we
              retain. Every step qualifies the next — so nothing gets built
              on an assumption.
            </p>
            <div className="md:col-start-1 md:row-start-2">
              <ButtonLink href="/services" variant="primary" size="sm">
                Full details
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l" style={{ borderColor: "#E4E4E7" }}>
            {services.map(({ num, title, desc, tag, image }) => (
              <div key={num} className="flex flex-col border-r border-b p-6" style={{ borderColor: "#E4E4E7" }}>
                <p
                  className="text-[11px] font-semibold mb-4 tracking-widest uppercase"
                  style={{ color: "#5A4FCF", fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {tag}
                </p>
                {image && (
                  <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3
                  className="text-[22px] font-bold tracking-tight mb-3"
                  style={{ color: "#0A0A0A" }}
                >
                  {title}
                </h3>
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
      </section>

      {/* ── Engagement Stats ─────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ background: "#f5f1ea" }}
      >
        <GrainGradient
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0 }}
          colors={["#f5f1ea", "#c5c0f0", "#f5f1ea"]}
          colorBack="#f5f1ea"
          softness={1}
          intensity={0.5}
          noise={0.14}
          shape="wave"
          speed={0.4}
          scale={1.2}
          offsetY={0.15}
        />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-16 max-w-[480px]">
            <h2
              className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              The engagement in numbers.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Fixed timelines. Defined scope. No open-ended retainers until
              results are on the table.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementStats.map(({ value, label }) => (
              <StatCard key={value} value={value} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 max-w-[480px]">
            <h2
              className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              Closed results, not forecasts.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Three engagements from the last 18 months. Targets were set
              before week one. These are what the data showed at close.
            </p>
          </div>

          <div
            className="mb-16 border-l-4 pl-8 max-w-[760px]"
            style={{ borderColor: "#5A4FCF" }}
          >
            <blockquote
              className="text-[22px] md:text-[26px] font-semibold leading-snug mb-5"
              style={{ color: "#0A0A0A" }}
            >
              &ldquo;We had been running ads for two years. The signal audit
              found a content channel responsible for 40% of our pipeline.
              It had been completely untracked.&rdquo;
            </blockquote>
            <p className="text-[14px]" style={{ color: "#71717A" }}>
              Head of Growth, Series B SaaS
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t"
            style={{ borderColor: "#E4E4E7" }}
          >
            {outcomes.map(({ metric, detail }) => (
              <div key={metric}>
                <p
                  className="text-[26px] font-bold tracking-tight mb-3"
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

      {/* ── Coverage Areas ───────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
            <h2
              className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1]"
              style={{ color: "#0A0A0A" }}
            >
              Every channel, in scope.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Every engagement starts from signal, not a preferred playbook.
              The audit tells us where to spend your time and budget. These
              are the levers we look at — the data determines which ones to pull.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {coverageAreas.map(({ label, desc, Icon: AreaIcon }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded shrink-0 flex items-center justify-center"
                  style={{ background: "#EAE8FA", border: "1px solid #D4CFFE" }}
                >
                  <AreaIcon size={18} weight="duotone" color="#5A4FCF" />
                </div>
                <div>
                  <p
                    className="text-[15px] font-semibold mb-1"
                    style={{ color: "#0A0A0A" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-[13px] leading-snug"
                    style={{ color: "#71717A" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 max-w-[480px]">
            <h2
              className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              In their words.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              From clients who ran a sprint or audit with us. Shared with
              permission. No editing, no polish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, name, role, company }) => (
              <div
                key={name}
                className="flex flex-col rounded-md border p-8"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#E4E4E7",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-9 h-9 rounded mb-6 shrink-0 flex items-center justify-center"
                  style={{ background: "#EAE8FA" }}
                >
                  <Quotes size={18} weight="fill" color="#5A4FCF" />
                </div>
                <p
                  className="text-[16px] leading-relaxed flex-1 mb-8"
                  style={{ color: "#0A0A0A" }}
                >
                  {quote}
                </p>
                <div
                  className="flex items-center gap-3 pt-6 border-t"
                  style={{ borderColor: "#E4E4E7" }}
                >
                  <div
                    className="w-10 h-10 rounded-full shrink-0"
                    style={{ background: "#EAE8FA" }}
                  />
                  <div>
                    <p
                      className="text-[14px] font-semibold"
                      style={{ color: "#0A0A0A" }}
                    >
                      {name}
                    </p>
                    <p className="text-[13px]" style={{ color: "#71717A" }}>
                      {role} &middot; {company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Team ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ background: "#0A0A0A" }}
      >
        <HeroShader />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h2
                className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-6"
                style={{ color: "#ffffff" }}
              >
                Built by operators.
                <br />
                Not strategists.
              </h2>
              <p
                className="text-[17px] leading-relaxed mb-5 max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Ascent is a small team of practitioners who ran growth from
                inside Series A and B companies before building this. We know
                what the data looks like when it&rsquo;s being read wrong,
                because we have read it wrong ourselves.
              </p>
              <p
                className="text-[17px] leading-relaxed mb-10 max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Every engagement is led by the same people you speak to on the
                first call. There are no account managers. There is no handoff
                after the pitch.
              </p>
              <ButtonLink href="/about" variant="onInverse" size="default">
                About the team
              </ButtonLink>
            </div>

            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {teamStats.map(({ value, label }) => (
                <div key={value} className="p-8" style={{ background: "#0A0A0A" }}>
                  <p
                    className="text-[40px] font-bold tracking-[-0.04em] leading-none mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[13px] leading-snug"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
            <div className="lg:sticky lg:top-24 self-start">
              <h2
                className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
                style={{ color: "#0A0A0A" }}
              >
                Questions we hear most.
              </h2>
              <p
                className="text-[17px] leading-relaxed mb-8"
                style={{ color: "#3F3F46" }}
              >
                If something isn&rsquo;t answered here, ask it on the call.
                That&rsquo;s what the call is for.
              </p>
              <ButtonLink href="/book" variant="primary" size="default">
                Book a call
              </ButtonLink>
            </div>

            <div>
              {faqs.map(({ q, a }, i) => (
                <div
                  key={q}
                  className={`py-8 ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: "#E4E4E7" }}
                >
                  <h3
                    className="text-[18px] font-bold tracking-tight mb-3"
                    style={{ color: "#0A0A0A" }}
                  >
                    {q}
                  </h3>
                  <p
                    className="text-[16px] leading-relaxed max-w-[600px]"
                    style={{ color: "#3F3F46" }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead Magnet ──────────────────────────────────────────── */}
      <section
        id="lead-magnet"
        className="relative overflow-hidden py-24 px-6"
        style={{ background: "#EAE8FA" }}
      >
        <SectionShader
          colors={["#EAE8FA", "#D4CFFE"]}
          colorBack="#BBB5FA"
          shape="ripple"
          intensity={0.45}
          noise={0.28}
          speed={0.22}
          softness={0.82}
          scale={1.15}
          offsetY={0.1}
        />
        <div className="relative mx-auto max-w-[720px] text-center">
          <h2
            className="text-[44px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
            style={{ color: "#0A0A0A" }}
          >
            Run the audit yourself.
          </h2>
          <p
            className="text-[17px] leading-relaxed mb-10 max-w-[480px] mx-auto"
            style={{ color: "#3F3F46" }}
          >
            The exact diagnostic we run on every new client, adapted so
            founders and growth leads can use it without us. Twelve pages.
            Most people find something they were not expecting.
          </p>

          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10 max-w-[400px] mx-auto text-left">
            {frameworkItems.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: "#5A4FCF" }}
                />
                <span className="text-[14px]" style={{ color: "#3F3F46" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <EmailCapture />
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
