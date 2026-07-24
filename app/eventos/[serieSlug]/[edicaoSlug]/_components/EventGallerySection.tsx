import type { EventEdition } from "@/src/data/eventos/types";
import Image from "next/image";

interface EventGallerySectionProps {
  edition: EventEdition;
}

export default function EventGallerySection({ edition }: EventGallerySectionProps) {
  return (
    <section
      id="galeria"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Galeria
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Fotos de edições anteriores, do mestrado e da instituição.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[16/9] bg-surface">
              {edition.gallery.map((img, idx) => (
                <Image
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    idx === 0 ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
