"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapSetup";

const ingredients = [
  { id: 1, name: "Fresh Rosemary", icon: "🌿", tag: "Organic Herb" },
  { id: 2, name: "Olive Oil Spoon", icon: "🫒", tag: "Cold-Pressed" },
  { id: 3, name: "Prime Cut Steak", icon: "🥩", tag: "Farm Sourced" },
  { id: 4, name: "Mountain Spices", icon: "🫘", tag: "Hand Ground" },
  { id: 5, name: "Garlic Cloves", icon: "🧄", tag: "Charcoal Roasted" },
  { id: 6, name: "Red Bell Pepper", icon: "🫑", tag: "Wood Fired" },
];

export default function IngredientsSection({ onOpenBooking }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Staggered drop-in bounce
      gsap.from(".ingredient-item-card", {
        scrollTrigger: {
          trigger: "#ingredient-strip",
          start: "top 80%",
        },
        scale: 0,
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        ease: "back.out(1.4)",
      });

      // Subtle float animation
      const items = gsap.utils.toArray(".ingredient-item-card");
      items.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? -8 : 8,
          duration: 2.5 + (i % 3) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="ingredients-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#121212] text-[#f4ede4] overflow-hidden select-none border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="font-serif italic text-2xl text-[#d4af37]">Discover</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
            The Best Ingredients
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            We take pride in sourcing pure organic greens, premium prime cuts, and authentic mountain spices.
          </p>
        </div>

        {/* Horizontal Ingredient Strip */}
        <div id="ingredient-strip" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {ingredients.map((item) => (
            <div
              key={item.id}
              onClick={onOpenBooking}
              className="ingredient-item-card group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-3xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="font-serif text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors mb-1">
                {item.name}
              </h3>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
