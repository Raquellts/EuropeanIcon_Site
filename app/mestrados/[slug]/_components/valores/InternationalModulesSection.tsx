import Image from "next/image";
import ScrollReveal from "../../../../_shared/components/ui/ScrollReveal";
import type { Master } from "../../../../../src/data/masters";

const locationImages: Record<string, { src: string; alt: string }> = {
  Brasil: {
    src: "https://images.unsplash.com/photo-1645918899630-85e2f3132a84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "São Paulo, Brasil",
  },
  Portugal: {
    src: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    alt: "Porto, Portugal",
  },
  Espanha: {
    src: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
    alt: "Barcelona, Espanha",
  },
};

const countryFlags: Record<string, string> = {
  Brasil: "🇧🇷",
  Portugal: "🇵🇹",
  Espanha: "🇪🇺",
};

interface ValoresLocationsProps {
  master: Master | undefined;
  locDescs: Record<string, string>;
}

export default function InternationalModulesSection({
  master,
  locDescs,
}: ValoresLocationsProps) {
  if (!master?.locations || master.locations.length === 0) return null;

  return (
    <section className="border-t border-border py-20 md:py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold header-text mb-3">
              Módulos Presenciais Internacionais
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto" />
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-0">
        {(master.locations || []).map((loc, i) => {
          const img = locationImages[loc];
          const flag = countryFlags[loc] || "🌍";
          const desc = locDescs[loc];

          return (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50  to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{flag}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {loc}
                    </span>
                  </div>
                  {desc && (
                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
