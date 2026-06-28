import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}
