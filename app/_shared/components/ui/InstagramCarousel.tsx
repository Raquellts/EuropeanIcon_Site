"use client";

import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramCarouselProps {
  urls: string[];
  className?: string;
}

export default function InstagramCarousel({
  urls,
  className = "",
}: InstagramCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("[data-ig-card]");
    if (!card) return;
    const gap = 24;
    const amount = card.offsetWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const process = () => {
      if (typeof window !== "undefined" && (window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if (document.getElementById("instagram-embed-script")) {
      process();
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      setTimeout(process, 500);
    };
    document.body.appendChild(script);
  }, []);

  if (!urls || urls.length === 0) return null;

  return (
    <div className={`relative group ${className}`}>
      {urls.length > 1 && (
        <>
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface border border-gold/30 shadow-md shadow-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface border border-gold/30 shadow-md shadow-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 px-4"
      >
        {urls.map((url) => (
          <div
            key={url}
            data-ig-card
            className="snap-center shrink-0 w-[326px] h-[545px] md:w-[400px] md:h-[640px]  rounded-2xl overflow-hidden border border-gold/20 bg-surface shadow-lg shadow-black/20 hover:shadow-gold/10 hover:border-gold/40  transition-all duration-300"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{
                background: "transparent",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 0,
                maxWidth: "540px",
                minWidth: "326px",
                padding: 0,
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
