import ScrollReveal from "../../../../_shared/components/ui/ScrollReveal";
import PricingToggle from "./PricingToggle";
import type { PricingData } from "./valoresData";

interface PricingSectionProps {
  pricing: PricingData;
  whatsappUrl: string;
}

export default function PricingSection({
  pricing,
  whatsappUrl,
}: PricingSectionProps) {
  return (
    <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold)_0%,_transparent_55%)] opacity-[0.10]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,_var(--gold)_0%,_transparent_35%)] opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_90%,_var(--gold)_0%,_transparent_35%)] opacity-[0.05]" />
      <div className="section-container relative">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <PricingToggle
              basePrice={pricing.basePrice}
              discount={pricing.discount}
              registrationFee={pricing.registrationFee}
              registrationInstallment={pricing.registrationInstallment}
              standardInstallment={pricing.standardInstallment}
              discountedInstallment={pricing.discountedInstallment}
              discountedLabel={pricing.discountedLabel}
              riskNote={pricing.riskNote}
              whatsappUrl={whatsappUrl}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
