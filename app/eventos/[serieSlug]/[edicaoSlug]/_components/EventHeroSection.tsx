import type { EventEdition, EventStatus } from "@/src/data/eventos/types";
import type { EventSeries } from "@/src/data/eventos/series";
import VideoBackground from "@/app/_shared/components/ui/VideoBackground";
import { formatEventDate } from "@/src/data/eventEditions";
import Link from "next/link";

interface EventHeroSectionProps {
  edition: EventEdition;
  series: EventSeries;
  status: EventStatus;
  allEditions: EventEdition[];
  serieSlug: string;
  edicaoSlug: string;
}

export default function EventHeroSection({
  edition,
  series,
  status,
  allEditions,
  serieSlug,
  edicaoSlug,
}: EventHeroSectionProps) {
  return (
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

        {allEditions.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {allEditions.map((ed) => (
              <Link
                key={ed.slug}
                href={`/eventos/${serieSlug}/${ed.slug}`}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                  ed.slug === edicaoSlug
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
  );
}
