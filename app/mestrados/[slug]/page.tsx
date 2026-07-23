import { notFound } from "next/navigation";
import Navbar from "../../_shared/components/ui/Navbar";
import Footer from "../../_shared/components/ui/Footer";
import WhatsAppButton from "../../_shared/components/ui/WhatsAppButton";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import { getMaster } from "../../../src/services/masterApi";
import { getFacultyByMaster, getRoleCategory } from "../../../src/data/people";
import StatsSection from "./_components/StatsSection";
import BenefitsSection from "./_components/BenefitsSection";
import CurriculumSection from "./_components/CurriculumSection";
import GallerySection from "./_components/GallerySection";
import DescriptionSection from "./_components/DescriptionSection";
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
          <DescriptionSection
            master={master}
            slug={slug}
            coordinator={coordinator}
          />
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
              instagramEmbeds={master.instagramEmbeds}
            />
          </ScrollReveal>
        )}

        {/* CTA */}
        <ScrollReveal>
          <CtaSection masterSlug={slug} />
        </ScrollReveal>
      </MasterPageClient>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
