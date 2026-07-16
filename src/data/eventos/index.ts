import { eventSeries, getEventSeriesBySlug } from "./series";
import type { EventSeries } from "./series";
import type { EventEdition, EventStatus } from "./types";
import { editions as direitopenaleconomico } from "./direito-penal-economico/index";

const allEditions: EventEdition[] = [
  ...direitopenaleconomico,
];

export { eventSeries, getEventSeriesBySlug };
export type { EventSeries, EventEdition, EventStatus };

export const eventEditions: EventEdition[] = allEditions;

export function getEditionBySlug(
  seriesSlug: string,
  editionSlug: string,
): EventEdition | undefined {
  return allEditions.find(
    (e) => e.seriesSlug === seriesSlug && e.slug === editionSlug,
  );
}

export function getEditionsBySeries(seriesSlug: string): EventEdition[] {
  return allEditions.filter((e) => e.seriesSlug === seriesSlug);
}

export function getLatestEdition(seriesSlug: string): EventEdition | undefined {
  const editions = getEditionsBySeries(seriesSlug);
  return editions.sort(
    (a, b) => b.date.start.getTime() - a.date.start.getTime(),
  )[0];
}

export function getEventStatus(edition: EventEdition): EventStatus {
  const now = new Date();
  const start = new Date(edition.date.start);
  const end = new Date(edition.date.end);
  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  if (now >= start && now <= end) return "during";
  if (now > end) return "after";
  return "before";
}

const monthNames = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

export function formatEventDate(edition: EventEdition): string {
  const start = edition.date.start;
  const end = edition.date.end;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(start.getDate())} e ${pad(end.getDate())} de ${monthNames[start.getMonth()]}`;
}
