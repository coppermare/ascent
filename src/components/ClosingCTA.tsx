import { ButtonLink } from "@/components/Button";

interface ClosingCTAProps {
  headline?: string;
  body?: string;
  cta?: string;
  href?: string;
}

export function ClosingCTA({
  headline = "You already have the data. We know how to read it.",
  body = "Thirty minutes. No deck, no pitch. We ask a few questions, tell you what your audit would likely surface, and whether we are the right team to run it.",
  cta = "Book a call",
  href = "/book",
}: ClosingCTAProps) {
  return (
    <section className="py-16 px-6" style={{ background: "#FAF9F6" }}>
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-xl"
        style={{ minHeight: "500px" }}
      >
        {/* Background image */}
        <img
          src="/images/cta-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%)" }}
        />
        <div className="relative flex flex-col items-start justify-center px-12 py-20 h-full" style={{ minHeight: "500px" }}>
          <h2
            className="text-[44px] md:text-[56px] font-normal leading-[1.05] tracking-tight mb-6 max-w-[640px]"
            style={{ color: "#ffffff" }}
          >
            {headline}
          </h2>
          <p
            className="text-[17px] leading-relaxed mb-10 max-w-[480px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {body}
          </p>
          <ButtonLink href={href} variant="inverted" size="lg">
            {cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
