import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/_shared/components/ui/Navbar";
import EventSubNav from "./_components/EventSubNav";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import VideoBackground from "@/app/_shared/components/ui/VideoBackground";
import { getEventSeriesBySlug } from "@/src/data/eventSeries";
import {
  getEditionBySlug,
  getEditionsBySeries,
  getEventStatus,
  formatEventDate,
} from "@/src/data/eventEditions";
import {
  getPersonBySlug,
  type Person,
} from "@/src/data/people";
import { personPhotoPath } from "@/src/data/paths";
import { institute } from "@/src/data/institute";
import { Button } from "@/app/_shared/components/ui/Button";
import AboutCard from "@/app/_shared/components/ui/AboutCards";
import ParticipantCard from "@/app/_shared/components/ui/ParticipantCard";
import ImageWithFallback from "@/app/_shared/components/ui/ImageWithFallback";
import FlagFind from "@/app/_shared/components/ui/FlagFind";
import {
  Target,
  Users,
  BookOpen,
  ArrowUpRight,
  Clock,
  Coffee,
  Star,
  LogIn,
  X,
  MapPin,
  Building2,
  Mail,
  Phone,
  Quote,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ScheduleItem } from "@/src/data/schedule";
import type { ReactNode } from "react";

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

const typeConfig: Record<
  ScheduleItem["type"],
  { icon: ReactNode; color: string }
