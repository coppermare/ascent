"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { gsap } from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLImageElement>(null);
  const [gone, setGone] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (window.location.pathname !== "/" || sessionStorage.getItem("preloader_done")) {
      setGone(true);
    }
  }, []);

  useEffect(() => {
    if (gone) return;
    if (window.location.pathname !== "/" || sessionStorage.getItem("preloader_done")) return;

    const overlay = overlayRef.current;
    const symbol = symbolRef.current;
    if (!overlay || !symbol) return;

    let tl: gsap.core.Timeline;
    let loadTimer: ReturnType<typeof setTimeout>;
    let safetyTimer: ReturnType<typeof setTimeout>;

    const dismiss = () => {
      gsap.set('[data-hero="heading"], [data-hero="body"], [data-hero="image"]', { clearProps: "opacity,transform,translate,rotate,scale" });
      sessionStorage.setItem("preloader_done", "1");
      setGone(true);
    };

    safetyTimer = setTimeout(dismiss, 6000);

    const onVisible = () => { if (!document.hidden) gsap.ticker.wake(); };
    document.addEventListener("visibilitychange", onVisible);

    gsap.set('[data-hero="heading"], [data-hero="body"], [data-hero="image"]', { opacity: 0, y: 0 });

    tl = gsap.timeline();
    tl.to(symbol, { y: 0, opacity: 1, duration: 1.6, ease: "power2.out" });

    const exit = () => {
      tl
        .to(symbol, { y: -60, opacity: 0, duration: 0.55, ease: "power2.in" }, "+=0.15")
        .to(overlay, { yPercent: -100, duration: 0.75, ease: "power3.inOut" }, "-=0.15")
        .fromTo('[data-hero="heading"]', { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.1")
        .fromTo('[data-hero="body"]', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.7")
        .fromTo('[data-hero="image"]', { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=0.6")
        .call(() => {
          clearTimeout(safetyTimer);
          document.removeEventListener("visibilitychange", onVisible);
          dismiss();
        });
    };

    const minDisplay = 1200;
    const t0 = Date.now();
    const onLoad = () => {
      loadTimer = setTimeout(exit, Math.max(0, minDisplay - (Date.now() - t0)));
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(safetyTimer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("load", onLoad);
      tl?.kill();
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        overflow: "hidden",
      }}
    >
      <GrainGradient
        width={1280}
        height={720}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        colors={["#5a4fcf", "#5a4fcf", "#5a4fcf"]}
        colorBack="#000000"
        softness={0.7}
        intensity={1}
        noise={1}
        shape="wave"
        speed={0}
        scale={1.4}
        rotation={360}
        offsetX={0.22}
        offsetY={0.9}
      />
      <img
        ref={symbolRef}
        src="/images/ascent-symbol-3d.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{ width: 140, height: "auto", opacity: 0, transform: "translateY(55vh)", willChange: "transform, opacity" }}
      />
    </div>
  );
}
