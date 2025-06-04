declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    TextPlugin: any;
  }
}

export const gsap = window.gsap;
export const ScrollTrigger = window.ScrollTrigger;
export const TextPlugin = window.TextPlugin;

// Initialize GSAP plugins
if (typeof window !== 'undefined' && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
}

// Common animation configurations
export const animations = {
  fadeInUp: {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  slideInLeft: {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  },
  
  slideInRight: {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  },
  
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  },
  
  staggerChildren: {
    stagger: 0.2,
    duration: 0.6,
    ease: "power3.out"
  },

  textReveal: {
    y: "100%",
    duration: 1,
    ease: "power3.out"
  },

  magneticHover: {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out"
  },

  premiumFloat: {
    y: -15,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  }
};

// Premium scroll blur effect
export const createScrollBlur = (element: string, intensity = 2) => {
  if (window.gsap && window.ScrollTrigger) {
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        const blur = self.progress * intensity;
        gsap.set(element, {
          filter: `blur(${blur}px)`
        });
      }
    });
  }
};

// Magnetic cursor effect
export const createMagneticEffect = (element: string) => {
  if (window.gsap) {
    const el = document.querySelector(element);
    if (!el) return;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { scale: 1, x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    });

    el.addEventListener('mousemove', (e: any) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
};

// Scroll trigger helper
export const createScrollTrigger = (trigger: string, animation: any) => ({
  ...animation,
  scrollTrigger: {
    trigger,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

// Text animation helper
export const animateText = (element: string, text: string, delay = 0) => {
  if (window.gsap && window.TextPlugin) {
    gsap.to(element, {
      duration: 2,
      text: {
        value: text,
        delimiter: ""
      },
      delay,
      ease: "none"
    });
  }
};

// Floating animation
export const createFloatingAnimation = (elements: string) => {
  if (window.gsap) {
    gsap.to(elements, {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-15, 15)",
      duration: "random(8, 12)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 2,
        from: "random"
      }
    });
  }
};

// Parallax effect
export const createParallax = (element: string, speed = 0.5) => {
  if (window.gsap && window.ScrollTrigger) {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
};
