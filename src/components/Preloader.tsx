"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { gsap } from "gsap";

// useLayoutEffect fires synchronously before the browser paints — ensures the
// overlay renders on the very first frame without a flash of page content.
// We alias it to useEffect on the server to avoid SSR warnings.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);

  // Synchronous check before first paint — sets ready:true so the overlay div
  // is in the DOM on the very first render the browser paints.
  useIsomorphicLayoutEffect(() => {
    if (window.location.pathname !== "/" || sessionStorage.getItem("preloader_done")) {
      setGone(true);
    } else {
      setReady(true);
    }
  }, []);

  // Animation setup — runs after the overlay is mounted.
  useEffect(() => {
    if (!ready || gone) return;

    let tl: gsap.core.Timeline;
    let loadTimer: ReturnType<typeof setTimeout>;
    let safetyTimer: ReturnType<typeof setTimeout>;

    const dismiss = () => {
      sessionStorage.setItem("preloader_done", "1");
      setGone(true);
    };

    // Defer past React Strict Mode's unmount/remount cycle
    const startTimer = setTimeout(() => {
      const overlay = overlayRef.current;
      const symbol = symbolRef.current;
      if (!overlay || !symbol) return;

      // Hard safety net — if GSAP stalls (hidden tab, slow device), dismiss after 6s
      safetyTimer = setTimeout(dismiss, 6000);

      // Resume GSAP if the tab was hidden when the preloader started
      if (document.hidden) {
        gsap.ticker.wake();
      }
      const onVisible = () => { if (!document.hidden) gsap.ticker.wake(); };
      document.addEventListener("visibilitychange", onVisible);

      // Hide hero elements now (overlay covers them — no flash)
      gsap.set('[data-hero="heading"], [data-hero="body"], [data-hero="image"]', { opacity: 0, y: 0 });

      // Initial state: symbol near the bottom of the viewport
      gsap.set(symbol, { y: "55vh", opacity: 0 });

      tl = gsap.timeline();

      // Phase 1 — symbol rises from bottom to centre
      tl.to(symbol, { y: 0, opacity: 1, duration: 1.6, ease: "power2.out" });

      const exit = () => {
        tl
          // Symbol continues rising and fades
          .to(symbol, { y: -60, opacity: 0, duration: 0.55, ease: "power2.in" }, "+=0.15")
          // Overlay wipes upward
          .to(overlay, { yPercent: -100, duration: 0.75, ease: "power3.inOut" }, "-=0.15")
          // Hero heading fades in as overlay leaves
          .fromTo(
            '[data-hero="heading"]',
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.45"
          )
          .fromTo(
            '[data-hero="body"]',
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            "-=0.6"
          )
          .fromTo(
            '[data-hero="image"]',
            { opacity: 0, y: 40, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
          )
          .call(() => {
            clearTimeout(safetyTimer);
            document.removeEventListener("visibilitychange", onVisible);
            dismiss();
          });
      };

      const minDisplay = 1200; // ms — minimum preloader visibility
      const t0 = Date.now();

      const onLoad = () => {
        const wait = Math.max(0, minDisplay - (Date.now() - t0));
        loadTimer = setTimeout(exit, wait);
      };

      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad, { once: true });
      }
    }, 50);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(loadTimer);
      clearTimeout(safetyTimer);
      tl?.kill();
    };
  }, [ready, gone]);

  if (!ready || gone) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
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
        style={{ width: 140, height: "auto", willChange: "transform, opacity" }}
      />
    </div>
  );
}
