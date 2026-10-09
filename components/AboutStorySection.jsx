"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, Smile, Heart, CheckCircle2 } from "lucide-react";

export default function AboutStorySection() {
  const manifestoItems = [
    { title: "CHUNKS > CHIPS", desc: "No tiny chips here. We hand-chop giant Belgian chocolate blocks for volcanic molten pools." },
    { title: "BUTTER IS SACRED", desc: "Real cultured French-style butter only. If it doesn't smell like heaven when browning, it's out." },
    { title: "ZERO SNOBBISH VIBES", desc: "Cookies are meant to bring unadulterated joy, messy hands, and big smiling moments." },
    { title: "TEXTURE IS EVERYTHING", desc: "Crispy craggy edges with a center so soft it feels like a warm hug." },
  ];

  return (
    <section id="about" className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FBF6EE] border-t-2 border-black overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER BADGE */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#68A843] text-white font-['Dela_Gothic_One'] text-xs uppercase px-5 py-2 rounded-full border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 mb-4">
            <span>🌿 THE NON-RECIPE PHILOSOPHY</span>
          </div>

          <h2 className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl lg:text-6xl text-[#191817] uppercase tracking-tight max-w-4xl leading-[1.05]">
            WE STARTED IN A TINY KITCHEN <br className="hidden md:inline" />
            WITH ONE RULE: <span className="text-[#EB4823]">NO RULES.</span>
          </h2>

          <p className="font-['Outfit'] font-medium text-base sm:text-xl text-[#444] max-w-2xl mt-4 leading-relaxed">
            In 2021, we got bored of dry, factory-stamped supermarket cookies. We wanted cookies with soul, chaotic chocolate chunks, and bold playful energy.
          </p>
        </div>

        {/* 2-COLUMN SCRAPBOOK LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: RETRO POLAROID & STORY PHOTO */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* TILTED POLAROID CARD */}
            <div className="relative bg-white border-3 border-black p-4 sm:p-5 pb-12 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
              
              {/* TOP WASHI TAPE */}
              <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 rotate-2 z-20" />

              {/* PHOTO */}
              <div className="relative w-full h-72 sm:h-84 rounded-xl overflow-hidden border-2 border-black">
                <Image
                  src="/images/bakery-story.jpg"
                  alt="Founders laughing in kitchen with giant gooey cookie"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* POLAROID HANDWRITTEN FOOTER */}
              <div className="mt-4 flex items-center justify-between px-2 font-['Caveat'] text-2xl font-bold text-[#191817]">
                <span>BAKERY JOY! 🍪</span>
                <span className="text-[#EB4823] text-xl">OCT &apos;23</span>
              </div>

              {/* FLOATING RETRO STAMP STICKER ON POLAROID */}
              <div className="absolute -bottom-6 -right-6 bg-[#FFD233] border-2 border-black rounded-full w-24 h-24 flex items-center justify-center text-center p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-12 animate-float-slow">
                <span className="font-['Dela_Gothic_One'] text-[9px] uppercase leading-tight text-[#191817]">
                  100%<br />MADE FROM<br />SCRATCH
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: THE MANIFESTO & PRINCIPLES */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#FEFCF6] border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
              
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">📜</span>
                <h3 className="font-['Dela_Gothic_One'] text-xl sm:text-2xl uppercase tracking-tight text-[#191817]">
                  OUR WILD MANIFESTO
                </h3>
              </div>

              <div className="space-y-4">
                {manifestoItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#FBF6EE] border border-black/10 hover:border-black transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#FFD233] border border-black flex items-center justify-center text-[10px] font-black font-['Dela_Gothic_One'] flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-['Dela_Gothic_One'] text-sm sm:text-base text-[#191817]">
                        {item.title}
                      </h4>
                      <p className="font-['Outfit'] text-xs sm:text-sm text-[#555] font-medium leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* SIGNATURE / HANDWRITTEN QUOTE */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-black/20 flex items-center justify-between">
                <p className="font-['Caveat'] text-2xl font-bold text-[#EB4823]">
                  &ldquo;Life is too short for boring cookies.&rdquo;
                </p>
                <span className="font-['Outfit'] text-xs font-black uppercase text-[#888]">
                  — THE BAKERS
                </span>
              </div>

            </div>

            {/* QUICK STATS CARDS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#FFD233] border-2 border-black rounded-2xl p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-['Dela_Gothic_One'] text-xl sm:text-2xl text-[#191817]">47+</div>
                <div className="font-['Outfit'] font-black text-[10px] sm:text-xs uppercase text-[#191817] mt-0.5">Test Batches</div>
              </div>

              <div className="bg-[#EB4823] text-white border-2 border-black rounded-2xl p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-['Dela_Gothic_One'] text-xl sm:text-2xl">2.4M</div>
                <div className="font-['Outfit'] font-black text-[10px] sm:text-xs uppercase mt-0.5">Cookies Shared</div>
              </div>

              <div className="bg-[#2A60B0] text-white border-2 border-black rounded-2xl p-3.5 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-['Dela_Gothic_One'] text-xl sm:text-2xl">0%</div>
                <div className="font-['Outfit'] font-black text-[10px] sm:text-xs uppercase mt-0.5">Fake Flavors</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
