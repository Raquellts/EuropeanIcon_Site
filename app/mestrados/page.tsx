import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import MasterSection from "../_sections/MasterSection";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import Footer from "../_shared/components/ui/Footer";
import ScrollReveal from "../_shared/components/ui/ScrollReveal";
import Pill from "../_shared/components/ui/Pill";

export const metadata: Metadata = {
  title: "Mestrados Internacionais - European & Icon Institute",
  description:
    "Conheça os programas de Mestrado Internacional oferecidos pelo European & Icon Institute, com formação intensiva.",
};

export default function MestradosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_60%)] opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

          <div className="section-container relative z-10 flex flex-col items-center text-center gap-6 py-24 md:py-28">
            <ScrollReveal>
              <Pill variant="hero">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                formação intensiva
              </Pill>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="font-bold leading-tight max-w-4xl">
                <span className="block font-serif font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:mb-1 md:mb-2 text-primary">
                  Conheça nossos
                </span>
                <span className="block font-serif header-text header-text-animated text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Mestrados
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="max-w-2xl text-base md:text-lg text-secondary leading-relaxed text-pretty">
                Programas únicos com formação intensiva, estruturados com base
                em evidências científicas e reconhecidos no Espaço Europeu de
                Ensino Superior.
              </p>
            </ScrollReveal>

            <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mt-2" />
          </div>
        </section>

        <MasterSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
