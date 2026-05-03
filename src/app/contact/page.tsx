import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { AnimateIn, StaggerIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Contact — Ascent",
  description:
    "Get in touch with Ascent. For growth enquiries, book a call. For everything else, send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        variant="light"
        title="Let's talk."
        subtitle="Growth questions: book a call. Everything else: send a message. We reply within one business day."
      />

      {/* Two paths */}
      <section className="py-16 md:py-24" style={{ background: "#FAF9F6" }}>
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Primary path: book */}
          <AnimateIn
            className="relative overflow-hidden rounded-lg p-8 md:p-10"
            style={{ background: "#0A0A0A" }}
          >
            <div className="relative">
              <h2
                className="text-[28px] font-normal tracking-tight mb-4"
                style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
              >
                Book a discovery call
              </h2>
              <p
                className="text-[15px] leading-[1.75] mb-8"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Thirty minutes. We ask, you answer, we give you our honest
                read on whether there's a fit — and what a signal audit would
                surface in your business.
              </p>

              <div
                className="space-y-0 divide-y mb-8"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {[
                  { time: "0–5 min", desc: "Your business: stage, model, what's changed." },
                  { time: "5–20 min", desc: "Current growth, what's working, where you're stuck." },
                  { time: "20–30 min", desc: "Our honest read: fit, and what to do next." },
                ].map(({ time, desc }) => (
                  <div key={time} className="py-4 grid grid-cols-[80px_1fr] gap-4">
                    <p className="text-[13px] font-semibold pt-0.5" style={{ color: "#8B82E0" }}>
                      {time}
                    </p>
                    <p className="text-[14px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <ButtonLink href="/book" variant="inverted" className="w-full justify-center">
                Book a call
              </ButtonLink>
            </div>
          </AnimateIn>

          {/* Secondary: Contact form */}
          <AnimateIn delay={0.1}
            className="rounded-lg border p-8 md:p-10"
            style={{ background: "#ffffff", borderColor: "#E4E4E7" }}
          >
            <h2
              className="text-[28px] font-normal tracking-tight mb-2"
              style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
            >
              Send a message
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-7"
              style={{ color: "#71717A" }}
            >
              For press, partnerships, or anything that doesn't fit a 30-minute
              call. We read every message and reply the same day where we can.
            </p>
            <ContactForm />
          </AnimateIn>
        </div>
      </section>

      {/* Quick links */}
      <section
        className="py-14 border-t"
        style={{ background: "#F5F1EA", borderColor: "#E4E4E7" }}
      >
        <StaggerIn className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-[13px] font-semibold mb-2" style={{ color: "#0A0A0A" }}>
              Not sure yet?
            </p>
            <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
              Read the{" "}
              <Link href="/faq" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                FAQ
              </Link>{" "}
              for straight answers about how we work and whether we're a fit.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold mb-2" style={{ color: "#0A0A0A" }}>
              See real results
            </p>
            <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
              Read through our{" "}
              <Link href="/work" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                case studies
              </Link>{" "}
              — specific outcomes from audits and sprints, with numbers.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold mb-2" style={{ color: "#0A0A0A" }}>
              Run it yourself
            </p>
            <p className="text-[14px] leading-[1.65]" style={{ color: "#71717A" }}>
              Download the free{" "}
              <Link href="/#lead-magnet" className="font-semibold hover:underline" style={{ color: "#5A4FCF" }}>
                Signal Audit Guide
              </Link>{" "}
              — the framework we use with new clients, adapted for you.
            </p>
          </div>
        </StaggerIn>
      </section>
    </>
  );
}
