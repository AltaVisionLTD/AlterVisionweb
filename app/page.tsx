import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import WhoWeAreSection from "./components/sections/WhoWeAreSection";
import MissionVisionSection from "./components/sections/MissionVisionSection";
import WhoWeWorkWithSection from "./components/sections/WhoWeWorkWithSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProductsSection from "./components/sections/ProductsSection";
import TeamSection from "./components/sections/TeamSection";
import CTASection from "./components/sections/CTASection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-white text-neutral-dark">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <MissionVisionSection />
        <WhoWeWorkWithSection />
        <ServicesSection />
        <ProductsSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}