> = {
  palestra: { icon: <Star size={16} />, color: "border-gold" },
  painel: { icon: <Users size={16} />, color: "border-gold-light" },
  coffee: { icon: <Coffee size={16} />, color: "border-muted" },
  credenciamento: { icon: <LogIn size={16} />, color: "border-muted" },
  encerramento: { icon: <X size={16} />, color: "border-danger" },
};

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
        {/* HERO */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
          <div
            className="absolute inset-0 z-0 grayscale brightness-[0.8]"
            style={{ height: "120%", top: "-10%" }}
          >
            <VideoBackground
              videoSrc="/videos/hero-eventos.mp4"
              fallbackImage={edition.heroImage}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_60%)] opacity-10" />

          <div className="section-container relative z-10 flex flex-col items-center text-center gap-8 py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              {formatEventDate(edition)} · {edition.location.city}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              <p className="font-serif font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl sm:mb-1 md:mb-2">
                {edition.shorttitle}
              </p>
              <span className="font-serif header-text header-text-animated text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
                {series.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-secondary max-w-2xl">
              {edition.subtitle}
            </p>

            {/* Status badge */}
            {status === "after" && (
              <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-border bg-zinc-900/80 px-8 py-6">
                <span className="text-lg font-semibold text-primary">
                  {edition.phrases.after.status}
                </span>
                <span className="text-2xl font-bold header-text">
                  {formatEventDate(edition)}
                </span>
                <p className="text-sm text-secondary text-center max-w-md mt-2">
                  {edition.phrases.after.description}
                </p>
              </div>
            )}

            {/* Edition selector */}
            {allEditions.length > 1 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {allEditions.map((ed) => (
                  <Link
                    key={ed.slug}
                    href={`/eventos/${params.serieSlug}/${ed.slug}`}
                    className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                      ed.slug === params.edicaoSlug
                        ? "bg-gold text-black border-gold"
                        : "border-border text-secondary hover:border-gold/30 hover:text-primary"
                    }`}
                  >
                    {formatEventDate(ed)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="sobre"
          className="pt-16 pb-20 md:pb-28 md:pt-24 border-t border-border"
        >
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
                Sobre o Evento
              </h2>
              <div className="h-1 w-20 gradient-gold rounded-full mx-auto" />
            </div>

            <p className="text-secondary text-lg max-w-4xl mx-auto text-center mb-16 leading-relaxed">
              {edition.about.purpose}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AboutCard
                type="about"
                icon={<Target size={24} />}
                title="Objetivo"
                description={edition.about.objective}
              />
              <AboutCard
                type="about"
                icon={<Users size={24} />}
                title="Participantes"
                description={edition.about.targetAudience}
              />
              <AboutCard
                type="about"
                icon={<BookOpen size={24} />}
                title="Temas"
                description={edition.about.topics}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {edition.about.discussionTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-xl border border-border bg-surface/50 px-5 py-4 text-secondary text-sm hover:border-gold/30 hover:bg-surface transition-all duration-300"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSORS */}
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

        {/* PARTICIPANTS */}
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
              <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
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

        {/* GALLERY */}
        <section
          id="galeria"
          className="py-20 md:py-28 border-t border-border"
        >
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
                Galeria
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Fotos de edições anteriores, do mestrado e da instituição.
              </p>
              <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="relative aspect-[16/9] bg-surface">
                  {edition.gallery.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover transition-opacity duration-500 ${
                        idx === 0 ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          id="local"
          className="py-20 md:py-28 border-t border-border"
        >
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
                Local do Evento
              </h2>
              <div className="h-1 w-20 gradient-gold rounded-full mx-auto" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="rounded-2xl border border-border bg-surface overflow-hidden h-full">
                <div className="relative w-full h-full min-h-[300px]">
                  <iframe
                    src={edition.location.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Local do Evento"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-surface p-8">
                  <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                    <MapPin size={20} className="text-gold" />
                    {edition.location.name}
                  </h3>
                  <div className="space-y-4 text-secondary">
                    <p className="flex items-start gap-3">
                      <Building2
                        size={18}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      {edition.location.address},{" "}
                      {edition.location.city}
                      {edition.location.state
                        ? ` - ${edition.location.state}`
                        : ""}
                      <br />
                      {edition.location.cep}
                      <br />
                      {edition.location.country}
                    </p>
                    {institute.contact.phone && (
                      <p className="flex items-center gap-3">
                        <Phone size={18} className="text-gold shrink-0" />
                        {institute.contact.phone}
                      </p>
                    )}
                    {institute.contact.email && (
                      <p className="flex items-center gap-3">
                        <Mail size={18} className="text-gold shrink-0" />
                        {institute.contact.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section
          id="programacao"
          className="py-20 md:py-28 border-t border-border"
        >
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
                Programação
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Confira a programação completa do evento.
              </p>
              <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {edition.schedule.map((day) => (
                <div key={day.date}>
                  <div className="text-center mb-8">
                    <span className="inline-block rounded-full bg-gold/10 border border-gold px-4 py-1.5 text-md font-semibold">
                      {day.date} · {day.day}
                    </span>
                  </div>
                  <div>
                    {day.items.map((item, idx) => {
                      const config = typeConfig[item.type];
                      return (
                        <div
                          key={idx}
                          className="relative pl-10 pb-8 border-l-2 border-border last:pb-0 last:border-l-0"
                        >
                          <div
                            className={`absolute left-[-9px] top-0 rounded-full border-2 bg-background p-1 ${config.color}`}
                          >
                            {config.icon}
                          </div>
                          <div className="rounded-xl border border-border bg-surface/50 p-4 hover:bg-surface transition-colors">
                            <div className="flex items-center gap-2 text-xs text-muted mb-2">
                              <Clock size={12} />
                              {item.time}
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] border ${config.color} text-secondary`}
                              >
                                {item.type.charAt(0).toUpperCase() +
                                  item.type.slice(1)}
                              </span>
                            </div>
                            <h4 className="font-semibold text-primary text-sm">
                              {item.title}
                            </h4>
                            {item.description && (
                              <p className="text-xs text-secondary mt-1">
                                {item.description}
                              </p>
                            )}
                            {item.speaker && item.slugs && (
                              <p className="text-xs text-gold mt-2">
                                {item.speaker.split(" & ").map((name, i) => (
                                  <span key={i}>
                                    {i > 0 && <span> & </span>}
                                    <Link
                                      href={`/eventos/${params.serieSlug}/${params.edicaoSlug}/participantes/${item.slugs![i]}`}
                                      className="hover:underline hover:text-gold"
                                    >
                                      {name}
                                    </Link>
                                  </span>
                                ))}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {edition.testimonials.length > 0 && (
          <section
            id="depoimentos"
            className="py-20 md:py-28 border-t border-border"
          >
            <div className="section-container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
                  Depoimentos
                </h2>
                <p className="text-secondary max-w-2xl mx-auto">
                  Veja o que dizem alunos e participantes sobre o European
                  Institute e o Fórum.
                </p>
                <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {edition.testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl border border-border bg-surface p-8 relative"
                  >
                    <Quote
                      size={32}
                      className="text-gold/20 absolute top-6 right-6"
                    />
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center">
                        <span className="font-bold text-muted">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-primary">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
