export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
}

export const testimonials: Testimonial[] = [
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
];
