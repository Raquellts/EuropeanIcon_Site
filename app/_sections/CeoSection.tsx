"use client";

import { Crown, Briefcase } from "lucide-react";
import ScrollReveal from "../_shared/components/ui/ScrollReveal";
import SocialIconButton from "../_shared/components/ui/SocialIconButton";
import InstagramIcon from "../_shared/components/ui/InstagramIcon";
import ImageWithFallback from "../_shared/components/ui/ImageWithFallback";
import Pill from "../_shared/components/ui/Pill";

const ceoData = {
  name: "Rose Magina",
  role: "CEO — European & Icon Institute",
  social: {
    instagram: "https://www.instagram.com/rosemmagina/",
    linkedin: "https://www.linkedin.com/in/rose-magina-b3996a3a0/",
  },
  bio: [
    "Rose Magina é, antes de tudo, uma mulher movida por um propósito maior: formar profissionais de excelência e abrir portas onde muitos veem limites. Empresária, estrategista e CEO do European Institute, ela é o tipo de liderança que não se contenta com o comum, mas busca, todos os dias, elevar o patamar do que parece impossível.",
    "Sob sua gestão, o European Institute consolidou parcerias estratégicas com universidades internacionais, ampliou a presença global do Mestrado em Harmonização Orofacial — hoje referência em mais de 25 países — e lançou o Mestrado Internacional em Direito Penal Econômico, agregando uma nova dimensão de relevância acadêmica, ética e impacto social.",
    "Rose acredita que educação é um ato de coragem — coragem de inovar, de não se curvar à mesmice e de abrir caminho para que gerações inteiras avancem, com conhecimento, ética e propósito.",
  ],
};

export default function CeoSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold-dark)_0%,_transparent_60%)] opacity-[0.06]" />

      <div className="section-container relative">
        <ScrollReveal className="text-center mb-14">
          <Pill icon={<Crown size={14} />} className="mb-5">
            Fundada com propósito
          </Pill>
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Nossa Liderança
          </h2>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-xl shadow-black/20">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Foto */}
              <div className="shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-gold/20">
                  <ImageWithFallback
                    src="/pessoas/rose-magina/foto.webp"
                    alt="Rose Magina"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold header-text">
                  {ceoData.name}
                </h3>
                <p className="text-gold text-sm font-medium mt-1">
                  {ceoData.role}
                </p>

                <div className="flex gap-3 justify-center md:justify-start mt-4">
                  <SocialIconButton
                    href={ceoData.social.instagram}
                    icon={<InstagramIcon size={16} />}
                    label="Instagram"
                    size="sm"
                  />
                  <SocialIconButton
                    href={ceoData.social.linkedin}
                    icon={<Briefcase size={16} />}
                    label="LinkedIn"
                    size="sm"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  {ceoData.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-secondary text-sm leading-relaxed text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
