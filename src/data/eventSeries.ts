export interface EventSeries {
  slug: string;
  name: string;
  category: string;
  description: string;
  coverImage: string;
}

export const eventSeries: EventSeries[] = [
  {
    slug: "direito-penal-economico",
    name: "Direito Penal Econômico",
    category: "direito",
    description:
      "Série de eventos internacionais dedicados ao debate, à análise e ao aprofundamento do Direito Penal Econômico, reunindo especialistas de Portugal, Brasil, Espanha e toda a Europa.",
    coverImage: "/images/backgrounds/fundo_forum.webp",
  },
];

export function getEventSeriesBySlug(slug: string): EventSeries | undefined {
  return eventSeries.find((s) => s.slug === slug);
}
