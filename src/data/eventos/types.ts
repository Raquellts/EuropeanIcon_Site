export type EventStatus = "before" | "during" | "after";

export interface EventLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  cep: string;
  mapEmbedUrl: string;
}

export interface EventAbout {
  objective: string;
  purpose: string;
  targetAudience: string;
  topics: string;
  discussionTopics: string[];
}

export interface EventPhrases {
  before: { label: string };
  during: { status: string; description: string };
  after: { status: string; description: string };
  participants: { before: string; during: string; after: string };
  professors: { before: string; during: string; after: string };
}

export interface EventEdition extends Partial<import("../types").BaseEntity> {
  seriesSlug: string;
  slug: string;
  title: string;
  shorttitle: string;
  subtitle: string;
  description: string;
  date: { start: Date; end: Date };
  location: EventLocation;
  heroImage: string;
  about: EventAbout;
  professors: string[];
  participants: string[];
  schedule: import("../types").ScheduleDay[];
  gallery: import("../types").GalleryImage[];
  testimonials: import("../types").Testimonial[];
  faq: import("../types").FAQItem[];
  phrases: EventPhrases;
}
