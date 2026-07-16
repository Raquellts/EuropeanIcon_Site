import {
  eventSeries,
  getEventSeriesBySlug,
  getEditionBySlug,
  getEditionsBySeries,
  getLatestEdition,
  getEventStatus,
  formatEventDate,
} from "../data/eventos/index";
import type { EventSeries } from "../data/eventos/series";
import type { EventEdition, EventStatus } from "../data/eventos/types";

export async function getSeries(): Promise<EventSeries[]> {
  return eventSeries;
}

export async function getSeriesBySlug(
  slug: string,
): Promise<EventSeries | undefined> {
  return getEventSeriesBySlug(slug);
}

export async function getEdition(
  serieSlug: string,
  editionSlug: string,
): Promise<EventEdition | undefined> {
  return getEditionBySlug(serieSlug, editionSlug);
}

export async function getEditions(
  seriesSlug: string,
): Promise<EventEdition[]> {
  return getEditionsBySeries(seriesSlug);
}

export async function getLatestEditionBySeries(
  seriesSlug: string,
): Promise<EventEdition | undefined> {
  return getLatestEdition(seriesSlug);
}

export function getStatus(edition: EventEdition): EventStatus {
  return getEventStatus(edition);
}

export function formatDate(edition: EventEdition): string {
  return formatEventDate(edition);
}
