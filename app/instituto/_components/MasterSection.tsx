import { masters } from "../../../src/data/masters";
import { Sparkles } from "lucide-react";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import MasterCard from "../../_shared/components/ui/MasterCard";
import Pill from "../../_shared/components/ui/Pill";

export default function MasterSection() {
  return (
    <section
      id="mestrado"
      className="relative py-20 md:py-28 border-t border-border overflow-hidden"
    >
      {/* brilho dourado sutil no fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.12]" />

      <div className="section-container relative">
        <ScrollReveal className="text-center mb-14 md:mb-16">
          <Pill variant="gold" className="mb-5">
            <Sparkles size={14} />
            Programas de destaque
          </Pill>
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Formações internacionais de alto nível
          </h2>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-pretty">
            Desenvolvidas em parceria com instituições de ensino superior de
            referência, unindo excelência acadêmica, inovação e reconhecimento
            internacional.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-6" />
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {masters.map((master, index) => (
            <MasterCard key={master.slug} master={master} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
