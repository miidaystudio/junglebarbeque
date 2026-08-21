"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsapSetup";
import { Calendar, Music, Sparkles } from "lucide-react";

export default function EventsSection({ onOpenBooking }) {
  const containerRef = useRef(null);

  const [eventImgSrc, setEventImgSrc] = useState("/n1.jpg");
  const [fallbackStep, setFallbackStep] = useState(0);

  const fallbacks = [
    "/news-1.png",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  ];

  const handleImageError = () => {
    if (fallbackStep < fallbacks.length) {
      setEventImgSrc(fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  useGSAP(
    () => {
      gsap.from(".events-white-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="events-section"
      className="relative py-24 px-6 md:px-14 lg:px-20 bg-[#0d0f0e] text-[#121212] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Floating White Editorial Card */}
        <div className="events-white-card bg-white text-neutral-900 rounded-[36px] p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.6)] grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Photo: Lively Dining Atmosphere */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] w-full rounded-3xl overflow-hidden bg-[#121212]">
            <Image
              src={eventImgSrc}
              alt="Barbecue Party & Live Music"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Event Badge */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#d4af37] flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Special Gathering
            </div>
          </div>

          {/* Right Side: Event Details */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            <div className="inline-flex items-center space-x-2">
              <span className="font-serif italic text-2xl text-[#d4af37]">Upcoming</span>
              <span className="w-8 h-[1px] bg-[#d4af37]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight leading-tight">
              Barbecue Party | Live Music & Chef Specials
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 font-medium">
                <Calendar className="h-3.5 w-3.5 text-[#d4af37]" /> Every Sat & Sun
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 font-medium">
                <Music className="h-3.5 w-3.5 text-[#d4af37]" /> Live Unplugged Acoustic
              </span>
            </div>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
              Join us every weekend for live acoustic performances, unlimited mocktail coolers, live sizzler counters, and chef-curated seasonal skewered delicacies.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 hover:text-[#d4af37] transition-colors pt-2 cursor-pointer"
            >
              <span>MORE EVENTS</span>
              <span>⟶</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
