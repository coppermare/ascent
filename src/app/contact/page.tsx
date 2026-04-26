import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact — Ascent",
  description:
    "Get in touch with Ascent. For growth enquiries, book a call. For everything else, send us a message.",
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1
            className="text-[40px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Start with the right conversation.
          </h1>
          <p className="text-[20px] leading-relaxed" style={{ color: "#3F3F46" }}>
            If you have a growth challenge and want to know whether a signal
            audit or sprint makes sense — book a call. That's the fastest route
            to a useful answer.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-24 px-6" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Primary: Book a call */}
          <div
            className="border rounded-md p-8"
            style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
          >
            <p
              className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4"
              style={{ color: "#5A4FCF" }}
            >
              Recommended
            </p>
            <h2
              className="text-[26px] font-bold tracking-tight mb-4"
              style={{ color: "#0A0A0A" }}
            >
              Book a 30-minute discovery call
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-7"
              style={{ color: "#3F3F46" }}
            >
              We don't pitch on it. We ask about your current growth, what's
              working, and what you've tried. At the end, we'll tell you whether
              we think there's a fit and what we'd find in a signal audit.
            </p>

            <div
              className="space-y-0 divide-y mb-8"
              style={{ borderColor: "#E4E4E7" }}
            >
              {[
                {
                  time: "0–5 min",
                  desc: "Your business: stage, model, and what's changed recently.",
                },
                {
                  time: "5–20 min",
                  desc: "Current growth, what's working, and where you're stuck.",
                },
                {
                  time: "20–30 min",
                  desc: "Our honest read: whether there's a fit and what to do next.",
                },
              ].map(({ time, desc }) => (
                <div key={time} className="py-4 grid grid-cols-[80px_1fr] gap-4">
                  <p
                    className="text-[13px] font-semibold pt-0.5"
                    style={{ color: "#5A4FCF" }}
                  >
                    {time}
                  </p>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <ButtonLink href="/book" className="w-full">
              Book a 30-minute call
            </ButtonLink>
          </div>

          {/* Secondary: Contact form */}
          <div>
            <h2
              className="text-[26px] font-bold tracking-tight mb-2"
              style={{ color: "#0A0A0A" }}
            >
              Send a message
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-7"
              style={{ color: "#3F3F46" }}
            >
              For press enquiries, partnership questions, or anything that
              doesn't fit a discovery call. We read every message and reply
              within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Not ready section */}
      <section
        className="py-16 px-6 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <div className="mx-auto max-w-[720px] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#71717A" }}>
              Not sure yet?
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Read the{" "}
              <Link href="/faq" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                FAQ
              </Link>{" "}
              for straight answers about how we work and whether we're the right fit.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#71717A" }}>
              See real results
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Read through our{" "}
              <Link href="/work" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                case studies
              </Link>{" "}
              — specific outcomes from signal audits and sprints, with numbers.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#71717A" }}>
              Run it yourself
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "#3F3F46" }}>
              Download the free{" "}
              <Link href="/#lead-magnet" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                Signal Audit Guide
              </Link>{" "}
              — the framework we use with new clients, adapted for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
