"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  GraduationCap,
  Award,
  MapPin,
  Tags,
  X,
  ChevronDown,
} from "lucide-react";
import {
  getAllFaculty,
  getRoleCategory,
  ROLE_CATEGORY_LABEL,
  type Person,
  type RoleCategory,
} from "@/src/data/people";
import { masters } from "@/src/data/masters";
import { personPhotoPath } from "@/src/data/paths";
import FacultyCard from "@/app/_shared/components/ui/FacultyCard";
import Navbar from "@/app/_shared/components/ui/Navbar";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import ScrollReveal from "@/app/_shared/components/ui/ScrollReveal";
import StatCard from "@/app/_shared/components/ui/StatCard";
import Pill from "@/app/_shared/components/ui/Pill";

// ---------------------------------------------------------------------------
// Filtros: cada filtro é só uma entrada nesta lista — nome do parâmetro na
// URL, ícone, como extrair as opções disponíveis a partir do corpo docente
// atual, e como testar se uma pessoa bate com o valor escolhido. Para
// adicionar um novo filtro no futuro (ex.: "Instituição", assim que existir
// um campo estruturado para isso em Person), basta acrescentar mais um item
// aqui — nada mais na página precisa mudar.
// ---------------------------------------------------------------------------

interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface FilterDef {
  key: string; // nome do parâmetro na URL (?key=valor)
  label: string;
  icon: ReactNode;
  getOptions: (people: Person[]) => FilterOption[];
  matches: (person: Person, value: string) => boolean;
}

function shortMasterLabel(title: string): string {
  return title.replace("Mestrado Internacional em ", "");
}

function countOptions(
  people: Person[],
  extract: (p: Person) => string[],
): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const person of people) {
    for (const value of extract(person)) {
      if (!value) continue;
      counts[value] = (counts[value] ?? 0) + 1;
    }
  }
  return counts;
}

const ROLE_CATEGORY_ORDER: RoleCategory[] = [
  "coordenador",
  "orientador",
  "docente",
];

const FILTERS: FilterDef[] = [
  {
    key: "mestrado",
    label: "Mestrado",
    icon: <GraduationCap size={14} />,
    getOptions: (people) => {
      const counts = countOptions(people, (p) => p.facultyOf ?? []);
      return masters
        .map((m) => {
          const slug = m.slug.replace("mestrado-", "");
          return {
            value: slug,
            label: shortMasterLabel(m.title),
            count: counts[slug] ?? 0,
          };
        })
        .filter((o) => o.count > 0);
    },
    matches: (person, value) => !!person.facultyOf?.includes(value),
  },
  {
    key: "funcao",
    label: "Função",
    icon: <Award size={14} />,
    getOptions: (people) => {
      const counts: Record<string, number> = {};
      for (const p of people) {
        const cat = getRoleCategory(p.role);
        counts[cat] = (counts[cat] ?? 0) + 1;
      }
      return ROLE_CATEGORY_ORDER.filter((cat) => counts[cat] > 0).map(
        (cat) => ({
          value: cat,
          label: ROLE_CATEGORY_LABEL[cat],
          count: counts[cat],
        }),
      );
    },
    matches: (person, value) => getRoleCategory(person.role) === value,
  },
  {
    key: "area",
    label: "Área de atuação",
    icon: <Tags size={14} />,
    getOptions: (people) => {
      const counts = countOptions(people, (p) => p.areas ?? []);
      return Object.entries(counts)
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
    },
    matches: (person, value) => !!person.areas?.includes(value),
  },
  {
    key: "pais",
    label: "País",
    icon: <MapPin size={14} />,
    getOptions: (people) => {
      const counts = countOptions(people, (p) =>
        p.country ? [p.country] : [],
      );
      return Object.entries(counts)
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
    },
    matches: (person, value) => person.country === value,
  },
  // Próximos filtros (ex.: Instituição, Especialidade) entram aqui assim que
  // existir um campo estruturado correspondente em Person — ver people.ts.
];

