"use client";

import { MessageCircle } from "lucide-react";
import { institute } from "@/src/data/institute";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Olá! Gostaria de mais informações sobre o Fórum Internacional em Direito Penal Econômico.",
  );
  const url = `https://wa.me/${institute.contact.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white font-medium shadow-lg hover:scale-105 transition-transform"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline text-sm">Fale conosco</span>
    </a>
  );
}
