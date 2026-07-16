const monthNames = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

export type EventStatus = "before" | "during" | "after";

export function getEventStatus(): EventStatus {
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  if (now >= start && now <= end) return "during";
  if (now > end) return "after";
  return "before";
}

export function formatEventDate(): string {
  const start = event.startDate;
  const end = event.endDate;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(start.getDate())} e ${pad(end.getDate())} de ${monthNames[start.getMonth()]}`;
}

export const event = {
  shorttitle: "Fórum Internacional de",
  title: "Direito Penal Econômico",
  subtitle:
    "Bem-vindo ao ambiente digital oficial do Fórum Internacional de Direito Penal Econômico.",
  description:
    "Em um cenário onde fronteiras se tornam cada vez mais permeáveis, mas os sistemas jurídicos permanecem distintos, compreender diferentes estruturas normativas deixou de ser um diferencial e passou a ser uma exigência. O Direito Penal Econômico deixou de ser um campo restrito para se consolidar como uma das áreas mais estratégicas da atuação jurídica contemporânea. Mais do que um encontro, trata-se de um espaço de análise, debate e posicionamento, onde o conhecimento é confrontado com a realidade prática de diferentes sistemas jurídicos.",
  startDate: new Date(2026, 6, 9),
  endDate: new Date(2026, 6, 10),
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
};
