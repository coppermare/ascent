"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  image?: string;
}

function parseValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export function StatCard({ value, label, image }: StatCardProps) {
  const observeRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { num, prefix, suffix } = parseValue(value);
  const isDecimal = num % 1 !== 0;

  useEffect(() => {
    const el = observeRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (num === 0) return;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(eased * num);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, num]);

  const display =
    num === 0
      ? `${prefix}0${suffix}`
      : `${prefix}${isDecimal ? count.toFixed(1) : Math.round(count)}${suffix}`;

  return (
    <div
      ref={observeRef}
      className="relative rounded-lg overflow-hidden"
      style={{
        aspectRatio: "3 / 4",
        backgroundImage: image ? `url('${image}')` : undefined,
        backgroundColor: image ? undefined : "#1a1060",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* bottom gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(90,79,207,0.75) 0%, rgba(90,79,207,0.3) 45%, rgba(90,79,207,0) 100%)",
        }}
      />

      {/* stat content pinned to bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {value !== "" && (
          <p
            className="text-[36px] md:text-[44px] font-normal tracking-[-0.02em] leading-none mb-3 whitespace-nowrap"
            style={{ fontFamily: "var(--font-geist-sans)", color: "#FFFFFF" }}
          >
            {display}
          </p>
        )}
        <p className="text-[13px] leading-snug" style={{ fontFamily: "var(--font-geist-sans)", color: "rgba(255,255,255,0.7)" }}>
          {label}
        </p>
      </div>
    </div>
  );
}
