"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function LogoReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex items-center justify-center py-16">
      <Image
        src="/images/ascent-symbol-3d.png"
        alt="Ascent"
        width={360}
        height={360}
        className="w-[220px] md:w-[300px] lg:w-[360px] h-auto select-none"
        style={{
          transform: visible ? "translateY(0)" : "translateY(64px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
        }}
        draggable={false}
      />
    </div>
  );
}
