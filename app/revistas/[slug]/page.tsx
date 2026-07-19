import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/_shared/components/ui/Navbar";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import VideoBackground from "@/app/_shared/components/ui/VideoBackground";
import ScrollReveal from "@/app/_shared/components/ui/ScrollReveal";
import { getJournalBySlug, journals } from "@/src/data/journals";
import { Button } from "@/app/_shared/components/ui/Button";
import ImageWithFallback from "@/app/_shared/components/ui/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import NormsTabs from "./_components/NormsTabs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return journals.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const journal = getJournalBySlug(params.slug);
  if (!journal) return {};
  return {
    title: `${journal.name} - European & Icon Institute`,
    description: journal.description,
    openGraph: {
      title: journal.name,
      description: journal.description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default function JournalPage({ params }: Props) {
  const journal = getJournalBySlug(params.slug);
  if (!journal) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0 grayscale brightness-[0.3]">
            <VideoBackground
              videoSrc={journal.heroVideo || "/videos/hero-revistas.mp4"}
              fallbackImage={journal.coverImage}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_60%)] opacity-10" />

          <div className="section-container relative z-10 flex flex-col items-center text-center gap-6 py-20">
            <ImageWithFallback
              src={journal.icon}
              width={120}
              height={120}
              alt={journal.name}
              className="object-contain"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold header-text max-w-4xl">
              {journal.name}
            </h1>
            <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5 text-sm text-gold">
              {journal.subject}
            </span>
          </div>
        </section>

        {/* Sobre a Revista — Capa + Info Lateral */}
        <ScrollReveal>
          <section className="py-20 md:py-28 border-t border-border">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                {/* Capa */}
                <div className="group relative rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-black/20">
                  <ImageWithFallback
                    src={journal.coverImage}
                    alt={journal.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                      Revista Científica
                    </p>
                    <div className="h-1 w-12 gradient-gold rounded-full mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold header-text mb-3">
                      {journal.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-sm text-secondary">{journal.subject}</span>
                    </div>
                    <p className="text-secondary leading-relaxed text-base">
                      {journal.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      href={journal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink size={16} />}
                    >
                      Acessar periódico
                    </Button>
                    <Button href="/revistas" variant="secondary">
                      Ver todas as revistas
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Normas */}
        {journal.norms && journal.norms.length > 0 && (
          <ScrollReveal>
            <section className="py-20 md:py-28 border-t border-border">
              <div className="section-container">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold header-text mb-3">
                      Normas de Publicação e Política Editorial
                    </h2>
                    <p className="text-secondary/60 max-w-2xl mx-auto">
                      Diretrizes para submissão de trabalhos acadêmicos.
                    </p>
                    <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
                  </div>
                  <NormsTabs norms={journal.norms} />
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
