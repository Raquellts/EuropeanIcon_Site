"use client";

import { useState } from "react";
import type { FAQItem } from "../../../src/data/faq";
import { ChevronDown } from "lucide-react";

interface FAQSectionProps {
  faqItems: FAQItem[];
  description?: string;
}

export default function FAQSection({ faqItems, description }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-6 py-20 md:py-28 border-t border-border">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {description ?? "Tire suas dúvidas sobre o evento."}
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-surface overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-primary font-medium hover:bg-surface-hover transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
