import type { EventEdition, EventStatus } from "@/src/data/eventos/types";
import type { Person } from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import ImageWithFallback from "@/app/_shared/components/ui/ImageWithFallback";
import FlagFind from "@/app/_shared/components/ui/FlagFind";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface EventProfessorsSectionProps {
  editionProfessors: Person[];
  status: EventStatus;
  edition: EventEdition;
  params: { serieSlug: string; edicaoSlug: string };
}

export default function EventProfessorsSection({
  editionProfessors,
  status,
  edition,
  params,
}: EventProfessorsSectionProps) {
  return (
    <section
      id="professores"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Professores Convidados
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {edition.phrases.professors[status]}
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editionProfessors.map((prof) => {
            if (!prof) return null;
            return (
              <Link
                key={prof.slug}
                href={`/eventos/${params.serieSlug}/${params.edicaoSlug}/participantes/${prof.slug}`}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <div className="aspect-[1/1] bg-gradient-to-br from-surface to-surface-hover overflow-hidden">
                  <ImageWithFallback
                    src={personPhotoPath(prof.slug)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-primary group-hover:text-gold transition-colors">
                        {prof.name}
                      </h3>
                      {"countryCode" in prof && prof.countryCode && (
                        <FlagFind
                          countryCode={prof.countryCode}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-gold shrink-0 mt-1 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-muted mt-1 line-clamp-2">
                    {prof.role}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
