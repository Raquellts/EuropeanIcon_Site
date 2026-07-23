import {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
  Languages,
  MapPin,
  ShieldCheck,
  Plane,
  Building2,
} from "lucide-react";

export const iconMap: Record<string, any> = {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
  Languages,
  MapPin,
  ShieldCheck,
  Plane,
  Building2,
};

export const locationDescriptions: Record<string, Record<string, string>> = {
  "harmonizacao-orofacial": {
    Brasil: "Sede principal do programa com módulos presenciais e hands-on",
    Portugal:
      "Módulo europeu com práticas clínicas e aparatologia avançada",
    Espanha:
      "Módulo internacional com networking e casos clínicos complexos",
  },
  "direito-penal-economico": {
    Brasil: "Sede principal com aulas, pesquisa e produção científica",
    Portugal: "Contato direto com o sistema jurídico europeu",
    Espanha:
      "Módulo internacional com experiência em diferentes sistemas jurídicos",
  },
};

export interface PricingData {
  basePrice: string;
  discount: string;
  registrationFee: string;
  registrationInstallment: string;
  standardInstallment: string;
  discountedInstallment: string;
  discountedLabel: string;
  riskNote: string;
}

export const pricingByMaster: Record<string, PricingData> = {
  "direito-penal-economico": {
    basePrice: "€16.150",
    discount: "Até 50% de desconto para últimas vagas",
    registrationFee: "R$ 1.450,00",
    registrationInstallment:
      "Parcelado em até 3x sem juros no boleto bancário",
    standardInstallment: "25x de R$ 2.196,00",
    discountedInstallment: "R$ 1.978,20 / mês",
    discountedLabel: "Pagamento Pontual (Com Desconto)",
    riskNote: "O Instituto assume o risco cambial — valores fixados em Reais",
  },
};

export const masterMeta: Record<
  string,
  { tagline: string; subtitle: string }
> = {
  "harmonizacao-orofacial": {
    tagline: "Excelência Acadêmica. Visão Global. Impacto Real.",
    subtitle: "28ª Turma",
  },
  "direito-penal-economico": {
    tagline: "A Sua Carreira Jurídica em Novo Patamar.",
    subtitle: "Turma 2025/2026",
  },
};
