"use client";

import {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { Benefit } from "../../../../src/data/masters";

const iconMap: Record<string, any> = {
  Clock,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  FileText,
  Search,
  Stethoscope,
  Syringe,
};

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">
            Por que este mestrado?
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Uma formação construída para quem pretende ir além.
          </p>
          <div className="h-1 w-20 gradient-gold rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] || Award;
            return (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-6 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
