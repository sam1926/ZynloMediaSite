import { Calendar, TrendingUp, Users, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecentCampaignsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const campaigns = [
    {
      client: "The Coffee Collective",
      industry: "Food & Beverage",
      campaign: "Brisbane Coffee Culture Campaign",
      duration: "3 months",
      description: "Launched a comprehensive social media strategy showcasing Brisbane's local coffee culture, featuring behind-the-scenes content, customer stories, and seasonal menu promotions.",
      results: {
        followers: "+2,400",
        engagement: "+180%",
        sales: "+35%",
        reach: "45K"
      },
      highlights: [
        "Created viral coffee brewing tutorial series",
        "Partnered with 8 local Brisbane influencers",
        "Launched #BrisbaneCoffeeStory hashtag campaign",
        "Generated 1.2M impressions in first month"
      ],
      platforms: ["Instagram", "Facebook", "TikTok"],
      color: "from-amber-100 to-orange-200"
    },
    {
      client: "Urban Fitness Brisbane",
      industry: "Health & Fitness",
      campaign: "New Year Transformation Challenge",
      duration: "2 months",
      description: "Developed an engaging fitness challenge campaign targeting Brisbane residents, featuring member transformations, expert tips, and community building initiatives.",
      results: {
        followers: "+1,800",
        engagement: "+220%",
        sales: "+60%",
        reach: "32K"
      },
      highlights: [
        "Achieved 500+ challenge participants",
        "Created 40+ workout tutorial videos",
        "Built active community of 800+ members",
        "Featured in Brisbane fitness blogs"
      ],
      platforms: ["Instagram", "Facebook", "YouTube"],
      color: "from-green-100 to-emerald-200"
    },
    {
      client: "Botanica Home & Garden",
      industry: "Retail & Lifestyle",
      campaign: "Sustainable Living Brisbane",
      duration: "4 months",
      description: "Positioned client as Brisbane's go-to destination for sustainable home and garden solutions through educational content and eco-friendly product showcases.",
      results: {
        followers: "+3,200",
        engagement: "+150%",
        sales: "+45%",
        reach: "68K"
      },
      highlights: [
        "Launched weekly plant care workshops",
        "Created sustainability tip video series",
        "Partnered with eco-conscious Brisbane bloggers",
        "Increased online store traffic by 120%"
      ],
      platforms: ["Instagram", "Facebook", "Pinterest"],
      color: "from-green-100 to-teal-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            Recent Campaign Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Discover how we've helped Brisbane businesses achieve remarkable growth through strategic social media campaigns and authentic community engagement.
          </p>
          <div className="w-24 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        {/* Campaigns Grid */}
        <div className="space-y-16">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${campaign.color} p-8 md:p-12`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-semibold text-gray-700 bg-white/80 px-3 py-1 rounded-full mr-3">
                        {campaign.industry}
                      </span>
                      <div className="flex items-center text-gray-700 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {campaign.duration}
                      </div>
                    </div>
                    
                    <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-dark-gray mb-3">
                      {campaign.client}
                    </h3>
                    
                    <h4 className="font-montserrat font-semibold text-lg text-gray-700 mb-4">
                      {campaign.campaign}
                    </h4>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {campaign.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {campaign.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="text-xs font-semibold text-soft-blue bg-white/80 px-3 py-1 rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 rounded-2xl p-6 text-center">
                      <Users className="w-8 h-8 text-soft-blue mx-auto mb-2" />
                      <div className="font-montserrat font-bold text-2xl text-dark-gray">
                        {campaign.results.followers}
                      </div>
                      <div className="text-sm text-gray-600">New Followers</div>
                    </div>
                    
                    <div className="bg-white/90 rounded-2xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-bright-orange mx-auto mb-2" />
                      <div className="font-montserrat font-bold text-2xl text-dark-gray">
                        {campaign.results.engagement}
                      </div>
                      <div className="text-sm text-gray-600">Engagement Boost</div>
                    </div>
                    
                    <div className="bg-white/90 rounded-2xl p-6 text-center">
                      <Share2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="font-montserrat font-bold text-2xl text-dark-gray">
                        {campaign.results.reach}
                      </div>
                      <div className="text-sm text-gray-600">Monthly Reach</div>
                    </div>
                    
                    <div className="bg-white/90 rounded-2xl p-6 text-center">
                      <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <div className="font-montserrat font-bold text-2xl text-dark-gray">
                        {campaign.results.sales}
                      </div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Campaign Highlights */}
              <div className="p-8 md:p-12">
                <h5 className="font-montserrat font-bold text-lg text-dark-gray mb-6">
                  Key Campaign Highlights
                </h5>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {campaign.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-soft-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageCircle className="w-3 h-3 text-soft-blue" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-dark-gray mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join these successful Brisbane businesses and transform your social media presence into a powerful growth engine.
            </p>
            
            <Button
              onClick={scrollToContact}
              className="bg-soft-blue text-white hover:bg-blue-400 font-montserrat font-semibold px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Campaign Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}