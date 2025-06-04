import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`fixed bottom-20 right-6 z-40 ${isVisible ? "block" : "hidden"}`}> 
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="ghost"
        className="rounded-full bg-soft-blue text-dark-gray hover:bg-bright-orange"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
