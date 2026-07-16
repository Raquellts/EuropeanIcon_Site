import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/_shared/components/ui/Navbar";
import Footer from "@/app/_shared/components/ui/Footer";
import WhatsAppButton from "@/app/_shared/components/ui/WhatsAppButton";
import VideoBackground from "@/app/_shared/components/ui/VideoBackground";
import { getJournalBySlug, journals } from "@/src/data/journals";
import { Button } from "@/app/_shared/components/ui/Button";
import ImageWithFallback from "@/app/_shared/components/ui/ImageWithFallback";
import { ExternalLink } from "lucide-react";

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
              videoSrc="/videos/hero-revistas.mp4"
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

        {/* Content */}
        <section className="py-20 md:py-28 border-t border-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold header-text mb-6">
                Sobre a Revista
              </h2>
              <p className="text-secondary leading-relaxed text-lg mb-8">
                {journal.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
