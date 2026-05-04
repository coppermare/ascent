"use client";

import dynamic from "next/dynamic";

const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then(m => ({ default: m.GrainGradient })),
  { ssr: false }
);

export function HeroGrainShader() {
  return (
    <GrainGradient
      key="hero-grain-10"
      width={1280}
      height={720}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      colors={["#5a4fcf", "#000000"]}
      colorBack="#000000"
      softness={0}
      intensity={0.15}
      noise={1}
      shape="corners"
      speed={0}
      scale={1}
      rotation={212}
      offsetX={0.28}
      offsetY={0.3}
    />
  );
}
