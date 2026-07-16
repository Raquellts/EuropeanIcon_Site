import { professors, type Professor } from './professors';
import { participants, type Participant } from './participants';

export type Person = Professor | Participant;
export type { Professor, Participant };

export function getPersonBySlug(slug: string): Person | undefined {
  return professors.find((p) => p.slug === slug) || participants.find((p) => p.slug === slug);
}

export function isProfessor(person: Person): person is Professor {
  return 'curriculum' in person && 'areas' in person && professors.some((p) => p.slug === person.slug);
}
