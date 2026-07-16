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

export const aesthis: Journal = {
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
};
