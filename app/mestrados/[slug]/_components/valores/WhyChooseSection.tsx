import Link from "next/link";
import { Award } from "lucide-react";
import ScrollReveal from "../../../../_shared/components/ui/ScrollReveal";
import { iconMap } from "./valoresData";
import type { Master } from "../../../../../src/data/masters";

interface WhyChooseSectionProps {
  master: Master | undefined;
}

export default function WhyChooseSection({ master }: WhyChooseSectionProps) {
  if (!master?.benefits || master.benefits.length === 0) return null;

  return (
    <section className="py-20 md:py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-dark)_0%,_transparent_55%)] opacity-[0.05]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold header-text mb-3">
              Por que escolher este mestrado?
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {master.benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Award;
            const content = (
              <div className="flex gap-4 items-start bg-surface/40 border border-border rounded-xl p-5 hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 self-center">
                  <Icon size={36} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm mb-1">
                    {benefit.title}
                  </p>
                  <p className="text-secondary text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );

            return benefit.href ? (
              <Link key={i} href={benefit.href}>
                {content}
              </Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
