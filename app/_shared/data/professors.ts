export interface Professor {
  slug: string;
  name: string;
  role: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  countryCode: string;
  curriculum: string;
  areas: string[];
  social?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    lattes?: string;
  };
  contact?: string;
}

export const professors: Professor[] = [
  {
    slug: "carlos",
    name: "Prof. Dr. Carlos Martínez-Buján Pérez",
    role: "Catedrático de Direito Penal (Espanha)",
    photo: "",
    description:
      "Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina.",
    city: "Santiago de Compostela",
    country: "Espanha",
    countryCode: "es",
    contact: "",
    curriculum:
      "Catedrático de Direito Penal (Espanha). Uma das maiores autoridades internacionais em Direito Penal Econômico. Autor do tratado 'Derecho Penal Económico y de la Empresa', referência para magistrados e advogados na Espanha e América Latina. Ex-Diretor da Escola de Prática Jurídica da Universidade de Santiago de Compostela. Ex-Secretário do Instituto de Criminologia da Universidade de Santiago de Compostela. Defensor de uma visão favorável, com ressalvas, sobre a expansão do Direito Penal Econômico.",
    areas: ["Direito Penal Econômico", "Direito Penal Empresarial"],
    social: {},
  },
  {
    slug: "nuno",
    name: "Prof. Dr. Nuno Brandão",
    role: "Professor da Faculdade de Direito - Universidade de Coimbra",
    photo: "",
    description:
      "Professor da Faculdade de Direito da Universidade de Coimbra desde 2000. Doutor em Ciências Jurídico-Criminais. Advogado e conferencista em dezenas de colóquios e formações em Portugal e no estrangeiro.",
    city: "Coimbra",
    country: "Portugal",
    countryCode: "pt",
    contact: "",
    curriculum:
      "Professor da Faculdade de Direito - Universidade de Coimbra, desde 2000. Doutor em Ciências Jurídico-Criminais pela Faculdade de Direito - Universidade de Coimbra (2013). Advogado. Conferencista em dezenas de colóquios e formações, em Portugal e no estrangeiro. Autor de monografias e de artigos nas áreas do direito penal e do direito processual penal.",
    areas: [
      "Direito Penal",
      "Direito Processual Penal",
      "Crime de Lavagem de Dinheiro",
    ],
    social: {},
  },
  {
    slug: "pedro",
    name: "Prof. Dr. Pedro Caeiro",
    role: "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC)",
    photo: "",
    description:
      "Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia de 2012 a 2024.",
    city: "Coimbra",
    country: "Portugal",
    countryCode: "pt",
    contact: "",
    curriculum:
      "Professor da Faculdade de Direito - Universidade de Coimbra (FDUC). Referência internacional em Direito Penal Europeu, Direito Internacional Penal e Cooperação Judiciária. Membro do Grupo de Peritos em Política Criminal - Comissão Europeia 2012 a 2024. Membro fundador da ECLAN e Editor da Elgar Encyclopedia of Crime and Criminal Justice. Designado pela Ministra da Justiça para presidir o grupo que elaborou o anteprojeto de transposição da Diretiva (UE) 2024/1260 sobre perda de bens de origem criminosa, atualmente em discussão na Assembleia da República.",
    areas: [
      "Direito Penal Europeu",
      "Direito Internacional Penal",
      "Cooperação Judiciária",
      "Confisco de Vantagens Criminosas",
    ],
    social: {},
  },
  {
    slug: "arthur",
    name: "Prof. Dr. Arthur Pinto de Lemos Junior",
    role: "Procurador de Justiça do Ministério Público de São Paulo (MPSP)",
    photo: "",
    description:
      "Procurador de Justiça do MPSP. Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra. Subprocurador-Geral de Justiça de Relações Institucionais do MPSP.",
    city: "São Paulo",
    country: "Brasil",
    countryCode: "br",
    contact: "",
    curriculum:
      "Procurador de Justiça do Ministério Público de São Paulo (MPSP). Mestre em Ciências Jurídico-Criminais e Especialista em Direito Penal Econômico pela Universidade de Coimbra, Portugal. Foi Secretário do Conselho Superior do Ministério Público de São Paulo (2024 a 2025). Atual Subprocurador-Geral de Justiça de Relações Institucionais do Ministério Público de São Paulo. Nomeado em 2025 como membro do Conselho Nacional de Segurança Pública e Defesa Social (CNSP) pelo Ministério da Justiça. Coordenador científico do Mestrado Internacional em Direito Penal Econômico pelo European Institute e professor de cursos de capacitação contra a lavagem de dinheiro no Ministério da Justiça.",
    areas: [
      "Direito Penal Econômico",
      "Lavagem de Dinheiro",
      "Segurança Pública",
    ],
    social: {},
  },
  {
    slug: "regina",
    name: "Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
    role: "Professora de Direito Penal e Criminologia na Universidade de Oviedo",
    photo: "",
    description:
      "Doutora em Direito Penal pela Universitat Pompeu Fabra. Ex-Promotora de Justiça do Ministério Público de São Paulo. Desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais e inovação tecnológica.",
    city: "Oviedo",
    country: "Espanha",
    countryCode: "es",
    contact: "",
    curriculum:
      "Professora de Direito Penal e Criminologia na Universidade de Oviedo. Doutora em Direito Penal pela Universitat Pompeu Fabra. Foi Promotora de Justiça do Ministério Público de São Paulo. Possui produção acadêmica internacional e desenvolve pesquisas em Direito Penal Econômico, criminalidade empresarial, crimes ambientais, inovação tecnológica, discriminação e criminalidade de gênero contra a mulher.",
    areas: [
      "Direito Penal Econômico",
      "Criminalidade Empresarial",
      "Crimes Ambientais",
      "Inovação Tecnológica",
      "Criminologia",
    ],
    social: {},
  },
];

export function getProfessorBySlug(slug: string): Professor | undefined {
  return professors.find((p) => p.slug === slug);
}
