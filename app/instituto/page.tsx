import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import HeroSection from "../_sections/HeroSection";
import MasterSection from "../_sections/MasterSection";
import CeoSection from "../_sections/CeoSection";
import TeamHighlightsSection from "../_sections/TeamHighlightsSection";
import JournalsSection from "../_sections/JournalsSection";
import PartnersSection from "../_sections/PartnersSection";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import Footer from "../_shared/components/ui/Footer";
import InstituteSection from "../_sections/InstituteSection";

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
        <CeoSection />
        <TeamHighlightsSection />
        <PartnersSection />
        <JournalsSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
