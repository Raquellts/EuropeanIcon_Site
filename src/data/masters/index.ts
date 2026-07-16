import { direitoPenalEconomico } from "./direito-penal-economico";
import { harmonizacaoOrofacial } from "./harmonizacao-orofacial";
import type { Master } from "./direito-penal-economico";

export const masters: Master[] = [direitoPenalEconomico, harmonizacaoOrofacial];

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((m) => m.slug === slug);
}

export type { Master } from "./direito-penal-economico";
export type { CurriculumModule, CurriculumDiscipline, Benefit } from "../types";
