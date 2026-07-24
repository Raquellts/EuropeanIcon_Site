import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../_shared/components/ui/Navbar";
import Footer from "../_shared/components/ui/Footer";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import { journals } from "../../src/data/journals";
import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "../_shared/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Revistas Científicas - European & Icon Institute",
  description:
    "Conheça as revistas científicas do European & Icon Institute: Imperium e Aesthis.",
};

export default function RevistasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
              Revistas Científicas
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Periódicos científicos do European & Icon Institute com
              publicações de excelência acadêmica.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {journals.map((journal) => (
              <Link
                key={journal.slug}
                href={`/revistas/${journal.slug}`}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-gold/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative bg-gradient-to-br from-surface to-surface-hover overflow-hidden">
                  <ImageWithFallback
                    src={journal.coverImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale brightness-[0.3]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-transparent">
                    <ImageWithFallback
                      src={journal.icon}
                      width={200}
                      height={200}
                      alt={journal.name}
                      className="w-100 h-100 object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-gold transition-colors">
                        {journal.name}
                      </h3>
                      <p className="text-xs text-gold mt-1">
                        {journal.subject}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-gold shrink-0 mt-1 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-secondary mt-3 line-clamp-3">
                    {journal.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
