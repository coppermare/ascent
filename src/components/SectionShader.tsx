"use client";

import { GrainGradient } from "@paper-design/shaders-react";
import type { GrainGradientShape } from "@paper-design/shaders";

interface SectionShaderProps {
  colors: [string, string];
  colorBack: string;
  shape?: GrainGradientShape;
  intensity?: number;
  noise?: number;
  speed?: number;
  softness?: number;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
}

export function SectionShader({
  colors,
  colorBack,
  shape = "blob",
  intensity = 0.4,
  noise = 0.25,
  speed = 0.25,
  softness = 0.85,
  scale = 1.2,
  offsetX = 0,
  offsetY = 0,
}: SectionShaderProps) {
  return (
    <GrainGradient
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0 }}
      colors={colors}
      colorBack={colorBack}
      softness={softness}
      intensity={intensity}
      noise={noise}
      shape={shape}
      speed={speed}
      scale={scale}
      offsetX={offsetX}
      offsetY={offsetY}
    />
  );
}
