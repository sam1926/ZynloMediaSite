import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, animations, createScrollTrigger, createScrollBlur, createMagneticEffect } from "@/lib/gsap-utils";

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !window.gsap) return;
    
    initialized.current = true;

    // Premium hero animations with text reveal
    const heroTimeline = gsap.timeline();
    
    // Title text reveal animation
    gsap.set(".hero-title", { opacity: 1 });
    gsap.set(".hero-title .text-reveal-inner", { y: "100%" });
    
    heroTimeline
      .to(".hero-title .text-reveal-inner", {
        y: "0%",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1
      })
      .from(".hero-subtitle", {
        ...animations.fadeInUp,
        duration: 1,
        y: 40
      }, "-=0.6")
      .from(".hero-cta", {
        ...animations.fadeInUp,
        duration: 0.8,
        y: 30
      }, "-=0.4")
      .from(".hero-image", {
        ...animations.slideInRight,
        duration: 1.5,
        x: 100,
        rotation: 5
      }, "-=1")
      .to(".hero-image", {
        rotation: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");

    // Section titles
    gsap.utils.toArray(".section-title").forEach((title: any) => {
      gsap.from(title, createScrollTrigger(title, animations.fadeInUp));
    });

    // Service cards
    gsap.from(".service-card", createScrollTrigger(".service-card", {
      ...animations.fadeInUp,
      y: 60,
      stagger: 0.2
    }));

    // Portfolio items
    gsap.from(".portfolio-item", createScrollTrigger(".portfolio-item", {
      ...animations.scaleIn,
      stagger: 0.15
    }));

    // About section
    gsap.from(".about-image", createScrollTrigger(".about-image", animations.slideInLeft));
    gsap.from(".about-content", createScrollTrigger(".about-content", animations.slideInRight));

    // Testimonial cards
    gsap.from(".testimonial-card", createScrollTrigger(".testimonial-card", {
      ...animations.fadeInUp,
      y: 80,
      stagger: 0.3
    }));

    // Contact section
    gsap.from(".contact-info", createScrollTrigger(".contact-info", animations.slideInLeft));
    gsap.from(".contact-form", createScrollTrigger(".contact-form", animations.slideInRight));

    // Floating background elements
    gsap.to(".floating-element", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax effects
    gsap.utils.toArray(".floating-element").forEach((element: any, index: number) => {
      gsap.to(element, {
        y: `random(-100, 100)`,
        x: `random(-50, 50)`,
        rotation: `random(-15, 15)`,
        duration: `random(8, 12)`,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateOnHover = (element: HTMLElement, scale = 1.05) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(element, {
      scale,
      duration: 0.3,
      ease: "power2.out"
    });
    return tl;
  };

  const animateButton = (element: HTMLElement) => {
    gsap.to(element, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
  };

  return {
    animateOnHover,
    animateButton
  };
};
