"use client";

import { useState } from "react";
import {
  AlertCircle,
  CreditCard,
  ArrowLeftRight,
  ArrowRight,
} from "lucide-react";
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
    <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-b from-surface/80 via-background to-surface/80 backdrop-blur-sm p-8 md:p-12 text-center">
      {/* Inner glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_50%)] opacity-[0.06]" />

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold header-text mb-2">
          Investimento e Valores
        </h2>
        <p className="text-secondary text-sm mb-8">
          Escolha a moeda de pagamento
        </p>

        {/* Toggle com ícone flutuante no meio */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative flex items-center">
            {/* Indicador deslizante */}
            <div
              className="absolute top-0 bottom-0 w-1/2 bg-gold rounded-2xl shadow-lg shadow-gold/20 transition-transform duration-300 ease-in-out"
              style={{
                transform: isBrazil ? "translateX(0)" : "translateX(100%)",
              }}
            />
            <div className="flex bg-background border border-border rounded-2xl p-0.5">
              <button
                onClick={() => setIsBrazil(true)}
                className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-l-2xl text-sm font-semibold transition-colors duration-200 w-32 ${
                  isBrazil
                    ? "text-background"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <span className="text-lg leading-none">R$</span>
                <span>Reais</span>
              </button>

              <button
                onClick={() => setIsBrazil(false)}
                className={`relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-r-2xl text-sm font-semibold transition-colors duration-200 w-32 ${
                  !isBrazil
                    ? "text-background"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <span className="text-lg leading-none">€</span>
                <span>Euros</span>
              </button>
            </div>
            {/* Ícone flutuante central */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-background border border-gold/30 flex items-center justify-center shadow-lg">
              <ArrowLeftRight size={14} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          <span className="bg-gold/10 border border-gold/30 text-gold text-sm font-semibold px-4 py-2 rounded-full">
            {discount}
          </span>
        </div>

        {/* Price Display — altura fixa para não pular */}
        <div className="mb-4 min-h-[200px] flex items-center justify-center">
          {isBrazil ? (
            <div className="space-y-5 w-full max-w-sm mx-auto">
              <div>
                <p className="text-muted text-xs uppercase tracking-wider mb-2">
                  Parcelamento Padrão
                </p>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {standardInstallment}
                </p>
              </div>
              <div className="w-full flex flex-col items-center bg-gold/5 border border-gold/20 rounded-2xl px-8 py-5">
                <p className="text-gold text-xs mb-1 font-medium uppercase tracking-wider">
                  {discountedLabel}
                </p>
                <p className="text-gold font-bold text-2xl md:text-3xl">
                  {discountedInstallment}
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-sm mx-auto">
              <p className="text-muted text-xs uppercase tracking-wider mb-2">
                Valor Base
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary">
                {basePrice}
              </p>
            </div>
          )}
        </div>

        {/* Registration Fee — mesmo width do discountedLabel */}
        <div className="w-full max-w-sm mx-auto bg-surface/60 border border-border rounded-xl p-5 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
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
          <div className="flex items-center justify-center gap-2 text-secondary text-xs mb-8">
            <AlertCircle size={14} className="text-gold shrink-0" />
            <p>{riskNote}</p>
          </div>
        )}

        {/* CTA */}
        <Button
          variant="primary"
          size="lg"
          href="https://institutoeuropean.com/mestrado-em-direito/"
          external
          icon={<ArrowRight size={18} />}
        >
          Garantir Minha Vaga
        </Button>
      </div>
    </div>
  );
}
