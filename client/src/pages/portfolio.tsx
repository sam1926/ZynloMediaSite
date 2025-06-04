import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Utensils, Shirt, Coffee, Sparkles, Camera, Users, TrendingUp, Calendar, Target, Award } from "lucide-react";
import { useLocation } from "wouter";
import ScrollToTopButton from "@/components/scroll-to-top-button";

export default function Portfolio() {
  const [, navigate] = useLocation();
  useGSAPAnimations();

  useEffect(() => {
    document.title = "Portfolio | ZynloMedia - Brisbane Social Media Success Stories";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Explore our successful social media campaigns for Brisbane businesses. See how ZynloMedia has helped restaurants, boutiques, cafes, and spas grow their online presence with proven results."
      );
    }
  }, []);

  const portfolioItems = [
    {
      icon: Utensils,
      title: "Bella Vista Restaurant",
      subtitle: "Fine Dining Excellence",
      result: "+150% engagement in 6 weeks",
      color: "bg-gradient-to-br from-orange-200 to-red-300",
      description: "Fine dining restaurant specializing in contemporary Australian cuisine with a focus on locally sourced ingredients.",
      challenge: "Low social media presence and difficulty showcasing their premium dining experience online.",
      solution: "Created sophisticated visual content highlighting their chef's artistry and dining ambiance.",
      results: [
        "150% increase in Instagram engagement",
        "2,500 new followers in 6 weeks",
        "25% boost in weekend reservations",
        "Featured in Brisbane food bloggers' top 10 lists"
      ],
      duration: "6 weeks",
      platforms: ["Instagram", "Facebook"]
    },
    {
      icon: Shirt,
      title: "Style & Co Boutique",
      subtitle: "Fashion Forward",
      result: "+200 followers in 4 weeks",
      color: "bg-gradient-to-br from-pink-200 to-purple-300",
      description: "Premium fashion boutique featuring curated collections from emerging Australian designers and international brands.",
      challenge: "Competing with larger fashion retailers and building brand awareness in a saturated market.",
      solution: "Developed a unique brand voice focusing on sustainable fashion and personal styling advice.",
      results: [
        "200+ new qualified followers",
        "40% increase in online sales",
        "Building a community of fashion enthusiasts",
        "Partnerships with local influencers"
      ],
      duration: "4 weeks",
      platforms: ["Instagram", "TikTok"]
    },
    {
      icon: Coffee,
      title: "Grind Coffee Co.",
      subtitle: "Artisan Coffee Culture",
      result: "3x increase in post reach",
      color: "bg-gradient-to-br from-amber-200 to-orange-300",
      description: "Specialty coffee roastery and café serving single-origin beans and artisanal brewing methods in Brisbane's CBD.",
      challenge: "Standing out in Brisbane's competitive coffee scene and educating customers about specialty coffee.",
      solution: "Created educational content about coffee origins and brewing techniques while showcasing the café culture.",
      results: [
        "300% increase in post reach",
        "Daily coffee education series went viral",
        "35% increase in foot traffic",
        "Established as local coffee authority"
      ],
      duration: "8 weeks",
      platforms: ["Instagram", "Facebook", "TikTok"]
    },
    {
      icon: Sparkles,
      title: "Serenity Spa",
      subtitle: "Wellness & Beauty",
      result: "+300% booking inquiries",
      color: "bg-gradient-to-br from-green-200 to-teal-300",
      description: "Luxury wellness spa offering holistic treatments, massage therapy, and beauty services in a tranquil environment.",
      challenge: "Building trust for personal wellness services and showcasing the spa experience online.",
      solution: "Created calming, aspirational content focusing on wellness benefits and client testimonials.",
      results: [
        "300% increase in booking inquiries",
        "Waitlist for popular treatments",
        "Strong community of wellness enthusiasts",
        "Partnerships with wellness influencers"
      ],
      duration: "12 weeks",
      platforms: ["Instagram", "Facebook"]
    },
    {
      icon: Camera,
      title: "Snap Photography Studio",
      subtitle: "Professional Photography",
      result: "+250% website traffic",
      color: "bg-gradient-to-br from-purple-200 to-indigo-300",
      description: "Professional photography studio specializing in portraits, events, and commercial photography in Brisbane.",
      challenge: "Showcasing photography skills and attracting high-value clients in a competitive market.",
      solution: "Built a strong visual portfolio on social media while sharing behind-the-scenes content and photography tips.",
      results: [
        "250% increase in website traffic",
        "Booked solid for 3 months ahead",
        "Premium package bookings increased 180%",
        "Featured photographer for major Brisbane events"
      ],
      duration: "10 weeks",
      platforms: ["Instagram", "LinkedIn", "Facebook"]
    },
    {
      icon: Users,
      title: "FitLife Gym",
      subtitle: "Fitness & Wellness",
      result: "+400 new members",
      color: "bg-gradient-to-br from-blue-200 to-cyan-300",
      description: "Modern fitness center offering personal training, group classes, and wellness programs for all fitness levels.",
      challenge: "Competing with large gym chains and motivating people to start their fitness journey.",
      solution: "Created motivational content, success stories, and educational fitness tips to build a supportive community.",
      results: [
        "400+ new gym memberships",
        "Fitness challenge participation up 500%",
        "Strong online fitness community",
        "Personal training bookings increased 200%"
      ],
      duration: "16 weeks",
      platforms: ["Instagram", "Facebook", "TikTok"]
    }
  ];

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-off-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="mb-8 inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-dark-gray mb-6">
                Our Success Stories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped Brisbane businesses transform their social media presence and achieve remarkable growth through strategic content and community building.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className={`portfolio-item group relative rounded-3xl overflow-hidden shadow-xl ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex lg:items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className={`aspect-video lg:aspect-square ${item.color} flex items-center justify-center p-12`}>
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <item.icon className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-lg">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="mb-6">
                      <h4 className="font-montserrat font-bold text-2xl text-dark-gray mb-4">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h5 className="font-montserrat font-semibold text-lg text-dark-gray mb-3">
                          Challenge
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-montserrat font-semibold text-lg text-dark-gray mb-3">
                          Solution
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h5 className="font-montserrat font-semibold text-lg text-dark-gray mb-4">
                        Key Results
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <Award className="w-4 h-4 text-bright-orange mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{item.platforms.join(', ')}</span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={scrollToContact}
                        className="bg-soft-blue text-white hover:bg-blue-400 inline-flex items-center"
                      >
                        Start Your Success Story
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-soft-blue to-blue-400">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a custom social media strategy that delivers real results for your Brisbane business.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-bright-orange text-white hover:bg-orange-600 font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg"
            >
              Get Your Free Strategy Session
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}