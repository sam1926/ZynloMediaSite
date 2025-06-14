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
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      params.delete("section");
      const newUrl =
        window.location.pathname +
        (params.toString() ? `?${params.toString()}` : "");
      window.history.replaceState(null, "", newUrl);
    }
  }, []);

  useEffect(() => {
    // Set document title for SEO
    document.title = "ZynloMedia | Social Media Marketing Brisbane";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Brisbane's premier social media marketing agency. We help local shops, restaurants, and lifestyle brands grow their Instagram and Facebook presence with custom content and strategic ad campaigns.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
