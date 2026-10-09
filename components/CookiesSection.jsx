"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check, Sparkles, Heart } from "lucide-react";

export default function CookiesSection({ onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedCookies, setLikedCookies] = useState({});
  const [addedIds, setAddedIds] = useState({});

  const filters = [
    { id: "all", label: "ALL COOKIES" },
    { id: "choc", label: "CHOCOLATE OBSESSED" },
    { id: "crunch", label: "NUTTY & CRUNCHY" },
    { id: "fruity", label: "FRUITY & GOOEY" },
  ];

  const cookies = [
    {
      id: 1,
      name: "Choc Chunk Daydream",
      tag: "BESTSELLER",
      category: "choc",
      color: "#EB4823",
      price: "$4.50",
      description: "Belgian 70% dark chocolate chunks, browned butter dough, and crunchy Maldon sea salt crystals.",
      texture: "Crispy rim, molten center",
      rating: "4.9 ★ (1,240 reviews)",
      bgCard: "#FFF9F0",
    },
    {
      id: 2,
      name: "Matcha Marshmallow Meltdown",
      tag: "STAFF CRUSH",
      category: "crunch",
      color: "#68A843",
      price: "$4.75",
      description: "Ceremonial Uji matcha infused dough with torched vegan marshmallow and white chocolate chunks.",
      texture: "Earthy, velvety & stretchy",
      rating: "4.8 ★ (890 reviews)",
      bgCard: "#F4FAF0",
    },
    {
      id: 3,
      name: "Salted Caramel Pretzel Pop",
      tag: "CRUNCH KING",
      category: "crunch",
      color: "#E0982B",
      price: "$4.50",
      description: "House-made chewy salted caramel ripple with cracked artisan pretzel shards and buttery dough.",
      texture: "Maximum crunch & chew",
      rating: "5.0 ★ (2,150 reviews)",
      bgCard: "#FFF8ED",
    },
    {
      id: 4,
      name: "Raspberry Jam Red Velvet",
      tag: "WILD DROP",
      category: "fruity",
      color: "#C62828",
      price: "$4.75",
      description: "Deep cocoa red velvet cookie filled with a wild tart raspberry jam pocket and cream cheese drizzle.",
      texture: "Ultra soft & jammy",
      rating: "4.9 ★ (760 reviews)",
      bgCard: "#FFF0F2",
    },
    {
      id: 5,
      name: "Midnight Triple Fudge",
      tag: "INTENSE",
      category: "choc",
      color: "#3D2B1F",
      price: "$4.50",
      description: "Dutch black cocoa dough loaded with milk, dark, and bittersweet chocolate chunks for serious chocoholics.",
      texture: "Brownie-like fudgy core",
      rating: "4.9 ★ (1,430 reviews)",
      bgCard: "#F7F2EB",
    },
    {
      id: 6,
      name: "Lemon Blueberry Shortcake",
      tag: "SUMMER SPECIAL",
      category: "fruity",
      color: "#2A60B0",
      price: "$4.75",
      description: "Sunshine lemon zest butter dough packed with wild Maine blueberries and vanilla sugar glaze.",
      texture: "Melt-in-mouth buttery",
      rating: "4.8 ★ (620 reviews)",
      bgCard: "#F0F5FA",
    },
  ];

  const filteredCookies = activeFilter === "all" 
    ? cookies 
    : cookies.filter(c => c.category === activeFilter);

  const handleAdd = (cookie) => {
    if (onAddToCart) onAddToCart(cookie);
    setAddedIds(prev => ({ ...prev, [cookie.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [cookie.id]: false }));
    }, 1500);
  };

  const toggleLike = (id) => {
    setLikedCookies(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="cookies" className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF4EC] border-t-2 border-black overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-10 right-10 text-[#FFD233] opacity-30 pointer-events-none select-none">
        <Sparkles className="w-24 h-24" />
      </div>

      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER & TITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFD233] text-[#191817] font-['Dela_Gothic_One'] text-xs uppercase px-4 py-1.5 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
              <span>✿ FRESH FROM OUR OVENS</span>
            </div>
            <h2 className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl lg:text-6xl text-[#191817] uppercase tracking-tight leading-[1.05]">
              FLAVORS THAT <br className="hidden sm:inline" />
              BREAK THE RECIPE.
            </h2>
          </div>

          <p className="font-['Outfit'] font-medium text-base sm:text-lg text-[#444] max-w-md leading-relaxed">
            Every cookie weighs a hefty 130g, baked crisp on the edges and wildly gooey in the center. No preservatives, ever.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`font-['Outfit'] font-black text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-full border-2 border-black transition-all cursor-pointer ${
                activeFilter === f.id
                  ? "bg-[#191817] text-[#FEFCF6] shadow-[3px_3px_0px_0px_rgba(235,72,35,1)] translate-x-0.5 translate-y-0.5"
                  : "bg-[#FEFCF6] text-[#191817] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#F3EBDD]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* COOKIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCookies.map((cookie) => (
            <div
              key={cookie.id}
              className="relative rounded-3xl border-3 border-black p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
              style={{ backgroundColor: cookie.bgCard }}
            >
              {/* TOP ROW: BADGE & LIKE BUTTON */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-['Dela_Gothic_One'] text-[10px] tracking-wider text-white px-3 py-1 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: cookie.color }}
                >
                  {cookie.tag}
                </span>

                <button
                  onClick={() => toggleLike(cookie.id)}
                  aria-label="Save to favorites"
                  className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      likedCookies[cookie.id] ? "fill-[#EB4823] text-[#EB4823]" : "text-[#191817]"
                    }`}
                  />
                </button>
              </div>

              {/* COOKIE ART PREVIEW */}
              <div className="relative w-full h-48 sm:h-52 my-2 flex items-center justify-center">
                <div className="relative w-44 h-44 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <Image
                    src="/images/cookie-stack.jpg"
                    alt={cookie.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Texture pill */}
                <div className="absolute -bottom-2 right-2 bg-white/95 border-2 border-black rounded-xl px-3 py-1 text-[11px] font-bold font-['Outfit'] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3">
                  ✨ {cookie.texture}
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-4 space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-['Dela_Gothic_One'] text-lg sm:text-xl text-[#191817] leading-snug">
                    {cookie.name}
                  </h3>
                  <span className="font-['Dela_Gothic_One'] text-base text-[#EB4823]">
                    {cookie.price}
                  </span>
                </div>

                <p className="font-['Outfit'] text-xs sm:text-sm text-[#555] font-medium leading-relaxed">
                  {cookie.description}
                </p>

                <div className="text-[11px] font-bold text-[#888] font-['Outfit']">
                  {cookie.rating}
                </div>
              </div>

              {/* ADD BUTTON */}
              <div className="mt-6 pt-4 border-t border-black/10">
                <button
                  onClick={() => handleAdd(cookie)}
                  className={`w-full py-3 px-4 rounded-2xl border-2 border-black font-['Outfit'] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                    addedIds[cookie.id]
                      ? "bg-[#68A843] text-white"
                      : "bg-[#EB4823] hover:bg-[#D43916] text-white"
                  }`}
                >
                  {addedIds[cookie.id] ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>ADDED TO BOX! 🍪</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>ADD SINGLE ($4.50)</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* CUSTOM BUNDLE BOX PROMO BANNER */}
        <div className="mt-16 bg-[#191817] text-[#FEFCF6] rounded-3xl border-3 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(235,72,35,1)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-block bg-[#FFD233] text-[#191817] font-['Dela_Gothic_One'] text-[10px] uppercase px-3 py-1 rounded-md">
                CUSTOM SAMPLER BOXES
              </div>
              <h3 className="font-['Dela_Gothic_One'] text-2xl sm:text-4xl uppercase text-white tracking-tight">
                BUILD YOUR OWN 6-PACK OR 12-PACK BOX
              </h3>
              <p className="font-['Outfit'] text-sm sm:text-base text-[#D0C8B8] max-w-xl">
                Pick your dream combination of warm, gooey, rule-breaking cookies. Ships in insulated custom aesthetic tin boxes with heating instructions!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => {
                  if (onAddToCart) onAddToCart({ name: "Custom 6-Pack Box", price: "$24.00" });
                }}
                className="bg-[#FFD233] hover:bg-[#E6BC24] text-[#191817] font-['Outfit'] font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-center"
              >
                PACK 6-BOX ($24) 🍪
              </button>

              <button
                onClick={() => {
                  if (onAddToCart) onAddToCart({ name: "Custom 12-Pack Mega Box", price: "$44.00" });
                }}
                className="bg-[#EB4823] hover:bg-[#D43916] text-white font-['Outfit'] font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-2xl border-2 border-white/40 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
              >
                PACK 12-PARTY BOX ($44) 🔥
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
