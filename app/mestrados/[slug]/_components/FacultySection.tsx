"use client";

import { User, ArrowRight } from "lucide-react";
import { getFacultyByMaster, getRoleCategory } from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import { Button } from "../../../_shared/components/ui/Button";
import FacultyCard from "../../../_shared/components/ui/FacultyCard";
import Pill from "../../../_shared/components/ui/Pill";
import ScrollReveal from "../../../_shared/components/ui/ScrollReveal";

interface FacultySectionProps {
  masterSlug: string;
  maxCoordinators?: number;
  maxOrientadores?: number;
  maxDocentes?: number;
}

export default function FacultySection({
  masterSlug: rawMasterSlug,
  maxCoordinators = 3,
  maxOrientadores = 3,
  maxDocentes = 6,
}: FacultySectionProps) {
  const masterSlug = rawMasterSlug.replace("mestrado-", "");
  const allFaculty = getFacultyByMaster(masterSlug);

  const coordinators = allFaculty.filter(
    (p) => getRoleCategory(p.role) === "coordenador",
  );
  const orientadores = allFaculty.filter(
    (p) => getRoleCategory(p.role) === "orientador",
  );
  const docentes = allFaculty.filter(
    (p) => getRoleCategory(p.role) === "docente",
  );

  const showOrientadores = orientadores.length > 0;
  const visibleCoordinators = coordinators.slice(0, maxCoordinators);
  const visibleOrientadores = showOrientadores
    ? orientadores.slice(0, maxOrientadores)
    : [];
  const visibleDocentes = docentes.slice(0, maxDocentes);

  return (
    <section
      id="docentes"
      className="py-20 md:py-28 border-t border-border relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.08]" />

      <div className="section-container relative">
        <ScrollReveal className="text-center mb-14">
          <Pill icon={<User size={14} />} className="mb-5">
            Corpo Docente
          </Pill>
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
            Profissionais renomados que constroem a excelência deste mestrado.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </ScrollReveal>

        {/* Coordenador(es) */}
        {coordinators.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold mb-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-gold/20" />
                Coordenador{coordinators.length > 1 ? "es" : ""}
                <span className="h-px flex-1 bg-gold/20" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCoordinators.map((person) => (
                  <FacultyCard
                    key={person.slug}
                    person={person}
                    photoSrc={personPhotoPath(person.slug)}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  variant="primary"
                  href={`/mestrados/docentes?mestrado=${masterSlug}`}
                  icon={<ArrowRight size={16} />}
                >
                  Ver todos os coordenadores
                </Button>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Orientadores */}
        {showOrientadores && visibleOrientadores.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold mb-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-gold/20" />
                Orientadores
                <span className="h-px flex-1 bg-gold/20" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleOrientadores.map((person) => (
                  <FacultyCard
                    key={person.slug}
                    person={person}
                    photoSrc={personPhotoPath(person.slug)}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  variant="primary"
                  href={`/mestrados/docentes?mestrado=${masterSlug}`}
                  icon={<ArrowRight size={16} />}
                >
                  Ver todos os orientadores
                </Button>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Corpo Docente */}
        {visibleDocentes.length > 0 && (
          <ScrollReveal>
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold mb-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-gold/20" />
                Corpo Docente
                <span className="h-px flex-1 bg-gold/20" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleDocentes.map((person) => (
                  <FacultyCard
                    key={person.slug}
                    person={person}
                    photoSrc={personPhotoPath(person.slug)}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  variant="primary"
                  href={`/mestrados/docentes?mestrado=${masterSlug}`}
                  icon={<ArrowRight size={16} />}
                >
                  Ver todos os professores
                </Button>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
