import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, TrendingUp, Users, Heart } from "lucide-react";
import heroimg from "./heroimg.jpg";
import { Buildings } from "lucide-react";
export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-off-white to-white pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-soft-blue/10 rounded-full blur-xl animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-bright-orange/10 rounded-full blur-lg animate-float-delayed"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-soft-blue/5 rounded-full blur-2xl animate-pulse-soft"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-dark-gray leading-tight mb-6">
              <div className="text-reveal">
                <div className="text-reveal-inner">We Grow Brisbane's</div>
              </div>
              <div className="text-reveal">
                <div className="text-reveal-inner">
                  <span className="text-bright-orange">Shops & Restaurants</span>
                </div>
              </div>
              <div className="text-reveal">
                <div className="text-reveal-inner">on Social Media</div>
              </div>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Content creation, community building, and ad campaigns designed for local brands that want to stand out online.
            </p>
            <div className="hero-cta">
              <Button
                onClick={scrollToContact}
                className="bg-bright-orange text-white font-montserrat font-semibold px-8 py-4 rounded-2xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image relative">
            <div className="relative max-w-md mx-auto">
              {/* Stylized smartphone mockup */}
              <div className="relative bg-dark-gray rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Screen content showing social media interface */}
                  <div className="p-4 space-y-3">
                    {/* Header bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        

<div className="w-8 h-8 p-1 rounded-full bg-soft-blue">
  <Buildings className="w-6 h-6 text-gray-800" />
</div>

                        <div className="text-xs font-semibold">Brisbane</div>
                      </div>
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    </div>
                    {/* Post image placeholder */}
                    <div className="w-full h-40 rounded-xl overflow-hidden">
  <img
    src={heroimg}
    alt="Brisbane"
    className="w-full h-full object-cover"
  />
</div>

                    {/* Engagement metrics */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3 text-red-500 fill-current" />
                          <span>24.7k</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-gray-500" />
                          <span>2300</span>
                        </div>
                      </div>
                      <span className="text-gray-500">2h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating social icons */}
              <div className="absolute -top-6 -right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-float">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-float-delayed">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
