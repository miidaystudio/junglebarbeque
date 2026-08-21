"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const heroSlides = [
  {
    id: "grill",
    category: "GRILL",
    bgText: "GRILL",
    accentColor: "#e5b567",
    glowColor: "rgba(229, 181, 103, 0.22)",
    badge: "01 / LIVE CHARCOAL SKEWERS",
    title: "A Premium & Authentic",
    italicTitle: "Live Charcoal Grill",
    desc: "Experience 7 courses of live tabletop grilling, artisan skewers, and botanical buffet dining in Kandivali West, Mumbai.",
    image: "/hero-dish.png",
    fallbacks: [
      "/r1.png",
      "/r1.jpg",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "smoke",
    category: "SMOKE",
    bgText: "SMOKE",
    accentColor: "#e07a2b",
    glowColor: "rgba(224, 122, 43, 0.22)",
    badge: "02 / 14-HOUR OAK SMOKE",
    title: "Oak Wood Slow Smoked",
    italicTitle: "Artisan Cuts & Skewers",
    desc: "Marinated in wild mountain herbs, slow-smoked for 14 hours over premium oak charcoal coals.",
    image: "/r2.png",
    fallbacks: [
      "/r2.jpg",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "salad",
    category: "SALAD",
    bgText: "SALAD",
    accentColor: "#8e9f93",
    glowColor: "rgba(142, 159, 147, 0.22)",
    badge: "03 / FARM TO TABLE",
    title: "Botanical Herbs & Crisp",
    italicTitle: "Farm-Fresh Greens",
    desc: "Organic micro-greens, cold-pressed olive oil dressings, and roasted seasonal vegetables tossed daily.",
    image: "/r3.png",
    fallbacks: [
      "/r3.jpg",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export default function HeroSection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const dishRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSlide = heroSlides[activeIndex];
  const [imgSrc, setImgSrc] = useState(currentSlide.image);
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleImageError = () => {
    if (fallbackStep < currentSlide.fallbacks.length) {
      setImgSrc(currentSlide.fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  // Trigger anime.js Stagger Animations on Active Index Change
  const triggerAnimeSequences = () => {
    // 1. Text Details Stagger Reveal
    animate(".anime-text-item", {
      translateY: [35, 0],
      opacity: [0, 1],
      delay: stagger(90),
      duration: 800,
      ease: "outExpo",
    });

    // 2. Backdrop Letters Stagger Entrance
    animate(".anime-bg-letter", {
      translateY: [60, 0],
      scale: [0.85, 1],
      opacity: [0, 0.07],
      delay: stagger(50),
      duration: 900,
      ease: "outExpo",
    });

    // 3. Plate Visual Elastic Entrance
    if (dishRef.current) {
      animate(dishRef.current, {
        scale: [0.8, 1],
        rotate: [-12, 0],
        duration: 1200,
        ease: "outElastic(1, .8)",
      });
    }
  };

  // Change Slide Function
  const handleSlideChange = (newIndex) => {
    if (newIndex === activeIndex) return;

    const nextSlide = heroSlides[newIndex];
    setImgSrc(nextSlide.image);
    setFallbackStep(0);
    setActiveIndex(newIndex);
  };

  // Run anime.js animation whenever activeIndex updates
  useEffect(() => {
    triggerAnimeSequences();
  }, [activeIndex]);

  // Automated 3000ms (3s) Auto-Slide Timer with Mouse Hover Pause
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      ref={containerRef}
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-screen bg-[#070e0a] text-[#f4ede4] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Background Ambience Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#122e1e]/40 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070e0a]/50 to-[#070e0a]" />
      </div>

      {/* GIANT BACKGROUND TYPOGRAPHY (Anchored Behind Plate on Right Side with anime.js Stagger Letters) */}
      <div className="absolute top-1/2 right-4 lg:right-12 -translate-y-1/2 pointer-events-none z-0 overflow-hidden text-right hidden sm:block">
        <h1 className="font-serif font-black text-[22vw] text-white tracking-tighter leading-none select-none flex justify-end">
          {currentSlide.bgText.split("").map((letter, idx) => (
            <span
              key={`${currentSlide.id}-${idx}`}
              className="anime-bg-letter inline-block opacity-[0.07]"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* 1. Glass Header Navbar */}
      <header className="nav-header relative z-50 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-6 border-b border-white/[0.05] backdrop-blur-md bg-[#070e0a]/40">
        <a href="#hero" className="flex items-center space-x-3 cursor-pointer">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Jungle Barbeque Logo"
              fill
              className="object-contain"
              priority
              onError={(e) => {
                e.currentTarget.srcset = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80";
              }}
            />
          </div>
          <div className="leading-tight">
            <span
              className="font-serif tracking-[0.25em] text-lg font-semibold block transition-colors duration-500"
              style={{ color: currentSlide.accentColor }}
            >
              JUNGLE
            </span>
            <span className="tracking-[0.35em] text-[9px] text-neutral-400 font-light block">
              BARBEQUE
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.25em] text-neutral-300 font-medium">
          <a href="#hero" className="text-white hover:text-[#e5b567] transition">HOME</a>
          <a href="#our-story-section" className="hover:text-[#e5b567] transition">ABOUT US</a>
          <a href="#menu-flow-section" className="hover:text-[#e5b567] transition">MENU</a>
          <a href="#events-section" className="hover:text-[#e5b567] transition">EVENTS</a>
          <a href="#reservation-section" className="hover:text-[#e5b567] transition">CONTACT</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col space-y-1.5 p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-6 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: currentSlide.accentColor }}
          />
          <span
            className={`h-[2px] w-4 ml-auto transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: currentSlide.accentColor }}
          />
          <span
            className={`h-[2px] w-6 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: currentSlide.accentColor }}
          />
        </button>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#070e0a]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 text-sm uppercase tracking-[0.3em]">
          <a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#our-story-section" onClick={() => setMenuOpen(false)}>ABOUT US</a>
          <a href="#menu-flow-section" onClick={() => setMenuOpen(false)}>MENU</a>
          <a href="#events-section" onClick={() => setMenuOpen(false)}>EVENTS</a>
          <a href="#reservation-section" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>
      )}

      {/* 2. Main Hero Grid */}
      <div className="relative z-20 flex-1 grid lg:grid-cols-12 gap-12 items-center px-6 sm:px-12 lg:px-20 py-12 max-w-7xl mx-auto w-full">
        
        {/* LEFT SIDE: Headline, Badge, Subtitle & Action Controls */}
        <div className="lg:col-span-6 flex flex-col items-start text-left max-w-xl">
          
          {/* Badge Pill */}
          <div className="anime-text-item inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
            <span
              className="w-2 h-2 rounded-full mr-2.5 animate-pulse"
              style={{ backgroundColor: currentSlide.accentColor }}
            />
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-300 font-semibold">
              {currentSlide.badge}
            </span>
          </div>

          {/* Two-Line Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.1] mb-6">
            <span className="anime-text-item block text-neutral-100 font-light tracking-wide">
              {currentSlide.title}
            </span>
            <span
              className="anime-text-item block italic tracking-tight transition-colors duration-500"
              style={{ color: currentSlide.accentColor }}
            >
              {currentSlide.italicTitle}
            </span>
          </h1>

          {/* Concise Description */}
          <p className="anime-text-item text-neutral-300 text-xs sm:text-sm md:text-base font-light mb-10 leading-relaxed max-w-lg">
            {currentSlide.desc}
          </p>

          {/* Action Row: CTA Button & Slide Arrow Triggers */}
          <div className="anime-text-item flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] text-[#070e0a] hover:bg-white transition-all duration-300 shadow-2xl hover:-translate-y-0.5 cursor-pointer"
              style={{ backgroundColor: currentSlide.accentColor }}
            >
              <span>ORDER NOW / RESERVE</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  handleSlideChange((activeIndex - 1 + heroSlides.length) % heroSlides.length)
                }
                className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition hover:bg-white/10 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSlideChange((activeIndex + 1) % heroSlides.length)}
                className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/30 flex items-center justify-center text-white transition hover:bg-white/10 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Bottom Category Selector Tabs */}
          <div className="anime-text-item flex items-center space-x-4 pt-8">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSlideChange(idx)}
                className={`text-[11px] font-mono uppercase tracking-[0.25em] px-4 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-white/10 border-white/30 text-white font-bold"
                    : "border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                {slide.category}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE: Clean Circular Platter & Dynamic Ambient Radial Wash */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-6">
          
          {/* Dynamic Radial Ambient Glow Wash */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-[140px] transition-all duration-1000 pointer-events-none"
            style={{ backgroundColor: currentSlide.glowColor }}
          />

          {/* Clean Circular Food Platter Frame (anime-plate) */}
          <div
            ref={dishRef}
            onClick={onOpenBooking}
            className="anime-plate relative w-[300px] sm:w-[400px] lg:w-[460px] h-[300px] sm:h-[400px] lg:h-[460px] rounded-full overflow-hidden border-2 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-black/40 z-10 cursor-pointer group"
          >
            <Image
              src={imgSrc}
              alt={currentSlide.title}
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 460px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={handleImageError}
            />
            {/* Soft Radial Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Bottom Border Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </section>
  );
}
