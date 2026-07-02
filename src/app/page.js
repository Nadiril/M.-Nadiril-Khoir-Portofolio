import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="py-16 md:py-20" />,
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="py-16 md:py-20" />,
});
const SelectedWorkSection = dynamic(() => import("@/components/SelectedWorkSection"), {
  loading: () => <div className="py-20 md:py-24" />,
});
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  loading: () => <div className="py-16 md:py-20" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="py-16 md:py-20" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-10" />,
});

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
