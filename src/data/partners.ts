import { partnerLogoPath } from "./paths";
export interface Partner {
  name: string;
  logo: string;
  url?: string;
  category?: string;
  country?: string;
  countryCode?: string;
}

export const partners: Partner[] = [
  {
    name: "ADEPPE — Associação dos Delegados de Polícia Civil de PE",
    logo: partnerLogoPath("adeppe"),
    url: "https://adeppe.com.br",
    category: "Associação",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "AMPPE — Associação do Ministério Público de PE",
    logo: partnerLogoPath("amppe"),
    url: "https://amppe.com.br",
    category: "Associação",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "ASAMP/TO — Associação dos Servidores Administrativos do MP/TO",
    logo: partnerLogoPath("asampto"),
    url: "https://www.asamp.com.br",
    category: "Associação",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "EUNEIZ Universidad Vitoria-Gasteiz",
    logo: partnerLogoPath("euneiz"),
    url: "https://www.euneiz.com",
    category: "Universidade",
    country: "Espanha",
    countryCode: "es",
  },
  {
    name: "FAEPOL — Fundação de Apoio ao Ensino, Pesquisa e Desenvolvimento da Polícia Civil do RJ",
    logo: partnerLogoPath("faepol"),
    url: "https://www.faepol.org.br",
    category: "Fundação",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "Faculdade FGE",
    logo: partnerLogoPath("fge"),
    url: "https://portalfge.com.br",
    category: "Faculdade",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "MPSP — Ministério Público do Estado de São Paulo",
    logo: partnerLogoPath("mpsp"),
    url: "https://www.mpsp.mp.br",
    category: "Órgão Público",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "MUST University (Florida)",
    logo: partnerLogoPath("mustuniversity"),
    url: "https://mustedu.com",
    category: "Universidade",
    country: "EUA",
    countryCode: "us",
  },
  {
    name: "OAB Tatuapé — 101ª Subseção da OAB/SP",
    logo: partnerLogoPath("oabtatuape"),
    url: "https://oabtatuape.org.br",
    category: "Ordem",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "SINDPESP — Sindicato dos Delegados de Polícia do Estado de SP",
    logo: partnerLogoPath("sindpesp"),
    url: "https://sindpesp.org.br",
    category: "Sindicato",
    country: "Brasil",
    countryCode: "br",
  },
  {
    name: "Faculdade Van Gogh (São Paulo)",
    logo: partnerLogoPath("vangogh"),
    url: "https://www.faculdadevangogh.edu.br",
    category: "Faculdade",
    country: "Brasil",
    countryCode: "br",
  },
];
