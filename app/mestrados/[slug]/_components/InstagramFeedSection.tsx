"use client";

import { ExternalLink } from "lucide-react";
import ScrollReveal from "../../../_shared/components/ui/ScrollReveal";
import InstagramIcon from "../../../_shared/components/ui/InstagramIcon";
import InstagramCarousel from "../../../_shared/components/ui/InstagramCarousel";

interface InstagramFeedSectionProps {
  instagramUrl: string;
  masterTitle: string;
  instagramEmbeds?: string[];
}

export default function InstagramFeedSection({
  instagramUrl,
  masterTitle,
  instagramEmbeds,
}: InstagramFeedSectionProps) {
  const handle = instagramUrl
    .replace("https://www.instagram.com/", "@")
    .replace("/", "");

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="section-container">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs text-purple-400 mb-5">
            <InstagramIcon size={14} />
            Siga nosso Instagram
          </div>
          <h2 className="text-2xl md:text-3xl font-bold header-text mb-3">
            Novidades ao vivo
          </h2>
          <p className="text-secondary max-w-lg mx-auto text-sm">
            Acompanhe posts, stories e reels com conteúdos exclusivos sobre
            aulas, eventos e depoimentos.
          </p>
        </ScrollReveal>

        {instagramEmbeds && instagramEmbeds.length > 0 && (
          <ScrollReveal className="mb-12">
            <InstagramCarousel urls={instagramEmbeds} />
          </ScrollReveal>
        )}

        <ScrollReveal>
          <div className="max-w-lg mx-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-orange-400/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <InstagramIcon size={28} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-primary group-hover:text-purple-400 transition-colors truncate">
                  {handle}
                </p>
                <p className="text-sm text-secondary mt-0.5">
                  {masterTitle}
                </p>
              </div>
              <ExternalLink
                size={18}
                className="text-muted group-hover:text-purple-400 transition-colors shrink-0"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
