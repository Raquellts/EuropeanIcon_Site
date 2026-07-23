import Navbar from "../../../_shared/components/ui/Navbar";
import Footer from "../../../_shared/components/ui/Footer";
import WhatsAppButton from "../../../_shared/components/ui/WhatsAppButton";
import { getMaster } from "../../../../src/services/masterApi";
import HeroSection from "../_components/valores/HeroSection";
import WhyChooseSection from "../_components/valores/WhyChooseSection";
import InternationalModulesSection from "../_components/valores/InternationalModulesSection";
import CertificationSection from "../_components/valores/CertificationSection";
import PricingSection from "../_components/valores/PricingSection";
import {
  pricingByMaster,
  masterMeta,
  locationDescriptions,
} from "../_components/valores/valoresData";

interface ValoresPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ValoresPage({ params }: ValoresPageProps) {
  const { slug } = await params;
  const master = await getMaster(slug);
  const masterKey = slug.replace("mestrado-", "");
  const pricing = pricingByMaster[masterKey];
  const meta = masterMeta[masterKey];
  const locDescs = locationDescriptions[masterKey] || {};

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o " + (master?.title || "Mestrado") + ".")}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection master={master} slug={slug} meta={meta} />
        <InternationalModulesSection master={master} locDescs={locDescs} />
        <CertificationSection master={master} pricing={pricing} />
        {pricing ? (
          <PricingSection pricing={pricing} whatsappUrl={whatsappUrl} />
        ) : (
          <section className="py-20 md:py-28 border-t border-border">
            <div className="section-container text-center">
              <p className="text-secondary text-lg">
                Informações sobre valores e condições de pagamento serão
                disponibilizadas em breve.
              </p>
            </div>
          </section>
        )}
        <WhyChooseSection master={master} />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
