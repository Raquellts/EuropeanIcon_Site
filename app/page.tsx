import Navbar from "./_shared/components/ui/Navbar";
import HeroSection from "./instituto/_components/HeroSection";
import InstituteSection from "./instituto/_components/InstituteSection";
import MasterSection from "./instituto/_components/MasterSection";
import CeoSection from "./instituto/_components/CeoSection";
import TeamHighlightsSection from "./instituto/_components/TeamHighlightsSection";
import JournalsSection from "./instituto/_components/JournalsSection";
import PartnersSection from "./instituto/_components/PartnersSection";
import WhatsAppButton from "./_shared/components/ui/WhatsAppButton";
import Footer from "./_shared/components/ui/Footer";

export default function Home() {
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
