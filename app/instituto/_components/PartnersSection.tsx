"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { partners } from "../../../src/data/partners";
import FlagFind from "../../_shared/components/ui/FlagFind";

export default function PartnersSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="parceiros"
      className="py-12 md:py-16 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Parceiros do Instituto
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Instituições e organizações que colaboram com o European & Icon
            Institute
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="relative group/controls">
          <div className="overflow-hidden -mx-1" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-2"
                >
                  <div className="rounded-xl border border-border bg-surface p-5 h-full flex flex-col justify-between items-center text-center group/card">
                    <div className="relative w-2/3 h-20 flex items-center justify-center mb-3 overflow-hidden">
                      {partner.logo && (
                        <Image
                          src={partner.logo}
                          width={100}
                          height={100}
                          alt={partner.name}
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary leading-snug mb-1">
                      {partner.name}
                    </p>
                    {(partner.category || partner.country) && (
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-muted">{partner.category}</p>
                        <FlagFind
                          countryCode={partner.countryCode || "br"}
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-gold/30 transition-all opacity-0 group-hover/controls:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-gold/30 transition-all opacity-0 group-hover/controls:opacity-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
