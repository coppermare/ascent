import type { Metadata } from "next";
import { GrainIconTool } from "@/components/GrainIconTool";

export const metadata: Metadata = {
  title: "Grain 3D object — Ascent",
  description:
    "Turn a flat icon into a volumetric grain effect: perspective, depth, lighting, and motion — export PNG or copy JSX.",
};

export default function GrainIconToolPage() {
  return <GrainIconTool />;
}
