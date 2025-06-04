import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const blogPosts = [
    {
      icon: TrendingUp,
      title: "5 Instagram Growth Strategies That Actually Work in 2025",
      excerpt: "Discover the latest techniques successful Brisbane businesses use to organically grow their Instagram following and engagement rates.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Growth Strategy",
      color: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      icon: Users,
      title: "How to Build an Engaged Community Around Your Local Business",
      excerpt: "Learn the art of fostering genuine connections with your audience and turning followers into loyal customers through authentic engagement.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Community Building",
      color: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      icon: BookOpen,
      title: "The Ultimate Guide to Social Media Content Planning",
      excerpt: "Master the art of content calendars, batch creation, and strategic posting schedules to maintain consistent brand presence online.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Content Strategy",
      color: "bg-gradient-to-br from-purple-100 to-purple-200"
    }
  ];

  const quickTips = [
    {
      tip: "Post consistently at optimal times for your Brisbane audience",
      category: "Timing"
    },
    {
      tip: "Use local hashtags to increase discoverability",
      category: "Hashtags"
    },
    {
      tip: "Engage with comments within the first hour of posting",
      category: "Engagement"
    },
    {
      tip: "Share behind-the-scenes content to build authenticity",
      category: "Content"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            Latest Insights & Tips
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay ahead of the curve with our expert insights on social media marketing trends and proven strategies for Brisbane businesses.
          </p>
          <div className="w-24 h-1 bg-soft-blue mx-auto rounded-full mt-6"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`${post.color} p-6 flex items-center justify-center`}>
                <post.icon className="w-12 h-12 text-gray-700" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-soft-blue bg-soft-blue/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="font-montserrat font-bold text-lg text-dark-gray mb-3 group-hover:text-soft-blue transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  
                  <button
                    onClick={scrollToContact}
                    className="text-soft-blue hover:text-bright-orange text-sm font-semibold inline-flex items-center transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-dark-gray mb-4">
              Quick Social Media Tips
            </h3>
            <p className="text-gray-600 text-lg">
              Actionable advice you can implement today to boost your social media performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {quickTips.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-bright-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-bright-orange font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">{item.tip}</p>
                  <span className="text-soft-blue text-sm font-semibold">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={scrollToContact}
              className="bg-soft-blue text-white hover:bg-blue-400 font-montserrat font-semibold px-8 py-4 rounded-2xl"
            >
              Get Personalized Tips for Your Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}