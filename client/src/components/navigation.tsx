import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Logo from "./logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, navigate] = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavigation = (item: { label: string; id: string; isPage?: boolean }) => {
    if (item.isPage) {
      navigate(`/${item.id}`);
    } else {
      if (window.location.pathname !== '/') {
        navigate(`/?section=${item.id}`);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="nav-link font-montserrat font-semibold text-dark-gray hover:text-soft-blue transition-colors duration-300 relative"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </nav>
  );
}
