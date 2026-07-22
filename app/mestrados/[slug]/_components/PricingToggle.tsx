"use client";

import { useState } from "react";
import { AlertCircle, CreditCard, Globe, MapPin } from "lucide-react";
import { Button } from "../../../../app/_shared/components/ui/Button";

interface PricingToggleProps {
  basePrice: string;
  discount: string;
  registrationFee: string;
  registrationInstallment: string;
  standardInstallment: string;
  discountedInstallment: string;
  discountedLabel: string;
  riskNote: string;
  whatsappUrl: string;
}

export default function PricingToggle({
  basePrice,
  discount,
  registrationFee,
  registrationInstallment,
  standardInstallment,
  discountedInstallment,
  discountedLabel,
  riskNote,
  whatsappUrl,
}: PricingToggleProps) {
  const [isBrazil, setIsBrazil] = useState(true);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-br from-surface via-background to-surface p-8 md:p-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5" />

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold header-text mb-6">
          Investimento e Valores
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-background border border-border rounded-full p-1 flex gap-1">
            <button
              onClick={() => setIsBrazil(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                isBrazil
                  ? "bg-gold text-background"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <MapPin size={16} />
              Brasil
            </button>
            <button
              onClick={() => setIsBrazil(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isBrazil
                  ? "bg-gold text-background"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <Globe size={16} />
              Internacional
            </button>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="inline-block mb-6">
          <span className="bg-gold/10 border border-gold/30 text-gold text-sm font-semibold px-4 py-2 rounded-full">
            {discount}
          </span>
        </div>

        {/* Price Display */}
        {isBrazil ? (
          <div className="mb-8 space-y-4">
            <div>
              <p className="text-muted text-sm mb-1">Parcelamento Padrão</p>
              <p className="text-3xl md:text-4xl font-bold text-primary font-display">
                25x de R$ 2.196
              </p>
            </div>
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 max-w-sm mx-auto">
              <p className="text-gold text-xs mb-1 font-medium">
                {discountedLabel}
              </p>
              <p className="text-gold font-bold text-xl">
                {discountedInstallment}
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <p className="text-muted text-sm mb-1">Valor Base</p>
            <p className="text-4xl md:text-5xl font-bold text-primary font-display">
              {basePrice}
            </p>
          </div>
        )}

        {/* Registration Fee */}
        <div className="bg-surface/50 border border-border rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <CreditCard size={16} className="text-gold" />
            <p className="text-primary font-semibold text-sm">
              Taxa de Inscrição
            </p>
          </div>
          <p className="text-2xl font-bold text-gold">{registrationFee}</p>
          <p className="text-muted text-xs mt-1">{registrationInstallment}</p>
        </div>

        {/* Risk Note (Brazil only) */}
        {isBrazil && (
          <div className="flex items-start gap-2 text-left bg-surface/30 border border-border rounded-lg p-4 mb-8">
            <AlertCircle size={18} className="text-gold shrink-0 mt-0.5" />
            <p className="text-secondary text-xs leading-relaxed">{riskNote}</p>
          </div>
        )}

        {/* CTA */}
        <Button
          variant="primary"
          size="lg"
          href="https://institutoeuropean.com/mestrado-em-direito/"
          external
        >
          Inscreva-se Agora
        </Button>
      </div>
    </div>
  );
}
