import type { EventEdition } from "@/src/data/eventos/types";
import type { Institute } from "@/src/data/institute";
import { MapPin, Building2, Mail, Phone } from "lucide-react";

interface EventLocationSectionProps {
  edition: EventEdition;
  institute: Institute;
}

export default function EventLocationSection({
  edition,
  institute,
}: EventLocationSectionProps) {
  return (
    <section
      id="local"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Local do Evento
          </h2>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden h-full">
            <div className="relative w-full h-full min-h-[300px]">
              <iframe
                src={edition.location.mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local do Evento"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-gold" />
                {edition.location.name}
              </h3>
              <div className="space-y-4 text-secondary">
                <p className="flex items-start gap-3">
                  <Building2
                    size={18}
                    className="text-gold shrink-0 mt-0.5"
                  />
                  {edition.location.address},{" "}
                  {edition.location.city}
                  {edition.location.state
                    ? ` - ${edition.location.state}`
                    : ""}
                  <br />
                  {edition.location.cep}
                  <br />
                  {edition.location.country}
                </p>
                {institute.contact.phone && (
                  <p className="flex items-center gap-3">
                    <Phone size={18} className="text-gold shrink-0" />
                    {institute.contact.phone}
                  </p>
                )}
                {institute.contact.email && (
                  <p className="flex items-center gap-3">
                    <Mail size={18} className="text-gold shrink-0" />
                    {institute.contact.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
