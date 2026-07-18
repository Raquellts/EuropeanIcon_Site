import { masters } from "./masters/index";
import { eventSeries } from "./eventos/series";
import { getEditionsBySeries, formatEventDate } from "./eventos/index";
import { journals } from "./revistas/index";

export interface NavAnchor {
  label: string;
  href: string;
  description?: string;
}

export interface NavSubItem {
  label: string;
  href?: string;
  description?: string;
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
  anchors?: NavAnchor[];
  children?: NavSubItem[];
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
        label: "Nossa Equipe",
        href: "/#equipe",
        description: "Coordenadores e professores",
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
        { label: "Docentes", href: `/mestrados/${m.slug}#docentes` },
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
    label: "Docentes",
    href: "/mestrados",
    featured: {
      title: "Corpo Docente",
      description:
        "Professores e pesquisadores internacionalmente reconhecidos.",
      href: "/mestrados",
      cta: "Ver todos",
    },
    anchors: [
      {
        label: "Direito Penal Econômico",
        href: "/mestrados/mestrado-direito-penal-economico/docentes",
        description: "31 docentes",
      },
      {
        label: "Harmonização Orofacial",
        href: "/mestrados/mestrado-harmonizacao-orofacial/docentes",
        description: "30 docentes",
      },
    ],
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
        label: "Apresentação",
        href: "/contato#hero",
        description: "Conheça o Instituto",
      },
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
