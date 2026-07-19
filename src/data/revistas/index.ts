import { imperium } from "./imperium";
import { aesthis } from "./aesthis";
import type { Journal, NormsSection, NormsGroup, NormsItem } from "./imperium";

export const journals: Journal[] = [imperium, aesthis];

export function getJournalBySlug(slug: string): Journal | undefined {
  return journals.find((j) => j.slug === slug);
}

export type { Journal, NormsSection, NormsGroup, NormsItem } from "./imperium";
