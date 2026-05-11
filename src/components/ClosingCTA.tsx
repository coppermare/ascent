import Image from "next/image";
import { ButtonLink } from "@/components/Button";

interface ClosingCTAProps {
  headline?: string;
  body?: string;
  cta?: string;
  href?: string;
}

export function ClosingCTA({
  headline = "The signal is already in your data. We use AI to find it.",
  body = "Book a thirty-minute call. We'll tell you what a Signal Audit would likely find in your channels, and whether we're the right team to run it.",
  cta = "Book",
  href = "/book",
}: ClosingCTAProps) {
  return (
    <section className="py-16 px-6" style={{ background: "#FAF9F6" }}>
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-xl min-h-[300px] md:min-h-[500px]"
      >
        {/* Background image */}
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        {/* Dark overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%)" }}
        />
        <div className="relative flex flex-col items-start justify-center px-6 md:px-12 py-20 h-full min-h-[300px] md:min-h-[500px]">
          <h2
            className="text-[36px] sm:text-[44px] md:text-[56px] font-normal leading-[1.05] tracking-tight mb-6 max-w-[640px]"
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
