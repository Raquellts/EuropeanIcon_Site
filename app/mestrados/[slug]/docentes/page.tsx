"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { getFacultyByMaster } from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import FacultyCard from "@/app/_shared/components/ui/FacultyCard";
import Navbar from "@/app/_shared/components/ui/Navbar";
import Footer from "@/app/_shared/components/ui/Footer";
import ScrollReveal from "@/app/_shared/components/ui/ScrollReveal";

type FilterType = "todos" | "coordenador" | "orientador" | "docente";

function getRoleCategory(role: string): "coordenador" | "orientador" | "docente" {
  const lower = role.toLowerCase();
  if (lower.includes("coordenador") || lower.includes("coordenadora")) return "coordenador";
  if (lower.includes("orientador") || lower.includes("orientadora")) return "orientador";
  return "docente";
}

const filterLabels: Record<FilterType, string> = {
  todos: "Todos",
  coordenador: "Coordenadores",
  orientador: "Orientadores",
  docente: "Corpo Docente",
};

const masterNames: Record<string, string> = {
  "direito-penal-economico": "Mestrado em Direito Penal Econômico",
  "harmonizacao-orofacial": "Mestrado em Harmonização Orofacial",
};

interface PageProps {
  params: { slug: string };
}

export default function DocentesPage({ params }: PageProps) {
  const { slug } = params;
  const masterSlug = slug.replace("mestrado-", "");
  const allFaculty = getFacultyByMaster(masterSlug);
  const masterName = masterNames[masterSlug] || slug;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("todos");

  const filtered = useMemo(() => {
    return allFaculty.filter((p) => {
      const matchesFilter =
        filter === "todos" || getRoleCategory(p.role) === filter;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [allFaculty, filter, search]);

  const isHof = masterSlug.includes("harmonizacao");

  const filterCounts = useMemo(() => {
    const counts: Record<FilterType, number> = {
      todos: allFaculty.length,
      coordenador: 0,
      orientador: 0,
      docente: 0,
    };
    allFaculty.forEach((p) => {
      const cat = getRoleCategory(p.role);
      counts[cat]++;
    });
    return counts;
  }, [allFaculty]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-10 md:py-16 mt-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-10">
            <Link
              href={`/mestrados/mestrado-${masterSlug}`}
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-6"
            >
              <ArrowLeft size={16} />
              Voltar para {masterName}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold header-text mb-2">
              Corpo Docente
            </h1>
            <p className="text-secondary">
              {masterName} — {allFaculty.length} profissionais
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Filtros */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Busca */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Buscar por nome, cargo ou área..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface pl-10 pr-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Filtros de categoria */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(filterLabels) as FilterType[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                    filter === key
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border bg-surface text-secondary hover:border-gold/30 hover:text-primary"
                  }`}
                >
                  {filterLabels[key]}
                  <span className="text-xs opacity-60">
                    ({filterCounts[key]})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((person, index) => (
              <ScrollReveal key={person.slug} delay={index * 40}>
                <FacultyCard
                  person={person}
                  photoSrc={personPhotoPath(person.slug)}
                  showPlaceholder={isHof}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-secondary">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
