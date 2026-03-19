import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import StickyBar from "@/components/ui/StickyBar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollTop from "@/components/ui/ScrollTop";

export default function Home() {
  return (
    <>
     

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Trust />
        <Projects />
        <CTA />
        <Contact />
        <Footer />
      </main>
<WhatsAppButton />
<ScrollTop />
      {/* Mobile CTA */}
      <StickyBar />
    </>
  );
}