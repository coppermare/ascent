"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let tl: gsap.core.Timeline;
    let loadTimer: ReturnType<typeof setTimeout>;
    let safetyTimer: ReturnType<typeof setTimeout>;

    const dismiss = () => {
      sessionStorage.setItem("preloader_done", "1");
      setGone(true);
    };

    if (window.location.pathname !== "/" || sessionStorage.getItem("preloader_done")) {
      setGone(true);
      return;
    }
    setReady(true);

    // Defer past React Strict Mode's unmount/remount cycle
    const startTimer = setTimeout(() => {
      // Remove the inline preloader overlay created by the blocking script
      document.getElementById("preloader-overlay")?.remove();

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
  }, []);

  if (!ready || gone) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background:
          "radial-gradient(ellipse at 25% 65%, rgba(90,79,207,0.38) 0%, #000000 62%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
      }}
    >
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
