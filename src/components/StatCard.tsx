"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
}

function parseValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export function StatCard({ value, label }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const observeRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const display =
    num === 0
      ? `${prefix}0${suffix}`
      : `${prefix}${isDecimal ? count.toFixed(1) : Math.round(count)}${suffix}`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-12 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.32)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 2px 24px rgba(90,79,207,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
        transition: "box-shadow 0.2s ease",
        ...(hovered && {
          boxShadow: "0 4px 40px rgba(90,79,207,0.14), inset 0 1px 0 rgba(255,255,255,0.5)",
        }),
      }}
    >
      {/* cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(240px circle at ${mouse.x}px ${mouse.y}px, rgba(90,79,207,0.12), transparent 70%)`,
        }}
      />

      <div ref={observeRef}>
        <p
          className="text-[40px] md:text-[48px] font-normal tracking-[-0.02em] leading-none mb-4 whitespace-nowrap"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#0A0A0A" }}
        >
          {display}
        </p>
        <p className="text-[14px] leading-snug max-w-[180px]" style={{ color: "#3F3F46" }}>
          {label}
        </p>
      </div>
    </div>
  );
}
