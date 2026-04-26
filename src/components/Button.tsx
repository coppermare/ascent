import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverted"
  /** White outline on dark / saturated backgrounds (e.g. purple hero) */
  | "onInverse";

export type ButtonSize = "default" | "sm" | "lg";

const base =
  "box-border inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded border border-transparent font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FCF] disabled:pointer-events-none disabled:opacity-50";

/* DESIGN.md: min 44px touch; mobile primary CTAs 48px — `lg` for hero, default/sm at 44px */
const variants: Record<ButtonVariant, string> = {
  primary: "border-[#5A4FCF] bg-[#5A4FCF] text-white hover:border-[#4840B8] hover:bg-[#4840B8]",
  secondary:
    "border-[1.5px] border-[#0A0A0A] bg-transparent text-[#0A0A0A] hover:bg-[#F5F1EA]",
  ghost:
    "border-[1.5px] border-[#5A4FCF] bg-transparent text-[#5A4FCF] hover:bg-[#EAE8FA]",
  inverted: "border-0 bg-white text-[#5A4FCF] hover:bg-white/90",
  onInverse:
    "border-[1.5px] border-white/40 bg-transparent text-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  /* Compact nav / footer: same min height as default, slightly tighter padding */
  sm: "h-11 min-h-[44px] px-3.5 text-[13px]",
  default: "h-11 min-h-[44px] px-5 text-[14px]",
  /* Hero & mobile menu — 48px (DESIGN.md mobile primary) */
  lg: "h-12 min-h-[48px] px-6 text-[15px]",
};

function cls(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

// ── Button (renders a <button>) ──────────────────────────────────────────────

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "default",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return <button
    type={type}
    className={cls(variant, size, className)}
    {...props}
  />;
}

// ── ButtonLink (renders a Next.js <Link>) ────────────────────────────────────

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "default",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={cls(variant, size, className)} {...props} />;
}
