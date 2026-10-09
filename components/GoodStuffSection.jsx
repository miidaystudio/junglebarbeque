"use client";

import Image from "next/image";
import { Check, ShieldCheck, Heart, Sparkles, Leaf } from "lucide-react";

export default function GoodStuffSection() {
  const ingredients = [
    {
      name: "70% Single-Origin Belgian Chocolate",
      desc: "Ethically sourced cacao blocks, roughly hand-chopped into enormous volcanic chunks.",
      icon: "🍫",
      tag: "DIRECT TRADE",
    },
    {
      name: "Cultured Grass-Fed Butter",
      desc: "Churned slowly for 84% butterfat content, browned in copper pots for nutty caramel aroma.",
      icon: "🧈",
      tag: "100% NATURAL",
    },
    {
      name: "Flaky Maldon Sea Salt Crystals",
      desc: "Hand-harvested pyramid salt flakes that balance the richness of molten dark chocolate.",
      icon: "🧂",
      tag: "HAND-HARVESTED",
    },
    {
      name: "Unbleached Stone-Ground Flour",
      desc: "Single-mill heritage wheat flour that gives our cookies their signature chewy structure.",
      icon: "🌾",
      tag: "HERITAGE GRAINS",
    },
  ];

  return (
    <section id="good-stuff" className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF4EC] border-t-2 border-black overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD233] text-[#191817] font-['Dela_Gothic_One'] text-xs uppercase px-5 py-2 rounded-full border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-4">
            <span>✨ WHAT&apos;S INSIDE MATTERS</span>
          </div>

          <h2 className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl lg:text-6xl text-[#191817] uppercase tracking-tight max-w-3xl leading-[1.05]">
            OBSESSED WITH INGREDIENTS. <br />
            <span className="text-[#68A843]">ZERO FAKE JUNK.</span>
          </h2>

          <p className="font-['Outfit'] font-medium text-base sm:text-xl text-[#444] max-w-2xl mt-4 leading-relaxed">
            We don&apos;t use artificial extracts, hydrogenated oils, or weird preservatives. Just real food you would find in your grandma&apos;s pantry.
          </p>
        </div>

        {/* 2-COLUMN DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: INGREDIENTS LIST */}
          <div className="lg:col-span-6 space-y-4">
            {ingredients.map((ing, idx) => (
              <div 
                key={idx}
                className="bg-[#FEFCF6] border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="text-3xl p-2 bg-[#F4EDE2] border border-black/10 rounded-xl flex-shrink-0">
                  {ing.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-['Dela_Gothic_One'] text-sm sm:text-base text-[#191817]">
                      {ing.name}
                    </h3>
                    <span className="font-['Outfit'] font-black text-[10px] bg-[#FFD233] text-[#191817] px-2 py-0.5 rounded-full border border-black">
                      {ing.tag}
                    </span>
                  </div>
                  <p className="font-['Outfit'] text-xs sm:text-sm text-[#666] font-medium leading-relaxed">
                    {ing.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* SUSTAINABILITY HIGHLIGHT BADGE */}
            <div className="bg-[#68A843] text-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white text-[#68A843] flex items-center justify-center text-2xl flex-shrink-0 border border-black">
                🌱
              </div>
              <div>
                <h4 className="font-['Dela_Gothic_One'] text-sm sm:text-base uppercase">
                  100% COMPOSTABLE PACKAGING
                </h4>
                <p className="font-['Outfit'] text-xs text-[#E8F5E9] font-medium mt-0.5">
                  All our cookie pouches and shipping mailers break down naturally in home compost bins within 90 days.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: VINTAGE BAKING COOKBOOK PHOTO & STICKER COLLAGE */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div className="relative w-full h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
              <Image
                src="/images/good-ingredients.jpg"
                alt="Pure organic baking ingredients and vintage recipe notebook"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* OVERLAY BADGE */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FEFCF6]/95 backdrop-blur-sm border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🌿</span>
                  <span className="font-['Dela_Gothic_One'] text-xs uppercase text-[#191817]">
                    1% FOR PLAYFUL KIDS CHARITIES
                  </span>
                </div>
                <p className="font-['Outfit'] text-xs text-[#555] font-medium leading-tight">
                  1% of every single box purchased funds community baking workshops and art programs for youth.
                </p>
              </div>
            </div>

            {/* FLOATING TOP STAMP BADGE */}
            <div className="absolute -top-5 -right-4 bg-[#EB4823] text-white border-2 border-black rounded-full w-28 h-28 flex items-center justify-center text-center p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 animate-pulse-subtle">
              <span className="font-['Dela_Gothic_One'] text-[10px] uppercase leading-tight">
                NO PALM OIL<br />NO FAKE EXTRACTS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
