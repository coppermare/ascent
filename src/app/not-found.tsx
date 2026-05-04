import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found — Ascent",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p
        className="text-[13px] font-semibold tracking-[0.1em] uppercase mb-4"
        style={{ color: "var(--primary)" }}
      >
        404
      </p>
      <h1
        className="text-[36px] md:text-[52px] font-normal leading-[1.05] tracking-tight mb-4"
        style={{ color: "var(--heading)" }}
      >
        Page not found.
      </h1>
      <p
        className="text-[17px] leading-relaxed mb-8 max-w-[420px]"
        style={{ color: "var(--body-text)" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="flex gap-3">
        <ButtonLink href="/" variant="primary">Back to home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
      </div>
    </section>
  );
}
