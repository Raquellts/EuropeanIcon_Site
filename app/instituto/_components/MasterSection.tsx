import Image from "next/image";
import { masters } from "../../../src/data/masters";
import {
  Clock,
  Award,
  MapPin,
  UserRound,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "../../_shared/components/ui/Button";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";

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
          {masters.map((master, index) => {
            const stats = [
              master.totalHours && {
                icon: Clock,
                label: `${master.totalHours} horas`,
              },
              master.ects && {
                icon: Award,
                label: `${master.ects} ECTS`,
              },
              master.locations && {
                icon: MapPin,
                label: master.locations.join(" · "),
              },
            ].filter(Boolean) as { icon: typeof Clock; label: string }[];

            return (
              <ScrollReveal key={master.slug} delay={index * 120}>
                <article className="group grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-black/40">
                  {/* Imagem */}
                  <div
                    className={`relative min-h-[240px] lg:min-h-[420px] overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {master.heroImage && (
                      <Image
                        src={master.heroImage}
                        alt={master.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover grayscale brightness-[0.7] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center justify-center rounded-2xl bg-gold text-black p-3 shadow-lg">
                        <master.Icon size={24} />
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div
                    className={`flex flex-col gap-5 p-7 md:p-10 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {master.tagline && (
                      <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-background px-3 py-1 text-xs font-medium text-gold">
                        {master.tagline}
                      </span>
                    )}

                    <h3 className="text-2xl md:text-3xl font-bold text-primary font-serif leading-snug group-hover:text-gold transition-colors">
                      {master.title}
                    </h3>

                    <p className="text-secondary leading-relaxed line-clamp-4">
                      {master.description}
                    </p>

                    {/* Chips de estatísticas */}
                    <div className="flex flex-wrap gap-2">
                      {stats.map((stat) => (
                        <span
                          key={stat.label}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-secondary"
                        >
                          <stat.icon size={14} className="text-gold" />
                          {stat.label}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <UserRound size={16} className="text-gold shrink-0" />
                      Coordenação: {master.coordinator}
                    </div>

                    <div className="mt-2">
                      <Button
                        href={`/mestrados/${master.slug}`}
                        variant="primary"
                        icon={<ArrowRight size={16} />}
                      >
                        Ver programa completo
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
