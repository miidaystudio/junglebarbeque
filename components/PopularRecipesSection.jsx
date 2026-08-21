"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";
import { Sparkles, ArrowRight, Clock, Award, Flame } from "lucide-react";

const recipes = [
  {
    id: "01",
    tab: "01 / Breakfast",
    category: "Breakfast",
    timeSlot: "08:00 AM – 11:30 AM",
    title: "Mediterranean Artisan Bowl",
    tagline: "Sunrise Power & Garden Greens",
    description:
      "Handmade twisted pasta, shredded rustic chicken, fresh garden greens, and house-blended creamy herb dressing.",
    tastingNotes: "Citrus zests • Organic Micro-greens • Aged Parmigiano",
    image: "/r1.png",
    fallbacks: [
      "/r1.jpg",
      "/recipe-1.png",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    ],
    highlightTag: "Morning Energy",
  },
  {
    id: "02",
    tab: "02 / Lunch",
    category: "Lunch",
    timeSlot: "12:30 PM – 04:00 PM",
    title: "Wood-Fired Salmon & Quinoa Feast",
    description:
      "Charcoal-seared wild salmon steak served with crisp avocado, toasted pita crisps, roasted cauliflower, and refreshing pomegranate cooler.",
    tastingNotes: "Smoky Char • Pomegranate Arils • Wild Sea Salt",
    image: "/r2.png",
    fallbacks: [
      "/r2.jpg",
      "/recipe-2.png",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    ],
    highlightTag: "Chef's Signature",
  },
  {
    id: "03",
    tab: "03 / Dinner",
    category: "Dinner",
    timeSlot: "07:00 PM – 11:30 PM",
    title: "Herb-Crusted Smoked Tenderloin Salad",
    description:
      "Flame-kissed tenderloin cutlet laid over organic arugula, vine-ripened cherry tomatoes, bell peppers, and extra virgin olive oil drizzle.",
    tastingNotes: "Tenderloin Sear • Rosemary Smoke • Balsamic Glaze",
    image: "/r3.png",
    fallbacks: [
      "/r3.jpg",
      "/recipe-3.png",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    ],
    highlightTag: "Live Fire Special",
  },
];

