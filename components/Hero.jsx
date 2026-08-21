"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsapSetup";
import { Flame, Calendar, MapPin, Users, Sparkles, Star } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Left column stagger
      tl.fromTo(
        "#hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          "#hero-title span",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          "#hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          "#hero-form",
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.5"
        );

      // Right column circular dish rotation entrance
      gsap.fromTo(
        "#hero-dish-circle",
        { rotate: 180, scale: 0.75, opacity: 0 },
        { rotate: 0, scale: 1, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.3 }
      );

      // Floating badge parallax oscillation
      gsap.to("#floating-badge-1", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("#floating-badge-2", {
        y: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 bg-[#0c120e] text-[#d8c29d]"
    >
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-10 h-[450px] w-[450px] rounded-full bg-[#e07a2b]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-[#8e9f93]/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Luxury Typography & Reservation Bar */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div id="hero-badge" className="inline-flex items-center gap-2 rounded-full border border-[#d8c29d]/30 bg-[#161c18]/80 px-4 py-1.5 backdrop-blur-md">
              <Flame className="h-4 w-4 text-[#e07a2b] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c29d]">
                Fine Dining & Live Charcoal Grill
              </span>
            </div>

            {/* Staggered Serif Title */}
            <h1
              id="hero-title"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              <span className="block">Botanical Sanctuary.</span>
              <span className="block italic text-[#d8c29d]">Wood-Fired Perfection.</span>
            </h1>

            {/* Subtitle */}
            <p id="hero-sub" className="max-w-2xl text-base sm:text-lg text-[#8e9f93] font-light leading-relaxed">
              Immerse your senses in North India&rsquo;s premier luxury dining oasis, featuring tabletop charcoal grills and an opulent 7-course buffet spread.
            </p>

            {/* Rating pill */}
            <div className="flex items-center gap-3 text-xs text-[#d8c29d] font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-[#161c18]/80 px-3.5 py-1.5 rounded-full border border-[#d8c29d]/20 backdrop-blur-md">
                <Star className="h-4 w-4 fill-[#d8c29d] text-[#d8c29d]" />
                <span className="font-bold text-white">4.9 / 5</span> (3,200+ Verified Diners)
              </div>
              <div className="hidden sm:flex items-center gap-2 text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Live Grills Active
              </div>
            </div>

            {/* Glassmorphic Reservation Bar */}
            <div
              id="hero-form"
              className="glass-card relative mt-8 overflow-hidden rounded-3xl p-4 sm:p-5 border border-[#d8c29d]/20 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between text-xs text-[#8e9f93] uppercase tracking-widest font-semibold">
                <span>Quick Table Search</span>
                <span className="text-[#d8c29d]">Instant Confirmation</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {/* Location */}
                <div className="rounded-2xl border border-white/10 bg-[#0c120e]/80 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8e9f93] flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#d8c29d]" /> Outlet
                  </div>
                  <select className="w-full bg-transparent text-xs font-semibold text-white outline-none mt-1 cursor-pointer">
                    <option className="bg-[#0c120e]">Noida Sector 34</option>
                    <option className="bg-[#0c120e]">Connaught Place</option>
                    <option className="bg-[#0c120e]">Gurugram CyberHub</option>
                  </select>
                </div>

                {/* Date */}
                <div className="rounded-2xl border border-white/10 bg-[#0c120e]/80 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8e9f93] flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-[#d8c29d]" /> Date
                  </div>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="w-full bg-transparent text-xs font-semibold text-white outline-none mt-1"
                  />
                </div>

                {/* Guests */}
                <div className="rounded-2xl border border-white/10 bg-[#0c120e]/80 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#8e9f93] flex items-center gap-1">
                    <Users className="h-3 w-3 text-[#d8c29d]" /> Guests
                  </div>
                  <select className="w-full bg-transparent text-xs font-semibold text-white outline-none mt-1 cursor-pointer">
                    <option className="bg-[#0c120e]">2 Guests</option>
                    <option className="bg-[#0c120e]">4 Guests</option>
                    <option className="bg-[#0c120e]">6 Guests</option>
                    <option className="bg-[#0c120e]">8+ Group</option>
                  </select>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenBooking}
                  className="btn-sand flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold uppercase tracking-wider text-[#0c120e] shadow-lg sm:h-full"
                >
                  <Sparkles className="h-4 w-4" /> Reserve Table
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Signature Circular Dish Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] flex items-center justify-center">
              
              {/* Decorative Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#d8c29d]/20 bg-gradient-to-br from-[#d8c29d]/10 via-transparent to-[#e07a2b]/10 blur-xl" />
              <div className="absolute inset-4 rounded-full border border-[#d8c29d]/30 border-dashed animate-spin" style={{ animationDuration: '30s' }} />

              {/* Main Circular Dish Container (#hero-dish-circle) */}
              <div
                id="hero-dish-circle"
                className="relative h-[320px] w-[320px] sm:h-[390px] sm:w-[390px] overflow-hidden rounded-full border-2 border-[#d8c29d]/50 bg-[#161c18] p-3 shadow-2xl"
              >
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
                    alt="Signature Live Charcoal Barbeque Dish"
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 390px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e]/80 via-transparent to-black/20" />
                </div>
              </div>

              {/* Floating Parallax Badge 1 */}
              <div
                id="floating-badge-1"
                className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 rounded-2xl border border-[#d8c29d]/30 bg-[#161c18]/95 p-3.5 shadow-2xl backdrop-blur-xl z-20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e07a2b]/20 text-[#e07a2b]">
                  <Flame className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">450°C Live Coal Bed</div>
                  <div className="text-[10px] text-[#8e9f93]">Tabletop Smoked Skewers</div>
                </div>
              </div>

              {/* Floating Parallax Badge 2 */}
              <div
                id="floating-badge-2"
                className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-3 rounded-2xl border border-[#d8c29d]/30 bg-[#161c18]/95 p-3.5 shadow-2xl backdrop-blur-xl z-20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d8c29d]/20 text-[#d8c29d]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Opulent 7-Course Feast</div>
                  <div className="text-[10px] text-[#8e9f93]">Unlimited Starters to Desserts</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
