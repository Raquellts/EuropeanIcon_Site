import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/_shared/components/ui/Navbar";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import { getEventSeriesBySlug, eventSeries } from "@/src/data/eventSeries";
import {
  getEditionsBySeries,
  getEventStatus,
  formatEventDate,
} from "@/src/data/eventEditions";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

interface Props {
  params: { serieSlug: string };
}

export async function generateStaticParams() {
  return eventSeries.map((s) => ({ serieSlug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const series = getEventSeriesBySlug(params.serieSlug);
  if (!series) return {};
  return {
    title: `${series.name} - European & Icon Institute`,
    description: series.description,
  };
}

export default function SeriePage({ params }: Props) {
  const series = getEventSeriesBySlug(params.serieSlug);
  if (!series) notFound();

  const editions = getEditionsBySeries(params.serieSlug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5 text-xs text-gold mb-4">
              {series.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
              {series.name}
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              {series.description}
            </p>
            <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {editions
              .sort((a, b) => b.date.start.getTime() - a.date.start.getTime())
              .map((edition) => {
                const status = getEventStatus(edition);
                return (
                  <Link
                    key={edition.slug}
                    href={`/eventos/${params.serieSlug}/${edition.slug}`}
                    className="group block rounded-2xl border border-border bg-surface p-6 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-primary group-hover:text-gold transition-colors">
                            {edition.title}
                          </h3>
                          <ArrowUpRight
                            size={16}
                            className="text-muted group-hover:text-gold shrink-0 transition-colors"
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-gold" />
                            {formatEventDate(edition)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-gold" />
                            {edition.location.city},{" "}
                            {edition.location.country}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span
                          className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium border ${
                            status === "after"
                              ? "bg-gold/10 border-gold/30 text-gold"
                              : status === "during"
                                ? "bg-success/10 border-success/30 text-success"
                                : "bg-surface-hover border-border text-secondary"
                          }`}
                        >
                          {status === "after"
                            ? "Edição Passada"
                            : status === "during"
                              ? "Acontecendo agora"
                              : "Em breve"}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
