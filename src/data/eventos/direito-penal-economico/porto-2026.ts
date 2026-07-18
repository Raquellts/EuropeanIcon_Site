import type { EventEdition } from "../types";
import { eventAssetPath } from "../../paths";

export const porto2026: EventEdition = {
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
  heroImage: eventAssetPath("direito-penal-economico", "porto-2026", "hero.webp"),
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
  schedule: [
    {
      date: "09 de julho",
      day: "Quinta-feira",
      items: [
        { time: "08:30", title: "Credenciamento & Coffee Break", type: "credenciamento" },
        {
          time: "09:00",
          title: "Peculiaridades essenciais do moderno Direito Penal Econômico",
          description:
            "Palestra magna sobre as características fundamentais do Direito Penal Econômico contemporâneo e sua expansão dogmática.",
          speaker: "Prof. Dr. Carlos Martínez-Buján Pérez",
          slugs: ["carlos"],
          type: "palestra",
        },
        { time: "11:30", title: "Intervalo Coffee Break", type: "coffee" },
        {
          time: "11:45",
          title: "Crime de Lavagem de Dinheiro",
          description:
            "Análise aprofundada sobre o crime de lavagem de dinheiro no contexto jurídico-penal português e europeu.",
          speaker: "Prof. Dr. Nuno Brandão",
          slugs: ["nuno"],
          type: "palestra",
        },
        {
          time: "13:30",
          title: "Debate Acadêmico",
          description:
            "Debate com análise crítica dos temas abordados, promovendo reflexão e troca de ideias entre os participantes.",
          speaker:
            "Prof. Dr. Arthur Pinto de Lemos Junior & Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
          slugs: ["arthur", "regina"],
          type: "painel",
        },
        { time: "14:30", title: "Encerramento do 1º Dia", type: "encerramento" },
      ],
    },
    {
      date: "10 de julho",
      day: "Sexta-feira",
      items: [
        { time: "08:30", title: "Credenciamento & Coffee Break", type: "credenciamento" },
        {
          time: "09:00",
          title: "Directiva do Confisco de vantagens de origem criminosa",
          description:
            "Análise da Diretiva (UE) 2024/1260 sobre perda de bens de origem criminosa e seu processo de transposição em Portugal.",
          speaker: "Prof. Dr. Pedro Caeiro",
          slugs: ["pedro"],
          type: "palestra",
        },
        { time: "11:30", title: "Intervalo Coffee Break", type: "coffee" },
        {
          time: "11:45",
          title: "Debate Acadêmico",
          description:
            "Debate final com considerações sobre os temas abordados e perspectivas futuras do Direito Penal Econômico.",
          speaker:
            "Prof. Dr. Arthur Pinto de Lemos Junior & Profª. Drª. Regina Helena Fonseca Fortes-Furtado",
          slugs: ["arthur", "regina"],
          type: "painel",
        },
        { time: "14:30", title: "Encerramento do 2º Dia", type: "encerramento" },
      ],
    },
  ],
  gallery: [
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "1.webp"), alt: "Palestra de abertura da edição anterior", caption: "Palestra de abertura - Edição 2025" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "2.webp"), alt: "Painel de debates", caption: "Painel de debates com professores convidados" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "3.webp"), alt: "Plateia do evento", caption: "Plateia durante palestra magna" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "4.webp"), alt: "Coffee break e networking", caption: "Coffee break - Momento de networking" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "5.webp"), alt: "Cerimônia de encerramento", caption: "Cerimônia de encerramento" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "6.webp"), alt: "Foto oficial dos participantes", caption: "Foto oficial dos participantes" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "7.webp"), alt: "Sala de aula do European Institute", caption: "Sala de aula do European Institute" },
    { src: eventAssetPath("direito-penal-economico", "porto-2026", "galeria", "8.webp"), alt: "Alunos do Mestrado Internacional", caption: "Alunos do Mestrado Internacional" },
  ],
  testimonials: [
    {
      name: "Ana Carolina Lima",
      role: "Aluna do Mestrado Internacional (Turma 2024)",
      photo: "/images/testimonials/testimonial-1.jpg",
      text: "O Mestrado Internacional do European Institute transformou minha carreira. A experiência acadêmica internacional e o networking com profissionais de diversos países foram fundamentais para minha atuação na área de Direito Penal Econômico.",
    },
    {
      name: "Pedro Henrique Alves",
      role: "Participante do Fórum 2025",
      photo: "/images/testimonials/testimonial-2.jpg",
      text: "Participei do fórum no ano passado e foi uma experiência incrível. Palestrantes de alto nível, conteúdo relevante e oportunidades de networking que geraram parcerias duradouras.",
    },
    {
      name: "Mariana Costa",
      role: "Aluna do Mestrado Internacional (Turma 2025)",
      photo: "/images/testimonials/testimonial-3.jpg",
      text: "O European Institute proporciona uma formação de excelência com professores renomados internacionalmente. Recomendo a todos que buscam uma carreira global no Direito.",
    },
  ],
  faq: [
    {
      question: "Quem pode participar do Fórum?",
      answer:
        "O evento é aberto a profissionais e estudantes da área jurídica, especialmente aqueles que atuam ou têm interesse em Direito Penal Econômico. Magistrados, promotores, advogados, delegados, procuradores, defensores públicos, acadêmicos e estudantes de pós-graduação são nosso público-alvo.",
    },
    {
      question: "Como faço para me inscrever?",
      answer:
        "As inscrições podem ser realizadas através do botão de inscrição disponível no topo da página. Após a confirmação do pagamento, você receberá um e-mail com todos os detalhes do evento.",
    },
    {
      question: "Haverá certificado de participação?",
      answer:
        "Sim, todos os participantes recebem certificado digital de participação, enviado por e-mail após o término do evento.",
    },
    {
      question: "O evento será presencial ou online?",
      answer:
        "O evento é presencial, realizado no The Yeatman Hotel, em Vila Nova de Gaia, Porto, Portugal. Não há transmissão online.",
    },
    {
      question: "Há estacionamento no local?",
      answer:
        "Sim, o hotel possui um parque de estacionamento privativo e coberto.",
    },
    {
      question: "O European & Icon Institute oferece bolsas ou descontos para estudantes?",
      answer:
        "Para informações sobre condições especiais, entre em contato com a organização do evento.",
    },
    {
      question: "Como posso entrar em contato com a organização?",
      answer:
        "Utilize o formulário de contato disponível na seção 'Contato' desta página para mais informações.",
    },
  ],
  phrases: {
    before: { label: "para o início do evento" },
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
};
