"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";

const HeroShader = dynamic(() => import("@/components/HeroShader").then(m => ({ default: m.HeroShader })), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin();
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
  align?: "left" | "center";
}

export function PageHeader({
  title,
  subtitle,
  variant = "light",
  align = "left",
}: PageHeaderProps) {
  const isDark = variant === "dark";
  const isCentered = align === "center";
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els: HTMLElement[] = [];
    if (titleRef.current) els.push(titleRef.current);
    if (subtitleRef.current) els.push(subtitleRef.current);
    if (!els.length) return;

    gsap.fromTo(
      els,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.12 }
    );

    return () => {
      gsap.killTweensOf(els);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-28"
      style={{ background: isDark ? "#0A0A0A" : "#FAF9F6" }}
    >
      {isDark && <HeroShader speed={0.3} />}
      <div className={`relative mx-auto max-w-[1200px] px-6 ${isCentered ? "text-center" : ""}`}>
        <div className={`max-w-[640px]${isCentered ? " mx-auto" : ""}`}>
          <h1
            ref={titleRef}
            className="text-[36px] md:text-[52px] font-light leading-[1.05] tracking-tight"
            style={{ color: isDark ? "#ffffff" : "#0A0A0A", letterSpacing: "-0.02em", opacity: 0 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              ref={subtitleRef}
              className="mt-5 text-[18px] leading-relaxed font-normal"
              style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#71717A", opacity: 0 }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
