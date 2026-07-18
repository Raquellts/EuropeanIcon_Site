import {
  getPersonBySlug,
  getAllPeople,
  getPeopleBySlugs,
  getFacultyByMaster,
} from "../data/people";
import type { Person } from "../data/people";

export async function getPerson(slug: string): Promise<Person | undefined> {
  return getPersonBySlug(slug);
}

export async function getPeople(): Promise<Person[]> {
  return getAllPeople();
}

/** Pessoas de uma lista de slugs (ex.: edition.professors, edition.participants). */
export async function getPeopleForSlugs(slugs: string[]): Promise<Person[]> {
  return getPeopleBySlugs(slugs);
}

/** Corpo docente de um mestrado específico. */
export async function getMasterFaculty(masterSlug: string): Promise<Person[]> {
  return getFacultyByMaster(masterSlug);
}

export type { Person };
