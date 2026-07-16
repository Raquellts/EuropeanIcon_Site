"use client";

import StatCard from "../../../_shared/components/ui/StatCard";

interface StatsSectionProps {
  totalHours?: string;
  ects?: string;
  modulesCount?: number;
  locationsCount?: number;
}

export default function StatsSection({
  totalHours,
  ects,
  modulesCount,
  locationsCount,
}: StatsSectionProps) {
  if (!totalHours && !ects) return null;

  return (
    <section className="py-16 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {totalHours && (
            <StatCard
              value={parseInt(totalHours.replace(/\./g, ""))}
              suffix="h"
              label="Carga Horária"
            />
          )}
          {ects && (
            <StatCard
              value={parseInt(ects)}
              suffix=" ECTS"
              label="Créditos Europeus"
            />
          )}
          {modulesCount && (
            <StatCard value={modulesCount} label="Módulos Acadêmicos" />
          )}
          {locationsCount && (
            <StatCard
              value={locationsCount}
              suffix="+"
              label="Países"
            />
          )}
        </div>
      </div>
    </section>
  );
}
