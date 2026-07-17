import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../_shared/components/ui/Navbar";
import Footer from "../../_shared/components/ui/Footer";
import WhatsAppButton from "../../_shared/components/ui/WhatsAppButton";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import { getMaster } from "../../../src/services/masterApi";
import StatsSection from "./_components/StatsSection";
import BenefitsSection from "./_components/BenefitsSection";
import CurriculumSection from "./_components/CurriculumSection";
import GallerySection from "./_components/GallerySection";
import CtaSection from "./_components/CtaSection";
import MasterPageClient from "./MasterPageClient";
import type { Metadata } from "next";

interface MasterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MasterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const master = await getMaster(slug);
  if (!master) return {};

  return {
    title: `${master.title} - European & Icon Institute`,
    description: master.description,
  };
}

export default async function MasterPage({ params }: MasterPageProps) {
  const { slug } = await params;
  const master = await getMaster(slug);

  if (!master) notFound();

  return (
    <>
      <Navbar />
      <MasterPageClient
        slug={slug}
        title={master.title}
        tagline={master.tagline}
        videoUrl={master.videoUrl}
        heroImage={master.heroImage}
      >
        <ScrollReveal>
          <StatsSection
            totalHours={master.totalHours}
            ects={master.ects}
            modulesCount={master.curriculumModules?.length}
            locationsCount={master.locations?.length}
          />
        </ScrollReveal>

        {/* Descrição */}
        <ScrollReveal delay={100}>
          <section className="py-16">
            <div className="section-container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-secondary leading-relaxed text-lg">
                    {master.description}
                  </p>
                  {master.coordinator && (
                    <p className="text-sm text-muted mt-6">
                      Coordenador: {master.coordinator}
                    </p>
                  )}
                  {master.certification && (
                    <div className="mt-6 p-4 bg-surface/50 rounded-xl border border-border">
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">
                        Certificação
                      </p>
                      <p className="text-sm text-secondary">
                        {master.certification}
                      </p>
                    </div>
                  )}
                </div>
                {master.aboutImage && (
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <Image
                      src={master.aboutImage}
                      alt={master.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Diferenciais */}
        {master.benefits && master.benefits.length > 0 && (
          <ScrollReveal delay={200}>
            <BenefitsSection benefits={master.benefits} />
          </ScrollReveal>
        )}

        {/* Currículo */}
        {master.curriculumModules &&
          master.curriculumModules.length > 0 && (
            <ScrollReveal delay={100}>
              <CurriculumSection curriculum={master.curriculumModules} />
            </ScrollReveal>
          )}

        {/* Galeria */}
        {master.galleryImages && master.galleryImages.length > 0 && (
          <ScrollReveal delay={100}>
            <GallerySection gallery={master.galleryImages} />
          </ScrollReveal>
        )}

        {/* CTA */}
        <ScrollReveal>
          <CtaSection />
        </ScrollReveal>
      </MasterPageClient>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
