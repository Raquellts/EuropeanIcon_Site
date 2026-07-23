"use client";

import Link from "next/link";
import {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
  Languages,
  MapPin,
  ShieldCheck,
  Plane,
  Building2,
} from "lucide-react";
import type { Benefit } from "../../../../src/data/masters";

const iconMap: Record<string, any> = {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
  Languages,
  MapPin,
  ShieldCheck,
  Plane,
  Building2,
};

const defaultBenefits: Benefit[] = [
  {
    icon: "Award",
    title: "Dupla Certificação Internacional",
    description:
      "Obtenha o título de Máster pela Europa e o título de Mestre no Brasil, reconhecido pelo MEC por meio de parceria com instituições de excelência.",
  },
  {
    icon: "Users",
    title: "Corpo Docente de Excelência",
    description:
      "Aulas ministradas por Professores Doutores, Magistrados, Procuradores, pesquisadores e profissionais de reconhecida atuação no Brasil e na Europa.",
  },
  {
    icon: "Globe",
    title: "Formação Internacional",
    description:
      "Experiência acadêmica que integra diferentes sistemas, proporcionando uma visão comparada e contemporânea da área de atuação.",
  },
  {
    icon: "Clock",
    title: "3.000 horas e 120 créditos ECTS",
    description:
      "Uma formação robusta, alinhada aos padrões acadêmicos europeus e reconhecida no Espaço Europeu de Ensino Superior.",
  },
  {
    icon: "GraduationCap",
    title: "Networking de Alto Nível",
    description:
      "Convivência com profissionais de diversas carreiras e construção de uma rede internacional de relacionamento acadêmico e profissional.",
  },
  {
    icon: "Search",
    title: "Pesquisa Científica Aplicada",
    description:
      "Desenvolvimento de competências para produção científica, docência e atuação especializada.",
  },
  {
    icon: "Languages",
    title: "Aulas em Português",
    description:
      "Todo o programa é ministrado em língua portuguesa, facilitando o aprofundamento do conteúdo sem barreiras linguísticas.",
  },
  {
    icon: "MapPin",
    title: "Experiência Presencial Internacional",
    description:
      "Módulos presenciais realizados na Europa, proporcionando vivência acadêmica e intercâmbio com professores e instituições internacionais.",
  },
];

interface BenefitsSectionProps {
  benefits?: Benefit[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const itemsToDisplay =
    benefits && benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.08]" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Por que escolher a Formação Internacional?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Uma formação construída para quem pretende ir além, com excelência
            acadêmica e reconhecimento internacional.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemsToDisplay.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Award;
            const cardClasses =
              "bg-background border border-border rounded-2xl p-6 hover:border-gold/30 transition-all group";
            const inner = (
              <>
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </>
            );

            return benefit.href ? (
              <Link
                key={i}
                href={benefit.href}
                className={cardClasses}
              >
                {inner}
              </Link>
            ) : (
              <div key={i} className={cardClasses}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
