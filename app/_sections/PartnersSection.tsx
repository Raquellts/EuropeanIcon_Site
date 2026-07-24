"use client";

import Image from "next/image";
import { partners } from "../../src/data/partners";
import FlagFind from "../_shared/components/ui/FlagFind";

const doubled = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section id="parceiros" className="py-12 md:py-16 border-t border-border">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Parceiros do Instituto
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Instituições e organizações que colaboram com o European & Icon
            Institute
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 w-64 px-3"
            >
              <div className="rounded-xl border border-border bg-surface p-5 h-full flex flex-col justify-between items-center text-center">
                <div className="relative w-40 h-20 flex items-center justify-center mb-3 overflow-hidden">
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
    </section>
  );
}
