"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../../../_shared/components/ui/Button";

interface CtaSectionProps {
  masterSlug: string;
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  masterSlug,
  title = "Garanta sua vaga na Formação Internacional",
  subtitle = "Invista na sua carreira com um mestrado reconhecido internacionalmente",
}: CtaSectionProps) {
  const valoresUrl = `/mestrados/${masterSlug}/valores`;
  const contatoUrl = "/contato";

  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Full-width radial glow from bottom center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold)_0%,_transparent_55%)] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,_var(--gold)_0%,_transparent_35%)] opacity-[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_90%,_var(--gold)_0%,_transparent_35%)] opacity-[0.06]" />

      <div className="relative z-10 section-container py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium text-gold uppercase tracking-wider">
            Vagas limitadas
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold header-text mb-5 max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-secondary max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href={valoresUrl}
            icon={<ArrowRight size={18} />}
          >
            Ver valores
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={contatoUrl}
            icon={<MessageCircle size={18} />}
          >
            Fale conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
