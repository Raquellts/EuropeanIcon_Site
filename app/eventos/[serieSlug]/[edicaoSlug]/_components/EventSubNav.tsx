"use client";

import { useState, useEffect, useRef } from "react";
import { useAnchorNavigation } from "@/app/_shared/hooks/useAnchorNavigation";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "programacao", label: "Programação" },
  { id: "professores", label: "Professores" },
  { id: "participantes", label: "Participantes" },
  { id: "galeria", label: "Galeria" },
  { id: "local", label: "Local" },
];

export default function EventSubNav() {
  const navigateTo = useAnchorNavigation();
  const [active, setActive] = useState("sobre");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Sync scroll state with navbar animation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when navbar menus open
  useEffect(() => {
    const handler = ((e: CustomEvent) => setMenuOpen(e.detail.open)) as EventListener;
    window.addEventListener("navbar-menu-toggle", handler);
    return () => window.removeEventListener("navbar-menu-toggle", handler);
  }, []);

  // Fade edges
  const updateFades = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 4);
    setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateFades();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateFades, { passive: true });
    window.addEventListener("resize", updateFades);
    return () => {
      el.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, []);

  return (
    <div
      className={`sticky z-40 border-b border-border bg-surface/80 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "top-16" : "top-20"
      } ${menuOpen ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}`}
    >
      <div className="relative">
        {showLeftFade && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface/80 to-transparent z-10" />
        )}
        {showRightFade && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface/80 to-transparent z-10" />
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          <nav className="flex gap-2 px-5 py-3 min-w-max">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => navigateTo(id)}
                className={`snap-start whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  active === id
                    ? "bg-gold text-black border-gold"
                    : "text-secondary border-border hover:border-gold/40 hover:text-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
