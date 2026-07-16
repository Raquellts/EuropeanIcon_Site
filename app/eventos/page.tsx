import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../_shared/components/ui/Navbar";
import Footer from "../_shared/components/ui/Footer";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import { eventSeries } from "../../src/data/eventSeries";
import { getEditionsBySeries } from "../../src/data/eventEditions";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Eventos - European & Icon Institute",
  description:
    "Conheça os eventos internacionais promovidos pelo European & Icon Institute.",
};

export default function EventosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
              Eventos
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Conheça as séries de eventos internacionais promovidas pelo
              European & Icon Institute.
            </p>
            <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventSeries.map((series) => {
              const editions = getEditionsBySeries(series.slug);
              return (
                <Link
                  key={series.slug}
                  href={`/eventos/${series.slug}`}
                  className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-gold/30 transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${series.coverImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block rounded-full bg-gold/20 border border-gold/30 px-3 py-1 text-xs text-gold mb-2">
                        {series.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-gold transition-colors">
                        {series.name}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-muted group-hover:text-gold shrink-0 mt-1 transition-colors"
                      />
                    </div>
                    <p className="text-sm text-secondary mt-2 line-clamp-3">
                      {series.description}
                    </p>
                    <p className="text-xs text-muted mt-4">
                      {editions.length} edição{editions.length !== 1 ? "ões" : ""}
                    </p>
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
