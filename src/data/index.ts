export { institute } from "./institute";
export type { Institute } from "./institute";

export { masters, getMasterBySlug } from "./masters/index";
export type { Master } from "./masters/index";

export { journals, getJournalBySlug } from "./revistas/index";
export type { Journal, NormsSection } from "./revistas/index";

export {
  people,
  getPersonBySlug,
  getAllPeople,
  getPeopleBySlugs,
  getFacultyByMaster,
} from "./people";
export type { Person } from "./people";

export { eventSeries, getEventSeriesBySlug } from "./eventos/series";
export type { EventSeries } from "./eventos/series";

export {
  eventEditions,
  getEditionBySlug,
  getEditionsBySeries,
  getLatestEdition,
  getEventStatus,
  formatEventDate,
} from "./eventos/index";
export type { EventEdition, EventStatus } from "./eventos/types";

export { partners } from "./partners";
export type { Partner } from "./partners";

export { navigation } from "./navigation";
export type { NavItem } from "./navigation";

export type {
  GalleryImage,
  Testimonial,
  FAQItem,
  ScheduleDay,
  ScheduleItem,
  Benefit,
  CurriculumModule,
  CurriculumDiscipline,
} from "./types";
