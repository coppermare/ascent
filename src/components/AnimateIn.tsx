"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  duration?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateIn({
  children,
  className,
  style,
  delay = 0,
  y = 24,
  duration = 0.7,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y, duration]);

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={className} style={{ ...style, opacity: 0 }}>
      {children}
    </Tag>
  );
}

interface StaggerInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  y?: number;
  duration?: number;
}

export function StaggerIn({
  children,
  className,
  style,
  stagger = 0.1,
  y = 20,
  duration = 0.65,
}: StaggerInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const items = gsap.utils.toArray<HTMLElement>(el.children);
    if (!items.length) return;

    // Set initial state immediately so no flash
    gsap.set(items, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [stagger, y, duration]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
