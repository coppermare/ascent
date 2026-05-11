'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        if (window.innerWidth < 768) return;
        containerRef.current.style.transform = `translateY(${window.scrollY * -0.25}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ willChange: 'transform' }}
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="w-full h-auto block"
      />
    </div>
  );
}
