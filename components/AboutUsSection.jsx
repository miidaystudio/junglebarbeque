"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { Sparkles, MapPin, Flame, Leaf, ArrowRight } from "lucide-react";

export default function AboutUsSection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [aboutImgSrc, setAboutImgSrc] = useState("/about-food.png");
  const [fallbackStep, setFallbackStep] = useState(0);

  const fallbacks = [
    "/about-food.jpg",
    "/hero-dish.png",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
  ];

  const handleImageError = () => {
    if (fallbackStep < fallbacks.length) {
      setAboutImgSrc(fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  // Ambient Ember & Botanical Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 700;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 700),
      radius: Math.random() * 2 + 1,
      speedY: -(Math.random() * 0.8 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.4 ? "#e5b567" : "#8e9f93",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // anime.js v4 Scroll & Stagger Animations
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;

            // 1. Text Elements Stagger
            animate(".about-text-anim", {
              translateY: [40, 0],
              opacity: [0, 1],
              delay: stagger(120),
              duration: 1000,
              ease: "outExpo",
            });

            // 2. Metrics Strip Stagger
            animate(".about-metric-item", {
              scale: [0.9, 1],
              opacity: [0, 1],
              delay: stagger(100, { start: 300 }),
              duration: 800,
              ease: "outQuad",
            });

            // 3. Overlapping Image & Floating Badges Elastic Pop
            animate(".about-badge-anim", {
              scale: [0.85, 1],
              translateY: [30, 0],
              opacity: [0, 1],
              delay: stagger(150, { start: 400 }),
              duration: 1200,
              ease: "outElastic(1, .8)",
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#070e0a] text-[#f4ede4] overflow-hidden select-none"
    >
      {/* Background Ambient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT VISUAL STACK (6 Cols): Overlapping Food Image & Floating Stat Badges */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-6">
          
          {/* Overlapping Backdrop Card */}
          <div className="absolute w-[85%] h-[85%] rounded-[40px] bg-gradient-to-tr from-[#16241a] to-[#0d1610] border border-white/10 blur-sm transform -rotate-3 z-0" />

          {/* Main Frameless Food Cutout Stack */}
          <div className="about-badge-anim relative z-10 w-[300px] sm:w-[380px] h-[380px] sm:h-[460px] rounded-[36px] overflow-hidden bg-black/40 border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <Image
              src={aboutImgSrc}
              alt="Jungle Barbeque Culinary Craft"
              fill
              sizes="(max-width: 640px) 300px, 380px"
              className="object-contain transition-transform duration-700 hover:scale-105"
              onError={handleImageError}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Badge 1 (Top Left) */}
          <div className="about-badge-anim absolute top-2 left-0 sm:left-4 z-20 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[#8e9f93]" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              100% Botanical Sanctuary
            </span>
          </div>

          {/* Badge 2 (Middle Right) */}
          <div className="about-badge-anim absolute top-1/2 -right-2 sm:right-2 -translate-y-1/2 z-20 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2">
            <Flame className="h-4 w-4 text-[#e07a2b] animate-pulse" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              7-Course Live Fire Feast
            </span>
          </div>

          {/* Badge 3 (Bottom Left) */}
          <div className="about-badge-anim absolute bottom-2 left-2 sm:left-6 z-20 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#e5b567]" />
            <span className="text-[11px] font-semibold text-white tracking-wide">
              Kandivali West, Mumbai
            </span>
          </div>

        </div>

        {/* RIGHT STORY COLUMN (6 Cols): Editorial Story & Metrics */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-7">
          
          {/* Eyebrow Badge */}
          <div className="about-text-anim opacity-0 inline-flex items-center gap-2 rounded-full border border-[#e5b567]/30 bg-[#121c15]/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#e5b567]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e5b567]">
              OUR BOTANICAL HERITAGE
            </span>
          </div>

          {/* Headline */}
          <h2 className="about-text-anim opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] tracking-tight leading-[1.1]">
            Where Raw Fire Meets <br />
            <span className="italic text-[#e5b567]">Untamed Nature</span>
          </h2>

          {/* Editorial Story */}
          <p className="about-text-anim opacity-0 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
            Jungle Barbeque brings Mumbai an unparalleled casual dining expedition. Set within a lush botanical sanctuary, our live tabletop charcoal grills allow you to sear fresh marinated skewers, artisan kebabs, and farm-fresh delicacies right at your table across a 7-course feast.
          </p>

          {/* 3-Column Metric Strip */}
          <div className="grid grid-cols-3 gap-4 w-full pt-2">
            <div className="about-metric-item opacity-0 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#e5b567] block">Live</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400">Open Flame Pits</span>
            </div>
            <div className="about-metric-item opacity-0 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#e5b567] block">7</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400">Artisan Courses</span>
            </div>
            <div className="about-metric-item opacity-0 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#e5b567] block">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400">Farm-Fresh Cuts</span>
            </div>
          </div>

          {/* Pill CTA Button */}
          <div className="about-text-anim opacity-0 pt-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#e5b567] text-[#070e0a] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl hover:shadow-[#e5b567]/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
