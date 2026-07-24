import type { EventEdition, EventStatus } from "@/src/data/eventos/types";
import type { Person } from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import ParticipantCard from "./ParticipantCard";

interface EventParticipantsSectionProps {
  editionParticipants: Person[];
  status: EventStatus;
  edition: EventEdition;
  params: { serieSlug: string; edicaoSlug: string };
}

export default function EventParticipantsSection({
  editionParticipants,
  status,
  edition,
  params,
}: EventParticipantsSectionProps) {
  return (
    <section
      id="participantes"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Participantes e Convidados
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {edition.phrases.participants[status]}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {editionParticipants.map((p) => {
            if (!p) return null;
            return (
              <ParticipantCard
                key={p.slug}
                slug={p.slug}
                pName={p.name}
                role={p.role}
                country={p.country}
                countryCode={p.countryCode}
                href={`/eventos/${params.serieSlug}/${params.edicaoSlug}/participantes/${p.slug}`}
                photoSrc={personPhotoPath(p.slug)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
