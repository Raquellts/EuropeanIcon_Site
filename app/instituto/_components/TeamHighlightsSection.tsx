"use client";

import { Users, ArrowRight } from "lucide-react";
import { getPersonBySlug } from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import { masters } from "@/src/data/masters";
import { Button } from "../../_shared/components/ui/Button";
import FacultyCard from "../../_shared/components/ui/FacultyCard";
import Pill from "../../_shared/components/ui/Pill";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";

const featuredSlugs: Record<string, string> = {
  "direito-penal-economico": "arthur-pinto-de-lemos-junior",
  "harmonizacao-orofacial": "paulo-moraes",
};

export default function TeamHighlightsSection() {
  return (
    <section
      id="equipe"
      className="py-20 md:py-28 border-t border-border relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.08]" />

      <div className="section-container relative">
        <ScrollReveal className="text-center mb-14">
          <Pill icon={<Users size={14} />} className="mb-5">
            Nossa Equipe
          </Pill>
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Conheça Nossos Coordenadores
          </h2>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            Profissionais renomados que fazem a diferença na formação de novos
            líderes internacionais.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {masters.map((master, index) => {
            const masterKey = master.slug.replace("mestrado-", "");
            const featuredSlug = featuredSlugs[masterKey];
            const person = featuredSlug ? getPersonBySlug(featuredSlug) : null;
            const photoSrc = featuredSlug ? personPhotoPath(featuredSlug) : "";
            const isHof = master.slug.includes("harmonizacao");

            const shortName = master.title.replace(
              "Mestrado Internacional em ",
              "",
            );

            return (
              <ScrollReveal key={master.slug} delay={index * 120}>
                <div className="flex flex-col items-center text-center gap-5">
                  {/* Badge */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    Coordenador Científico do Mestrado de {shortName}
                  </p>

                  {/* Card */}
                  {person && (
                    <div className="w-full">
                      <FacultyCard
                        person={person}
                        photoSrc={photoSrc}
                        showPlaceholder={isHof}
                      />
                    </div>
                  )}

                  {/* Botão */}
                  <Button
                    variant="gold"
                    href={`/mestrados/${master.slug}/docentes`}
                    icon={<ArrowRight size={16} />}
                  >
                    Ver todos os professores
                  </Button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
