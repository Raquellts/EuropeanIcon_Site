import type { BaseEntity } from "../types";

export interface Journal extends Partial<BaseEntity> {
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

export const imperium: Journal = {
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
};
