"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function HeroShader() {
  return (
    <GrainGradient
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0 }}
      colors={["#5a4fcf", "#5a4fcf"]}
      colorBack="#000a0f"
      softness={0.7}
      intensity={1}
      noise={0.49}
      shape="wave"
      speed={1}
      scale={1.08}
      offsetX={-0.02}
      offsetY={0.18}
    />
  );
}
