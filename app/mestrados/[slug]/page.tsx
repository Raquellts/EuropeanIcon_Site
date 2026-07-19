import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../_shared/components/ui/Navbar";
import Footer from "../../_shared/components/ui/Footer";
import WhatsAppButton from "../../_shared/components/ui/WhatsAppButton";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import { getMaster } from "../../../src/services/masterApi";
import { getFacultyByMaster, getRoleCategory } from "../../../src/data/people";
import { masterAssetPath } from "../../../src/data/paths";
import StatsSection from "./_components/StatsSection";
import BenefitsSection from "./_components/BenefitsSection";
import CurriculumSection from "./_components/CurriculumSection";
import GallerySection from "./_components/GallerySection";
import CtaSection from "./_components/CtaSection";
import FacultySection from "./_components/FacultySection";
import InstagramFeedSection from "./_components/InstagramFeedSection";
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

  const coordinator = getFacultyByMaster(slug.replace("mestrado-", "")).find(
    (p) => getRoleCategory(p.role) === "coordenador",
  );

  return (
    <>
      <Navbar />
      <MasterPageClient
        slug={slug}
        title={master.title}
        tagline={master.tagline}
        videoUrl={master.videoUrl}
        heroImage={master.heroImage}
        editalUrl={master.editalUrl}
        contratoUrl={master.contratoUrl}
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
                  {master.description.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className={`text-secondary leading-relaxed lg:text-lg text-sm${i > 0 ? " mt-6" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
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
                  <div className="relative rounded-2xl overflow-hidden border border-border">
                    {master.aboutVideo ? (
                      <video
                        src={master.aboutVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      />
                    ) : (
                      <Image
                        src={master.aboutImage}
                        alt={master.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    )}
                    {coordinator && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                        <div className="flex items-center gap-4">
                          <Image
                            src={masterAssetPath(
                              slug.replace("mestrado-", ""),
                              "coordinator.webp",
                            )}
                            alt={coordinator.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                          />
                          <div>
                            <p className="text-white font-semibold">
                              {coordinator.name}
                            </p>
                            <p className="text-white/80 text-sm">
                              {coordinator.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
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
        {master.curriculumModules && master.curriculumModules.length > 0 && (
          <ScrollReveal delay={100}>
            <CurriculumSection curriculum={master.curriculumModules} />
          </ScrollReveal>
        )}

        {/* Corpo Docente */}
        <ScrollReveal delay={100}>
          <FacultySection masterSlug={slug} />
        </ScrollReveal>

        {/* Galeria */}
        {master.galleryImages && master.galleryImages.length > 0 && (
          <ScrollReveal delay={100}>
            <GallerySection gallery={master.galleryImages} />
          </ScrollReveal>
        )}

        {/* Instagram */}
        {master.instagramUrl && (
          <ScrollReveal delay={100}>
            <InstagramFeedSection
              instagramUrl={master.instagramUrl}
              masterTitle={master.title}
            />
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
