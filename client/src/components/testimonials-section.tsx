import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah White",
      business: "Café 23",
      initials: "SW",
      quote: "ZynloMedia helped us triple our Instagram engagement in just two months! Our foot traffic has increased significantly since starting our social media campaign.",
      bgColor: "bg-soft-blue"
    },
    {
      name: "Mike Johnson",
      business: "Urban Threads",
      initials: "MJ",
      quote: "The content quality is amazing! Our followers went from 500 to 2,000 in just 3 months. The team really understands our brand voice and Brisbane market.",
      bgColor: "bg-bright-orange"
    },
    {
      name: "Lisa Chen",
      business: "Lotus Wellness",
      initials: "LC",
      quote: "Professional, creative, and results-driven. Our booking inquiries increased by 250% after implementing their social media strategy. Highly recommended!",
      bgColor: "bg-soft-blue"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-soft-blue mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="font-montserrat font-bold text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-dark-gray">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </div>
              <div className="text-soft-blue text-4xl mb-4">"</div>
              <p className="text-gray-600 italic leading-relaxed mb-4">
                {testimonial.quote}
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
