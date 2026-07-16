export interface Journal {
  slug: string;
  name: string;
  shortName: string;
  subject: string;
  description: string;
  url: string;
  logo: string;
  icon: string;
  coverImage: string;
  logoStyle?: Record<string, string>;
  iconStyle?: Record<string, string>;
}

export const journals: Journal[] = [
  {
    slug: "imperium",
    name: "Imperium - European Journal of Economic Criminal Law",
    shortName: "Imperium",
    subject: "Direito Penal Econômico",
    description:
      "A Imperium é um periódico científico internacional e interdisciplinar focado no Direito Penal Econômico, abordando temas como responsabilidade penal de pessoas jurídicas, crimes financeiros e compliance. A revista publica trabalhos acadêmicos originais submetidos a dupla revisão cega, visando o desenvolvimento teórico e empírico da área para um público de pesquisadores e profissionais do Direito.",
    url: "https://journals.institutoeuropean.com/imperium",
    logo: "/images/logos/logo_imperium.webp",
    icon: "/images/logos/icon_imperium.webp",
    coverImage: "/images/revistas/imperium.webp",
    logoStyle: {
      transform: "scale(1.4)",
      marginRight: "2.5rem",
    },
  },
  {
    slug: "aesthis",
    name: "Aesthis - European Journal of Aesthetic & Regenerative Medicine",
    shortName: "Aesthis",
    subject: "Harmonização Orofacial",
    description:
      "A Aesthis é um periódico científico de acesso aberto, que se dedica à divulgação do conhecimento nas áreas da saúde, com ênfase em medicina estética, medicina regenerativa, harmonização orofacial e campos correlatos. Nossa missão é promover a divulgação de evidências clínicas, avanços técnicos, inovações tecnológicas e pesquisas aplicadas que contribuam para a prática profissional qualificada e para o desenvolvimento científico dessas áreas.",
    url: "https://journals.institutoeuropean.com/aesthis",
    logo: "/images/logos/logo_aesthis.webp",
    icon: "/images/logos/icon_aesthis.webp",
    coverImage: "/images/revistas/aesthis.webp",
    iconStyle: {
      transform: "scale(1.4)",
    },
  },
];

export function getJournalBySlug(slug: string): Journal | undefined {
  return journals.find((j) => j.slug === slug);
}
