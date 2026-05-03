import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn } from "@/components/AnimateIn";

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
    time: "0–5 min",
    desc: "Your business: stage, model, and what's changed recently.",
  },
  {
    time: "5–20 min",
    desc: "Current growth: what's working, what isn't, and where you're stuck.",
  },
  {
    time: "20–30 min",
    desc: "Our read: whether there's a fit, and what we'd expect to find in an audit.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        variant="light"
        title="Book a discovery call."
        subtitle="Thirty minutes. We ask about your growth, you ask about ours. At the end, one of us will know whether there's a fit."
      />

      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: qualifying copy */}
          <AnimateIn>
            <p
              className="text-[16px] leading-[1.75] mb-10"
              style={{ color: "#3F3F46" }}
            >
              This isn't a pitch. We ask about your business, your data, and
              what you've already tried. By the end, we'll tell you whether a
              signal audit makes sense — and if it does, exactly what we'd
              expect to find.
            </p>

            {/* Call structure */}
            <div className="mb-10">
              <p
                className="text-[13px] font-semibold mb-5"
                style={{ color: "#71717A" }}
              >
                How the 30 minutes works
              </p>
              <div className="space-y-0 divide-y" style={{ borderColor: "#E4E4E7" }}>
                {callStructure.map(({ time, desc }) => (
                  <div key={time} className="py-4 grid grid-cols-[80px_1fr] gap-4">
                    <p className="text-[13px] font-semibold pt-0.5" style={{ color: "#5A4FCF" }}>
                      {time}
                    </p>
                    <p className="text-[15px] leading-[1.65]" style={{ color: "#3F3F46" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifying lists */}
            <div className="space-y-8">
              <div>
                <p className="text-[13px] font-semibold mb-4" style={{ color: "#71717A" }}>
                  Right for you if
                </p>
                <ul className="space-y-3">
                  {forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "#3F3F46" }}>
                      <span
                        className="mt-[5px] h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                        style={{ background: "#EAE8FA" }}
                      >
                        <span className="block h-1.5 w-1.5 rounded-full" style={{ background: "#5A4FCF" }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[13px] font-semibold mb-4" style={{ color: "#71717A" }}>
                  Not right for you if
                </p>
                <ul className="space-y-3">
                  {notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px]" style={{ color: "#71717A" }}>
                      <span
                        className="mt-[5px] h-5 w-5 shrink-0 rounded-full flex items-center justify-center"
                        style={{ background: "#F5F1EA" }}
                      >
                        <span className="block h-1.5 w-1.5 rounded-full" style={{ background: "#A1A1AA" }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fallback */}
            <div
              className="mt-10 rounded-lg p-5 border"
              style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
            >
              <p className="text-[14px] leading-[1.65]" style={{ color: "#3F3F46" }}>
                Not ready for a call? Download the free{" "}
                <Link
                  href="/#lead-magnet"
                  className="font-semibold hover:underline"
                  style={{ color: "#5A4FCF" }}
                >
                  Signal Audit Guide
                </Link>{" "}
                — the same framework we use with new clients, adapted for you to run yourself.
              </p>
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={0.1}
            className="bg-white border rounded-lg p-8"
            style={{ borderColor: "#E4E4E7" }}
          >
            <h2
              className="text-[22px] font-semibold mb-2 tracking-tight"
              style={{ color: "#0A0A0A" }}
            >
              Tell us about your situation
            </h2>
            <p className="text-[14px] mb-7" style={{ color: "#71717A" }}>
              We read every submission before replying. If there's a clear fit,
              we'll suggest a time within one business day.
            </p>
            <BookingForm />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
