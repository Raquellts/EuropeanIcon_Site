export interface Institute {
  name: string;
  logo: string;
  description: string;
  mission: string;
  focus: string;
  link: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    social: {
      instagram: string;
      linkedin: string;
      youtube: string;
    };
  };
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroVideoSrc: string;
  heroImage: string;
  heroStats: { value: number; suffix: string; label: string }[];
  instituteVideo: string;
}

export const institute: Institute = {
  name: "European & Icon Institute",
  logo: "https://european-wordpress-prod.s3.amazonaws.com/wp-content/uploads/2025/11/24141358/NOVOLOGO1--1024x881.png",
  description:
    "O European & Icon Institute foi fundado em 2017 com o propósito de oferecer uma formação acadêmica de excelência internacional nas áreas da Saúde, Estética e Direito. Atualmente sediado em Barcelona, Espanha, o instituto reforça sua presença no cenário europeu, conectando alunos a um dos principais polos educacionais e culturais do mundo. Desde o início, a proposta foi clara: unir rigor técnico, produção científica relevante e uma visão ética que forma líderes capazes de atuar além das fronteiras. Somos pioneiros ao oferecer o Mestrado em Harmonização Orofacial (HOF) e o novo Mestrado Internacional em Direito Penal Econômico, com dupla titulação Brasil-Europa. Programas únicos, estruturados com base em evidências científicas e alianças com instituições de renome mundial.",
  mission:
    "Promover o desenvolvimento acadêmico e profissional por meio de programas educacionais estruturados, com base em rigor técnico, pensamento crítico e abordagem ética. Contribuir para a formação de profissionais qualificados, capazes de atuar de forma responsável em seus respectivos contextos.",
  focus:
    "Atuar como uma instituição dedicada ao desenvolvimento e à gestão de programas educacionais internacionais, com foco na qualidade acadêmica, na inovação metodológica e na ampliação de parcerias institucionais.",
  link: "https://institutoeuropean.com",
  contact: {
    email: "atendimento@institutoeuropean.com",
    phone: "+351 916 637 124",
    whatsapp: "351916637124",
    social: {
      instagram: "https://www.instagram.com/europeaninst_oficial/",
      linkedin: "https://www.linkedin.com/in/rose-magina-b3996a3a0/",
      youtube: "https://www.youtube.com/@europeaniconinstitute",
    },
  },
  heroSubtitle: "Fundado em 2017 · Sediado em Barcelona",
  heroTitle: "Excelência Acadêmica Internacional",
  heroDescription:
    "Mestrados internacionais com dupla titulação Brasil–Europa, formação baseada em evidências científicas e alianças com instituições de renome mundial.",
  heroVideoSrc:
    "https://res.cloudinary.com/falvay2b/video/upload/v1784256988/heroinstituto_kpghgv.mp4",
  heroImage: "/images/instituto/backgrounds/hero.webp",
  heroStats: [
    { value: 2017, suffix: "", label: "Ano de fundação" },
    { value: 3000, suffix: "", label: "Horas de formação" },
    { value: 120, suffix: "", label: "ECTS - Créditos europeus" },
    { value: 3, suffix: "", label: "Diplomas" },
  ],
  instituteVideo:
    "https://res.cloudinary.com/falvay2b/video/upload/v1784295161/Bandeiras_py5rxh.mp4",
};
