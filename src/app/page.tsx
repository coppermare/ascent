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
import { BrandVisual } from "@/components/BrandVisual";
import { AboutShader } from "@/components/AboutShader";
import { HeroGrainShader } from "@/components/HeroGrainShader";
import { StatCard } from "@/components/StatCard";
import MagnetLines from "@/components/MagnetLines";
import { HeroImage } from "@/components/HeroImage";
import { LogoLoop } from "@/components/LogoLoop";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Ascent — Find your signal. Sprint to results.",
  description:
    "Ascent is an AI-native growth agency for Series A and B companies. Signal audits, growth sprints, and retainer partnerships. We start from signal, not a playbook.",
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
    image: "/images/stat-card-1.png",
  },
  {
    value: "8 wks",
    label: "From audit findings to agreed results, not a presentation of them",
    image: "/images/stat-card-2.png",
  },
  {
    value: "5",
    label: "Active client engagements at any time. A hard limit, not a target",
    image: "/images/stat-card-3.png",
  },
  {
    value: "0",
    label: "Open-ended retainers. Every engagement closes against a defined result",
    image: "/images/stat-card-4.png",
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
    tag: "FIG-BINOCULARS",
    href: "/services#signal-audit",
    Icon: Binoculars,
    image: "/images/binoculars.png",
  },
  {
    num: "02",
    figure: "Seedling",
    title: "Growth Sprint",
    desc: "Eight weeks. Outcomes agreed before day one, not aspired to. We build and test from week one, adapt from signal in weeks two through four, scale what is working in five through eight. AI handles content at scale and attribution so we move faster than a traditional team can. At close: results against the agreed targets, not a document about them.",
    tag: "FIG-SEEDLING",
    href: "/services#growth-sprint",
    Icon: Rocket,
    image: "/images/growth-sprint.png",
  },
  {
    num: "03",
    figure: "Handshake",
    title: "Retainer Partnership",
    desc: "For clients who hit their sprint targets and want to keep compounding. Quarterly goals, not hours billed. We stay in the data, keep running experiments, and tell you honestly when we are no longer the right partner for your stage.",
    tag: "FIG-HANDSHAKE",
    href: "/services#retainer",
    Icon: ArrowsClockwise,
    image: "/images/retainer-partnership.png",
  },
];

const coverageAreas: { label: string; desc: string; icon: string }[] = [
  {
    label: "Paid acquisition",
    desc: "Channel strategy and targeting logic built from your signal data, not default audience templates.",
    icon: "/images/icons/paid-acquisition.png",
  },
  {
    label: "SEO and organic",
    desc: "Content and structure built around what your buyers actually search.",
    icon: "/images/icons/seo-organic.png",
  },
  {
    label: "Content strategy",
    desc: "Production at scale, anchored to the signals that precede closed deals.",
    icon: "/images/icons/content-strategy.png",
  },
  {
    label: "Email and lifecycle",
    desc: "Sequences that move buyers forward, not just keep you visible.",
    icon: "/images/icons/email-lifecycle.png",
  },
  {
    label: "ICP refinement",
    desc: "Who you should be selling to, defined by who has actually bought.",
    icon: "/images/icons/icp-refinement.png",
  },
  {
    label: "Channel attribution",
    desc: "Every source ranked by revenue contribution, not traffic volume.",
    icon: "/images/icons/channel-attribution.png",
  },
  {
    label: "Conversion optimisation",
    desc: "Remove what slows buyers down. Keep what moves them to yes.",
    icon: "/images/icons/conversion-optimisation.png",
  },
  {
    label: "Account-based marketing",
    desc: "Focused outbound for companies where the ICP is small and known.",
    icon: "/images/icons/account-based-marketing.png",
  },
];


const outcomes: { metric: string; detail: string; shape: 'line' | 'diamond' | 'arrow' }[] = [
  {
    metric: "+3.2× qualified pipeline",
    detail:
      "Series A fintech. Target was 2×. We rebuilt the ICP definition and cut two channels generating volume but not qualified pipeline. Closed the sprint at 3.2×.",
    shape: "line",
  },
  {
    metric: "−28% customer acquisition cost",
    detail:
      "The audit found 60% of paid budget sitting in three channels accounting for less than 15% of closed revenue. Three weeks to reallocate. The CAC drop held at the six-month mark.",
    shape: "line",
  },
  {
    metric: "4× faster sales cycle",
    detail:
      "The content strategy was built for awareness, not conversion. We rebuilt it around the signals that preceded closed deals. Average deal time went from 90 days to 22.",
    shape: "line",
  },
];

