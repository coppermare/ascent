"use client";

import dynamic from "next/dynamic";

const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then(m => ({ default: m.GrainGradient })),
  { ssr: false }
);

const HeroShader = dynamic(
  () => import("@/components/HeroShader").then(m => ({ default: m.HeroShader })),
  { ssr: false }
);

export function AboutShader() {
  return (
    <>
      <GrainGradient
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        colors={["#f5f1ea", "#c5c0f0", "#f5f1ea"]}
        colorBack="#f5f1ea"
        softness={1}
        intensity={0.5}
        noise={0.14}
        shape="wave"
        speed={0.4}
        scale={1.2}
        offsetY={0.15}
      />
      <HeroShader />
    </>
  );
}
