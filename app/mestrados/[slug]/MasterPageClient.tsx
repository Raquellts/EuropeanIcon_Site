"use client";

import { useState } from "react";
import HeroSection from "./_components/HeroSection";
import EnrollmentModal from "./_components/EnrollmentModal";

interface MasterPageClientProps {
  slug: string;
  title: string;
  tagline?: string;
  videoUrl?: string;
  heroImage?: string;
  children: React.ReactNode;
}

export default function MasterPageClient({
  slug,
  title,
  tagline,
  videoUrl,
  heroImage,
  children,
}: MasterPageClientProps) {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  return (
    <main>
      <HeroSection
        title={title}
        tagline={tagline}
        videoUrl={videoUrl}
        heroImage={heroImage}
        onOpenEnrollment={() => setEnrollmentOpen(true)}
      />
      {children}
      <EnrollmentModal
        open={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        masterSlug={slug}
      />
    </main>
  );
}
