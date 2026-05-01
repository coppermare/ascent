import { ButtonLink } from "@/components/Button";
import { HeroShader } from "@/components/HeroShader";

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
    <section style={{ background: "#5A4FCF" }} className="relative overflow-hidden py-24 px-6">
      <HeroShader />
      <div className="relative mx-auto max-w-[720px] text-center">
        <h2
          className="text-[32px] font-bold leading-tight tracking-tight mb-4"
          style={{ color: "#ffffff" }}
        >
          {headline}
        </h2>
        <p
          className="text-[17px] leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          {body}
        </p>
        <ButtonLink href={href} variant="inverted" size="lg">
          {cta}
        </ButtonLink>
      </div>
    </section>
  );
}