export default function DocentesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const allFaculty = useMemo(() => getAllFaculty(), []);

  const activeValues = useMemo(() => {
    const values: Record<string, string> = {};
    for (const filter of FILTERS) {
      const v = searchParams.get(filter.key);
      if (v) values[filter.key] = v;
    }
    return values;
  }, [searchParams]);

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`/mestrados/docentes?${params.toString()}`, {
      scroll: false,
    });
  }

  function clearAll() {
    setSearch("");
    router.replace("/mestrados/docentes", { scroll: false });
  }

  const filtered = useMemo(() => {
    return allFaculty.filter((person) => {
      const matchesFilters = FILTERS.every((filter) => {
        const value = activeValues[filter.key];
        return !value || filter.matches(person, value);
      });
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        person.name.toLowerCase().includes(q) ||
        person.role.toLowerCase().includes(q) ||
        person.description?.toLowerCase().includes(q) ||
        person.curriculum?.toLowerCase().includes(q);
      return matchesFilters && matchesSearch;
    });
  }, [allFaculty, activeValues, search]);

  const groups = useMemo(() => {
    return ROLE_CATEGORY_ORDER.map((cat) => ({
      category: cat,
      label: ROLE_CATEGORY_LABEL[cat],
      people: filtered.filter((p) => getRoleCategory(p.role) === cat),
    })).filter((g) => g.people.length > 0);
  }, [filtered]);

  const countryCount = useMemo(
    () => new Set(allFaculty.map((p) => p.country).filter(Boolean)).size,
    [allFaculty],
  );

  // Se veio de um único mestrado (link "Ver todos os docentes"), o botão de
  // voltar leva de volta para a página desse mestrado; caso contrário, para
  // a listagem geral de mestrados.
  const originMaster = activeValues.mestrado
    ? masters.find(
        (m) => m.slug.replace("mestrado-", "") === activeValues.mestrado,
      )
    : undefined;

  const activeFilterChips = FILTERS.filter((f) => activeValues[f.key]).map(
    (f) => {
      const option = f
        .getOptions(allFaculty)
        .find((o) => o.value === activeValues[f.key]);
      return { key: f.key, label: option?.label ?? activeValues[f.key] };
    },
  );
  const activeCount = activeFilterChips.length + (search ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_60%)] opacity-[0.12]" />
        <div className="section-container relative">
          <ScrollReveal>
            <Link
              href={
                originMaster ? `/mestrados/${originMaster.slug}` : "/mestrados"
              }
              className="inline-flex items-center gap-2 text-secondary hover:text-gold transition-colors text-sm mb-6"
            >
              <ArrowLeft size={16} />
              {originMaster
                ? `Voltar para ${shortMasterLabel(originMaster.title)}`
                : "Voltar para Mestrados"}
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold header-text font-serif mb-4 max-w-2xl">
              Professores, orientadores e coordenadores
            </h1>
            <p className="text-secondary max-w-xl">
              Conheça o corpo docente de todos os mestrados do European &amp;
              Icon Institute
              {originMaster
                ? ` vinculado a ${shortMasterLabel(originMaster.title)}`
                : ""}
              . Use os filtros abaixo para encontrar rapidamente quem procura.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-10 md:gap-16 mt-10">
              <StatCard value={allFaculty.length} label="Profissionais" />
              <StatCard value={masters.length} label="Mestrados" />
              <StatCard value={countryCount} label="Países" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-container py-12 md:py-16">
        {/* Barra de filtros */}
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-5 md:p-6 mb-4">
            <div className="relative mb-6">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Buscar por nome, cargo ou área..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FILTERS.map((filter) => {
                const options = filter.getOptions(allFaculty);
                if (options.length === 0) return null;
                const active = activeValues[filter.key] ?? "";
                return (
                  <div key={filter.key}>
                    <label
                      htmlFor={`filtro-${filter.key}`}
                      className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold mb-2"
                    >
                      {filter.icon}
                      {filter.label}
                    </label>
                    <div className="relative">
                      <select
                        id={`filtro-${filter.key}`}
                        value={active}
                        onChange={(e) =>
                          updateParam(filter.key, e.target.value || null)
                        }
                        className="w-full appearance-none rounded-xl border border-border bg-background pl-4 pr-10 py-3 text-sm text-primary focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                      >
                        <option value="">Todos</option>
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label} ({option.count})
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Resumo + chips de filtros ativos */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <p className="text-sm text-secondary">
            <span className="text-primary font-semibold">
              {filtered.length}
            </span>{" "}
            de {allFaculty.length} profissionais
          </p>

          {activeCount > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {activeFilterChips.map((chip) => (
                <Pill
                  key={chip.key}
                  type="button"
                  onClick={() => updateParam(chip.key, null)}
                  variant="tagline"
                >
                  {chip.label}
                  <X size={12} />
                </Pill>
              ))}
              {search && (
                <Pill
                  type="button"
                  onClick={() => setSearch("")}
                  variant="tagline"
                >
                  &ldquo;{search}&rdquo;
                  <X size={12} />
                </Pill>
              )}
              <button
                onClick={clearAll}
                className="text-xs text-muted hover:text-primary transition-colors underline underline-offset-2 ml-1"
              >
                Limpar tudo
              </button>
            </div>
          )}
        </div>

        {/* Resultados, agrupados por função */}
        {groups.length > 0 ? (
          <div className="flex flex-col gap-16">
            {groups.map((group) => (
              <div key={group.category}>
                <div className="flex items-baseline gap-3 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold header-text">
                    {group.label}
                    {group.people.length > 1 ? "es" : ""}
                  </h2>
                  <span className="text-sm text-muted">
                    {group.people.length}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.people.map((person, index) => (
                    <ScrollReveal key={person.slug} delay={(index % 8) * 40}>
                      <FacultyCard
                        person={person}
                        photoSrc={personPhotoPath(person.slug)}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-2xl border border-dashed border-border">
            <p className="text-secondary">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
            <button
              onClick={clearAll}
              className="mt-4 text-sm text-gold hover:underline underline-offset-2"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
