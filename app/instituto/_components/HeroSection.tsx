"use client";

import { institute } from "../../../src/data/institute";
import { Button } from "../../_shared/components/ui/Button";
import VideoBackground from "../../_shared/components/ui/VideoBackground";
import StatCard from "../../_shared/components/ui/StatCard";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import { useAnchorNavigation } from "../../_shared/hooks/useAnchorNavigation";
import { useParallax } from "../../_shared/hooks/useParallax";

export default function HeroSection() {
  const navigateTo = useAnchorNavigation();
  const parallaxRef = useParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 will-change-transform grayscale brightness-[0.3]"
        style={{ height: "120%", top: "-10%" }}
      >
        {institute.heroVideoSrc ? (
          <VideoBackground
            videoSrc={institute.heroVideoSrc}
            fallbackImage={institute.heroImage}
            playbackRate={0.8}
          />
        ) : institute.heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${institute.heroImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-surface animate-pulse" />
        )}
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/40 to-background [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_60%)] opacity-10" />

      <div className="flex-1 flex items-center justify-center z-10">
        <div className="section-container flex flex-col items-center text-center gap-7 py-24 md:py-28">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-4 py-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              {institute.heroSubtitle}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="font-bold leading-tight max-w-4xl">
              <span className="block font-serif font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:mb-1 md:mb-2 text-primary">
                {institute.heroTitle}
              </span>
              <span className="block font-serif header-text header-text-animated text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {institute.name}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="max-w-2xl text-base md:text-lg text-secondary leading-relaxed text-pretty">
              {institute.heroDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigateTo("mestrado")}
              >
                Conheça os Mestrados
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateTo("instituto")}
              >
                Sobre o Instituto
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-6 py-8 border-t border-border bg-surface/50 backdrop-blur">
            {institute.heroStats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
