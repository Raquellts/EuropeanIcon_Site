export { institute } from "./institute";
export type { Institute } from "./institute";

export { masters, getMasterBySlug } from "./masters";
export type { Master } from "./masters";

export { journals, getJournalBySlug } from "./journals";
export type { Journal } from "./journals";

export {
  professors,
  participants,
  people,
  getPersonBySlug,
  getProfessors,
  getParticipants,
  isProfessor,
} from "./people";
export type { Person, Professor, Participant } from "./people";

export { eventSeries, getEventSeriesBySlug } from "./eventSeries";
export type { EventSeries } from "./eventSeries";

export {
  eventEditions,
  getEditionBySlug,
  getEditionsBySeries,
  getLatestEdition,
  getEventStatus,
  formatEventDate,
} from "./eventEditions";
export type { EventEdition, EventStatus } from "./eventEditions";

export { partners } from "./partners";
export type { Partner } from "./partners";

export { schedule } from "./schedule";
export type { ScheduleDay, ScheduleItem } from "./schedule";

export { galleryImages } from "./gallery";
export type { GalleryImage } from "./gallery";

export { testimonials } from "./testimonials";
export type { Testimonial } from "./testimonials";

export { faqItems } from "./faq";
export type { FAQItem } from "./faq";

export { navigation } from "./navigation";
export type { NavItem } from "./navigation";
