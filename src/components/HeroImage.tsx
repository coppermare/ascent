'use client';

import { useEffect, useRef } from 'react';

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
      className="relative w-screen -ml-6 md:ml-0 md:w-full md:rounded-lg h-[600px] md:h-auto overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full md:h-auto object-cover md:object-none object-center block"
      />
    </div>
  );
}
