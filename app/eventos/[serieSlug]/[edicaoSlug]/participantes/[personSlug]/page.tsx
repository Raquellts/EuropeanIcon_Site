import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import {
  ArrowLeft,
  MapPin,
  Globe,
  Mail,
  Briefcase,
  MessageCircle,
  FileText,
  InfoIcon,
  User2Icon,
  Download,
} from "lucide-react";
import { getPersonBySlug, isProfessor } from "@/src/data/people";
import { getEditionBySlug } from "@/src/data/eventEditions";
import { Button } from "@/app/_shared/components/ui/Button";
import SocialIconButton from "@/app/_shared/components/ui/SocialIconButton";
import Navbar from "@/app/_shared/components/ui/Navbar";
import ImageWithFallback from "@/app/_shared/components/ui/ImageWithFallback";
import FlagFind from "@/app/_shared/components/ui/FlagFind";
import Link from "next/link";

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
  if (!person) notFound();

  const prof = isProfessor(person);
  const cvPath = path.join(
    process.cwd(),
    "public",
    "cvs",
    `${params.personSlug}.pdf`,
  );
  const hasCv = fs.existsSync(cvPath);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-10 md:py-16 mt-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square rounded-2xl border border-border bg-surface-hover flex items-center justify-center overflow-hidden mb-6">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ImageWithFallback
                    src={
                      prof
                        ? `/images/mestres/${person.slug}.webp`
                        : `/images/participantes/${person.slug}.webp`
                    }
                    alt={person.slug}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-primary mb-2">
                {person.name}
              </h1>
              <p className="text-sm text-secondary mb-4">{person.role}</p>

              {(person.city || person.country) && (
                <div className="flex items-center gap-2 text-sm text-muted mb-2">
                  <MapPin size={14} />
                  {[person.city, person.country].filter(Boolean).join(", ")}
                  {person.countryCode && (
                    <FlagFind
                      countryCode={person.countryCode}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-6">
                {person.social?.linkedin && (
                  <SocialIconButton
                    href={person.social.linkedin}
                    icon={<Briefcase size={16} />}
                    label="LinkedIn"
                    size="sm"
                  />
                )}
                {person.social?.twitter && (
                  <SocialIconButton
                    href={person.social.twitter}
                    icon={<MessageCircle size={16} />}
                    label="Twitter"
                    size="sm"
                  />
                )}
                {person.social?.instagram && (
                  <SocialIconButton
                    href={person.social.instagram}
                    icon={<Globe size={16} />}
                    label="Instagram"
                    size="sm"
                  />
                )}
                {person.social?.lattes && (
                  <SocialIconButton
                    href={person.social.lattes}
                    icon={<FileText size={16} />}
                    label="Lattes"
                    size="sm"
                  />
                )}
              </div>

              {hasCv && (
                <a
                  href={`/cvs/${params.personSlug}.pdf`}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm font-medium text-gold hover:bg-gold/20 transition-all"
                >
                  <Download size={16} />
                  Baixar CV
                </a>
              )}

              {person.contact && (
                <div className="flex items-center gap-2 text-sm text-secondary mt-4">
                  <Mail size={14} />
                  {person.contact}
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-8 md:border-l md:border-border md:pl-8">
            {person.description && (
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <User2Icon size={18} className="text-primary" />
                  Sobre
                </h2>
                <p className="text-secondary leading-relaxed">
                  {person.description}
                </p>
              </section>
            )}

            {prof && person.curriculum && (
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Currículo
                </h2>
                <p className="text-secondary leading-relaxed">
                  {person.curriculum}
                </p>
              </section>
            )}

            {person.areas && person.areas.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <InfoIcon size={18} className="text-primary" />
                  Áreas de Atuação
                </h2>
                <div className="flex flex-wrap gap-2">
                  {person.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-secondary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {prof && (
              <section className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h2 className="text-lg font-semibold text-primary mb-2">
                  Professor Convidado
                </h2>
                <p className="text-sm text-secondary">
                  Este profissional é professor convidado do evento e ministrará
                  palestras e painéis durante a edição.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-8">
        <div className="section-container text-center">
          <Button
            href={`/eventos/${params.serieSlug}/${params.edicaoSlug}`}
            icon={<ArrowLeft size={16} />}
          >
            Voltar para o evento
          </Button>
        </div>
      </div>
    </div>
  );
}
