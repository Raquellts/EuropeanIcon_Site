import { masters } from "./masters";
import { eventSeries } from "./eventSeries";
import { getEditionsBySeries, formatEventDate } from "./eventEditions";
import { journals } from "./journals";

export interface NavAnchor {
  label: string;
  href: string;
  description?: string;
}

export interface NavSubItem {
  label: string;
  /** Optional page link for the sub-section title */
  href?: string;
  /** Short descriptive text shown under the title */
  description?: string;
  /** Deep links within the sub-section */
  anchors?: NavAnchor[];
}

export interface NavFeatured {
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Anchor links shown directly in the mega-menu for this page */
  anchors?: NavAnchor[];
  /** Sub-sections within the mega-menu (e.g., individual masters, event series) */
  children?: NavSubItem[];
  /** Highlighted panel shown on the left of the mega-menu */
  featured?: NavFeatured;
}

export const navigation: NavItem[] = [
  {
    label: "Instituto",
    href: "/",
    featured: {
      title: "European & Icon Institute",
      description:
        "Excelência acadêmica internacional com dupla titulação entre o Brasil e a Europa.",
      href: "/",
      cta: "Conhecer o Instituto",
    },
    anchors: [
      {
        label: "Sobre o Instituto",
        href: "/#instituto",
        description: "Missão, foco internacional e valores",
      },
      {
        label: "Mestrados Internacionais",
        href: "/#mestrado",
        description: "Programas com dupla titulação",
      },
      {
        label: "Parceiros",
        href: "/#parceiros",
        description: "Universidades e instituições associadas",
      },
      {
        label: "Revistas Científicas",
        href: "/#journals",
        description: "Publicações acadêmicas internacionais",
      },
    ],
  },
  {
    label: "Mestrados",
    href: "/mestrados",
    featured: {
      title: "Dupla Titulação Brasil–Europa",
      description:
        "Programas internacionais com créditos ECTS reconhecidos no Espaço Europeu de Ensino Superior.",
      href: "/mestrados",
      cta: "Ver todos os mestrados",
    },
    children: masters.map((m) => ({
      label: m.title,
      href: `/mestrados/${m.slug}`,
      description: m.tagline,
      anchors: [
        { label: "Visão geral", href: `/mestrados/${m.slug}#hero` },
        { label: "Grade curricular", href: `/mestrados/${m.slug}#grade` },
        { label: "Galeria", href: `/mestrados/${m.slug}#galeria` },
      ],
    })),
  },
  {
    label: "Eventos",
    href: "/eventos",
    featured: {
      title: "Fórum Internacional",
      description:
        "Encontros internacionais que reúnem especialistas de Portugal, Brasil, Espanha e toda a Europa.",
      href: "/eventos",
      cta: "Ver todos os eventos",
    },
    children: eventSeries.flatMap((s) =>
      getEditionsBySeries(s.slug).map((e) => ({
        label: e.title,
        href: `/eventos/${s.slug}/${e.slug}`,
        description: `${s.name} · ${formatEventDate(e)}`,
        anchors: [
          {
            label: "Sobre o evento",
            href: `/eventos/${s.slug}/${e.slug}#sobre`,
          },
          {
            label: "Programação",
            href: `/eventos/${s.slug}/${e.slug}#programacao`,
          },
          {
            label: "Professores",
            href: `/eventos/${s.slug}/${e.slug}#professores`,
          },
          {
            label: "Participantes",
            href: `/eventos/${s.slug}/${e.slug}#participantes`,
          },
          { label: "Galeria", href: `/eventos/${s.slug}/${e.slug}#galeria` },
          { label: "Local", href: `/eventos/${s.slug}/${e.slug}#local` },
        ],
      })),
    ),
  },
  {
    label: "Revistas",
    href: "/revistas",
    featured: {
      title: "Publicações Científicas",
      description:
        "Periódicos internacionais com dupla revisão cega em Direito e Ciências da Saúde.",
      href: "/revistas",
      cta: "Ver todas as revistas",
    },
    children: journals.map((j) => ({
      label: j.shortName,
      href: `/revistas/${j.slug}`,
      description: j.subject,
      anchors: [
        { label: "Ver detalhes", href: `/revistas/${j.slug}` },
        { label: "Acessar revista", href: j.url },
      ],
    })),
  },
  {
    label: "Contato",
    href: "/contato",
    featured: {
      title: "Fale com o Instituto",
      description:
        "Tire suas dúvidas sobre mestrados, eventos e publicações. Nossa equipe está pronta para ajudar.",
      href: "/contato",
      cta: "Ir para Contato",
    },
    anchors: [
      {
        label: "Perguntas Frequentes",
        href: "/contato#faq",
        description: "Dúvidas mais comuns respondidas",
      },
      {
        label: "Fale Conosco",
        href: "/contato#contato",
        description: "Formulário e canais de atendimento",
      },
    ],
  },
];
