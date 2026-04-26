import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";
export type ButtonSize = "default" | "sm" | "lg";

const base =
  "inline-flex items-center justify-center rounded font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FCF] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#5A4FCF] text-white hover:bg-[#4840B8]",
  secondary:
    "bg-transparent text-[#0A0A0A] border border-[1.5px] border-[#0A0A0A] hover:bg-[#F5F1EA]",
  ghost:
    "bg-transparent text-[#5A4FCF] border border-[1.5px] border-[#5A4FCF] hover:bg-[#EAE8FA]",
  inverted:
    "bg-white text-[#5A4FCF] hover:bg-white/90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  default: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
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
  ...props
}: ButtonProps) {
  return <button className={cls(variant, size, className)} {...props} />;
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
