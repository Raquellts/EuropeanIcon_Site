import type { EventEdition } from "@/src/data/eventos/types";
import { Quote } from "lucide-react";

interface EventTestimonialsSectionProps {
  edition: EventEdition;
}

export default function EventTestimonialsSection({
  edition,
}: EventTestimonialsSectionProps) {
  if (edition.testimonials.length === 0) return null;

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Depoimentos
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Veja o que dizem alunos e participantes sobre o European
            Institute e o Fórum.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {edition.testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-8 relative"
            >
              <Quote
                size={32}
                className="text-gold/20 absolute top-6 right-6"
              />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center">
                  <span className="font-bold text-muted">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-secondary leading-relaxed text-justify">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
