"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import { Flame, Trees, Award, Users, Utensils, Compass, CheckCircle2 } from "lucide-react";

export default function AboutUs({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats counter
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "100+", label: "Fresh Dishes Daily", icon: Utensils },
    { value: "4.9★", label: "3,200+ Diner Reviews", icon: Award },
    { value: "50k+", label: "Happy Diners Hosted", icon: Users },
    { value: "15+", label: "Master BBQ Pitmasters", icon: Flame },
  ];

  return (
    <section id="story" ref={sectionRef} className="relative py-28 bg-[#0B1E13] overflow-hidden">
      {/* Background Parallax Light Effects */}
      <div className="pointer-events-none absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full bg-[#133825]/60 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-[#E07A2B]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="glass-card overflow-hidden rounded-3xl border border-[#E07A2B]/30 bg-[#1A1614] p-3 shadow-2xl">
                <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                    alt="Jungle Barbeque Canopy Interior"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E13] via-transparent to-black/30" />

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#0B1E13]/90 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E07A2B] text-white font-bold">
                        <Trees className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Tropical Canopy Oasis</div>
                        <div className="text-[11px] text-[var(--jb-cream-muted)]">
                          Waterfall acoustics, lush foliage & warm ember mood lighting.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -right-6 hidden sm:block w-56 rounded-2xl border border-white/20 bg-[#1A1614] p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Live Chef Grill"
                  className="h-36 w-full rounded-xl object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-4 py-1.5 text-xs font-bold text-[#E07A2B] uppercase tracking-widest">
              <Compass className="h-4 w-4" /> Our Story & Ambiance
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Where <span className="text-[#E07A2B] italic">Wild Nature</span> Meets Culinary Passion
            </h2>

            <p className="text-base text-[var(--jb-cream-muted)] leading-relaxed">
              Founded with a vision to redefine buffet dining in North India, **Jungle Barbeque** blends the primitive thrill of live tabletop grilling with the refinement of fine dining.
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              Every table features an integrated charcoal grill bed, keeping your starters sizzled at optimal temperature while you enjoy our lush, tropical forest interiors complete with calming waterfall soundscapes and warm golden ambiance.
            </p>

            {/* Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Embedded Tabletop Charcoal Grills",
                "100% Organic & Fresh Marinades",
                "Live Nitrogen Dessert Counter",
                "Spacious Family & Group Seating",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#E07A2B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="btn-ember rounded-2xl px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl"
              >
                Experience the Canopy
              </button>
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl border border-white/10 bg-[#1A1614]/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
        >
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="text-center p-4">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E07A2B]/15 text-[#E07A2B] border border-[#E07A2B]/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white">{st.value}</div>
                <div className="mt-1 text-xs font-medium text-[var(--jb-cream-muted)]">{st.label}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
