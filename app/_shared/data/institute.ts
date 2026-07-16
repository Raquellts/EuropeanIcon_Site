import React from "react";
import { Landmark, Syringe } from "lucide-react";

const LandmarkIcon = ({
  color,
  ...props
}: {
  color?: string;
  [key: string]: any;
}) => React.createElement(Landmark, { color, ...props });

const SyringeIcon = ({
  color,
  ...props
}: {
  color?: string;
  [key: string]: any;
}) => React.createElement(Syringe, { color, ...props });

export const institute = {
  name: "European & Icon Institute",
  description:
    "O European & Icon Institute foi fundado em 2017 com o propósito de oferecer uma formação acadêmica de excelência internacional nas áreas da Saúde, Estética e Direito. Atualmente sediado em Barcelona, Espanha, o instituto reforça sua presença no cenário europeu, conectando alunos a um dos principais polos educacionais e culturais do mundo. Desde o início, a proposta foi clara: unir rigor técnico, produção científica relevante e uma visão ética que forma líderes capazes de atuar além das fronteiras. Somos pioneiros ao oferecer o Mestrado em Harmonização Orofacial (HOF) e o novo Mestrado Internacional em Direito Penal Econômico, com dupla titulação Brasil-Europa. Programas únicos, estruturados com base em evidências científicas e alianças com instituições de renome mundial.",
  mission:
    "Promover o desenvolvimento acadêmico e profissional por meio de programas educacionais estruturados, com base em rigor técnico, pensamento crítico e abordagem ética. Contribuir para a formação de profissionais qualificados, capazes de atuar de forma responsável em seus respectivos contextos.",
  focus:
    "Atuar como uma instituição dedicada ao desenvolvimento e à gestão de programas educacionais internacionais, com foco na qualidade acadêmica, na inovação metodológica e na ampliação de parcerias institucionais.",
  link: "https://institutoeuropean.com",
  masters: [
    {
      Icon: LandmarkIcon,
      title: "Mestrado Internacional em Direito Penal Econômico",
      description:
        "Programa avançado que aborda as principais questões do Direito Penal Econômico em perspectiva comparada, com módulos em instituições parceiras na Europa.",
    },
    {
      Icon: SyringeIcon,
      title: "Mestrado Internacional em Harmonização Orofacial",
      description:
        "O curso de Máster de Formación Permanente en Armonização destina-se a todos os Graduados da Área da Saúde: Odontologia, Medicina, Estética, Farmácia, Enfermagem, Biomedicina, Fisioterapia e Ciências Biomédicas.",
    },
  ],

  journals: [
    {
      id: "aesthis",
      name: "Aesthis - European Journal of Aesthetic & Regenerative Medicine",
      subject: "Harmonizacao Orofacial",
      description:
        "A Aesthis é um periódico científico de acesso aberto, que se dedica à divulgação do conhecimento nas áreas da saúde, com ênfase em medicina estética, medicina regenerativa, harmonização orofacial e campos correlatos. Nossa missão é promover a divulgação de evidências clínicas, avanços técnicos, inovações tecnológicas e pesquisas aplicadas que contribuam para a prática profissional qualificada e para o desenvolvimento científico dessas áreas. Priorizamos estudos conduzidos com rigor metodológico, fundamentação ética e relevância clínica.",
    },
    {
      id: "imperium",
      name: "Imperium - European Journal of Economic Criminal Law",
      subject: "Direito Penal Econômico",
      description:
        "A Imperium é um periódico científico internacional e interdisciplinar focado no Direito Penal Econômico, abordando temas como responsabilidade penal de pessoas jurídicas, crimes financeiros e compliance. A revista publica trabalhos acadêmicos originais submetidos a dupla revisão cega, visando o desenvolvimento teórico e empírico da área para um público de pesquisadores e profissionais do Direito. Mais informações podem ser encontradas no site da Imperium - European Journal of Economic Criminal Law.",
    },
  ],

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
};
