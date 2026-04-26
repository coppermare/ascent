import { ButtonLink } from "@/components/Button";

interface ClosingCTAProps {
  headline?: string;
  body?: string;
  cta?: string;
  href?: string;
}

export function ClosingCTA({
  headline = "Ready to find where your growth is actually coming from?",
  body = "Thirty minutes, no pitch. We'll tell you whether we're a fit — and if not, where to go next.",
  cta = "Book",
  href = "/book",
}: ClosingCTAProps) {
  return (
    <section style={{ background: "#5A4FCF" }} className="py-24 px-6">
      <div className="mx-auto max-w-[720px] text-center">
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
