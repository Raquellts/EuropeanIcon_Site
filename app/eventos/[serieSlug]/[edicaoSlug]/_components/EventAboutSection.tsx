import type { EventEdition } from "@/src/data/eventos/types";
import AboutCard from "./AboutCards";
import { Target, Users, BookOpen } from "lucide-react";

interface EventAboutSectionProps {
  edition: EventEdition;
}

export default function EventAboutSection({ edition }: EventAboutSectionProps) {
  return (
    <section
      id="sobre"
      className="pt-16 pb-20 md:pb-28 md:pt-24 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Sobre o Evento
          </h2>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto" />
        </div>

        <p className="text-secondary text-lg max-w-4xl mx-auto text-center mb-16 leading-relaxed">
          {edition.about.purpose}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AboutCard
            type="about"
            icon={<Target size={24} />}
            title="Objetivo"
            description={edition.about.objective}
          />
          <AboutCard
            type="about"
            icon={<Users size={24} />}
            title="Participantes"
            description={edition.about.targetAudience}
          />
          <AboutCard
            type="about"
            icon={<BookOpen size={24} />}
            title="Temas"
            description={edition.about.topics}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {edition.about.discussionTopics.map((topic) => (
            <div
              key={topic}
              className="rounded-xl border border-border bg-surface/50 px-5 py-4 text-secondary text-sm hover:border-gold/30 hover:bg-surface transition-all duration-300"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
