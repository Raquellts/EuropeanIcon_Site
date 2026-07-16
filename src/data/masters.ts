import { Landmark, Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CurriculumDiscipline {
  name: string;
  workload: string;
  ects?: string;
  description?: string;
}

export interface CurriculumModule {
  name: string;
  disciplines: CurriculumDiscipline[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Master {
  slug: string;
  title: string;
  description: string;
  coordinator: string;
  logo: string;
  icon?: string;
  url: string;
  Icon: LucideIcon;
  logoStyle?: Record<string, string>;
  heroImage?: string;
  aboutImage?: string;
  tagline?: string;
  videoUrl?: string;
  totalHours?: string;
  ects?: string;
  locations?: string[];
  certification?: string;
  benefits?: Benefit[];
  curriculumModules?: CurriculumModule[];
  galleryImages?: GalleryImage[];
}

export const masters: Master[] = [
  {
    slug: "mestrado-direito-penal-economico",
    title: "Mestrado Internacional em Direito Penal Econômico",
    description:
      "O primeiro programa internacional do Brasil com 3.000 horas de formação, 120 ECTS e possibilidade de dupla titulação de Mestre no Brasil e na Europa. A criminalidade econômica contemporânea já não pode ser compreendida a partir de uma perspectiva exclusivamente nacional. Lavagem de capitais, corrupção transnacional, crimes contra o sistema financeiro, responsabilidade penal empresarial e recuperação de ativos são fenômenos que ultrapassam fronteiras e desafiam os modelos tradicionais de investigação, defesa e julgamento.",
    coordinator: "Prof. Dr. Arthur Pinto de Lemos Junior",
    logo: "/images/logos/logo_eurolaw.webp",
    url: "https://institutoeuropean.com",
    Icon: Landmark,
    logoStyle: {
      transform: "scale(1.5)",
    },
    heroImage: "/images/masters/direito-penal-economico/hero.webp",
    aboutImage: "/images/masters/direito-penal-economico/about.webp",
    tagline:
      "3.000 horas · 120 ECTS · Dupla Titulação Brasil-Europa",
    videoUrl: "https://www.youtube.com/watch?v=QY5dI3OhbN8",
    totalHours: "3.000",
    ects: "120",
    locations: ["Brasil", "Portugal", "Espanha"],
    certification:
      "Dupla titulação: Máster en Derecho Penal Económico (Universidad EUNEIZ, Espanha) + Mestre em Direito Penal Econômico (FACAMP, Brasil)",
    benefits: [
      {
        icon: "Clock",
        title: "3.000 horas de formação",
        description:
          "Carga horária completa que inclui aulas, pesquisa, produção científica, orientação e defesa de dissertação.",
      },
      {
        icon: "Globe",
        title: "Brasil, Portugal e Espanha",
        description:
          "Matriz curricular construída entre dois continentes, com contato direto com diferentes sistemas jurídicos.",
      },
      {
        icon: "GraduationCap",
        title: "Dupla titulação",
        description:
          "Possibilidade de obter diploma espanhol (EUNEIZ) e brasileiro (FACAMP) em um único programa.",
      },
      {
        icon: "Users",
        title: "Corpo docente internacional",
        description:
          "Professores doutores, magistrados, membros do Ministério Público e juristas com atuação no Brasil e na Europa.",
      },
      {
        icon: "BookOpen",
        title: "15 módulos acadêmicos",
        description:
          "Percurso intelectual estruturado com 27 disciplinas, desde fundamentos até dissertação.",
      },
      {
        icon: "Award",
        title: "120 ECTS",
        description:
          "Créditos no sistema europeu, reconhecidos em todo o Espaço Europeu de Ensino Superior.",
      },
      {
        icon: "FileText",
        title: "Revista Científica IMPERIUM",
        description:
          "Periódico internacional para divulgação de pesquisas de excelência em Direito Penal Econômico.",
      },
      {
        icon: "Search",
        title: "Pesquisa e dissertação",
        description:
          "Inserção em percurso de pesquisa com orientação individualizada, qualificação e defesa perante banca.",
      },
    ],
    curriculumModules: [
      {
        name: "Módulo 1 — Fundamentos do Direito Penal Econômico",
        disciplines: [
          {
            name: "Teoria Geral do Direito Penal Econômico",
            workload: "100h",
            ects: "4",
            description:
              "Princípios, conceitos e institutos fundamentais do direito penal econômico em perspectiva comparada.",
          },
          {
            name: "Criminologia Econômica e Empresarial",
            workload: "100h",
            ects: "4",
            description:
              "Estudo dos fenômenos criminais no contexto econômico e empresarial internacional.",
          },
          {
            name: "Tutela Penal da Ordem Econômica e Bens Jurídicos Coletivos",
            workload: "100h",
            ects: "4",
            description:
              "Análise da proteção penal dos bens jurídicos coletivos e da ordem econômica.",
          },
        ],
      },
      {
        name: "Módulo 2 — Responsabilidade Penal Empresarial",
        disciplines: [
          {
            name: "Responsabilidade Penal da Pessoa Jurídica",
            workload: "100h",
            ects: "4",
            description:
              "Teoria e prática da responsabilização penal de empresas nos sistemas jurídicos brasileiro e europeu.",
          },
          {
            name: "Crime Omissivo Impróprio do Dirigente de Empresa",
            workload: "100h",
            ects: "4",
            description:
              "Tipificação e aplicação do crime omissivo impróprio no contexto empresarial.",
          },
          {
            name: "Responsabilidade Penal de Dirigentes e Administradores",
            workload: "100h",
            ects: "4",
            description:
              "Responsabilidade individual de administradores e dirigentes em crimes econômicos.",
          },
        ],
      },
      {
        name: "Módulo 3 — Teoria do Delito e Compliance",
        disciplines: [
          {
            name: "Teoria do Delito Aplicada ao Direito Penal Econômico",
            workload: "100h",
            ects: "4",
            description:
              "Elementares da teoria do delito aplicadas aos crimes econômicos complexos.",
          },
          {
            name: "Compliance e Programas de Integridade",
            workload: "100h",
            ects: "4",
            description:
              "Programas de compliance, due diligence e prevenção de ilícitos econômicos.",
          },
          {
            name: "Psicologia do Crime Econômico",
            workload: "50h",
            ects: "2",
            description:
              "Aspectos psicológicos e comportamentais por trás da criminalidade econômica.",
          },
        ],
      },
      {
        name: "Módulo 4 — Recuperação de Ativos e Direito Penal Internacional",
        disciplines: [
          {
            name: "Recuperação de Ativos",
            workload: "100h",
            ects: "4",
            description:
              "Técnicas e instrumentos de localização e recuperação de ativos provenientes de crimes econômicos.",
          },
          {
            name: "Direito Penal Internacional Econômico",
            workload: "100h",
            ects: "4",
            description:
              "Estudo do direito penal internacional aplicado à criminalidade econômica transnacional.",
          },
        ],
      },
      {
        name: "Módulo 5 — Crimes contra a Ordem Tributária",
        disciplines: [
          {
            name: "Crimes contra a Ordem Tributária",
            workload: "100h",
            ects: "4",
            description:
              "Análise dogmática e jurisprudencial dos crimes tributários no ordenamento brasileiro.",
          },
        ],
      },
      {
        name: "Módulo 6 — Lavagem de Dinheiro e Organizações Criminosas",
        disciplines: [
          {
            name: "Crimes de Lavagem de Dinheiro",
            workload: "100h",
            ects: "4",
            description:
              "Tipificação, elementares e jurisprudência sobre crimes de lavagem de dinheiro.",
          },
          {
            name: "Crimes contra a Ordem Econômica",
            workload: "100h",
            ects: "4",
            description:
              "Estudo dos crimes contra a ordem econômica e a livre concorrência.",
          },
          {
            name: "Organizações Criminosas",
            workload: "100h",
            ects: "4",
            description:
              "Estrutura, tipificação e persecução de organizações criminosas com dimensão econômica.",
          },
        ],
      },
      {
        name: "Módulo 7 — Mercado de Capitais e Falências",
        disciplines: [
          {
            name: "Crimes contra o Mercado de Capitais",
            workload: "100h",
            ects: "4",
            description:
              "Manipulação de mercado, insider trading e crimes financeiros no mercado de capitais.",
          },
          {
            name: "Crimes Falimentares",
            workload: "100h",
            ects: "4",
            description:
              "Crimes praticados em contexto de recuperação judicial, extrajudicial e falência.",
          },
        ],
      },
      {
        name: "Módulo 8 — Administração Pública e Meio Ambiente",
        disciplines: [
          {
            name: "Crimes contra a Administração Pública",
            workload: "100h",
            ects: "4",
            description:
              "Corrupção ativa e passiva, peculato e crimes praticados por funcionário público.",
          },
          {
            name: "A Improbidade Administrativa em Casos Reais",
            workload: "100h",
            ects: "4",
            description:
              "Análise prática da improbidade administrativa com estudo de casos concretos.",
          },
          {
            name: "Crimes Ambientais",
            workload: "100h",
            ects: "4",
            description:
              "Crimes ambientais com repercussão econômica e responsabilização penal e civil.",
          },
        ],
      },
      {
        name: "Módulo 9 — Licitações e Crimes Cibernéticos",
        disciplines: [
          {
            name: "Crimes Licitatórios",
            workload: "100h",
            ects: "4",
            description:
              "Fraudes em licitações, contratos administrativos e crimes correlatos.",
          },
          {
            name: "Crimes Cibernéticos com Impacto Econômico",
            workload: "100h",
            ects: "4",
            description:
              "Crimes digitais que afetam a ordem econômica: fraude financeira, criptomoedas e hacking financeiro.",
          },
        ],
      },
      {
        name: "Módulo 10 — Crimes Previdenciários",
        disciplines: [
          {
            name: "Crimes Previdenciários",
            workload: "100h",
            ects: "4",
            description:
              "Estelionato previdenciário, sonegação de contribuições e crimes contra a seguridade social.",
          },
        ],
      },
      {
        name: "Módulo 11 — Processo Penal Econômico",
        disciplines: [
          {
            name: "Aspectos Processuais Penais Específicos e Meios de Prova",
            workload: "100h",
            ects: "4",
            description:
              "Processo penal aplicado a crimes econômicos: interceptação, quebra de sigilo e provas digitais.",
          },
          {
            name: "Justiça Penal Negocial e Colaboração Premiada",
            workload: "100h",
            ects: "4",
            description:
              "Delação premiada, colaboração e negociação penal no contexto de crimes econômicos complexos.",
          },
        ],
      },
      {
        name: "Módulo 12 — Direito Criminal e Inteligência Artificial",
        disciplines: [
          {
            name: "Teoria Geral do Direito Criminal",
            workload: "100h",
            ects: "4",
            description:
              "Fundamentos da teoria criminal aplicada aos desafios contemporâneos.",
          },
          {
            name: "Direito e Inteligência Artificial: Impactos Jurídicos",
            workload: "100h",
            ects: "4",
            description:
              "Regulação da IA, responsabilização algorítmica e impactos no direito penal econômico.",
          },
        ],
      },
      {
        name: "Módulo 13 — Governança Jurídica",
        disciplines: [
          {
            name: "Governança Jurídica e Responsabilidade Estrutural Corporativa",
            workload: "100h",
            ects: "4",
            description:
              "Estruturas de governança, compliance corporativo e responsabilidade institucional.",
          },
          {
            name: "Ética, Transparência e Sustentabilidade na Governança",
            workload: "100h",
            ects: "4",
            description:
              "Princípios éticos, transparência ativa e sustentabilidade na governança pública e privada.",
          },
        ],
      },
      {
        name: "Módulo 14 — Metodologia da Pesquisa Jurídica",
        disciplines: [
          {
            name: "Fundamentos Metodológicos da Pesquisa Científica",
            workload: "50h",
            ects: "2",
            description:
              "Métodos de pesquisa aplicados às ciências jurídicas e à produção acadêmica.",
          },
          {
            name: "Técnicas de Elaboração de Projeto de Dissertação",
            workload: "50h",
            ects: "2",
            description:
              "Elaboração, estruturação e apresentação de projeto de dissertação de mestrado.",
          },
        ],
      },
      {
        name: "Módulo 15 — Dissertação",
        disciplines: [
          {
            name: "Dissertação do Mestrado",
            workload: "50h",
            ects: "2",
            description:
              "Desenvolvimento, orientação, qualificação e defesa pública da dissertação de mestrado.",
          },
        ],
      },
    ],
    galleryImages: Array.from({ length: 39 }, (_, i) => ({
      src: `/images/masters/direito-penal-economico/galeria-${String(i + 1).padStart(2, "0")}.webp`,
      alt: `Evento do Mestrado em Direito Penal Econômico ${i + 1}`,
    })),
  },
  {
    slug: "mestrado-harmonizacao-orofacial",
    title: "Mestrado Internacional em Harmonização Orofacial",
    description:
      "O curso de Máster de Formación Permanente en Armonización destina-se a todos os Graduados da Área da Saúde: Odontologia, Medicina, Estética, Farmácia, Enfermagem, Biomedicina, Fisioterapia e Ciências Biomédicas. Formação completa com base em evidências científicas, techniques avançadas e prática clínica supervisionada.",
    coordinator: "Prof. Dr. Paulo Moraes",
    logo: "/images/logos/logo_eurolaw.webp",
    url: "https://institutoeuropean.com",
    Icon: Syringe,
    heroImage: "/images/masters/harmonizacao-orofacial/hero.webp",
    aboutImage: "/images/masters/harmonizacao-orofacial/about.webp",
    tagline:
      "Formação completa em harmonização orofacial com base em evidências científicas",
    videoUrl: "https://www.youtube.com/watch?v=wul1lKGkn4g",
    totalHours: "2.650",
    ects: "106",
    locations: ["Brasil", "Espanha"],
    certification:
      "Máster en Armonización Orofacial (European Face & Body Institute | UEMC, Espanha)",
    benefits: [
      {
        icon: "Stethoscope",
        title: "Prática clínica supervisionada",
        description:
          "Hands-on com pacientes reais em ambiente controlado com orientação de especialistas.",
      },
      {
        icon: "Globe",
        title: "Corpo docente internacional",
        description:
          "Professores de diversas especialidades com atuação no Brasil e Europa.",
      },
      {
        icon: "Syringe",
        title: "Técnicas avançadas",
        description:
          "Toxina botulínica, preenchimentos, fios, laser, ultrassom e dispositivos de última geração.",
      },
      {
        icon: "BookOpen",
        title: "14 módulos",
        description:
          "Percurso completo desde fundamentos anatômicos até dissertação em formato de artigo científico.",
      },
      {
        icon: "Award",
        title: "106 ECTS",
        description:
          "Créditos europeus reconhecidos no Espaço Europeu de Ensino Superior.",
      },
      {
        icon: "Users",
        title: "Networking profissional",
        description:
          "Contato com profissionais de Odontologia, Medicina, Enfermagem, Farmácia e Biomedicina.",
      },
    ],
    curriculumModules: [
      {
        name: "Módulo 1 — Introdução e Anatomia",
        disciplines: [
          {
            name: "Introdução à Harmonização Orofacial associada ao Planejamento",
            workload: "75h",
            ects: "3",
          },
          {
            name: "Anatomia Aplicada à Harmonização Orofacial",
            workload: "150h",
            ects: "6",
          },
        ],
      },
      {
        name: "Módulo 2 — Fisiologia e Peeling",
        disciplines: [
          {
            name: "Fisiologia Aplicada à Harmonização Orofacial",
            workload: "75h",
            ects: "3",
          },
          {
            name: "Neurofisiologia Aplicada à Harmonização Orofacial",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Peeling Físico e Químico Aplicado à Harmonização Orofacial",
            workload: "75h",
            ects: "3",
          },
        ],
      },
      {
        name: "Módulo 3 — Ética, Medicina Forense e Toxina Botulínica",
        disciplines: [
          {
            name: "Ética e Deontologia Profissional",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Medicina Forense",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Toxina Botulínica Estética e Funcional",
            workload: "150h",
            ects: "6",
          },
        ],
      },
      {
        name: "Módulo 4 — Biossegurança e Bioestimuladores",
        disciplines: [
          {
            name: "Biossegurança em Harmonização Orofacial",
            workload: "75h",
            ects: "3",
          },
          {
            name: "Bioestimuladores Sintéticos e Autólogos",
            workload: "100h",
            ects: "4",
          },
        ],
      },
      {
        name: "Módulo 5 — Anestesia, Farmacologia e Metodologia",
        disciplines: [
          {
            name: "Técnicas Anestésicas em Harmonização Orofacial",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Farmacologia e Terapia Medicinal Aplicada",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Emergências e Urgências Médicas",
            workload: "50h",
            ects: "2",
          },
          {
            name: "Metodologia de Trabalho Científico I",
            workload: "100h",
            ects: "4",
          },
        ],
      },
      {
        name: "Módulo 6 — Prática de Consolidação Clínica",
        disciplines: [
          {
            name: "Prática de Consolidação Clínica em Laboratório",
            workload: "200h",
            ects: "8",
          },
        ],
      },
      {
        name: "Módulo 7 — Preenchimentos e Ultrassom",
        disciplines: [
          {
            name: "Preenchimentos Faciais",
            workload: "200h",
            ects: "8",
          },
          {
            name: "Ultrassom com Endolaser",
            workload: "150h",
            ects: "6",
          },
        ],
      },
      {
        name: "Módulo 8 — Dermocosméticos e Marketing",
        disciplines: [
          {
            name: "Dermocosméticos Aplicados à Harmonização Orofacial",
            workload: "100h",
            ects: "4",
          },
          {
            name: "Marketing Aplicado à Harmonização Orofacial",
            workload: "100h",
            ects: "4",
          },
        ],
      },
      {
        name: "Módulo 9 — Fios Lisos e Tensores",
        disciplines: [
          {
            name: "Fios Lisos e Tensores Absorvíveis em Harmonização Orofacial",
            workload: "200h",
            ects: "8",
          },
        ],
      },
      {
        name: "Módulo 10 — Fios Não Absorvíveis",
        disciplines: [
          {
            name: "Fios Não Absorvíveis",
            workload: "200h",
            ects: "8",
          },
        ],
      },
      {
        name: "Módulo 11 — Lipoplastia Facial",
        disciplines: [
          {
            name: "Lipoplastia Química Facial e de Pescoço",
            workload: "100h",
            ects: "4",
          },
          {
            name: "Lipoplastia Cirúrgica Facial e de Pescoço",
            workload: "100h",
            ects: "4",
          },
        ],
      },
      {
        name: "Módulo 12 — Prática de Consolidação Clínica II",
        disciplines: [
          {
            name: "Prática de Consolidação Clínica em Laboratório",
            workload: "200h",
            ects: "8",
          },
        ],
      },
      {
        name: "Módulo 13 — Ultrassom Microfocalizado",
        disciplines: [
          {
            name: "Ultrassom Microfocalizado",
            workload: "100h",
            ects: "4",
          },
        ],
      },
      {
        name: "Módulo 14 — Metodologia e Dissertação",
        disciplines: [
          {
            name: "Metodologia de Trabalho Científico II",
            workload: "100h",
            ects: "4",
          },
          {
            name: "Dissertação em Formato de Artigo Científico",
            workload: "150h",
            ects: "6",
          },
        ],
      },
    ],
    galleryImages: Array.from({ length: 8 }, (_, i) => ({
      src: `/images/masters/harmonizacao-orofacial/galeria-${String(i + 1).padStart(2, "0")}.webp`,
      alt: `Mestrado em Harmonização Orofacial ${i + 1}`,
    })),
  },
];

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((m) => m.slug === slug);
}
