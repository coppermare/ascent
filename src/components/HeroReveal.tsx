"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function HeroReveal() {
  useEffect(() => {
    let tl: gsap.core.Timeline;
    const timer = setTimeout(() => {
      tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          '[data-hero="heading"]',
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          '[data-hero="body"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.65"
        )
        .fromTo(
          '[data-hero="image"]',
          { opacity: 0, y: 48, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          "-=0.55"
        );
    }, 50);

    return () => {
      clearTimeout(timer);
      tl?.kill();
    };
  }, []);

  return null;
}
