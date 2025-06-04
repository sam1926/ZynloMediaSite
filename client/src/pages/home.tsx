import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import RecentCampaignsSection from "@/components/recent-campaigns-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsChatOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <RecentCampaignsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Popup */}
          {isChatOpen && (
            <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-4">
              <div className="bg-bright-orange text-white p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-montserrat font-semibold">Quick Contact</h3>
                  <p className="text-sm opacity-90">Get in touch with us</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Ready to boost your social media presence? Let's discuss your goals!
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-soft-blue text-white hover:bg-blue-400"
                  >
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('mailto:hello@zynlomedia.com.au')}
                  >
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Chat Button */}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-bright-orange rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-pulse-soft"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
