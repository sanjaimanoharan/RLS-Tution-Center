import { useRef } from "react";
import { BrandedLoader } from "./components/ui/BrandedLoader";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Programs } from "./components/sections/Programs";
import { WhyRls } from "./components/sections/WhyRls";
import { Contact } from "./components/sections/Contact";
import { usePageAnimation } from "./hooks/usePageAnimation";
import { SubjectsSection } from "./components/sections/SubjectsSection";
import { FounderSection } from "./components/sections/FounderSection";
import { ContactCTA } from "./components/sections/ContactCTA";
import { JourneySection } from "./components/sections/JourneySection";
import { FamilySection } from "./components/sections/FamilySection";
import { SchoolsSection } from "./components/sections/SchoolsSection";
import { AwardsSection } from "./components/sections/AwardsSection";
import { VideoSection } from "./components/sections/VideoSection";
import { GallerySection } from "./components/sections/GallerySection";
export default function App() {
  const root = useRef<HTMLDivElement>(null);
  usePageAnimation(root);
  return (
    <div ref={root}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <BrandedLoader />
      <div className="reading-progress" aria-hidden="true" />
      <Header />
      <main id="main-content">
        <Hero />
        <Programs />
        <SubjectsSection />
        <FounderSection />
        <JourneySection />
        <FamilySection />
        <SchoolsSection />
        <AwardsSection />
        <VideoSection />
        <GallerySection />
        <WhyRls />
        <Contact />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
