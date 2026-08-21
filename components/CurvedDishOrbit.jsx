"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";
import { Flame, ChevronLeft, ChevronRight, Sparkles, Award } from "lucide-react";

const dishes = [
  {
    id: 1,
    course: "Course 01 of 07",
    title: "Live Tabletop Smoked Skewers",
    tagline: "Flame-grilled directly over embedded table charcoal coals",
    chefTag: "Pitmaster Signature",
    spice: "Medium Spicy 🔥",
    img: "/slider-img1.png",
    fallback: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    course: "Course 02 of 07",
    title: "Wood-Fired Tandoori Kebabs",
    tagline: "Clay oven roasted seekh kebabs & charred cottage cheese",
    chefTag: "Tandoori Special",
    spice: "Aromatic Spice",
    img: "/slider-img2.png",
    fallback: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    course: "Course 03 of 07",
    title: "Live Street Chaat Counter",
    tagline: "Custom Pani Puri with 5 botanical infused waters",
    chefTag: "Live Counter",
    spice: "Tangy & Zesty 💥",
    img: "/slider-img3.png",
    fallback: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    course: "Course 04 of 07",
    title: "Gourmet Royal Curries & Dal",
    tagline: "18-hour slow-cooked Jungle Dal Makhani & rich gravy mains",
    chefTag: "Royal Recipe 👑",
    spice: "Rich Creamy",
    img: "/slider-img4.png",
    fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    course: "Course 05 of 07",
    title: "Artisanal Breads & Biryani",
    tagline: "Hot butter garlic naans paired with Dum Mutton Biryani",
    chefTag: "Fresh Tandoori",
    spice: "Desi Ghee Glaze",
    img: "/slider-img5.png",
    fallback: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    course: "Course 06 of 07",
    title: "Botanical Coolers & Mojitos",
    tagline: "Refreshing passionfruit spritzers & crushed mint sodas",
    chefTag: "Unlimited Bar 🍹",
    spice: "Chilled Refreshing",
    img: "/slider-img6.png",
    fallback: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    course: "Course 07 of 07",
    title: "Nitrogen Ice Cream & Desserts",
    tagline: "Live -196°C liquid nitrogen gelato & chocolate fondue",
    chefTag: "Live Nitrogen 🍦",
    spice: "Sweet Finale",
    img: "/slider-img1.png",
    fallback: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CurvedDishOrbit({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // Start at Course 3

  // Interactive WebGL/Canvas Flame Heat Haze & Distortion Ripple
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame;
    let width = 0;
    let height = 0;
    let ripples = [];

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create dynamic flame heat ripples
    const createRipple = (x, y) => {
      ripples.push({
        x: x || width / 2,
        y: y || height / 2 + 20,
        radius: 10,
        maxRadius: 180,
        alpha: 0.8,
        speed: 3.5,
      });
    };

    // Auto trigger ripple when active dish index changes
    createRipple(width / 2, height / 2);

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Render expanding heat haze rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha *= 0.96;

        if (r.radius > r.maxRadius || r.alpha < 0.02) {
          ripples.splice(i, 1);
          continue;
        }

        const grad = ctx.createRadialGradient(r.x, r.y, r.radius * 0.2, r.x, r.y, r.radius);
        grad.addColorStop(0, `rgba(224, 122, 43, ${r.alpha * 0.4})`);
        grad.addColorStop(0.5, `rgba(229, 181, 103, ${r.alpha * 0.25})`);
        grad.addColorStop(1, "rgba(224, 122, 43, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Continuous subtle ambient ember flickering at base
      for (let j = 0; j < 6; j++) {
        const px = width / 2 + (Math.random() - 0.5) * 260;
        const py = height / 2 + (Math.random() - 0.5) * 160;
        const pr = Math.random() * 2.5 + 1;
        const opacity = Math.random() * 0.5 + 0.2;

        ctx.fillStyle = `rgba(224, 122, 43, ${opacity})`;
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, [activeIndex]);

  // GSAP ScrollTrigger Pinned 3D Stage Timeline
  useGSAP(
    () => {
      const totalDishes = dishes.length;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            totalDishes - 1,
            Math.floor(progress * totalDishes)
          );
          setActiveIndex(newIndex);
        },
      });
    },
    { scope: containerRef }
  );

  const prevDish = () => {
    setActiveIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  const nextDish = () => {
    setActiveIndex((prev) => (prev + 1) % dishes.length);
  };

  const activeDish = dishes[activeIndex];

  return (
    <section
      ref={containerRef}
      id="dish-carousel-section"
      className="relative min-h-screen w-full bg-[#070e0a] text-[#f4ede4] overflow-hidden flex flex-col justify-between pt-16 pb-12 select-none"
    >
      {/* Ambient Radial Backlight & Flame Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#e07a2b]/15 via-[#e5b567]/10 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* 1. SECTION HEADER */}
      <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e5b567]/30 bg-[#161c18]/80 px-4 py-1.5 backdrop-blur-md mb-3">
          <Flame className="h-4 w-4 text-[#e07a2b] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#e5b567]">
            THE 7-COURSE EXPEDITION
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
          A Curated Journey <span className="italic text-[#e5b567]">Through the Flames</span>
        </h2>
        <p className="mt-2 text-xs text-neutral-400 font-light">
          Scroll to orbit through our live-fire 7-course buffet ritual.
        </p>
      </div>

      {/* 2. PINNED 3D CURVED CAROUSEL STAGE */}
      <div className="relative z-20 flex-1 flex items-center justify-center my-6">
        {/* Canvas Flame Heat Haze Underlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <canvas ref={canvasRef} className="w-full h-full max-w-4xl max-h-[450px]" />
        </div>

        {/* 3D Perspective Elliptical Orbit Stage */}
        <div
          className="relative w-full max-w-6xl h-[380px] sm:h-[440px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {dishes.map((dish, idx) => {
            const offset = idx - activeIndex;
            const distance = Math.abs(offset);

            // Elliptical 3D positioning calculation
            const angle = offset * (Math.PI / 5);
            const radiusX = typeof window !== "undefined" && window.innerWidth < 640 ? 140 : 280;
            const radiusZ = 200;

            const translateX = Math.sin(angle) * radiusX;
            const translateZ = Math.cos(angle) * radiusZ - radiusZ;
            const rotateY = -angle * (180 / Math.PI) * 0.35;
            const scale = offset === 0 ? 1.22 : Math.max(0.65, 1 - distance * 0.22);
            const opacity = offset === 0 ? 1 : Math.max(0.2, 1 - distance * 0.35);
            const blurValue = offset === 0 ? 0 : Math.min(8, distance * 3);
            const zIndex = 30 - distance * 5;

            return (
              <div
                key={dish.id}
                onClick={() => setActiveIndex(idx)}
                className="absolute cursor-pointer transition-all duration-700 ease-out flex flex-col items-center"
                style={{
                  transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: `blur(${blurValue}px)`,
                  zIndex,
                }}
              >
                {/* Dark Glass Pedestal Glow Ring under Active Card */}
                {offset === 0 && (
                  <div className="absolute -bottom-8 w-48 h-12 rounded-full bg-gradient-to-r from-transparent via-[#e07a2b]/40 to-transparent blur-md animate-pulse" />
                )}

                {/* Floating Dish Image Card (Frameless Cutout) */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]">
                  <Image
                    src={dish.img}
                    alt={dish.title}
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback to high quality stock dish
                      e.currentTarget.srcset = dish.fallback;
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. ACTIVE DISH SPOTLIGHT METADATA & NAV CONTROLS */}
      <div className="relative z-20 max-w-xl mx-auto px-6 text-center space-y-4">
        
        {/* Dynamic Text Fade-In Transition */}
        <div key={activeDish.id} className="space-y-1 animate-fadeIn">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#e5b567]">
            <span className="rounded-full bg-[#e5b567]/15 border border-[#e5b567]/30 px-3 py-0.5 text-[10px] uppercase tracking-widest">
              {activeDish.course}
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-300 text-[11px] font-medium">{activeDish.chefTag}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {activeDish.title}
          </h3>

          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md mx-auto">
            {activeDish.tagline}
          </p>
        </div>

        {/* Navigation Hotspot Controls & CTA */}
        <div className="pt-2 flex items-center justify-center gap-4">
          <button
            onClick={prevDish}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#161c18]/80 text-[#e5b567] hover:bg-[#e5b567] hover:text-[#070e0a] transition-all cursor-pointer shadow-lg"
            aria-label="Previous Course"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={onOpenBooking}
            className="btn-sand rounded-full px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070e0a] shadow-lg cursor-pointer"
          >
            Taste Course {activeDish.course.split(" ")[1]}
          </button>

          <button
            onClick={nextDish}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#161c18]/80 text-[#e5b567] hover:bg-[#e5b567] hover:text-[#070e0a] transition-all cursor-pointer shadow-lg"
            aria-label="Next Course"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
