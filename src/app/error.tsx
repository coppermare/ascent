"use client";

import { ButtonLink } from "@/components/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p
        className="text-[13px] font-semibold tracking-[0.1em] uppercase mb-4"
        style={{ color: "var(--primary)" }}
      >
        Error
      </p>
      <h1
        className="text-[36px] md:text-[52px] font-normal leading-[1.05] tracking-tight mb-4"
        style={{ color: "var(--heading)" }}
      >
        Something went wrong.
      </h1>
      <p
        className="text-[17px] leading-relaxed mb-8 max-w-[420px]"
        style={{ color: "var(--body-text)" }}
      >
        An unexpected error occurred. Try refreshing the page or come back later.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center h-11 min-h-[44px] px-5 rounded-lg text-[14px] font-semibold transition-opacity hover:opacity-80"
          style={{ background: "var(--primary)", color: "#ffffff" }}
        >
          Try again
        </button>
        <ButtonLink href="/" variant="secondary">Back to home</ButtonLink>
      </div>
    </section>
  );
}
