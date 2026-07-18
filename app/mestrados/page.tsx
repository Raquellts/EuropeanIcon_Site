import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import { masters } from "../../src/data/masters";
import MasterCard from "../_shared/components/ui/MasterCard";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import Footer from "../_shared/components/ui/Footer";
import Pill from "../_shared/components/ui/Pill";
import ScrollReveal from "../_shared/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Mestrados Internacionais - European & Icon Institute",
  description:
    "Conheça os programas de Mestrado Internacional oferecidos pelo European & Icon Institute, com dupla titulação Brasil-Europa.",
};

export default function MestradosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <Image
            src="/images/masters/hero-masters.webp"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_60%)] opacity-[0.15]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

          <div className="section-container relative z-10 flex flex-col items-center text-center gap-6 py-24 md:py-28">
            <ScrollReveal>
              <Pill
                icon={<span className="h-2 w-2 rounded-full bg-gold animate-pulse" />}
              >
                Dupla titulação Brasil–Europa
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
                Programas únicos com dupla titulação Brasil–Europa, estruturados
                com base em evidências científicas e reconhecidos no Espaço
                Europeu de Ensino Superior.
              </p>
            </ScrollReveal>

            <div className="h-1 w-20 gradient-gold rounded-full mt-2" />
          </div>
        </section>

        <section className="relative py-20 md:py-28 border-t border-border overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.12]" />
          <div className="section-container relative">
            <div className="flex flex-col gap-8">
              {masters.map((master, index) => (
                <MasterCard key={master.slug} master={master} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
