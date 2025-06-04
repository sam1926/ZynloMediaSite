import { Button } from "@/components/ui/button";
import { ExternalLink, Utensils, Shirt, Coffee, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function PortfolioSection() {
  const [, navigate] = useLocation();
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const portfolioItems = [
    {
      icon: Utensils,
      title: "Bella Vista Restaurant",
      result: "+150% engagement in 6 weeks",
      color: "bg-gradient-to-br from-orange-200 to-red-300",
      alt: "Modern restaurant interior campaign",
      description: "Fine dining restaurant specializing in contemporary Australian cuisine with a focus on locally sourced ingredients."
    },
    {
      icon: Shirt,
      title: "Style & Co Boutique", 
      result: "+200 followers in 4 weeks",
      color: "bg-gradient-to-br from-pink-200 to-purple-300",
      alt: "Fashion boutique social media campaign",
      description: "Premium fashion boutique featuring curated collections from emerging Australian designers and international brands."
    },
    {
      icon: Coffee,
      title: "Grind Coffee Co.",
      result: "3x increase in post reach",
      color: "bg-gradient-to-br from-amber-200 to-orange-300",
      alt: "Coffee shop social media campaign",
      description: "Specialty coffee roastery and café serving single-origin beans and artisanal brewing methods in Brisbane's CBD."
    },
    {
      icon: Sparkles,
      title: "Serenity Spa",
      result: "+300% booking inquiries",
      color: "bg-gradient-to-br from-green-200 to-teal-300",
      alt: "Wellness spa social media campaign",
      description: "Luxury wellness spa offering holistic treatments, massage therapy, and beauty services in a tranquil environment."
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            Recent Campaigns
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we've helped Brisbane businesses grow their social media presence and drive real results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <div className={`w-full h-full ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-soft-blue/0 group-hover:bg-soft-blue/90 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <h4 className="font-montserrat font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-sm mb-2">{item.description}</p>
                  <p className="text-sm font-semibold mb-4">{item.result}</p>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span className="text-sm">View Campaign</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/portfolio')}
            className="bg-soft-blue text-white font-montserrat font-semibold px-8 py-4 rounded-2xl hover:bg-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
            size="lg"
          >
            See Full Portfolio
            <ExternalLink className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
