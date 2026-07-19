import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import ContactHeroSection from "./_components/ContactHeroSection";
import FAQSection from "./_components/FAQSection";
import ContactSection from "./_components/ContactSection";
import Footer from "../_shared/components/ui/Footer";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import { faqItems } from "../../src/data/faq";

export const metadata: Metadata = {
  title: "Contato - European & Icon Institute",
  description:
    "Entre em contato com a organização do European & Icon Institute.",
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHeroSection />
        <FAQSection
          faqItems={faqItems}
          description="Tire suas dúvidas sobre os Mestrados Internacionais do European & Icon Institute."
        />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
