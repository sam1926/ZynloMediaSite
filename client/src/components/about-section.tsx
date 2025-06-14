import { ArrowRight, Users, Rocket } from "lucide-react";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white flex items-center snap-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="about-image text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 bg-gradient-to-br from-soft-blue/20 to-bright-orange/20 rounded-full border-4 border-soft-blue shadow-xl flex items-center justify-center">
                <Users className="w-32 h-32 text-soft-blue" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-bright-orange text-white p-4 rounded-full shadow-lg">
                <Rocket className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content text-center lg:text-left">
            <h2 className="section-title font-montserrat font-bold text-3xl md:text-4xl text-dark-gray mb-6">
              Hi, We're <span className="text-bright-orange">ZynloMedia</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We're a small, dedicated team of social media strategists and
              content creators based in Brisbane. Our mission is to help local
              shops, restaurants, and lifestyle brands build meaningful online
              communities that drive real business growth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over 5 years of experience in the Brisbane market, we
              understand what resonates with local audiences. We don't just
              create pretty posts – we craft strategic content that converts
              followers into customers.
            </p>

            {/* Team Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-soft-blue/20 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-soft-blue font-bold text-lg">1</span>
                </div>
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Local Focus
                </h4>
                <p className="text-gray-600 text-sm">
                  Deep understanding of Brisbane's unique market and customer
                  behaviors
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-bright-orange/20 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-bright-orange font-bold text-lg">
                    2
                  </span>
                </div>
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Data-Driven
                </h4>
                <p className="text-gray-600 text-sm">
                  Every strategy backed by analytics and measurable results
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-soft-blue/20 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-soft-blue font-bold text-lg">3</span>
                </div>
                <h4 className="font-montserrat font-semibold text-dark-gray mb-2">
                  Personal Touch
                </h4>
                <p className="text-gray-600 text-sm">
                  Dedicated account management with direct access to our team
                </p>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center text-bright-orange font-montserrat font-semibold text-lg hover:text-orange-600 transition-colors duration-300"
            >
              Meet the Team
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
