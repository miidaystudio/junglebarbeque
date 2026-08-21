"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import { Flame, Star, Utensils, Eye, Sparkles, Filter } from "lucide-react";

const dishesData = [
  {
    id: 1,
    title: "Smoked Jungle Angara Chicken",
    category: "Smoked Barbeque",
    badges: ["Smoked", "Chef's Special"],
    rating: "4.9",
    spice: "Spicy 🔥🔥",
    course: "Live Skewer Starter",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    description: "Tender chicken thighs marinated for 24 hours in Kashmiri chili paste, mustard oil, and ground jungle spices, flame-grilled over glowing banyan wood embers.",
    ingredients: ["Kashmiri Chili", "Charcoal Smoked Oil", "Ginger Garlic", "Fenugreek", "Mustard Paste"],
    size: "tall",
  },
  {
    id: 2,
    title: "Wood-Fired Paneer Tikka",
    category: "Sizzling Tandoor",
    badges: ["Must Try", "Vegetarian"],
    rating: "4.8",
    spice: "Mild & Creamy",
    course: "Live Skewer Starter",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    description: "Thick cubes of fresh malai paneer infused with hung curd, mace, and roasted cumin, charred to golden perfection with crisp bell peppers.",
    ingredients: ["Fresh Cottage Cheese", "Hung Curd", "Yellow Mustard", "Mace Powder", "Bell Peppers"],
    size: "normal",
  },
  {
    id: 3,
    title: "Pitmaster Mutton Galouti Kebabs",
    category: "Chef's Specials",
    badges: ["Chef's Special", "Royal Recipe"],
    rating: "5.0",
    spice: "Rich Aromatic",
    course: "Starters Course",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "Melt-in-your-mouth minced mutton patties infused with 32 secret Lucknowi spices, pan-seared over raw ghee and served on mini saffron parathas.",
    ingredients: ["Finely Minced Mutton", "Desi Ghee", "Secret 32-Spice Potli", "Rose Water", "Cashew Paste"],
    size: "tall",
  },
  {
    id: 4,
    title: "Charcoal Grilled Chili Garlic Prawns",
    category: "Smoked Barbeque",
    badges: ["Smoked", "Popular"],
    rating: "4.9",
    spice: "Sizzling Hot 🔥",
    course: "Seafood Specialty",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    description: "Jumbo tiger prawns glazed in butter, roasted garlic flakes, and crushed bird-eye chili, flame-seared on tabletop skewers.",
    ingredients: ["Jumbo Tiger Prawns", "Clarified Butter", "Crushed Chili", "Garlic Butter", "Lemon Zest"],
    size: "normal",
  },
  {
    id: 5,
    title: "Signature Jungle Dal Makhani",
    category: "Chef's Specials",
    badges: ["Chef's Special", "Slow Simmered"],
    rating: "4.9",
    spice: "Rich Creamy",
    course: "Main Course",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "Black lentils slow-cooked over low charcoal fire for 18 hours, finished with white butter, fresh cream, and smoked cinnamon infusion.",
    ingredients: ["Urad Dal", "White Farm Butter", "Fresh Cream", "Smoked Cinnamon", "Tomato Puree"],
    size: "normal",
  },
  {
    id: 6,
    title: "Liquid Nitrogen Flame Gelato",
    category: "Live Desserts",
    badges: ["Must Try", "Interactive Counter"],
    rating: "5.0",
    spice: "Sweet Chill",
    course: "Dessert Course",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
    description: "Custom artisan ice cream frozen instantly at -196°C using liquid nitrogen before your eyes, topped with hot fudge and caramelized embers.",
    ingredients: ["Organic Whole Milk", "Belgian Dark Chocolate", "Liquid Nitrogen", "Waffle Flakes"],
    size: "tall",
  },
];

export default function SignatureDishes({ onSelectDish }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const categories = ["All", "Smoked Barbeque", "Chef's Specials", "Sizzling Tandoor", "Live Desserts"];

  const filteredDishes =
    activeCategory === "All"
      ? dishesData
      : dishesData.filter((d) => d.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  // 3D Card Hover Tilt Handler
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;

    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return;
    cardEl.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="dishes" ref={sectionRef} className="relative py-24 bg-[#1A1614] overflow-hidden">
      {/* Glow orb background */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#E07A2B]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-4 py-1.5 text-xs font-bold text-[#E07A2B] uppercase tracking-widest mb-3">
            <Flame className="h-4 w-4" /> Culinary Excellence
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Chef&rsquo;s <span className="text-[#E07A2B] italic">Signature</span> Creations
          </h2>
          <p className="mt-4 text-base text-[var(--jb-cream-muted)]">
            Handcrafted with rare organic marinades and smoked to juicy perfection over live table coals.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#E07A2B] text-white shadow-lg shadow-[#E07A2B]/30"
                    : "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]"
        >
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              onClick={() => onSelectDish(dish)}
              className={`glass-card group cursor-pointer relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1E13]/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-[#E07A2B]/60 ${
                dish.size === "tall" ? "md:row-span-2" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Image with overlay gradient */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E13] via-[#0B1E13]/70 to-black/30" />
              </div>

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {dish.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#E07A2B] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md border border-white/10">
                  <Star className="h-3.5 w-3.5 fill-amber-400" /> {dish.rating}
                </div>
              </div>

              {/* Bottom Information */}
              <div className="relative z-10 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#E07A2B]">
                  {dish.course}
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E07A2B] transition-colors leading-tight">
                  {dish.title}
                </h3>
                <p className="text-xs text-[var(--jb-cream-muted)] line-clamp-2 leading-relaxed">
                  {dish.description}
                </p>

                {/* Inspect Dish CTA */}
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-white">
                  <span className="text-[#E07A2B] flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" /> {dish.spice}
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/80 group-hover:text-[#E07A2B] transition-colors">
                    Preview Recipe <Eye className="h-4 w-4" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
