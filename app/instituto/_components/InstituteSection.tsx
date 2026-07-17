"use client";

import { institute } from "../../../src/data/institute";
import {
  Calendar,
  Clock,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
} from "lucide-react";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import { useRef, useEffect } from "react";
import LogoAnimation from "./LogoAnimation";

export default function InstituteSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.5;
  }, []);

  const stats = [
    {
      icon: Calendar,
      label: `${institute.heroStats[0].value} · ${institute.heroStats[0].label}`,
    },
    {
      icon: Clock,
      label: `${institute.heroStats[1].value} ${institute.heroStats[1].label}`,
    },
    {
      icon: Award,
      label: `${institute.heroStats[2].value} ${institute.heroStats[2].label}`,
    },
    {
      icon: BookOpen,
      label: `${institute.heroStats[3].value} ${institute.heroStats[3].label}`,
    },
  ];

  return (
    <section
      id="instituto"
      className="relative overflow-hidden border-t border-border"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold-dark)_0%,_transparent_60%)] opacity-[0.06]" />

      {/* Mobile: single column */}
      <div className="lg:hidden flex flex-col">
        <div className="px-6 py-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/70 backdrop-blur px-4 py-1.5 text-xs text-gold mb-4">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              {institute.heroSubtitle}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl font-bold header-text mb-4">
              {institute.name}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              {institute.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="flex flex-wrap gap-2 mb-6">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/70 backdrop-blur px-3 py-1.5 text-xs text-secondary"
                >
                  <stat.icon size={14} className="text-gold" />
                  {stat.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="relative min-h-[40vh]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={institute.instituteVideo} type="video/mp4" />
          </video>
          <LogoAnimation />
        </div>

        <div className="px-6 py-10 space-y-5">
          <MissionCard
            icon={<Award size={18} />}
            title="Missão"
            text={institute.mission}
          />
          <MissionCard
            icon={<Globe size={18} />}
            title="Foco Internacional"
            text={institute.focus}
          />
          <MissionCard
            icon={<GraduationCap size={18} />}
            title="Excelência Acadêmica"
            text="Programas únicos com dupla titulação Brasil–Europa, estruturados com base em evidências científicas e alianças com instituições de renome mundial."
          />
        </div>
      </div>

      {/* Desktop: asymmetric mosaic */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Cell 1: Badge + Title (top-left, 2 cols) */}
        <div className="col-span-2 row-span-1 flex flex-col justify-end px-10 pt-16 pb-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-surface/70 backdrop-blur px-4 py-1.5 text-xs text-gold mb-4">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              {institute.heroSubtitle}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-4xl xl:text-5xl font-bold header-text">
              {institute.name}
            </h2>
          </ScrollReveal>
        </div>

        {/* Cell 2: Video (top-right, 2 cols, spans 2 rows) */}
        <div className="col-span-2 row-span-2 relative min-h-[60vh]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={institute.instituteVideo} type="video/mp4" />
          </video>
          <LogoAnimation />
        </div>

        {/* Cell 3: Description + Stats (below title, 2 cols) */}
        <div className="col-span-2 row-span-1 flex flex-col justify-start px-10 pb-16 pt-6">
          <ScrollReveal delay={160}>
            <p className="text-secondary leading-relaxed text-sm mb-6 max-w-xl">
              {institute.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="flex flex-wrap gap-2">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/70 backdrop-blur px-3 py-1.5 text-xs text-secondary"
                >
                  <stat.icon size={14} className="text-gold" />
                  {stat.label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Cell 4: Mission cards (bottom, full width, 4 cols) */}
        <div className="col-span-4 border-t border-border">
          <div className="grid grid-cols-3 divide-x divide-border">
            <ScrollReveal delay={320}>
              <div className="flex flex-col justify-center px-10 py-12">
                <div className="inline-flex rounded-xl p-3 bg-gold text-black w-fit mb-4">
                  <Award size={20} />
                </div>
                <h3 className="font-semibold text-sm text-primary mb-2">
                  Missão
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {institute.mission}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={380}>
              <div className="flex flex-col justify-center px-10 py-12">
                <div className="inline-flex rounded-xl p-3 bg-gold text-black w-fit mb-4">
                  <Globe size={20} />
                </div>
                <h3 className="font-semibold text-sm text-primary mb-2">
                  Foco Internacional
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {institute.focus}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={440}>
              <div className="flex flex-col justify-center px-10 py-12">
                <div className="inline-flex rounded-xl p-3 bg-gold text-black w-fit mb-4">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-semibold text-sm text-primary mb-2">
                  Excelência Acadêmica
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  Programas únicos com dupla titulação Brasil–Europa,
                  estruturados com base em evidências científicas e alianças com
                  instituições de renome mundial.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="inline-flex rounded-xl p-2.5 bg-gold text-black h-fit shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-xs text-primary mb-0.5">{title}</h3>
        <p className="text-secondary text-xs leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
