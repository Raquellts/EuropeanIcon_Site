"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Play,
  MessageCircle,
} from "lucide-react";
import { institute } from "../../../src/data/institute";
import ScrollReveal from "../../_shared/components/ui/ScrollReveal";
import SocialIconButton from "../../_shared/components/ui/SocialIconButton";
import InstagramIcon from "../../_shared/components/ui/InstagramIcon";

const { contact } = institute;

const accentMap: Record<string, { card: string; icon: string }> = {
  "green-500": {
    card: "border-green-500/30 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/50",
    icon: "bg-green-500/20 text-green-400",
  },
  "pink-500": {
    card: "border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 hover:border-pink-500/50",
    icon: "bg-pink-500/20 text-pink-400",
  },
  "blue-500": {
    card: "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/50",
    icon: "bg-blue-500/20 text-blue-400",
  },
  "red-500": {
    card: "border-red-500/30 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/50",
    icon: "bg-red-500/20 text-red-400",
  },
};

const contactCards = [
  {
    icon: <Mail size={18} />,
    label: "E-mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Telefone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "Fale conosco",
    href: `https://wa.me/${contact.whatsapp}`,
    accentColor: "green-500",
  },
  {
    icon: <InstagramIcon size={18} />,
    label: "Instagram European",
    value: "@europeaninst_oficial",
    href: contact.social.instagram,
    accentColor: "pink-500",
  },
  {
    icon: <InstagramIcon size={18} />,
    label: "Instagram Direito",
    value: "@iconinstoficial",
    href: "https://www.instagram.com/iconinstoficial/",
    accentColor: "pink-500",
  },
  {
    icon: <Briefcase size={18} />,
    label: "LinkedIn",
    value: "Rose Magina",
    href: contact.social.linkedin,
    accentColor: "blue-500",
  },
  {
    icon: <Play size={18} />,
    label: "YouTube",
    value: "European & Icon Institute",
    href: contact.social.youtube,
    accentColor: "red-500",
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    value: "institutoeuropean.com",
    href: institute.link,
  },
  {
    icon: <MapPin size={18} />,
    label: "Endereço",
    value: "Barcelona, Espanha",
    href: null,
  },
];

export default function ContactHeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-20 border-t border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.08]" />

      <div className="section-container relative">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold header-text mb-4">
            Fale com o Instituto
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Estamos aqui para ajudar. Escolha o canal mais conveniente para
            você.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto mt-4" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface p-6 md:p-10 shadow-xl shadow-black/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactCards.map((card) => {
                const Wrapper = card.href ? "a" : "div";
                const wrapperProps = card.href
                  ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <Wrapper
                    key={card.label}
                    {...wrapperProps}
                    className={`flex items-center gap-3 rounded-xl border p-4 transition-all duration-200 cursor-pointer ${
                      card.accentColor
                        ? accentMap[card.accentColor].card
                        : "border-gold/10 bg-gold/[0.03] hover:border-gold/30 hover:bg-gold/10"
                    }`}
                  >
                    <div
                      className={`shrink-0 rounded-lg p-2.5 ${
                        card.accentColor
                          ? accentMap[card.accentColor].icon
                          : "bg-gold/10 text-gold"
                      }`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{card.label}</p>
                      <p className="text-sm text-primary font-medium truncate">
                        {card.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
