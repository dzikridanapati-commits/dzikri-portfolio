import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { HeroSection } from "@/sections/HeroSection";
import { InfoBar } from "@/sections/InfoBar";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TimelineSection } from "@/sections/TimelineSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <InfoBar />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollIndicator />
    </>
  );
}
