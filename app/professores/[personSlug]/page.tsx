import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { getPersonBySlug } from "@/src/data/people";
import { personPhotoPath, personCvPath } from "@/src/data/paths";
import Navbar from "@/app/_shared/components/ui/Navbar";
import PersonProfileContent from "@/app/_shared/components/ui/PersonProfileContent";

interface Props {
  params: Promise<{ personSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { personSlug } = await params;
  const person = getPersonBySlug(personSlug);
  if (!person) return {};
  return {
    title: `${person.name} - European & Icon Institute`,
    description:
      person.description ||
      `Conheça ${person.name} no European & Icon Institute.`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { personSlug } = await params;
  const person = getPersonBySlug(personSlug);
  if (!person) notFound();

  const photoSrc = personPhotoPath(personSlug);
  const cvPath = personCvPath(personSlug);
  const hasCv = fs.existsSync(path.join(process.cwd(), "public", cvPath));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PersonProfileContent
        person={person}
        photoSrc={photoSrc}
        cvUrlPath={hasCv ? cvPath : undefined}
        hasCv={hasCv}
        backHref="/mestrados"
        backLabel="Voltar para Mestrados"
      />
    </div>
  );
}
