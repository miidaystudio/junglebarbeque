"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ananya & Rahul Roy",
    role: "Food Critics & Local Diners",
    outlet: "Logix Mall, Noida Sector 34",
    rating: 5,
    comment:
      "Hands down the best live tabletop buffet experience in Noida! The Smoked Angara Chicken and Mutton Galouti were divine. Loved the nitrogen dessert show!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    date: "Aug 2026",
  },
  {
    id: 2,
    name: "Karan Malhotra",
    role: "Corporate Group Lead",
    outlet: "Cyber Hub, Gurugram",
    rating: 5,
    comment:
      "Hosted our 25-person team dinner here. The ambiance feels like a real tropical rainforest, and the endless stream of hot skewers right at our table was a huge hit!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    date: "Jul 2026",
  },
  {
    id: 3,
    name: "Dr. Meera Vasudevan",
    role: "Family Celebration",
    outlet: "Connaught Place, Delhi",
    rating: 5,
    comment:
      "Celebrated my parents' 30th anniversary at Jungle Barbeque. The live Chaat counter and the Wood-fired Paneer Tikka were unbelievable. Outstanding hospitality!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    date: "Aug 2026",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={containerRef} className="relative py-24 bg-[#1A1614] overflow-hidden">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute top-1/2 right-10 h-80 w-80 -translate-y-1/2 rounded-full bg-[#E07A2B]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-4 py-1.5 text-xs font-bold text-[#E07A2B] uppercase tracking-widest mb-3">
            <Quote className="h-3.5 w-3.5" /> Diner Stories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Loved by <span className="text-[#E07A2B] italic">Food Lovers</span> Across NCR
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-amber-400 font-bold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-white">4.9 / 5 Rating from over 3,200+ Diners</span>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="glass-card relative overflow-hidden rounded-3xl border border-white/15 bg-[#0B1E13]/90 p-8 sm:p-12 shadow-2xl text-left">
          
          <Quote className="absolute right-8 top-8 h-20 w-20 text-white/5" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-[#E07A2B] p-1 shadow-xl">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#E07A2B] text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="font-display text-lg sm:text-xl font-medium italic text-[var(--jb-cream)] leading-relaxed">
                &ldquo;{active.comment}&rdquo;
              </p>

              <div>
                <div className="font-display text-lg font-bold text-white">{active.name}</div>
                <div className="text-xs text-[#E07A2B] font-semibold">{active.role}</div>
                <div className="text-[11px] text-white/50 mt-0.5">
                  Verified Diner at {active.outlet} ({active.date})
                </div>
              </div>
            </div>

          </div>

          {/* Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-[#E07A2B]" : "w-2.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-[#E07A2B] transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-[#E07A2B] transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
