import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { getPersonBySlug } from "@/src/data/people";
import { getEditionBySlug } from "@/src/data/eventEditions";
import { personEventPhotoPath, personCvPath } from "@/src/data/paths";
import Navbar from "@/app/_shared/components/ui/Navbar";
import PersonProfileContent from "@/app/_shared/components/ui/PersonProfileContent";

interface Props {
  params: {
    serieSlug: string;
    edicaoSlug: string;
    personSlug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = getPersonBySlug(params.personSlug);
  if (!person) return {};
  const edition = getEditionBySlug(params.serieSlug, params.edicaoSlug);
  return {
    title: `${person.name} - ${edition?.title ?? "European & Icon Institute"}`,
    description:
      person.description ||
      `Conheça ${person.name} no European & Icon Institute.`,
  };
}

export default function PersonPage({ params }: Props) {
  const person = getPersonBySlug(params.personSlug);
  const edition = getEditionBySlug(params.serieSlug, params.edicaoSlug);
  if (!person || !edition) notFound();

  const prof = edition.professors.includes(params.personSlug);
  const photoSrc = personEventPhotoPath(
    params.serieSlug,
    params.edicaoSlug,
    prof ? "professor" : "participante",
    params.personSlug,
  );
  const cvUrlPath = personCvPath(
    params.serieSlug,
    params.edicaoSlug,
    params.personSlug,
  );
  const hasCv = fs.existsSync(path.join(process.cwd(), "public", cvUrlPath));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PersonProfileContent
        person={person}
        photoSrc={photoSrc}
        cvUrlPath={hasCv ? cvUrlPath : undefined}
        hasCv={hasCv}
        backHref={`/eventos/${params.serieSlug}/${params.edicaoSlug}`}
        backLabel="Voltar para o evento"
        extraSections={
          prof ? (
            <section className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
              <h2 className="text-lg font-semibold text-primary mb-2">
                Professor Convidado
              </h2>
              <p className="text-sm text-secondary">
                Este profissional é professor convidado do evento e ministrará
                palestras e painéis durante a edição.
              </p>
            </section>
          ) : undefined
        }
      />
    </div>
  );
}
