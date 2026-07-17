import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import HeroSection from "./_components/HeroSection";
import MasterSection from "./_components/MasterSection";
import JournalsSection from "./_components/JournalsSection";
import PartnersSection from "./_components/PartnersSection";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import Footer from "../_shared/components/ui/Footer";
import { institute } from "../../src/data/institute";
import InstituteSection from "./_components/InstituteSection";

export const metadata: Metadata = {
  title: "Instituto - European & Icon Institute",
  description:
    "Conheça o European & Icon Institute, seus programas de mestrado internacional e periódicos acadêmicos.",
};

export default function InstitutoPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InstituteSection />
        <MasterSection />
        <PartnersSection />
        <JournalsSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
