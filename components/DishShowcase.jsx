"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";
import { Flame, Star, Eye, Sparkles, Filter } from "lucide-react";

const dishesData = [
  {
    id: 1,
    title: "Smoked Jungle Angara Tikka",
    category: "Charcoal Skewers",
    badges: ["Signature", "Charcoal Smoked"],
    rating: "4.9",
    spice: "Medium Spicy 🔥",
    course: "Live Skewer Starter",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    description: "24-hour marinated tender chicken thighs seared over live banyan charcoal embers with Kashmiri chilies and fenugreek.",
    ingredients: ["Kashmiri Chili", "Mustard Oil", "Fenugreek", "Ginger Garlic"],
    span: "lg:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    title: "Wood-Fired Malai Paneer",
    category: "Wood-Fired Kebabs",
    badges: ["Vegetarian", "Must Try"],
    rating: "4.8",
    spice: "Mild & Creamy",
    course: "Live Skewer Starter",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    description: "Thick cubes of fresh malai paneer charred with hung curd, yellow mustard, and mace powder.",
    ingredients: ["Fresh Cottage Cheese", "Hung Curd", "Yellow Mustard", "Mace"],
    span: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Pitmaster Mutton Galouti",
    category: "Wood-Fired Kebabs",
    badges: ["Chef Signature", "Royal Recipe"],
    rating: "5.0",
    spice: "Aromatic Spice",
    course: "Course 2: Kebabs",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: "Melt-in-mouth minced mutton patties infused with 32 secret spices and pan-seared over organic ghee.",
    ingredients: ["Minced Mutton", "Desi Ghee", "32-Spice Mix", "Rose Water"],
    span: "lg:col-span-1",
  },
  {
    id: 4,
    title: "Chili Garlic Tiger Prawns",
    category: "Charcoal Skewers",
    badges: ["Seafood Special", "Hot"],
    rating: "4.9",
    spice: "Sizzling Spicy 🔥",
    course: "Live Skewer Starter",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    description: "Jumbo tiger prawns glazed in garlic butter and crushed bird-eye chili, flame-seared on tabletop skewers.",
    ingredients: ["Tiger Prawns", "Garlic Butter", "Crushed Chili", "Lemon"],
    span: "lg:col-span-2",
  },
  {
    id: 5,
    title: "18-Hour Jungle Dal Makhani",
    category: "Royal Curries",
    badges: ["Slow Cooked", "Legendary"],
    rating: "4.9",
    spice: "Rich Creamy",
    course: "Course 4: Mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "Black lentils simmered overnight over low charcoal flames, finished with white butter and smoked cinnamon.",
    ingredients: ["Urad Dal", "White Butter", "Smoked Cinnamon", "Tomato Puree"],
    span: "lg:col-span-1",
  },
  {
    id: 6,
    title: "Nitrogen Flame Gelato",
    category: "Nitrogen Sweets",
    badges: ["Interactive Counter", "Dessert"],
    rating: "5.0",
    spice: "Sweet Chill",
    course: "Course 7: Desserts",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80",
    description: "Artisanal gelato frozen instantly at -196°C using liquid nitrogen before your eyes with warm fudge topping.",
    ingredients: ["Whole Milk", "Belgian Chocolate", "Liquid Nitrogen", "Waffle"],
    span: "lg:col-span-2",
  },
];

export default function DishShowcase({ onSelectDish }) {
  const [activeTab, setActiveTab] = useState("All");
  const containerRef = useRef(null);

  const categories = ["All", "Charcoal Skewers", "Wood-Fired Kebabs", "Royal Curries", "Nitrogen Sweets"];

  const filteredDishes =
    activeTab === "All"
      ? dishesData
      : dishesData.filter((d) => d.category === activeTab);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".dish-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [activeTab] }
  );

  return (
    <section id="dishes" ref={containerRef} className="relative py-28 bg-[#0c120e] text-[#d8c29d] overflow-hidden">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#d8c29d]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c29d]/30 bg-[#161c18]/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#e07a2b]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c29d]">
              Curated Masterpieces
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Staggered <span className="italic text-[#d8c29d]">Culinary</span> Showcase
          </h2>

          <p className="text-base text-[#8e9f93] font-light leading-relaxed">
            Asymmetrical arrangement of signature delicacies flame-grilled over live tabletop coals.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-[#d8c29d] text-[#0c120e] shadow-lg shadow-[#d8c29d]/20"
                    : "border border-white/10 bg-[#161c18]/60 text-[#8e9f93] hover:border-[#d8c29d]/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Grid with Circular Cutouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className={`dish-card glass-card group cursor-pointer relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row lg:flex-col items-center gap-6 transition-all duration-500 hover:-translate-y-2 ${dish.span}`}
            >
              {/* Circular Transparent Cutout Dish Frame */}
              <div className="relative h-44 w-44 sm:h-48 sm:w-48 shrink-0 overflow-hidden rounded-full border-2 border-[#d8c29d]/40 p-1.5 shadow-2xl bg-[#0c120e]">
                <div className="relative h-full w-full overflow-hidden rounded-full transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e]/60 via-transparent to-black/20" />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-3 text-center sm:text-left lg:text-center">
                <div className="flex flex-wrap items-center justify-center sm:justify-start lg:justify-center gap-1.5">
                  {dish.badges.map((b, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#e07a2b]/20 border border-[#e07a2b]/40 px-3 py-1 text-[10px] font-semibold text-[#e07a2b]"
                    >
                      {b}
                    </span>
                  ))}
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                    <Star className="h-3.5 w-3.5 fill-amber-400" /> {dish.rating}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#d8c29d] transition-colors leading-snug">
                  {dish.title}
                </h3>

                <p className="text-xs text-[#8e9f93] font-light leading-relaxed line-clamp-2">
                  {dish.description}
                </p>

                <div className="pt-2 flex items-center justify-center sm:justify-start lg:justify-center gap-2 text-xs font-semibold text-[#d8c29d]">
                  <Flame className="h-3.5 w-3.5 text-[#e07a2b]" />
                  <span>{dish.spice}</span>
                  <span className="text-[#8e9f93] font-normal">• {dish.course}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
