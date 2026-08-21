"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";

export default function OurStorySection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [storyImgSrc, setStoryImgSrc] = useState("/about-food.png");
  const [fallbackStep, setFallbackStep] = useState(0);

  const fallbacks = [
    "/about-food.jpg",
    "/hero-dish.png",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  ];

  const handleImageError = () => {
    if (fallbackStep < fallbacks.length) {
      setStoryImgSrc(fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  // Local Wispy Steam & Grill Smoke Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 400;
      height = canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    resize();
    window.addEventListener("resize", resize);

    const smokePuffs = Array.from({ length: 25 }, () => ({
      x: width * 0.5 + (Math.random() - 0.5) * width * 0.6,
      y: height * 0.8 + Math.random() * height * 0.2,
      radius: Math.random() * 25 + 15,
      speedY: -(Math.random() * 0.8 + 0.4),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      smokePuffs.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.radius += 0.15;
        p.alpha *= 0.99;

        if (p.y < 0 || p.alpha < 0.02) {
          p.y = height * 0.85;
          p.x = width * 0.5 + (Math.random() - 0.5) * width * 0.6;
          p.radius = Math.random() * 20 + 10;
          p.alpha = Math.random() * 0.3 + 0.1;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, p.radius * 0.1, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.6})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP Entry Scrub Animation
  useGSAP(
    () => {
      gsap.from(".story-white-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="our-story-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#0d0f0e] text-[#121212] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Pure White Editorial Card */}
        <div className="story-white-card bg-white text-neutral-900 rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.6)] grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Live Charcoal Smoke & Grill Action Photo */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] w-full rounded-3xl overflow-hidden bg-[#121212]">
            <Image
              src={storyImgSrc}
              alt="Live Charcoal Skewers & Smoke"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              onError={handleImageError}
            />
            {/* Wispy Rising Steam/Smoke Overlay Canvas */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <canvas ref={canvasRef} className="w-full h-full opacity-80" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Clean White Editorial Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Script Sub-header */}
            <div className="inline-flex items-center space-x-2">
              <span className="font-serif italic text-2xl text-[#d4af37]">Discover</span>
              <span className="w-8 h-[1px] bg-[#d4af37]" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">
              Our Story
            </h2>

            {/* Heritage Text */}
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
              Founded in Kandivali West, Mumbai, Jungle Barbeque was born out of a passion for authentic open-flame cooking and immersive botanical dining. Our signature 7-course feast brings live tabletop grills directly to your table, pairing raw oak wood smoke with farm-fresh cuts and artisanal marinades.
            </p>

            <p className="text-neutral-500 text-xs leading-relaxed font-light hidden sm:block">
              Every dish tells a story of live charcoal heat, handcrafted mountain spices, and uncompromised culinary excellence.
            </p>

            {/* Minimal Link */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#d4af37] transition-colors pt-2 cursor-pointer"
            >
              <span>MORE ABOUT US</span>
              <span>⟶</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
