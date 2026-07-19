"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen } from "lucide-react";
import type { NormsSection } from "@/src/data/revistas/imperium";

interface NormsTabsProps {
  norms: NormsSection[];
}

export default function NormsTabs({ norms }: NormsTabsProps) {
  const [activeSection, setActiveSection] = useState(norms[0]?.id ?? "");
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const headings = container.querySelectorAll("[data-norms-section]");
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-norms-section");
            if (id) setActiveSection(id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    setActiveSection(id);
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-[192px_1fr] md:gap-8">
      {/* Tabs — horizontal scroll no mobile, sidebar sticky no desktop */}
      <nav className="sticky top-14 z-10 bg-background border-b border-border py-3 md:border-b-0 md:py-0 md:top-24 md:z-auto md:bg-transparent md:self-start">
        <div className="relative">
          <ul className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-2 md:flex-col md:overflow-visible md:snap-none md:px-0 md:pb-0">
            {norms.map((section) => (
              <li
                key={section.id}
                className="snap-start shrink-0 md:shrink md:snap-none"
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal ${
                    activeSection === section.id
                      ? "bg-gold/10 text-gold border border-gold/30"
                      : "text-secondary hover:text-primary hover:bg-surface border border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        activeSection === section.id ? "bg-gold" : "bg-muted"
                      }`}
                    />
                    {section.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {/* Fade na borda direita — só mobile */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent md:hidden" />
        </div>
      </nav>

      {/* Content */}
      <div
        ref={contentRef}
        className="w-full overflow-hidden space-y-8 md:min-w-0"
      >
        {norms.map((section) => (
          <div
            key={section.id}
            ref={(el) => {
              if (el) sectionRefs.current.set(section.id, el);
            }}
            data-norms-section={section.id}
          >
            <h3 className="text-lg font-bold header-text mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-gold" />
              {section.label}
            </h3>

            <div className="space-y-4">
              {section.groups.map((group, gi) => (
                <div
                  key={gi}
                  className="border border-border rounded-2xl bg-background overflow-hidden hover:border-gold/20 transition-colors"
                >
                  <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-border bg-surface/30">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                      {group.title}
                    </h4>
                  </div>

                  <div className="px-4 py-3 sm:px-6 sm:py-4 space-y-3">
                    {group.items.map((item, ii) => (
                      <div key={ii} className="flex flex-col gap-1">
                        {item.label && (
                          <span className="text-xs font-semibold text-gold/80 uppercase tracking-wider">
                            {item.label}
                          </span>
                        )}
                        <p
                          className={`text-sm leading-relaxed break-words ${
                            item.highlight
                              ? "text-secondary bg-gold/5 border border-gold/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3"
                              : "text-secondary/80"
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