function DishImage({ item, isActive, isPeeking }) {
  const [imageSrc, setImageSrc] = useState(item.image);
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleImageError = () => {
    if (fallbackStep < item.fallbacks.length) {
      setImageSrc(item.fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
        onError={handleImageError}
        priority={item.id === "01"}
      />
    </div>
  );
}

export default function PopularRecipesSection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const activeCardRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Dedicated Section Background Canvas (Heat Distortion & Floating Smoke Swirls)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 800;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawHaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.012;

      // Soft golden smoke ribbons
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const yOffset = canvas.height * 0.35 + i * 90;
        ctx.moveTo(0, yOffset);

        for (let x = 0; x < canvas.width; x += 25) {
          const wave =
            Math.sin(x * 0.0025 + step + i * 1.2) * 40 +
            Math.cos(x * 0.0018 - step * 0.4) * 25;
          ctx.lineTo(x, yOffset + wave);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, yOffset - 60, 0, canvas.height);
        gradient.addColorStop(0, `rgba(229, 181, 103, ${0.03 + i * 0.012})`);
        gradient.addColorStop(1, "rgba(8, 19, 12, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animId = requestAnimationFrame(drawHaze);
    };

    drawHaze();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. GSAP ScrollTrigger Pinning & Scrub Timeline
  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            recipes.length - 1,
            Math.floor(progress * recipes.length)
          );
          setActiveIndex(newIndex);
        },
      });
    },
    { scope: containerRef }
  );

  // 3. Interactive 3D Mouse Parallax with GSAP quickTo
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card._xTo = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
    card._yTo = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    if (card._xTo) card._xTo(rotateY);
    if (card._yTo) card._yTo(rotateX);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    if (card._xTo) card._xTo(0);
    if (card._yTo) card._yTo(0);
  };

  const activeRecipe = recipes[activeIndex];

  return (
    <section
      ref={containerRef}
      id="popular-recipes"
      className="relative min-h-screen w-full bg-[#08130c] text-[#f4ede4] overflow-hidden flex flex-col justify-center py-20 px-6 md:px-14 lg:px-20 select-none"
    >
      {/* Background Heat Haze Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Radial Backlight Wash */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-[#e5b567]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN (40% Width): Course Selector, Text & Metadata */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e5b567]/30 bg-[#121c15]/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#e07a2b] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#e5b567]">
              CURATED EXPEDITION
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#f4ede4] tracking-tight leading-[1.1]">
            OUR BEST <br />
            <span className="italic text-[#e5b567]">POPULAR RECIPES</span>
          </h2>

          {/* Live Course Selector Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-white/10 w-full pb-4">
            {recipes.map((recipe, idx) => (
              <button
                key={recipe.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-[#e5b567] text-[#08130c] shadow-lg scale-105"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/5"
                }`}
              >
                {recipe.tab}
              </button>
            ))}
          </div>

          {/* Dynamic Active Course Text Panel */}
          <div key={activeRecipe.id} className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e5b567] bg-[#e5b567]/10 px-3 py-1 rounded-full border border-[#e5b567]/20">
                {activeRecipe.highlightTag}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                <Clock className="h-3.5 w-3.5 text-[#e5b567]" /> {activeRecipe.timeSlot}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
              {activeRecipe.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-md">
              {activeRecipe.description}
            </p>

            {/* Tasting Notes */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-neutral-400 font-mono flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#e07a2b]" />
              <span>Tasting Notes: {activeRecipe.tastingNotes}</span>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#e5b567] text-[#08130c] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>EXPLORE FULL 7-COURSE MENU</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (60% Width): Cinematic 3D Floating Gallery Showcase */}
        <div className="lg:col-span-7 relative h-[440px] sm:h-[520px] w-full flex items-center justify-center" style={{ perspective: "1000px" }}>
          {recipes.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            const isNext = idx === (activeIndex + 1) % recipes.length;
            const isPrev = idx === (activeIndex - 1 + recipes.length) % recipes.length;

            let transformStyle = "";
            let opacity = 0.2;
            let zIndex = 0;

            if (isCurrent) {
              transformStyle = "translate3d(0, 0, 0) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 30;
            } else if (isNext) {
              transformStyle = "translate3d(60px, -20px, -100px) rotateY(-12deg) scale(0.88)";
              opacity = 0.5;
              zIndex = 20;
            } else {
              transformStyle = "translate3d(-60px, 20px, -160px) rotateY(12deg) scale(0.8)";
              opacity = 0.3;
              zIndex = 10;
            }

            return (
              <div
                key={item.id}
                ref={isCurrent ? activeCardRef : null}
                onMouseEnter={isCurrent ? handleMouseEnter : null}
                onMouseMove={isCurrent ? handleMouseMove : null}
                onMouseLeave={isCurrent ? handleMouseLeave : null}
                onClick={() => setActiveIndex(idx)}
                className="absolute inset-0 m-auto w-[320px] sm:w-[420px] h-[380px] sm:h-[460px] rounded-[36px] overflow-hidden bg-[#121c15]/70 backdrop-blur-xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out cursor-pointer group"
                style={{
                  transform: transformStyle,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image Showcase */}
                <div className="relative w-full h-full">
                  <DishImage item={item} isActive={isCurrent} isPeeking={!isCurrent} />
                  
                  {/* Soft Inner Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08130c] via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Course Badge */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#e5b567]">
                      {item.category}
                    </span>
                  </div>

                  {/* Active Card Bottom Overlay */}
                  {isCurrent && (
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-between z-20">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#e5b567] font-semibold block">
                          Featured Preparation
                        </span>
                        <p className="text-xs font-serif text-white truncate max-w-[200px]">
                          {item.title}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#e5b567] text-[#08130c] flex items-center justify-center font-bold text-xs shadow-lg">
                        ➜
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
