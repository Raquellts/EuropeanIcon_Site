"use client";

import { useState } from "react";
import { Clock, ChevronDown } from "lucide-react";
import type { CurriculumModule } from "../../../../src/data/masters";

interface CurriculumSectionProps {
  curriculum: CurriculumModule[];
}

export default function CurriculumSection({
  curriculum,
}: CurriculumSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const totalWorkload = curriculum.reduce((acc, mod) => {
    return (
      acc +
      mod.disciplines.reduce((dAcc, disc) => {
        const hours = parseInt(disc.workload);
        return dAcc + (isNaN(hours) ? 0 : hours);
      }, 0)
    );
  }, 0);

  return (
    <section id="grade" className="py-24 bg-surface/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Grade Curricular
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Estrutura do programa com módulos e disciplinas detalhadas.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
          {totalWorkload > 0 && (
            <p className="text-sm text-muted mt-4">
              Carga horária total:{" "}
              <span className="text-gold font-semibold">{totalWorkload}h</span>
            </p>
          )}
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {curriculum.map((mod, modIdx) => {
            const isOpen = openIndex === modIdx;
            const moduleWorkload = mod.disciplines.reduce((acc, disc) => {
              const hours = parseInt(disc.workload);
              return acc + (isNaN(hours) ? 0 : hours);
            }, 0);

            return (
              <div
                key={modIdx}
                className="bg-background border border-border rounded-2xl overflow-hidden transition-colors hover:border-gold/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : modIdx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-lg font-serif font-bold text-primary truncate">
                        {mod.name}
                      </h3>
                      <p className="text-sm text-muted">
                        {mod.disciplines.length} disciplinas · {moduleWorkload}h
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border">
                    {mod.disciplines.map((disc, discIdx) => (
                      <div
                        key={discIdx}
                        className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 ${
                          discIdx < mod.disciplines.length - 1
                            ? "border-b border-border"
                            : ""
                        }`}
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-primary">
                            {disc.name}
                          </h4>
                          {disc.description && (
                            <p className="text-sm text-secondary mt-1">
                              {disc.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-gold text-sm font-medium shrink-0">
                          <Clock size={14} />
                          {disc.workload}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
