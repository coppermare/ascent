import type { Metadata } from "next";
import { GrainIconTool } from "@/components/GrainIconTool";

export const metadata: Metadata = {
  title: "Grain gradient logo — Ascent",
  description:
    "Turn a flat icon into an interactive grain-gradient logo surface — export PNG or copy JSX.",
};

export default function GrainIconToolPage() {
  return <GrainIconTool />;
}
