import { masters } from "../../../src/data/masters";
import { Sparkles } from "lucide-react";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import MasterCard from "../../_shared/components/ui/MasterCard";

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
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface px-4 py-1.5 text-xs text-gold mb-5">
            <Sparkles size={14} />
            Programas de destaque
          </div>
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Mestrados Internacionais
          </h2>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-pretty">
            Programas únicos com dupla titulação Brasil–Europa, estruturados com
            base em evidências científicas e reconhecidos no Espaço Europeu de
            Ensino Superior.
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
