"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { GrainGradient } from "@paper-design/shaders-react";
import type { PaperShaderElement } from "@paper-design/shaders";

export function BrandVisual() {
  const sectionRef = useRef<HTMLElement>(null);
  const shaderRef = useRef<PaperShaderElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  // Cache layout values so scroll handler never touches the DOM for reads
  const layoutRef = useRef({ sectionTop: 0, scrollRange: 1 });

  useEffect(() => {
    const measure = () => {
      const el = sectionRef.current;
      if (!el) return;
      layoutRef.current = {
        sectionTop: window.scrollY + el.getBoundingClientRect().top,
        scrollRange: el.offsetHeight - window.innerHeight,
      };
    };

    const update = () => {
      const { sectionTop, scrollRange } = layoutRef.current;
      const p = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / scrollRange));

      // Shader: direct imperative call, no React re-render
      shaderRef.current?.paperShaderMount?.setFrame(p * 1600);

      // Logo: direct style mutation, no React re-render
      const logo = logoRef.current;
      if (logo) {
        const eased = 1 - Math.pow(1 - Math.min(p / 0.4, 1), 3);
        logo.style.transform = `translateY(${(1 - eased) * 80}px)`;
        logo.style.opacity = String(eased);
      }
    };

    const onResize = () => { measure(); update(); };

    measure();
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "250vh" }}>
      <div
        className="sticky top-0 flex items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        <GrainGradient
          ref={shaderRef}
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0 }}
          colors={["#5a4fcf", "#5a4fcf", "#5a4fcf", "#5a4fcf"]}
          colorBack="#f5f1ea"
          softness={1}
          intensity={0.6}
          noise={0.9}
          shape="dots"
          speed={0}
          frame={0}
          scale={1.8}
        />
        <div className="relative flex items-center justify-center">
          <Image
            ref={logoRef}
            src="/images/ascent-symbol-3d.png"
            alt="Ascent"
            width={360}
            height={360}
            priority
            className="w-[220px] md:w-[300px] lg:w-[360px] h-auto select-none"
            style={{
              transform: "translateY(80px)",
              opacity: 0,
              willChange: "transform, opacity",
            }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
