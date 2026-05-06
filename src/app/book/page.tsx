import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn } from "@/components/AnimateIn";
import { Check, X } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Book — Ascent",
  description:
    "Schedule 30 minutes with Ascent. We'll ask a few questions, tell you what we'd find in a signal audit, and recommend the right starting point.",
};

const forYou = [
  "Series A or B, product-market fit confirmed, pipeline growth stalled",
  "CAC is rising and you can't pinpoint which channel is responsible",
  "You've tried agencies before and the numbers didn't move",
  "You want to know what the data actually says before you change anything",
];

const notForYou = [
  "Pre-revenue, or still working out what you're selling",
  "Need execution in a single channel without strategic context",
  "Not in a position to share attribution data and analytics access",
];

const callStructure = [
  {
    step: "01",
    title: "Your business",
    desc: "Stage, model, what's changed in the last two quarters.",
  },
  {
    step: "02",
    title: "Current growth",
    desc: "What's working, what isn't, where you're stuck.",
  },
  {
    step: "03",
    title: "Our read",
    desc: "Whether there's a fit, and what we'd expect an audit to surface.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        variant="dark"
        staticShader
        title="Thirty minutes. Straight answer."
        subtitle="No deck, no sales script. We ask about your growth, you ask about ours. By the end, one of us knows whether there's a fit."
      />

      {/* ── Form + qualifying copy ──────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          {/* Left: qualifying copy */}
          <AnimateIn>
            <p
              className="text-[18px] leading-[1.7] mb-12"
              style={{ color: "#3F3F46" }}
            >
              This isn&rsquo;t a pitch. We ask about your business, your data,
              and what you&rsquo;ve already tried. By the end, we&rsquo;ll tell
              you whether a signal audit makes sense — and if it does, what
              we&rsquo;d expect to find.
            </p>

            {/* Call structure — editorial, no chips */}
            <div className="mb-14">
              <h2
                className="text-[20px] font-normal tracking-tight mb-6"
                style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
              >
                How the call runs
              </h2>
              <ol>
                {callStructure.map(({ step, title, desc }, i) => (
                  <li
                    key={step}
                    className="grid grid-cols-[40px_1fr] gap-5 py-5"
                    style={{
                      borderTop: "1px solid #E4E4E7",
                      borderBottom: i === callStructure.length - 1 ? "1px solid #E4E4E7" : undefined,
                    }}
                  >
                    <span
                      className="text-[13px] tabular-nums pt-0.5"
                      style={{ color: "#A1A1AA" }}
                    >
                      {step}
                    </span>
                    <div>
                      <p className="text-[16px] mb-1" style={{ color: "#0A0A0A" }}>
                        {title}
                      </p>
                      <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right for you / Not right for you */}
            <div className="space-y-10">
              <div>
                <h3
                  className="text-[20px] font-normal tracking-tight mb-5"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                >
                  Right for you if
                </h3>
                <ul>
                  {forYou.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-3.5"
                      style={{
                        borderTop: "1px solid #E4E4E7",
                        borderBottom: i === forYou.length - 1 ? "1px solid #E4E4E7" : undefined,
                      }}
                    >
                      <Check
                        size={18}
                        weight="bold"
                        style={{ color: "#5A4FCF", flexShrink: 0, marginTop: "3px" }}
                      />
                      <p className="text-[15px] leading-[1.6]" style={{ color: "#3F3F46" }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className="text-[20px] font-normal tracking-tight mb-5"
                  style={{ color: "#0A0A0A", letterSpacing: "-0.01em" }}
                >
                  Not right for you if
                </h3>
                <ul>
                  {notForYou.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-3.5"
                      style={{
                        borderTop: "1px solid #E4E4E7",
                        borderBottom: i === notForYou.length - 1 ? "1px solid #E4E4E7" : undefined,
                      }}
                    >
                      <X
                        size={18}
                        weight="bold"
                        style={{ color: "#A1A1AA", flexShrink: 0, marginTop: "3px" }}
                      />
                      <p className="text-[15px] leading-[1.6]" style={{ color: "#71717A" }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fallback — editorial line, no callout box */}
            <p
              className="mt-12 text-[14px] leading-[1.65]"
              style={{ color: "#71717A" }}
            >
              Not ready for a call? Read the{" "}
              <Link
                href="/#lead-magnet"
                className="underline underline-offset-2"
                style={{ color: "#0A0A0A" }}
              >
                Signal Audit Guide
              </Link>{" "}
              — the same framework we use with new clients, written for you to run yourself.
            </p>
          </AnimateIn>

          {/* Right: form in a card */}
          <AnimateIn delay={0.1}>
            <div
              className="lg:sticky lg:top-24 rounded-xl p-8 md:p-10"
              style={{ background: "#ffffff", border: "1px solid #E4E4E7" }}
            >
              <h2
                className="text-[24px] md:text-[28px] font-normal tracking-tight mb-2"
                style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
              >
                Tell us about your situation.
              </h2>
              <p className="text-[14px] mb-8" style={{ color: "#71717A" }}>
                We read every submission before replying. Expect a real answer
                within one business day.
              </p>
              <BookingForm />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
