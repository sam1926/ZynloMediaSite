import { Camera, Users, Megaphone, ArrowRight, BarChart3, Target, Zap, TrendingUp, MessageSquare, Video } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Camera,
      title: "Social Content Creation",
      description: "Custom Instagram & Facebook posts, stories, and reels to showcase your brand's personality and engage your audience.",
      features: [
        "15-30 custom posts per month",
        "Instagram Stories & Reels",
        "Professional graphic design",
        "Caption writing & hashtag research",
        "Content calendar planning"
      ],
      startingPrice: "800"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Engage with your followers, respond to comments, and foster a loyal community that drives real business results.",
      features: [
        "Daily comment monitoring",
        "DM response management",
        "Community engagement strategy",
        "Crisis communication support",
        "Monthly engagement reports"
      ],
      startingPrice: "600"
    },
    {
      icon: Megaphone,
      title: "Paid Ad Campaigns",
      description: "Strategic Facebook & Instagram ads to drive traffic, increase sales, and grow your customer base with targeted precision.",
      features: [
        "Campaign strategy & setup",
        "Audience targeting research",
        "Ad creative development",
        "Performance optimization",
        "Detailed ROI reporting"
      ],
      startingPrice: "1200"
    },
    {
      icon: BarChart3,
      title: "Social Media Analytics",
      description: "Comprehensive performance tracking and insights to optimize your social media strategy with data-driven decisions.",
      features: [
        "Monthly performance reports",
        "Audience insights analysis",
        "Competitor benchmarking",
        "ROI tracking & measurement",
        "Growth strategy recommendations"
      ],
      startingPrice: "400"
    },
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "Develop a compelling brand voice and visual identity that resonates with your Brisbane audience and stands out.",
      features: [
        "Brand voice development",
        "Visual identity guidelines",
        "Content style guide",
        "Competitive analysis",
        "Brand positioning strategy"
      ],
      startingPrice: "1500"
    },
    {
      icon: Video,
      title: "Video Content Production",
      description: "Professional video content including reels, stories, and promotional videos that capture attention and drive engagement.",
      features: [
        "4-8 videos per month",
        "Script writing & storyboarding",
        "Professional editing",
        "Motion graphics & animation",
        "Multi-platform optimization"
      ],
      startingPrice: "1000"
    },
    {
      icon: MessageSquare,
      title: "Influencer Partnerships",
      description: "Connect with Brisbane influencers and content creators to expand your reach and build authentic brand partnerships.",
      features: [
        "Influencer research & outreach",
        "Partnership negotiation",
        "Campaign management",
        "Performance tracking",
        "Relationship management"
      ],
      startingPrice: "800"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy & Consulting",
      description: "Strategic consulting to accelerate your social media growth with proven techniques and industry best practices.",
      features: [
        "Monthly strategy sessions",
        "Growth audit & recommendations",
        "Platform optimization",
        "Trend analysis & implementation",
        "Performance goal setting"
      ],
      startingPrice: "500"
    },
    {
      icon: Zap,
      title: "Crisis Management & Reputation",
      description: "Protect and enhance your online reputation with proactive monitoring and rapid response strategies.",
      features: [
        "24/7 reputation monitoring",
        "Crisis response planning",
        "Negative review management",
        "Brand sentiment tracking",
        "Recovery strategy implementation"
      ],
      startingPrice: "700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="service-icon w-16 h-16 bg-soft-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-bright-orange/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-soft-blue group-hover:text-bright-orange transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-dark-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={scrollToContact}
                    className="learn-more-link inline-flex items-center text-soft-blue hover:text-bright-orange font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    From ${service.startingPrice}/mo
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-soft-blue to-blue-400 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
              Proven Results for Brisbane Businesses
            </h3>
            <p className="text-lg opacity-90">
              Our data-driven approach delivers measurable growth across all social platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">150+</div>
              <div className="text-sm md:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">2.5M+</div>
              <div className="text-sm md:text-base opacity-90">Followers Gained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">85%</div>
              <div className="text-sm md:text-base opacity-90">Avg. Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">5+</div>
              <div className="text-sm md:text-base opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
