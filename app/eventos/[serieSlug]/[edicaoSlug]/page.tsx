import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/_shared/components/ui/Navbar";
import EventSubNav from "./_components/EventSubNav";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import { getEventSeriesBySlug } from "@/src/data/eventSeries";
import {
  getEditionBySlug,
  getEditionsBySeries,
  getEventStatus,
} from "@/src/data/eventEditions";
import { getPersonBySlug, type Person } from "@/src/data/people";
import { institute } from "@/src/data/institute";

import EventHeroSection from "./_components/EventHeroSection";
import EventAboutSection from "./_components/EventAboutSection";
import EventProfessorsSection from "./_components/EventProfessorsSection";
import EventParticipantsSection from "./_components/EventParticipantsSection";
import EventGallerySection from "./_components/EventGallerySection";
import EventLocationSection from "./_components/EventLocationSection";
import EventScheduleSection from "./_components/EventScheduleSection";
import EventTestimonialsSection from "./_components/EventTestimonialsSection";

interface Props {
  params: { serieSlug: string; edicaoSlug: string };
}

export async function generateStaticParams() {
  const { eventEditions } = await import("@/src/data/eventEditions");
  return eventEditions.map((e: { seriesSlug: string; slug: string }) => ({
    serieSlug: e.seriesSlug,
    edicaoSlug: e.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const edition = getEditionBySlug(params.serieSlug, params.edicaoSlug);
  if (!edition) return {};
  return {
    title: `${edition.title} - European & Icon Institute`,
    description: edition.description,
    openGraph: {
      title: edition.title,
      description: edition.description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default function EdicaoPage({ params }: Props) {
  const series = getEventSeriesBySlug(params.serieSlug);
  if (!series) notFound();

  const edition = getEditionBySlug(params.serieSlug, params.edicaoSlug);
  if (!edition) notFound();

  const status = getEventStatus(edition);
  const allEditions = getEditionsBySeries(params.serieSlug);
  const editionProfessors = edition.professors
    .map((slug: string) => getPersonBySlug(slug))
    .filter((p): p is Person => Boolean(p));
  const editionParticipants = edition.participants
    .map((slug: string) => getPersonBySlug(slug))
    .filter((p): p is Person => Boolean(p))
    .slice(0, 6);

  return (
    <>
      <Navbar />
      <EventSubNav />
      <main>
        <EventHeroSection
          edition={edition}
          series={series}
          status={status}
          allEditions={allEditions}
          serieSlug={params.serieSlug}
          edicaoSlug={params.edicaoSlug}
        />
        <EventAboutSection edition={edition} />
        <EventProfessorsSection
          editionProfessors={editionProfessors}
          status={status}
          edition={edition}
          params={params}
        />
        <EventParticipantsSection
          editionParticipants={editionParticipants}
          status={status}
          edition={edition}
          params={params}
        />
        <EventGallerySection edition={edition} />
        <EventLocationSection edition={edition} institute={institute} />
        <EventScheduleSection edition={edition} params={params} />
        <EventTestimonialsSection edition={edition} />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
