import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

import { useGSAPAnimations } from "@/hooks/use-gsap-animations";

export default function Home() {
  useGSAPAnimations();

  useEffect(() => {
    // Set document title for SEO
    document.title = "ZynloMedia | Social Media Marketing Brisbane";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Brisbane's premier social media marketing agency. We help local shops, restaurants, and lifestyle brands grow their Instagram and Facebook presence with custom content and strategic ad campaigns."
      );
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
