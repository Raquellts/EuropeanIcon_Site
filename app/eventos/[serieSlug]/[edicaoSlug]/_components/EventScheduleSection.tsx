import type { EventEdition } from "@/src/data/eventos/types";
import type { ScheduleItem } from "@/src/data/schedule";
import type { ReactNode } from "react";
import { Clock, Coffee, Star, LogIn, X, Users } from "lucide-react";
import Link from "next/link";

export const typeConfig: Record<
  ScheduleItem["type"],
  { icon: ReactNode; color: string }
> = {
  palestra: { icon: <Star size={16} />, color: "border-gold" },
  painel: { icon: <Users size={16} />, color: "border-gold-light" },
  coffee: { icon: <Coffee size={16} />, color: "border-muted" },
  credenciamento: { icon: <LogIn size={16} />, color: "border-muted" },
  encerramento: { icon: <X size={16} />, color: "border-danger" },
};

interface EventScheduleSectionProps {
  edition: EventEdition;
  params: { serieSlug: string; edicaoSlug: string };
}

export default function EventScheduleSection({
  edition,
  params,
}: EventScheduleSectionProps) {
  return (
    <section
      id="programacao"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Programação
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Confira a programação completa do evento.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {edition.schedule.map((day) => (
            <div key={day.date}>
              <div className="text-center mb-8">
                <span className="inline-block rounded-full bg-gold/10 border border-gold px-4 py-1.5 text-md font-semibold">
                  {day.date} · {day.day}
                </span>
              </div>
              <div>
                {day.items.map((item, idx) => {
                  const config = typeConfig[item.type];
                  return (
                    <div
                      key={idx}
                      className="relative pl-10 pb-8 border-l-2 border-border last:pb-0 last:border-l-0"
                    >
                      <div
                        className={`absolute left-[-9px] top-0 rounded-full border-2 bg-background p-1 ${config.color}`}
                      >
                        {config.icon}
                      </div>
                      <div className="rounded-xl border border-border bg-surface/50 p-4 hover:bg-surface transition-colors">
                        <div className="flex items-center gap-2 text-xs text-muted mb-2">
                          <Clock size={12} />
                          {item.time}
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] border ${config.color} text-secondary`}
                          >
                            {item.type.charAt(0).toUpperCase() +
                              item.type.slice(1)}
                          </span>
                        </div>
                        <h4 className="font-semibold text-primary text-sm">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-xs text-secondary mt-1">
                            {item.description}
                          </p>
                        )}
                        {item.speaker && item.slugs && (
                          <p className="text-xs text-gold mt-2">
                            {item.speaker.split(" & ").map((name, i) => (
                              <span key={i}>
                                {i > 0 && <span> & </span>}
                                <Link
                                  href={`/eventos/${params.serieSlug}/${params.edicaoSlug}/participantes/${item.slugs![i]}`}
                                  className="hover:underline hover:text-gold"
                                >
                                  {name}
                                </Link>
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
