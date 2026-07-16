import { imperium } from "./imperium";
import { aesthis } from "./aesthis";
import type { Journal } from "./imperium";

export const journals: Journal[] = [imperium, aesthis];

export function getJournalBySlug(slug: string): Journal | undefined {
  return journals.find((j) => j.slug === slug);
}

export type { Journal } from "./imperium";
