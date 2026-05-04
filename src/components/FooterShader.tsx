"use client";

import dynamic from "next/dynamic";

const HeroShader = dynamic(
  () => import("@/components/HeroShader").then(m => ({ default: m.HeroShader })),
  { ssr: false }
);

export function FooterShader() {
  return <HeroShader speed={0} />;
}
