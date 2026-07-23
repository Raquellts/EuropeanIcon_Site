"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import VideoBackground from "../../../_shared/components/ui/VideoBackground";
import { Button } from "../../../_shared/components/ui/Button";
import Pill from "../../../_shared/components/ui/Pill";
import { useParallax } from "../../../_shared/hooks/useParallax";
import { useAnchorNavigation } from "../../../_shared/hooks/useAnchorNavigation";

interface HeroSectionProps {
  slug: string;
  title: string;
  tagline?: string;
  videoUrl?: string;
  heroImage?: string;
  onOpenEnrollment?: () => void;
  videoPaused?: boolean;
}

export default function HeroSection({
  slug,
  title,
  tagline,
  videoUrl,
  heroImage,
  onOpenEnrollment,
  videoPaused = false,
}: HeroSectionProps) {
  const parallaxRef = useParallax();
  const navigateTo = useAnchorNavigation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 will-change-transform grayscale brightness-[0.4]"
        style={{ height: "120%", top: "-10%" }}
      >
        {videoUrl ? (
          <VideoBackground
            videoSrc={videoUrl}
            fallbackImage={heroImage}
            paused={videoPaused}
          />
        ) : heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-surface animate-pulse" />
        )}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_60%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold-dark)_0%,_transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="section-container relative z-10 flex flex-col items-center text-center gap-8 py-20">
        <Link
          href="/mestrados"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Voltar para Mestrados
        </Link>

        <Pill
          icon={<span className="h-2 w-2 rounded-full bg-gold animate-pulse" />}
        >
          Formações internacionais de alto nível
        </Pill>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-4xl">
          <span className="header-text header-text-animated">{title}</span>
        </h1>

        {tagline && (
          <p className="text-lg md:text-xl text-secondary max-w-2xl">
            {tagline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            variant="primary"
            size="lg"
            href="https://institutoeuropean.com/mestrado-em-direito/"
            external
          >
            Seja um Aluno
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={`/mestrados/${slug}/valores`}
          >
            Valores
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigateTo("grade")}
          >
            Grade Curricular
          </Button>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted" />
        </div>
      </div>
    </section>
  );
}
