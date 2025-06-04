import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to see results from social media marketing?",
      answer: "While some improvements in engagement can be seen within the first few weeks, significant growth typically occurs within 2-3 months of consistent posting and strategy implementation. We provide monthly reports showing your progress and key metrics."
    },
    {
      question: "What social media platforms do you recommend for Brisbane businesses?",
      answer: "The best platforms depend on your target audience and business type. For most Brisbane businesses, we recommend starting with Instagram and Facebook due to their strong local presence. LinkedIn is excellent for B2B companies, while TikTok works well for younger demographics."
    },
    {
      question: "Do you create all the content in-house or do we need to provide materials?",
      answer: "We handle all content creation including graphics, captions, and video editing. However, we love working with authentic behind-the-scenes content from your business. We'll provide a content brief showing what types of photos and videos work best for your brand."
    },
    {
      question: "How much should a Brisbane business budget for social media marketing?",
      answer: "Our packages start from $800/month for comprehensive social media management. This includes strategy development, content creation, posting, community management, and monthly reporting. We also offer à la carte services for businesses with specific needs."
    },
    {
      question: "Can you help with social media advertising and paid campaigns?",
      answer: "Absolutely! We manage Facebook and Instagram advertising campaigns, including audience targeting, creative development, and performance optimization. Our ad management includes detailed ROI tracking to ensure your advertising budget delivers results."
    },
    {
      question: "What makes your agency different from other social media companies?",
      answer: "Our deep understanding of the Brisbane market sets us apart. We know local trends, peak engagement times, and what resonates with Queensland audiences. Plus, you'll always work directly with our core team, not junior staff or offshore contractors."
    },
    {
      question: "How do you measure success and what reports do you provide?",
      answer: "We track key metrics including follower growth, engagement rates, website traffic from social media, and conversions. You'll receive detailed monthly reports with insights and recommendations, plus access to a client dashboard for real-time performance monitoring."
    },
    {
      question: "What if we already have social media accounts but poor performance?",
      answer: "We specialize in turning around underperforming accounts! We start with a comprehensive audit to identify issues, then implement a strategic recovery plan. Many clients see significant improvements within the first month of our optimized approach."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-blue/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-soft-blue" />
          </div>
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about social media marketing for Brisbane businesses
          </p>
          <div className="w-24 h-1 bg-soft-blue mx-auto rounded-full mt-6"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-montserrat font-semibold text-lg text-dark-gray pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-soft-blue" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to chat about your specific needs.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center bg-soft-blue text-white font-montserrat font-semibold px-8 py-4 rounded-2xl hover:bg-blue-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}