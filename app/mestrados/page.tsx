import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import Footer from "../_shared/components/ui/Footer";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import { masters } from "../../src/data/masters";
import { Button } from "../_shared/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mestrados Internacionais - European & Icon Institute",
  description:
    "Conheça os programas de Mestrado Internacional oferecidos pelo European & Icon Institute.",
};

export default function MestradosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
              Mestrados Internacionais
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Conheça os programas de Mestrado Internacional oferecidos pelo
              European & Icon Institute, com dupla titulação Brasil-Europa.
            </p>
            <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {masters.map((master) => (
              <div
                key={master.slug}
                id={master.slug}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold text-black inline-flex rounded-xl p-3">
                    <master.Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    {master.title}
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed mb-4">
                  {master.description}
                </p>
                {master.coordinator && (
                  <p className="text-sm text-muted mb-4">
                    Coordenador: {master.coordinator}
                  </p>
                )}
                <Button
                  href={`/mestrados/${master.slug}`}
                  variant="secondary"
                  icon={<ArrowRight size={16} />}
                >
                  Saiba mais
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
