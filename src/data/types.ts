export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScheduleItem {
  slugs?: string[];
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  type: "palestra" | "painel" | "coffee" | "credenciamento" | "encerramento";
}

export interface ScheduleDay {
  date: string;
  day: string;
  items: ScheduleItem[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

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
