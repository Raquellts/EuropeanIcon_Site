import {
  getPersonBySlug,
  getProfessors,
  getParticipants,
  isProfessor,
  professors,
  participants,
  people,
} from "../data/people";
import type { Person, Professor, Participant } from "../data/people";

export async function getPerson(
  slug: string,
): Promise<Person | undefined> {
  return getPersonBySlug(slug);
}

export async function getAllProfessors(): Promise<Professor[]> {
  return getProfessors();
}

export async function getAllParticipants(): Promise<Participant[]> {
  return getParticipants();
}

export { isProfessor };
export type { Person, Professor, Participant };
