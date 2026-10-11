import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <div className="py-24 md:py-32" />,
});
const SelectedWorkSection = dynamic(() => import("@/components/SelectedWorkSection"), {
  loading: () => <div className="py-24 md:py-32" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="py-24 md:py-32" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-10" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SelectedWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
