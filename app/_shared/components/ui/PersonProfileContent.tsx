"use client";

import {
  MapPin,
  Globe,
  Mail,
  Briefcase,
  MessageCircle,
  FileText,
  InfoIcon,
  User2Icon,
  Printer,
  ExternalLink,
} from "lucide-react";
import type { Person } from "@/src/data/people";
import SocialIconButton from "./SocialIconButton";
import InstagramIcon from "./InstagramIcon";
import ImageWithFallback from "./ImageWithFallback";
import FlagFind from "./FlagFind";
import Link from "next/link";
import { Button } from "./Button";
import Pill from "./Pill";
import InstagramCarousel from "./InstagramCarousel";

interface PersonProfileContentProps {
  person: Person;
  photoSrc: string;
  extraSections?: React.ReactNode;
}

export default function PersonProfileContent({
  person,
  photoSrc,
  extraSections,
}: PersonProfileContentProps) {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @media print {
          header, nav, footer, [data-whatsapp], .no-print { display: none !important; }
          .min-h-screen { min-height: auto !important; }
          .mt-20 { margin-top: 0 !important; }
          .section-container { max-width: 100% !important; padding-left: 1rem !important; padding-right: 1rem !important; }
          body { background: white !important; color: black !important; }
          * { color: black !important; border-color: #ccc !important; }
        }
      `}</style>
      <div className="section-container py-10 md:py-16 mt-20">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sidebar */}
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
                    src={photoSrc}
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
                    icon={<InstagramIcon size={16} />}
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

              <Button
                variant="primary"
                onClick={() => window.print()}
                icon={<Printer size={16} />}
                className="mt-6 no-print"
              >
                Imprimir página
              </Button>

              {person.contact && (
                <div className="flex items-center gap-2 text-sm text-secondary mt-4">
                  <Mail size={14} />
                  {person.contact}
                </div>
              )}
            </div>
          </div>

          {/* Main */}
          <div className="md:col-span-2 space-y-8 md:border-l md:border-border md:pl-8">
            {person.description && (
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <User2Icon size={18} className="text-primary" />
                  Sobre
                </h2>
                <p className="text-secondary leading-relaxed text-justify">
                  {person.description}
                </p>
              </section>
            )}

            {person.curriculum && (
              <section>
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Currículo
                </h2>
                <p className="text-secondary leading-relaxed text-justify">
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
                    <Pill key={area} variant="outline">
                      {area}
                    </Pill>
                  ))}
                </div>
              </section>
            )}

            {person.facultyOf && person.facultyOf.length > 0 && (
              <section className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
                <h2 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <ExternalLink size={18} className="text-gold" />
                  Leciona nos mestrados
                </h2>
                <div className="flex flex-wrap gap-2">
                  {person.facultyOf.map((masterSlug) => (
                    <Button
                      key={masterSlug}
                      variant="primary"
                      href={`/mestrados/mestrado-${masterSlug}`}
                    >
                      {masterSlug === "direito-penal-economico"
                        ? "Direito Penal Econômico"
                        : "Harmonização Orofacial"}
                    </Button>
                  ))}
                </div>
              </section>
            )}

            {person.instagramEmbeds && person.instagramEmbeds.length > 0 && (
              <section className="no-print">
                <h2 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <InstagramIcon size={18} className="text-primary" />
                  Vídeos do Instagram
                </h2>
                <InstagramCarousel urls={person.instagramEmbeds} />
              </section>
            )}

            {extraSections}
          </div>
        </div>
      </div>
    </div>
  );
}
