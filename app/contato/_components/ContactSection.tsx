"use client";

import { institute } from "../../../src/data/institute";
import { eventEditions } from "../../../src/data/eventEditions";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Play,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../_shared/components/ui/Button";
import SocialIconButton from "../../_shared/components/ui/SocialIconButton";

export default function ContactSection() {
  const event = eventEditions[0];
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Fale conosco
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Entre em contato conosco para mais informações sobre o evento.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactItem
                icon={<Mail size={18} />}
                label="E-mail"
                value={institute.contact.email}
              />
              <ContactItem
                icon={<Phone size={18} />}
                label="Telefone"
                value={institute.contact.phone}
              />
              <ContactItem
                icon={<MapPin size={18} />}
                label="Endereço"
                value={`${event.location.address}, ${event.location.city} - ${event.location.state}`}
              />
            </div>

            <div className="w-full">
              <h4 className="font-semibold text-primary mb-4 lg:text-left text-center">
                Redes Sociais
              </h4>
              <div className="flex gap-3 lg:justify-start justify-center">
                <SocialIconButton
                  href={institute.contact.social.instagram}
                  icon={<Globe size={18} />}
                  label="Instagram"
                />
                <SocialIconButton
                  href={institute.contact.social.linkedin}
                  icon={<Briefcase size={18} />}
                  label="LinkedIn"
                />
                <SocialIconButton
                  href={institute.contact.social.youtube}
                  icon={<Play size={18} />}
                  label="YouTube"
                />
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-surface p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <InputField label="Nome" placeholder="Seu nome" required />
              <InputField
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <InputField label="Assunto" placeholder="Assunto da mensagem" />
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Mensagem
              </label>
              <textarea
                rows={4}
                required
                placeholder="Sua mensagem..."
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" icon={<Send size={16} />}>
                {sent ? "Mensagem enviada!" : "Enviar mensagem"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gold rounded-xl p-2.5 shrink-0 text-black">{icon}</div>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm text-primary">{value}</p>
      </div>
    </div>
  );
}

function InputField({
  label,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-secondary mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
