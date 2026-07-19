"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ArrowRight, Briefcase } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import InstagramIcon from "./InstagramIcon";

interface FacultyCardPerson {
  slug: string;
  name: string;
  role: string;
  description?: string;
  areas?: string[];
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

interface FacultyCardProps {
  person: FacultyCardPerson;
  photoSrc: string;
  /** Força o placeholder mesmo sem tentar carregar a foto. Normalmente
   * desnecessário: o card já detecta sozinho quando a foto não existe. */
  showPlaceholder?: boolean;
  horizontal?: boolean;
}

export default function FacultyCard({
  person,
  photoSrc,
  showPlaceholder = false,
  horizontal = false,
}: FacultyCardProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const usePlaceholder = showPlaceholder || photoFailed;

  if (horizontal) {
    return (
      <Link href={`/professores/${person.slug}`}>
        <article className="group/person flex items-center gap-5 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-gold/30 hover:bg-gold/5 cursor-pointer">
          <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden bg-surface-hover flex items-center justify-center">
            {!usePlaceholder ? (
              <ImageWithFallback
                src={photoSrc}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gold/5">
                <User size={28} className="text-gold" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gold font-medium uppercase tracking-wide">
              {person.role}
            </p>
            <h4 className="font-bold text-primary group-hover/person:text-gold transition-colors text-sm mt-0.5">
              {person.name}
            </h4>
            {person.description && (
              <p className="text-xs text-secondary line-clamp-2 mt-1">
                {person.description}
              </p>
            )}
          </div>
          <ArrowRight
            size={16}
            className="text-muted group-hover/person:text-gold transition-colors shrink-0"
          />
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/professores/${person.slug}`}>
      <article className="group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-black/20 cursor-pointer h-full">
        {/* Foto */}
        <div className="relative aspect-[3/4] min-h-[280px] overflow-hidden">
          {!usePlaceholder ? (
            <ImageWithFallback
              src={photoSrc}
              alt={person.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gold/5">
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
                <User size={40} className="text-gold" />
              </div>
            </div>
          )}

          {/* Gradiente de baixo para cima */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-transparent" />

          {/* Info sobreposta */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
            <h4 className="font-bold text-primary group-hover:text-gold transition-colors leading-snug text-base">
              {person.name}
            </h4>
            <p className="text-xs text-gold font-medium uppercase tracking-wide">
              {person.role}
            </p>
            {person.description && (
              <p className="text-sm text-secondary line-clamp-2 mt-0.5">
                {person.description}
              </p>
            )}
            <div className="flex gap-2 mt-1">
              {person.social?.instagram && (
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <InstagramIcon size={12} />
                  Instagram
                </span>
              )}
              {person.social?.linkedin && (
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <Briefcase size={12} />
                  LinkedIn
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-muted group-hover:text-gold transition-colors mt-1">
              Saiba mais
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
