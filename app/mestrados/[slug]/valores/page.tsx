import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  GraduationCap,
  Languages,
  Users,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import Navbar from "../../../_shared/components/ui/Navbar";
import Footer from "../../../_shared/components/ui/Footer";
import WhatsAppButton from "../../../_shared/components/ui/WhatsAppButton";
import ScrollReveal from "../../../_shared/components/ui/ScrollReveal";
import PricingToggle from "../_components/PricingToggle";
import { getMaster } from "../../../../src/services/masterApi";

interface ValoresPageProps {
  params: Promise<{ slug: string }>;
}

const hofData = {
  tagline: "Excelência Acadêmica. Visão Global. Impacto Real.",
  subtitle: "28ª Turma",
  features: [
    { icon: Clock, label: "14 Módulos / 14 Meses" },
    { icon: GraduationCap, label: "3.000 Horas de Curso" },
    { icon: BadgeCheck, label: "120 Créditos ECTS" },
    { icon: Languages, label: "Idioma: Português" },
    { icon: Users, label: "Corpo Docente Internacional" },
  ],
  locations: [
    { city: "São Paulo", country: "Brasil" },
    { city: "Porto", country: "Portugal" },
    { city: "Barcelona", country: "Espanha" },
  ],
  pricing: {
    basePrice: "€16.150",
    discount: "Até 50% de desconto para últimas vagas",
    registrationFee: "R$ 1.450,00",
    registrationInstallment: "Parcelado em até 3x sem juros no boleto bancário",
    standardInstallment: "25x de R$ 2.196,00",
    discountedInstallment: "R$ 1.978,20 / mês",
    discountedLabel: "Pagamento Pontual (Com Desconto)",
    riskNote:
      "O Instituto assume o risco cambial — valores fixados em Reais",
  },
};

export default async function ValoresPage({ params }: ValoresPageProps) {
  const { slug } = await params;
  const master = await getMaster(slug);
  const isHof = slug.includes("harmonizacao");
  const data = isHof ? hofData : null;

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Mestrado em Harmonização Orofacial.")}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative pt-32 pb-24">
          <div className="section-container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <Link
                  href={`/mestrados/${slug}`}
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm mb-8"
                >
                  <ArrowLeft size={16} />
                  Voltar para {master?.title || "Mestrado"}
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold header-text mb-4">
                  Valores
                </h1>

                <div className="h-1 w-20 gradient-gold rounded-full mx-auto mb-6" />

                {data ? (
                  <>
                    <p className="text-gold font-medium text-lg mb-2">
                      {data.subtitle}
                    </p>
                    <p className="text-secondary text-base italic max-w-xl mx-auto mb-12">
                      &ldquo;{data.tagline}&rdquo;
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
                      {data.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <div
                            key={i}
                            className="bg-surface/50 border border-border rounded-xl p-4 text-center hover:border-gold/30 transition-colors"
                          >
                            <Icon
                              size={20}
                              className="text-gold mx-auto mb-2"
                            />
                            <p className="text-xs text-secondary leading-snug">
                              {feature.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Locations */}
                    <div className="mb-16">
                      <h2 className="text-xl md:text-2xl font-bold header-text mb-2">
                        Locais dos Módulos Presenciais Internacionais
                      </h2>
                      <div className="h-1 w-16 gradient-gold rounded-full mx-auto mb-8" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {data.locations.map((loc, i) => (
                          <div
                            key={i}
                            className="bg-background border border-border rounded-xl p-5 hover:border-gold/30 transition-colors"
                          >
                            <MapPin
                              size={20}
                              className="text-gold mx-auto mb-2"
                            />
                            <p className="text-primary font-semibold text-sm">
                              {loc.city}
                            </p>
                            <p className="text-muted text-xs">{loc.country}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Card */}
                    <div className="max-w-2xl mx-auto">
                      <PricingToggle
                        basePrice={data.pricing.basePrice}
                        discount={data.pricing.discount}
                        registrationFee={data.pricing.registrationFee}
                        registrationInstallment={data.pricing.registrationInstallment}
                        standardInstallment={data.pricing.standardInstallment}
                        discountedInstallment={data.pricing.discountedInstallment}
                        discountedLabel={data.pricing.discountedLabel}
                        riskNote={data.pricing.riskNote}
                        whatsappUrl={whatsappUrl}
                      />
                    </div>
                  </>
                ) : (
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    Informações sobre valores e condições de pagamento serão
                    disponibilizadas em breve.
                  </p>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
