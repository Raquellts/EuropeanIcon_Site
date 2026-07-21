import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../_shared/components/ui/Navbar";
import Footer from "../../../_shared/components/ui/Footer";
import WhatsAppButton from "../../../_shared/components/ui/WhatsAppButton";
import ScrollReveal from "../../../_shared/components/ui/ScrollReveal";
import { getMaster } from "../../../../src/services/masterApi";

interface ValoresPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ValoresPage({ params }: ValoresPageProps) {
  const { slug } = await params;
  const master = await getMaster(slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative pt-32 pb-24">
          <div className="section-container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <Link
                  href={`/mestrados/${slug}`}
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-8"
                >
                  <ArrowLeft size={16} />
                  Voltar para {master?.title || "Mestrado"}
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold header-text mb-6">
                  Valores
                </h1>

                <div className="h-1 w-20 gradient-gold rounded-full mx-auto mb-8" />

                <p className="text-secondary text-lg leading-relaxed mb-8">
                  Informações sobre valores e condições de pagamento serão
                  disponibilizadas em breve.
                </p>

                <div className="p-8 rounded-2xl border border-border bg-surface/50">
                  <p className="text-muted text-sm">
                    Em breve teremos novidades sobre valores, bolsas de estudo e
                    condições de pagamento. Entre em contato pelo WhatsApp para
                    mais informações.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
