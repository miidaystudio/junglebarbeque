"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";

export default function KookyHeroSection({ cartCount = 0, onOpenCart, onAddToCart }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHoveredCookie, setIsHoveredCookie] = useState(false);
  const [activeSticker, setActiveSticker] = useState(null);

  const cookieFlavors = [
    { name: "Choc Chunk Daydream", tag: "Bestseller", desc: "Huge Belgian dark chocolate chunks with sea salt flakes.", color: "#EB4823" },
    { name: "Matcha Marshmallow Meltdown", tag: "Staff Pick", desc: "Ceremonial Uji matcha with gooey torched marshmallow.", color: "#68A843" },
    { name: "Salted Caramel Pretzel Pop", tag: "Crunchy", desc: "Buttery dough infused with brittle pretzel shards.", color: "#E0982B" },
    { name: "Raspberry Jam Red Velvet", tag: "Fruity", desc: "Velvety cocoa with tart wild berry jam core.", color: "#C62828" },
  ];

  const handleAdd = (item) => {
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FBF6EE] text-[#191817] font-sans overflow-hidden flex flex-col justify-between selection:bg-[#FFD233] selection:text-[#191817]">

      {/* 2. NAVIGATION BAR */}
      <header className="relative z-40 w-full px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-1 group cursor-pointer">
          <a href="#" className="flex items-center gap-1.5">
            <span className="font-['Dela_Gothic_One'] text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#191817] group-hover:scale-105 transition-transform duration-300">
              KOOKY
            </span>
            {/* Playful 8-point asterisk / flower */}
            <span className="inline-block text-[#EB4823] text-2xl sm:text-3xl font-black group-hover:rotate-180 transition-transform duration-500">
              ✦
            </span>
            <span className="font-['Dela_Gothic_One'] text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#191817] group-hover:scale-105 transition-transform duration-300">
              KIND
            </span>
          </a>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-extrabold tracking-widest text-[#191817]">
          {/* Cookies with dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 hover:text-[#EB4823] transition-colors uppercase cursor-pointer py-2"
            >
              COOKIES
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-[#EB4823]" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 w-80 bg-[#FEFCF6] border-2 border-black rounded-2xl p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] z-50 animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="text-xs font-black uppercase tracking-wider text-[#888] mb-3 px-2">
                  Featured Flavors
                </div>
                <div className="space-y-2">
                  {cookieFlavors.map((c, i) => (
                    <div 
                      key={i}
                      onClick={() => {
                        handleAdd({ name: c.name, price: "$4.50" });
                        setDropdownOpen(false);
                      }}
                      className="p-2.5 rounded-xl hover:bg-[#F3EBDD] cursor-pointer transition-all flex flex-col gap-0.5 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#191817] group-hover:text-[#EB4823] transition-colors">
                          {c.name}
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: c.color }}>
                          {c.tag}
                        </span>
                      </div>
                      <span className="text-xs text-[#555] font-medium leading-tight">
                        {c.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-black/10 text-center">
                  <button 
                    onClick={() => {
                      handleAdd({ name: "4-Pack Sampler Box", price: "$24.00" });
                      setDropdownOpen(false);
                    }}
                    className="w-full py-2 bg-[#EB4823] hover:bg-[#D43916] text-white text-xs font-extrabold rounded-xl transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                  >
                    ADD 4-PACK SAMPLER BOX ($24)
                  </button>
                </div>
              </div>
            )}
          </div>

          <a href="#about" className="hover:text-[#EB4823] transition-colors uppercase">ABOUT</a>
          <a href="#find-us" className="hover:text-[#EB4823] transition-colors uppercase">FIND US</a>
          <a href="#good-stuff" className="hover:text-[#EB4823] transition-colors uppercase">GOOD STUFF</a>
          <a href="#journal" className="hover:text-[#EB4823] transition-colors uppercase">JOURNAL</a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenCart}
            className="text-[13px] font-black uppercase tracking-wider hover:text-[#EB4823] transition-colors px-3 py-1 cursor-pointer"
          >
            CART ({cartCount})
          </button>

          {/* Cheerful Smiley Avatar Badge */}
          <button
            onClick={onOpenCart}
            title="Open your cookie cart"
            className="w-10 h-10 rounded-full bg-[#EB4823] hover:bg-[#D43916] flex items-center justify-center text-white text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          >
            <span className="group-hover:rotate-12 transition-transform duration-200">☺</span>
          </button>
        </div>
      </header>

      {/* 3. MAIN HERO BODY - ASYMMETRIC RETRO SCRAPBOOK SPLIT */}
      <div className="relative flex-1 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center px-6 md:px-12 lg:px-16 pt-2 pb-16 lg:pb-8">
        
        {/* LEFT COLUMN: PUNCHY TYPOGRAPHY & CTAS */}
        <div className="lg:col-span-6 z-20 flex flex-col justify-center space-y-6 pt-4 lg:pt-0 pr-0 lg:pr-6">
          
          {/* "BAKED FOR FUN" Sunburst Sticker */}
          <div className="relative inline-block self-start">
            <div 
              className="relative bg-[#FFD233] text-[#191817] font-black text-xs md:text-sm tracking-wider px-5 py-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 hover:rotate-2 transition-transform duration-300 cursor-pointer select-none flex items-center gap-1.5"
              style={{
                clipPath: "polygon(50% 0%, 63% 13%, 79% 5%, 83% 22%, 98% 23%, 93% 40%, 100% 55%, 89% 68%, 94% 85%, 77% 86%, 70% 100%, 53% 91%, 38% 100%, 32% 86%, 15% 88%, 18% 70%, 5% 58%, 13% 43%, 4% 28%, 20% 23%, 22% 6%, 39% 13%)",
                padding: "12px 24px"
              }}
            >
              <span className="font-['Dela_Gothic_One'] text-[11px] md:text-xs">BAKED FOR FUN</span>
            </div>
          </div>

          {/* MAIN MASSIVE HERO HEADLINE */}
          <h1 className="font-['Dela_Gothic_One'] text-4xl sm:text-6xl md:text-6xl lg:text-[68px] xl:text-[76px] leading-[0.98] text-[#191817] tracking-tighter uppercase">
            COOKIES <br />
            THAT DON&apos;T <br />
            FOLLOW THE <br />
            <span className="inline-flex items-center gap-2">
              RECIPE.
              {/* Cute 5-Petal Coral Flower */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#EB4823] fill-current inline-block hover:rotate-90 transition-transform duration-500 cursor-pointer animate-wiggle"
              >
                <circle cx="50" cy="24" r="16" />
                <circle cx="75" cy="42" r="16" />
                <circle cx="65" cy="72" r="16" />
                <circle cx="35" cy="72" r="16" />
                <circle cx="25" cy="42" r="16" />
                <circle cx="50" cy="50" r="11" fill="#FFD233" />
              </svg>
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#2F2E2C] max-w-xl leading-snug font-['Outfit']">
            We bake playful, wildly delicious cookies with personality. Made with good ingredients and{" "}
            <span className="bg-[#FFD233] text-[#191817] font-bold px-2 py-0.5 rounded-md inline-block shadow-sm">
              zero boring.
            </span>
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a 
              href="#cookies"
              className="bg-[#EB4823] hover:bg-[#D43916] text-white font-['Outfit'] font-black text-sm sm:text-base tracking-wider px-8 py-4 rounded-full flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all cursor-pointer group"
            >
              <span>SHOP COOKIES</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="#about" 
              className="font-['Outfit'] font-black text-sm sm:text-base tracking-wider text-[#191817] underline decoration-2 underline-offset-4 hover:text-[#EB4823] hover:decoration-[#EB4823] transition-colors py-2 px-2"
            >
              SEE OUR STORY
            </a>
          </div>

          {/* VALUE PROPS / TRUST PILLS */}
          <div className="pt-4 border-t border-black/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
            {/* Real Ingredients */}
            <div className="flex items-center gap-2 text-[#191817]">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#191817] fill-none stroke-2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 4a2 2 0 0 1 2 2v1a2 2 0 0 1-4 0V6a2 2 0 0 1 2-2z" />
                  <path d="M12 17a2 2 0 0 1 2 2v1a2 2 0 0 1-4 0v-1a2 2 0 0 1 2-2z" />
                  <path d="M4 12a2 2 0 0 1 2-2h1a2 2 0 0 1 0 4H6a2 2 0 0 1-2-2z" />
                  <path d="M17 12a2 2 0 0 1 2-2h1a2 2 0 0 1 0 4h-1a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <span className="font-['Outfit'] font-black text-[10px] sm:text-xs leading-tight tracking-tight uppercase">
                REAL<br />INGREDIENTS
              </span>
            </div>

            {/* Baked In Small Batches */}
            <div className="flex items-center gap-2 text-[#191817] border-l border-black/15 pl-2 sm:pl-4">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#191817] fill-none stroke-2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <span className="font-['Outfit'] font-black text-[10px] sm:text-xs leading-tight tracking-tight uppercase">
                BAKED IN<br />SMALL BATCHES
              </span>
            </div>

            {/* Made To Make You Smile */}
            <div className="flex items-center gap-2 text-[#191817] border-l border-black/15 pl-2 sm:pl-4">
              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#191817] fill-none stroke-2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <span className="font-['Outfit'] font-black text-[10px] sm:text-xs leading-tight tracking-tight uppercase">
                MADE TO MAKE<br />YOU SMILE
              </span>
            </div>
          </div>

          {/* BOTTOM-LEFT ORGANIC GREEN RIPPED STICKER BANNER */}
          <div className="relative pt-3">
            <div 
              className="relative inline-flex items-center gap-4 bg-[#68A843] text-white px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer overflow-visible"
            >
              {/* Hand-drawn Arrow & Text */}
              <div className="flex items-center gap-2 font-['Caveat'] text-2xl font-bold text-[#FEFCF6] tracking-wide">
                <span>➔</span>
                <span>SNACK MORE PLAYFULLY</span>
                <span className="text-xl">🌿</span>
              </div>

              {/* White Daisy Cutout Flower Accent on the Edge */}
              <div className="absolute -right-7 -bottom-6 w-16 h-16 pointer-events-none drop-shadow-[2px_3px_2px_rgba(0,0,0,0.2)]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g fill="#FEFCF6">
                    <circle cx="50" cy="20" r="14" />
                    <circle cx="78" cy="35" r="14" />
                    <circle cx="78" cy="65" r="14" />
                    <circle cx="50" cy="80" r="14" />
                    <circle cx="22" cy="65" r="14" />
                    <circle cx="22" cy="35" r="14" />
                  </g>
                  {/* Center Golden Core */}
                  <circle cx="50" cy="50" r="14" fill="#FFD233" stroke="#191817" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ORGANIC WAVED LIFESTYLE PHOTO & FLOATING BADGES */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex items-center justify-center min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
          
          {/* DEEP BLUE ORGANIC BACKDROP SHAPE */}
          <div 
            className="absolute -right-12 -bottom-10 w-[110%] h-[95%] bg-[#1D5BB6] rounded-[40px] z-0 opacity-95 transform rotate-1 hidden sm:block"
            style={{
              clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 32%, 8% 18%)"
            }}
          />

          {/* MAIN ORGANIC WAVED PHOTO CONTAINER */}
          <div 
            className="relative z-10 w-full h-[460px] sm:h-[540px] md:h-[600px] rounded-[36px] overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
            onMouseEnter={() => setIsHoveredCookie(true)}
            onMouseLeave={() => setIsHoveredCookie(false)}
          >
            {/* The high-res lifestyle image */}
            <Image
              src="/images/kooky-hero.jpg"
              alt="Person enjoying a delicious giant chocolate chip cookie"
              fill
              priority
              className={`object-cover object-center transition-transform duration-700 ease-out ${isHoveredCookie ? "scale-105" : "scale-100"}`}
            />

            {/* Subtle sunny overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            
            {/* FLOATING PRODUCT CHIP OVERLAY ON BAG */}
            <div className="absolute bottom-6 left-6 bg-[#FEFCF6]/95 backdrop-blur-sm border-2 border-black rounded-2xl p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[210px] transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#EB4823] animate-ping" />
                <span className="font-['Dela_Gothic_One'] text-[10px] tracking-wider text-[#191817]">CHOC CHUNK DAYDREAM</span>
              </div>
              <p className="text-[11px] font-medium text-[#444] leading-tight font-['Outfit']">
                Soft center, big chocolate energy & crunchy sea salt.
              </p>
            </div>
          </div>

          {/* ============================================================ */}
          {/* FLOATING SCRAPBOOK STICKERS & LABELS AROUND THE HERO PHOTO */}
          {/* ============================================================ */}

          {/* STICKER 1: TOP-RIGHT GRID STICKY NOTE ("CRUNCH WITH CHARACTER ♡") */}
          <div 
            onClick={() => setActiveSticker(activeSticker === 'note' ? null : 'note')}
            className="absolute -top-6 -right-2 sm:-right-6 z-30 grid-paper border-2 border-black rounded-xl p-4 w-44 sm:w-52 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Red Washi Tape on top */}
            <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rotate-1" />

            <div className="text-center font-['Caveat'] text-2xl font-bold text-[#191817] leading-tight mt-1">
              CRUNCH<br />
              WITH<br />
              CHARACTER ♡
            </div>

            {/* Hand-drawn curving arrow doodle pointing to cookie */}
            <div className="absolute -bottom-7 -left-5 w-12 h-12 text-[#191817] pointer-events-none">
              <svg viewBox="0 0 50 50" className="w-full h-full stroke-current fill-none stroke-2">
                <path d="M40 5 Q20 20 15 35" />
                <path d="M10 28 L15 35 L22 30" />
              </svg>
            </div>
          </div>

          {/* STICKER 2: CENTER-RIGHT RETRO FLOWER STICKER ("SOFT CENTER BIG ENERGY") */}
          <div 
            onClick={() => {
              handleAdd({ name: "Choc Chunk Daydream", price: "$4.50" });
              setActiveSticker('flower');
            }}
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          >
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float-slow">
              {/* 6-Lobed Yellow Flower Shape */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD233] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <g fill="currentColor" stroke="#191817" strokeWidth="2.5">
                  <circle cx="50" cy="20" r="17" />
                  <circle cx="77" cy="35" r="17" />
                  <circle cx="77" cy="65" r="17" />
                  <circle cx="50" cy="80" r="17" />
                  <circle cx="23" cy="65" r="17" />
                  <circle cx="23" cy="35" r="17" />
                  <circle cx="50" cy="50" r="18" fill="#FFD233" />
                </g>
              </svg>

              {/* Text inside flower */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <span className="font-['Dela_Gothic_One'] text-[10px] sm:text-[11px] leading-tight text-[#191817] uppercase tracking-tighter">
                  SOFT<br />CENTER<br />BIG<br />ENERGY
                </span>
              </div>
            </div>
          </div>

          {/* STICKER 3: BOTTOM-RIGHT ROTATING VINTAGE STAMP ("RIDICULOUSLY GOOD ★ SERIOUSLY FUN") */}
          <div 
            onClick={() => setActiveSticker('stamp')}
            className="absolute -bottom-8 -right-3 sm:-right-8 z-30 cursor-pointer group"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#FEFCF6] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-all">
              
              {/* Rotating Circular Text */}
              <div className="absolute inset-0 w-full h-full animate-spin-slow">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <path
                    id="stampTextPath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                  <text className="text-[10px] sm:text-[11px] font-['Outfit'] font-black uppercase tracking-[2.5px] fill-[#191817]">
                    <textPath href="#stampTextPath" startOffset="0%">
                      RIDICULOUSLY GOOD ★ SERIOUSLY FUN ★
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center 5-Petal Flower Motif */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#191817] z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                  <circle cx="50" cy="22" r="14" />
                  <circle cx="77" cy="42" r="14" />
                  <circle cx="67" cy="74" r="14" />
                  <circle cx="33" cy="74" r="14" />
                  <circle cx="23" cy="42" r="14" />
                  <circle cx="50" cy="50" r="10" fill="#FEFCF6" />
                </svg>
              </div>
            </div>
          </div>

          {/* STICKER 4: FLOATING SPARKLE DOODLE */}
          <div className="absolute top-10 left-6 z-20 pointer-events-none">
            <Sparkles className="w-8 h-8 text-[#FFD233] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] animate-bounce" />
          </div>

        </div>

      </div>

    </section>
  );
}
