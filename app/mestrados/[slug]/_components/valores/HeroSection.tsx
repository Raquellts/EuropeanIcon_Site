import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "../../../../_shared/components/ui/ScrollReveal";
import type { Master } from "../../../../../src/data/masters";

interface HeroSectionProps {
  master: Master | undefined;
  slug: string;
  meta?: { tagline: string; subtitle: string };
}

export default function HeroSection({ master, slug, meta }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.06]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Link
                href={`/mestrados/${slug}`}
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-8"
              >
                <ArrowLeft size={16} />
                Voltar para {master?.title || "Mestrado"}
              </Link>

              {meta?.subtitle && (
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {meta.subtitle}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold header-text mb-4 leading-tight">
              {master?.title || "Valores"}
            </h1>

            <div className="h-1 w-20 gradient-gold rounded-full mx-auto mb-6" />

            {meta?.tagline && (
              <p className="text-secondary text-lg italic max-w-xl mx-auto mb-10">
                &ldquo;{meta.tagline}&rdquo;
              </p>
            )}

            {(master?.totalHours || master?.ects || master?.locations) && (
              <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 bg-surface/60 border border-border rounded-2xl px-8 py-4">
                {master.totalHours && (
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold header-text font-serif">
                      {master.totalHours}
                    </p>
                    <p className="text-xs text-muted mt-1">Horas</p>
                  </div>
                )}
                {master.ects && (
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold header-text font-serif">
                      {master.ects}
                    </p>
                    <p className="text-xs text-muted mt-1">ECTS</p>
                  </div>
                )}
                {master.locations && (
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold header-text font-serif">
                      {master.locations.length}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {master.locations.length === 1 ? "País" : "Países"}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
