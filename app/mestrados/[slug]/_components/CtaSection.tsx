"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "../../../_shared/components/ui/Button";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}

export default function CtaSection({
  title = "Garanta sua vaga na Formação Internacional",
  subtitle = "Fale conosco pelo WhatsApp e tire todas as suas dúvidas",
  whatsappMessage = "Olá! Gostaria de saber mais sobre a Formação Internacional.",
}: CtaSectionProps) {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-br from-surface via-background to-surface p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-4 max-w-3xl mx-auto">
              {title}
            </h2>
            <p className="text-secondary max-w-xl mx-auto mb-8 text-lg">
              {subtitle}
            </p>

            <Button
              variant="primary"
              size="lg"
              href={whatsappUrl}
              external
              icon={<MessageCircle size={20} />}
            >
              Fale conosco no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
