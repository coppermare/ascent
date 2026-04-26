import Image from "next/image";
import Link from "next/link";

const logos = {
  black: "/logo_black.svg",
  white: "/logo_white.svg",
  primary: "/logo_primary.svg",
} as const;

type BrandLogoProps = {
  /** Use `black` on light backgrounds, `white` on dark, `primary` for accent */
  variant?: keyof typeof logos;
  className?: string;
  /** Pixel height; width scales from asset aspect ratio */
  height?: number;
  /** Wrap in link to home */
  withLink?: boolean;
};

/**
 * Wordmark from `/public/logo_*.svg`. Use `unoptimized` so Next serves the SVG as-is.
 */
export function BrandLogo({
  variant = "black",
  className = "",
  height = 24,
  withLink = false,
}: BrandLogoProps) {
  const src = logos[variant];
  // Source asset is 561×138
  const width = Math.round((561 / 138) * height);

  const img = (
    <Image
      src={src}
      alt="Ascent"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Ascent home">
        {img}
      </Link>
    );
  }

  return img;
}
