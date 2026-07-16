"use client";

import { useEffect, useRef } from "react";

interface UseParallaxOptions {
  speed?: number;
  maxOffset?: number;
  disabled?: boolean;
}

export function useParallax({
  speed = 0.35,
  maxOffset = 150,
  disabled = false,
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || disabled) return;

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = undefined;

        const heroEl = document.getElementById("hero");
        if (!heroEl) return;

        const rect = heroEl.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const offset = Math.min(window.scrollY * speed, maxOffset);
        if (Math.abs(offset - offsetRef.current) > 0.5) {
          offsetRef.current = offset;
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, maxOffset, disabled]);

  return ref;
}
