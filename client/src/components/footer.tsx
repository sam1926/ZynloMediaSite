import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { label: "Instagram", icon: Instagram, href: "#https://www.instagram.com/zynlomedia/" },
   // { label: "Facebook", icon: Facebook, href: "#" },
  //  { label: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Brisbane's premier social media marketing agency, helping local businesses grow their online presence.
            </p>
            <p className="text-gray-400 text-sm">Brisbane, QLD</p>
            <p className="text-gray-400 text-sm">© 2025 ZynloMedia. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-soft-blue transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="font-montserrat font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-soft-blue hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Email:{" "}
              <a
                href="mailto:zylnomedia@gmail.com"
                className="text-soft-blue hover:text-bright-orange transition-colors duration-300"
              >
                zylnomedia@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
