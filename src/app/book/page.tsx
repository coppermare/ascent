import Link from "next/link";
import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book — Ascent",
  description:
    "Schedule 30 minutes with Ascent. We'll ask a few questions, tell you what we'd find in a signal audit, and recommend the right starting point.",
};

const forYou = [
  "You're at Series A or B with product-market fit and a growth challenge",
  "Pipeline has stalled or slowed and you're not sure which lever to pull",
  "You've tried traditional agencies and need a different approach",
  "You want to understand what AI-native growth looks like in practice",
];

const notForYou = [
  "You're pre-revenue or haven't found product-market fit yet",
  "You want a full-service marketing agency to manage a single channel",
  "You're looking for freelance execution without strategic oversight",
];

const callStructure = [
  {
    time: "0–5 min",
    desc: "We ask about your business: stage, model, current growth, and what's changed recently.",
  },
  {
    time: "5–20 min",
    desc: "You walk us through what's working and what isn't. We ask specific questions about your channels, attribution, and spend.",
  },
  {
    time: "20–30 min",
    desc: "We tell you what we'd look for in a signal audit, whether we think there's a fit, and what we'd recommend as a starting point.",
  },
];

export default function BookPage() {
  return (
    <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left: qualifying copy */}
        <div>
          <p
            className="text-[12px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ color: "#5A4FCF" }}
          >
            Book
          </p>
          <h1
            className="text-[36px] md:text-[40px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Let's find out if we're the right fit.
          </h1>
          <p
            className="text-[17px] leading-relaxed mb-10"
            style={{ color: "#3F3F46" }}
          >
            This is a 30-minute call. We don't pitch on it. We ask about your
            current growth, what's working, and what you've tried. At the end,
            we'll tell you whether we think a signal audit makes sense and what
            we'd expect to find.
          </p>

          {/* Call structure */}
          <div className="mb-10">
            <p
              className="text-[13px] font-bold tracking-[0.08em] uppercase mb-5"
              style={{ color: "#71717A" }}
            >
              How the 30 minutes works
            </p>
            <div className="space-y-0 divide-y" style={{ borderColor: "#E4E4E7" }}>
              {callStructure.map(({ time, desc }) => (
                <div key={time} className="py-4 grid grid-cols-[80px_1fr] gap-4">
                  <p
                    className="text-[13px] font-semibold pt-0.5"
                    style={{ color: "#5A4FCF" }}
                  >
                    {time}
                  </p>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "#3F3F46" }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifying lists */}
          <div className="space-y-7">
            <div>
              <p
                className="text-[14px] font-semibold mb-3"
                style={{ color: "#0A0A0A" }}
              >
                This call is for you if:
              </p>
              <ul className="space-y-2">
                {forYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px]"
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
            </div>

            <div>
              <p
                className="text-[14px] font-semibold mb-3"
                style={{ color: "#0A0A0A" }}
              >
                This call isn't for you if:
              </p>
              <ul className="space-y-2">
                {notForYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px]"
                    style={{ color: "#71717A" }}
                  >
                    <span
                      className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "#A1A1AA" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fallback */}
          <div
            className="mt-10 rounded-md p-5"
            style={{ background: "#EAE8FA" }}
          >
            <p className="text-[14px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Not ready for a call yet? Download the free{" "}
              <Link
                href="/#lead-magnet"
                className="font-semibold hover:underline"
                style={{ color: "#5A4FCF" }}
              >
                Signal Audit Guide
              </Link>{" "}
              — the same framework we use with new clients, adapted for you to
              run yourself.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div
          className="bg-white border rounded-md p-8"
          style={{ borderColor: "#E4E4E7" }}
        >
          <h2
            className="text-[22px] font-semibold mb-2"
            style={{ color: "#0A0A0A" }}
          >
            Tell us about your situation
          </h2>
          <p
            className="text-[14px] mb-7"
            style={{ color: "#71717A" }}
          >
            We read every submission before replying. If there's a clear fit,
            we'll suggest a time within one business day.
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
