import { ShieldCheck, AlertCircle, CreditCard } from "lucide-react";
import ScrollReveal from "../../../../_shared/components/ui/ScrollReveal";
import type { PricingData } from "./valoresData";
import type { Master } from "../../../../../src/data/masters";

interface ValoresCertificationProps {
  master: Master | undefined;
  pricing?: PricingData;
}

export default function CertificationSection({
  master,
  pricing,
}: ValoresCertificationProps) {
  if (!master?.certification) return null;

  return (
    <section className="py-20 md:py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold)_0%,_transparent_55%)] opacity-[0.04]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold header-text mb-3">
              Certificação e Reconhecimento
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4">
          <ScrollReveal>
            <div className="flex items-start gap-4 bg-surface/50 border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-gold" />
              </div>
              <div>
                <p className="font-semibold text-primary text-sm mb-1">
                  Certificação Internacional
                </p>
                <p className="text-secondary text-xs leading-relaxed">
                  {master.certification}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {pricing && (
            <>
              <ScrollReveal delay={100}>
                <div className="flex items-start gap-4 bg-surface/50 border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <AlertCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">
                      Risco Cambial
                    </p>
                    <p className="text-secondary text-xs leading-relaxed">
                      {pricing.riskNote}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex items-start gap-4 bg-surface/50 border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <CreditCard size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">
                      Taxa de Inscrição
                    </p>
                    <p className="text-gold font-bold text-sm">
                      {pricing.registrationFee}
                    </p>
                    <p className="text-muted text-xs mt-1">
                      {pricing.registrationInstallment}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