const testimonials = [
  {
    quote:
      "The audit was the most useful thing we did that year. We thought we knew where our pipeline came from. We were wrong about two of the top three sources.",
    name: "Sarah Chen",
    role: "VP Growth",
    company: "Series B Fintech",
    image: "/images/testimonials/sarah-chen.png",
  },
  {
    quote:
      "We had three channels we thought were working and two we had written off. After the audit, we shut two of the three and scaled what we had ignored. Pipeline doubled in six weeks.",
    name: "Tom Bergman",
    role: "CEO",
    company: "Series A Developer Tools",
    image: "/images/testimonials/tom-bergman.png",
  },
  {
    quote:
      "We came in thinking we had a conversion problem. The audit showed it was a targeting problem. We weren't reaching the buyers who would actually close. Fixing that changed everything.",
    name: "Priya Nair",
    role: "Head of Marketing",
    company: "Series B SaaS",
    image: "/images/testimonials/priya-nair.png",
  },
  {
    quote:
      "Six months in and the retainer still pays for itself every month. The sprint gave us a repeatable system. We stopped guessing which campaigns to run and started following the data.",
    name: "James Okafor",
    role: "Co-founder",
    company: "Series A Marketplace",
    image: "/images/testimonials/james-okafor.png",
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
    label: "Of clients who hit sprint targets and were offered a retainer chose to continue",
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
    a: "Most agencies use the same playbooks with AI bolted on top. We start from signal: the audit maps what's actually driving revenue, then AI lets us execute at a speed and precision a traditional team can't match. Our engagement ends when we hit the agreed target — we have no incentive to extend it.",
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
      <section className="relative overflow-hidden -mt-16 pt-32 md:pt-40 pb-0" style={{ background: "#000000" }}>
        <HeroGrainShader />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <div className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <h1
              className="text-[38px] md:text-[52px] lg:text-[68px] font-normal leading-[1.05] tracking-[-0.03em] mb-6 lg:mb-0"
              style={{ color: "#ffffff" }}
            >
              Every ascent starts with a signal &mdash; we find yours.
            </h1>
            <p
              className="text-[18px] leading-relaxed max-w-[360px] lg:pt-3 lg:shrink-0"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              We audit first, define outcomes before week one, and only
              take clients we can grow.
            </p>
          </div>

          <HeroImage />
        </div>
      </section>

      {/* ── Client bar ───────────────────────────────────────────── */}
      <section
        className="py-14 overflow-hidden"
        style={{ background: "#000000" }}
      >
        <LogoLoop
          logos={clientLogos.map(({ name, Mark }) => ({
            node: (
              <div className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                <Mark />
                <span className="text-[18px] font-semibold">{name}</span>
              </div>
            ),
            title: name,
          }))}
          speed={60}
          direction="left"
          logoHeight={24}
          gap={72}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Trusted clients"
        />
      </section>

      {/* ── Brand Visual ─────────────────────────────────────────── */}
      <BrandVisual />

      {/* ── Visual Statement ─────────────────────────────────────── */}
      <section className="overflow-hidden" style={{ background: "#0A0A0A" }}>
        {/* Text row */}
        <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[56px] font-normal tracking-tight leading-[1.05]"
              style={{ color: "#ffffff" }}
            >
              Most growth data is noise.
            </AnimateIn>
            <AnimateIn delay={0.1}
              className="text-[17px] leading-relaxed lg:pb-2"
              style={{ color: "rgba(255,255,255,0.7)" }}
              as="p"
            >
              Your data already holds the answer. The problem is that no one
              has ranked which signals precede closed revenue and which are
              just noise. The companies we work with have typically been
              funding the wrong channels for over a year before we find
              what&rsquo;s working.
            </AnimateIn>
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
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-x-16 gap-y-5 md:items-start">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] md:col-start-1 md:row-start-1"
              style={{ color: "#0A0A0A" }}
            >
              The sequence is the strategy.
            </AnimateIn>
            <AnimateIn delay={0.1}
              className="text-[17px] leading-relaxed md:col-start-2 md:row-start-1 md:row-span-2 md:pt-1"
              style={{ color: "#3F3F46" }}
              as="p"
            >
              We audit before we touch your budget. We sprint before we
              retain. Every step qualifies the next, so nothing gets built
              on an assumption.
            </AnimateIn>
            <div className="md:col-start-1 md:row-start-2">
              <ButtonLink href="/services" variant="primary" size="default">
                Full details
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ num, title, desc, tag, image }) => (
              <div key={num} className="flex flex-col pt-6 border-t" style={{ borderColor: "#E4E4E7" }}>
                <p
                  className="text-[12px] font-medium mb-4"
                  style={{ color: "#5A4FCF", fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {tag}
                </p>
                {image && (
                  <div className="relative w-full aspect-[4/3] mb-5 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3
                  className="text-[20px] font-normal tracking-tight mb-3"
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
        className="py-16 md:py-24"
        style={{ background: "#F5F1EA" }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 md:mb-16 max-w-[480px]">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              The engagement in numbers.
            </AnimateIn>
            <AnimateIn delay={0.1} as="p" className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Fixed timelines. Defined scope. No open-ended retainers until
              results are on the table.
            </AnimateIn>
          </div>
          <div className="stat-row">
            {engagementStats.map(({ value, label, image }) => (
              <StatCard key={value} value={value} label={label} image={image} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 md:mb-16 rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* Image — 3:4 portrait with heading overlaid top-left */}
            <div className="relative w-full md:w-[50%] shrink-0 aspect-[3/4]">
              <img
                src="/images/quote-bg.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-start"
                style={{ background: "linear-gradient(to bottom, rgba(90,79,207,0.7) 0%, transparent 60%)" }}
              >
                <h2
                  className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.05] mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Closed results,<br />not forecasts.
                </h2>
                <p className="text-[13px] leading-relaxed max-w-[260px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Three engagements from the last 18 months. Targets were set before week one. These are what the data showed at close.
                </p>
              </div>
            </div>
            {/* Quote text */}
            <div
              className="flex flex-col justify-end p-6 md:p-14"
              style={{ background: "#5A4FCF" }}
            >
              <blockquote
                className="text-[28px] md:text-[38px] font-normal leading-[1.1] mb-8"
                style={{ color: "#FFFFFF" }}
              >
                &ldquo;We had been running ads for two years. The signal audit
                found a content channel responsible for 40% of our pipeline.
                It had been completely untracked.&rdquo;
              </blockquote>
              <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                Head of Growth, Series B SaaS
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 md:mb-16 max-w-[480px]">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#ffffff" }}
            >
              Three targets. All hit.
            </AnimateIn>
            <AnimateIn delay={0.1} as="p" className="text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Defined before week one. Measured at close.
            </AnimateIn>
          </div>

          <StaggerIn className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {outcomes.map(({ metric, detail, shape }) => (
              <div key={metric}>
                <MagnetLines
                  rows={6}
                  columns={12}
                  containerSize="100%"
                  lineColor="#5A4FCF"
                  lineWidth="2px"
                  lineHeight="14px"
                  baseAngle={0}
                  shape={shape}
                  style={{ width: "100%", height: "140px", marginBottom: "24px" }}
                />
                <p
                  className="text-[38px] md:text-[46px] font-normal tracking-tight leading-[1.05] mb-3"
                  style={{ color: "#ffffff" }}
                >
                  {metric}
                </p>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ── Coverage Areas ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div
          className="mx-auto max-w-[1200px] overflow-hidden rounded-xl py-12 md:py-20"
          style={{
            backgroundImage: "url('/images/channels-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-6 md:px-12 mb-16">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              Every channel, in scope.
            </AnimateIn>
            <AnimateIn delay={0.1} as="p" className="text-[17px] leading-relaxed max-w-[520px]" style={{ color: "#3F3F46" }}>
              Every engagement starts from signal, not a preferred playbook.
              The audit tells us where to spend your time and budget. These
              are the levers we look at. The data determines which ones to pull.
            </AnimateIn>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="relative mb-4 overflow-hidden">
            <div className="flex animate-carousel-left" style={{ width: "max-content" }}>
              {[...coverageAreas.slice(0, 4), ...coverageAreas.slice(0, 4), ...coverageAreas.slice(0, 4), ...coverageAreas.slice(0, 4)].map(({ label, icon }, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex items-center gap-3 rounded-lg px-5 py-4 shrink-0"
                  style={{ background: "#FFFFFF", width: 220, marginRight: 16 }}
                >
                  <img src={icon} alt={label} className="w-11 h-11 shrink-0 object-contain" />
                  <p className="text-[14px] font-semibold" style={{ color: "#0A0A0A" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-carousel-right" style={{ width: "max-content" }}>
              {[...coverageAreas.slice(4), ...coverageAreas.slice(4), ...coverageAreas.slice(4), ...coverageAreas.slice(4)].map(({ label, icon }, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex items-center gap-3 rounded-lg px-5 py-4 shrink-0"
                  style={{ background: "#FFFFFF", width: 220, marginRight: 16 }}
                >
                  <img src={icon} alt={label} className="w-11 h-11 shrink-0 object-contain" />
                  <p className="text-[14px] font-semibold" style={{ color: "#0A0A0A" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 md:mb-16 max-w-[480px]">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#0A0A0A" }}
            >
              In their words.
            </AnimateIn>
            <AnimateIn delay={0.1} as="p" className="text-[17px] leading-relaxed" style={{ color: "#3F3F46" }}>
              From clients who ran a sprint or audit with us. Shared with
              permission. No editing, no polish.
            </AnimateIn>
          </div>

          <div className="testimonial-row">
            {testimonials.map(({ quote, name, role, company, image }) => (
              <div
                key={name}
                className="testimonial-card rounded-lg"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                {/* Bottom gradient for text legibility */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to top, rgba(90,79,207,0.85) 0%, rgba(90,79,207,0.25) 50%, transparent 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Expanded state — text pinned to bottom */}
                <figure className="t-expanded absolute inset-0 flex flex-col justify-end p-6" style={{ zIndex: 4 }}>
                  <blockquote className="t-quote text-[16px] leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.92)" }}>
                    {quote}
                  </blockquote>
                  <figcaption>
                    <p className="t-name text-[14px] font-semibold" style={{ color: "#FFFFFF" }}>
                      {name}
                    </p>
                    <p className="t-meta text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {role} &middot; {company}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Team ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: "#0A0A0A" }}
      >
        <AboutShader />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <AnimateIn as="h2"
                className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-6"
                style={{ color: "#ffffff" }}
              >
                Built by operators.
                <br />
                Not strategists.
              </AnimateIn>
              <AnimateIn delay={0.1} as="p"
                className="text-[17px] leading-relaxed mb-5 max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Ascent is a small team of practitioners who ran growth inside
                venture-backed companies before building this. We know what
                misread data costs &mdash; we&rsquo;ve paid that price
                ourselves. We use AI to find what instinct misses and move
                faster than any traditional team can.
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <ButtonLink href="/about" variant="inverted" size="default">
                  About us
                </ButtonLink>
              </AnimateIn>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {teamStats.map(({ value, label }) => (
                <div key={value} className="p-0">
                  <p
                    className="text-[56px] md:text-[64px] font-normal tracking-[-0.03em] leading-none mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-[13px] leading-snug"
                    style={{ color: "rgba(255,255,255,0.7)" }}
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
      <section className="py-16 md:py-24" style={{ background: "#F5F1EA" }}>
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.05]"
              style={{ color: "#0A0A0A" }}
            >
              Questions we hear most.
            </h2>
            <ButtonLink href="/book" variant="primary" size="default">
              Book
            </ButtonLink>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Lead Magnet ──────────────────────────────────────────── */}
      <section id="lead-magnet" className="py-16 md:py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div
          className="relative mx-auto max-w-[1200px] overflow-hidden rounded-xl py-12 px-6 md:py-24 md:px-16"
          style={{ backgroundImage: "url('/images/audit-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)" }} />
          <div className="relative max-w-[720px]">
            <AnimateIn as="h2"
              className="text-[30px] md:text-[52px] font-normal tracking-tight leading-[1.1] mb-4"
              style={{ color: "#ffffff" }}
            >
              Run the audit yourself.
            </AnimateIn>
            <AnimateIn delay={0.1} as="p"
              className="text-[17px] leading-relaxed mb-10 max-w-[480px]"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              The exact diagnostic we run on every new client, adapted so
              founders and growth leads can run it without us. Twelve pages.
              Most people find at least one channel they have been misreading.
            </AnimateIn>

            <EmailCapture />
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
