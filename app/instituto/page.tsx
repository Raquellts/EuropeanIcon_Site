import type { Metadata } from "next";
import Navbar from "../_shared/components/ui/Navbar";
import HeroSection from "./_components/HeroSection";
import MasterSection from "./_components/MasterSection";
import CeoSection from "./_components/CeoSection";
import TeamHighlightsSection from "./_components/TeamHighlightsSection";
import JournalsSection from "./_components/JournalsSection";
import PartnersSection from "./_components/PartnersSection";
import WhatsAppButton from "../_shared/components/ui/WhatsAppButton";
import Footer from "../_shared/components/ui/Footer";
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
