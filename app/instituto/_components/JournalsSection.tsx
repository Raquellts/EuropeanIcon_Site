import ImageWithFallback from "../../_shared/components/ui/ImageWithFallback";
import { journals } from "../../../src/data/journals";
import { ExternalLink } from "lucide-react";

export default function JournalsSection() {
  return (
    <section id="journals" className="py-20 md:py-28 border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Revistas Científicas
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Revistas científicas do European Institute com publicações de
            excelência acadêmica.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {journals.map((journal) => (
            <a
              key={journal.slug}
              href={journal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative bg-gradient-to-br from-surface to-surface-hover overflow-hidden">
                <ImageWithFallback
                  src={journal.coverImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 grayscale brightness-[0.3]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-transparent">
                  <ImageWithFallback
                    src={journal.icon}
                    width={200}
                    height={200}
                    alt={journal.name}
                    className="w-100 h-100 object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary group-hover:text-gold transition-colors">
                  {journal.name}
                </h3>
                <p className="text-sm text-secondary mt-2 line-clamp-3">
                  {journal.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center gap-2 border border-border text-secondary px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 group-hover:border-gold/40 group-hover:text-gold">
                    Acessar revista <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
