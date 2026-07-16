import type { ScheduleDay } from "./schedule";
import type { GalleryImage } from "./gallery";
import type { Testimonial } from "./testimonials";
import type { FAQItem } from "./faq";
import { schedule } from "./schedule";
import { galleryImages } from "./gallery";
import { testimonials } from "./testimonials";
import { faqItems } from "./faq";

export type EventStatus = "before" | "during" | "after";

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  cep: string;
  mapEmbedUrl: string;
}

export interface EventAbout {
  objective: string;
  purpose: string;
  targetAudience: string;
  topics: string;
  discussionTopics: string[];
}

export interface EventPhrases {
  before: { label: string };
  during: { status: string; description: string };
  after: { status: string; description: string };
  participants: { before: string; during: string; after: string };
  professors: { before: string; during: string; after: string };
}

export interface EventEdition {
  seriesSlug: string;
  slug: string;
  title: string;
  shorttitle: string;
  subtitle: string;
  description: string;
  date: { start: Date; end: Date };
  location: EventLocation;
  heroImage: string;
  about: EventAbout;
  professors: string[];
  participants: string[];
  schedule: ScheduleDay[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  phrases: EventPhrases;
}

const monthNames = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

export const eventEditions: EventEdition[] = [
  {
    seriesSlug: "direito-penal-economico",
    slug: "porto-2026",
    title: "Fórum Internacional de Direito Penal Econômico - Porto 2026",
    shorttitle: "Fórum Internacional de",
    subtitle:
      "Bem-vindo ao ambiente digital oficial do Fórum Internacional de Direito Penal Econômico.",
    description:
      "Em um cenário onde fronteiras se tornam cada vez mais permeáveis, mas os sistemas jurídicos permanecem distintos, compreender diferentes estruturas normativas deixou de ser um diferencial e passou a ser uma exigência.",
    date: { start: new Date(2026, 6, 9), end: new Date(2026, 6, 10) },
    location: {
      name: "The Yeatman Hotel",
      address: "Rua do Choupelo",
      city: "Vila Nova de Gaia",
      state: "",
      country: "Portugal",
      cep: "4400-088",
      mapEmbedUrl:
        "https://www.google.com/maps?q=The+Yeatman+Hotel+Rua+do+Choupelo+4400-088+Vila+Nova+de+Gaia&output=embed",
    },
    heroImage: "/images/backgrounds/fundo_forum.webp",
    about: {
      objective:
        "Considerando o Direito Penal Econômico contemporâneo como um campo de alta complexidade e relevância estratégica, a atuação jurídica de excelência pressupõe não apenas acompanhar, mas fomentar ativamente o desenvolvimento dogmático europeu.",
      purpose:
        "O Fórum Internacional de Direito Penal Econômico – Europa & Brasil foi concebido como um ambiente de integração entre experiências, perspectivas e práticas jurídicas. Em um cenário onde fronteiras se tornam cada vez mais permeáveis, mas os sistemas jurídicos permanecem distintos, compreender diferentes estruturas normativas deixou de ser um diferencial e passou a ser uma exigência.",
      targetAudience:
        "Juristas, profissionais e convidados que compreendem que a atuação jurídica de excelência pressupõe não apenas acompanhar, mas fomentar ativamente o desenvolvimento dogmático europeu. Profissionais que buscam acesso direto a grandes nomes, posicionamento e autoridade no Direito Penal Econômico.",
      topics:
        "Direito Penal Econômico, Lavagem de Dinheiro, Confisco de Vantagens Criminosas",
      discussionTopics: [
        "Peculiaridades essenciais do moderno Direito Penal Econômico",
        "Crime de Lavagem de Dinheiro",
        "Directiva do Confisco de vantagens de origem criminosa",
        "Direito Penal Europeu e Cooperação Judiciária",
        "Dogmática penal econômica europeia",
      ],
    },
    professors: ["carlos", "nuno", "pedro", "arthur", "regina"],
    participants: [
      "bruno", "davide", "renato", "magalhaes", "carolina", "debora",
      "emilia", "isabela", "karina", "kelly", "marcela", "marcia",
      "marianna", "michela", "ray", "roberta", "sofia", "solbei",
      "valeria", "vanessa", "maria-joao", "tatianne", "adriano", "antonio",
      "catarina", "monica", "sonia", "tatiana", "teresa", "walber",
      "miguel", "convidado",
    ],
    schedule: schedule,
    gallery: galleryImages,
    testimonials: testimonials,
    faq: faqItems,
    phrases: {
      before: {
        label: "para o início do evento",
      },
      during: {
        status: "Acontecendo agora",
        description:
          "O Fórum Internacional em Direito Penal Econômico está em andamento. Acompanhe a programação e todas as informações do evento.",
      },
      after: {
        status: "Ocorreu em",
        description:
          "O Fórum Internacional em Direito Penal Econômico foi realizado com sucesso. Reviva os melhores momentos, confira as fotos, os palestrantes e as informações desta edição.",
      },
      participants: {
        before:
          "Profissionais que também estarão presentes no evento para contribuir com debates e painéis.",
        during:
          "Profissionais que estão presentes no evento contribuindo com debates e painéis.",
        after:
          "Profissionais que estiveram presentes no evento e contribuíram com debates e painéis.",
      },
      professors: {
        before:
          "Conheça os professores e especialistas que irão compartilhar seus conhecimentos e experiências no Fórum Internacional.",
        during:
          "Conheça os professores e especialistas que estão compartilhando seus conhecimentos e experiências no Fórum Internacional.",
        after:
          "Conheça os professores e especialistas que compartilharam seus conhecimentos e experiências no Fórum Internacional.",
      },
    },
  },
];

export function getEditionBySlug(
  seriesSlug: string,
  editionSlug: string,
): EventEdition | undefined {
  return eventEditions.find(
    (e) => e.seriesSlug === seriesSlug && e.slug === editionSlug,
  );
}

export function getEditionsBySeries(seriesSlug: string): EventEdition[] {
  return eventEditions.filter((e) => e.seriesSlug === seriesSlug);
}

export function getLatestEdition(seriesSlug: string): EventEdition | undefined {
  const editions = getEditionsBySeries(seriesSlug);
  return editions.sort(
    (a, b) => b.date.start.getTime() - a.date.start.getTime(),
  )[0];
}

export function getEventStatus(edition: EventEdition): EventStatus {
  const now = new Date();
  const start = new Date(edition.date.start);
  const end = new Date(edition.date.end);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  if (now >= start && now <= end) return "during";
  if (now > end) return "after";
  return "before";
}

export function formatEventDate(edition: EventEdition): string {
  const start = edition.date.start;
  const end = edition.date.end;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(start.getDate())} e ${pad(end.getDate())} de ${monthNames[start.getMonth()]}`;
}
