import { masterAssetPath } from "../paths";
import { Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  Benefit,
  CurriculumModule,
  GalleryImage,
  BaseEntity,
} from "../types";

export interface Master extends Partial<BaseEntity> {
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
  aboutVideo?: string;
  tagline?: string;
  videoUrl?: string;
  totalHours?: string;
  ects?: string;
  locations?: string[];
  certification?: string;
  benefits?: Benefit[];
  curriculumModules?: CurriculumModule[];
  galleryImages?: GalleryImage[];
  editalUrl?: string;
  contratoUrl?: string;
  instagramUrl?: string;
}

export const harmonizacaoOrofacial: Master = {
  slug: "mestrado-harmonizacao-orofacial",
  title: "Mestrado Internacional em Harmonização Orofacial",
  description:
    "O curso de Máster de Formación Permanente en Armonización destina-se a todos os Graduados da Área da Saúde: Odontologia, Medicina, Estética, Farmácia, Enfermagem, Biomedicina, Fisioterapia e Ciências Biomédicas. Formação completa com base em evidências científicas, techniques avançadas e prática clínica supervisionada.",
  coordinator: "Prof. Dr. Paulo Moraes",
  logo: "/images/logos/logo_eurolaw.webp",
  url: "https://institutoeuropean.com",
  Icon: Syringe,
  heroImage: masterAssetPath("harmonizacao-orofacial", "hero.webp"),
  aboutImage: masterAssetPath("harmonizacao-orofacial", "about.webp"),
  aboutVideo: "https://res.cloudinary.com/falvay2b/video/upload/v1784477520/hofcoordinator_qmrimt.mp4",
  tagline:
    "Formação completa em harmonização orofacial com base em evidências científicas",
  videoUrl:
    "https://res.cloudinary.com/falvay2b/video/upload/v1784237890/0716_2_nnigay.mp4",
  totalHours: "3.000",
  ects: "120",
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
      title: "120 ECTS",
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
  galleryImages: [
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-01.webp"), alt: "Mestrado em Harmonização Orofacial 1" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-02.webp"), alt: "Mestrado em Harmonização Orofacial 2" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-03.webp"), alt: "Mestrado em Harmonização Orofacial 3" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-04.webp"), alt: "Mestrado em Harmonização Orofacial 4" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-05.webp"), alt: "Mestrado em Harmonização Orofacial 5" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-06.webp"), alt: "Mestrado em Harmonização Orofacial 6" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-07.webp"), alt: "Mestrado em Harmonização Orofacial 7" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-08.webp"), alt: "Mestrado em Harmonização Orofacial 8" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-09.webp"), alt: "Mestrado em Harmonização Orofacial 9" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-10.webp"), alt: "Mestrado em Harmonização Orofacial 10" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-11.webp"), alt: "Mestrado em Harmonização Orofacial 11" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-12.webp"), alt: "Mestrado em Harmonização Orofacial 12" },
    { src: masterAssetPath("harmonizacao-orofacial", "galeria-13.webp"), alt: "Mestrado em Harmonização Orofacial 13" },
  ],
  editalUrl: "https://european-wordpress-prod.s3.amazonaws.com/wp-content/uploads/2026/05/15131811/Edital-de-Abertura-Mestrado-em-Harmonizacao-Orofacial.pdf",
  contratoUrl: "https://european-wordpress-prod.s3.amazonaws.com/wp-content/uploads/2026/05/15131537/MINUTA-MESTRADO-EM-HOF-ATUALIZADA-MAIO-2026.pdf",
  instagramUrl: "https://www.instagram.com/europeaninst_oficial/",
};
