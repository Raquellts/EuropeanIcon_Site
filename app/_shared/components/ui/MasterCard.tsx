import Image from "next/image";
import Link from "next/link";
import { Clock, Award, MapPin, UserRound, ArrowRight } from "lucide-react";
import type { Master } from "@/src/data/masters";
import Pill from "./Pill";
import ScrollReveal from "./ScrollReveal";

interface MasterCardProps {
  master: Master;
  index: number;
}

export default function MasterCard({ master, index }: MasterCardProps) {
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
      label: `Presenciais · ${master.locations.join(" · ")}`,
    },
  ].filter(Boolean) as { icon: typeof Clock; label: string }[];

  return (
    <ScrollReveal delay={index * 120}>
      <Link href={`/mestrados/${master.slug}`}>
        <article className="group grid md:grid-cols-2 overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-black/40 cursor-pointer">
          {/* Imagem */}
          <div
            className={`relative min-h-[240px] lg:min-h-[420px] overflow-hidden ${
              index % 2 === 1 ? "md:order-2" : ""
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
            <div
              className={`absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent ${
                index % 2 === 0
                  ? "md:bg-gradient-to-l"
                  : "md:bg-gradient-to-r"
              }`}
            />
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center justify-center rounded-2xl bg-gold text-black p-3 shadow-lg">
                <master.Icon size={24} />
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className={`flex flex-col gap-5 p-7 md:p-10 ${
              index % 2 === 1 ? "md:order-1" : ""
            }`}
          >
            {master.tagline && (
              <Pill variant="tagline" className="w-fit">
                {master.tagline}
              </Pill>
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
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted group-hover:text-gold transition-colors">
                Saiba mais
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  );
}
