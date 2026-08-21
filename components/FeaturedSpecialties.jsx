"use client";

import { useRef } from "react";
import { Flame, ChevronLeft, ChevronRight, Sparkles, Utensils, Award } from "lucide-react";

const courses = [
  {
    step: "01",
    title: "Live Tabletop Barbeque",
    tagline: "Unlimited Skewers Grilled Right at Your Table",
    description: "Juicy chicken tikka, charcoal-roasted paneer, spicy prawns, and seasoned corn skewers kept warm over live embedded embers.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "Unlimited Starters",
    highlights: ["Flame-grilled at table", "12+ Marinade Flavors", "Veg & Non-Veg Skewers"],
  },
  {
    step: "02",
    title: "Wood-Fired Kebabs",
    tagline: "Clay Oven Tandoori Masterpieces",
    description: "Handcrafted Seekh Kebabs, Galouti Melt-in-mouth delicacies, and tandoori mushrooms prepared fresh by pitmasters.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    badge: "Pitmaster Special",
    highlights: ["Clay Oven Roasted", "Authentic Spices", "Served Sizzling"],
  },
  {
    step: "03",
    title: "Live Chaat & Street Counter",
    tagline: "Crispy, Tangy Indian Delights",
    description: "Customized Gol Gappe with 5 flavored waters, Dahi Puri, Crispy Corn Chaat, and live pav bhaji prepared on order.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    badge: "Live Counter",
    highlights: ["Custom Spice Levels", "Freshly Assembled", "5 Water Flavors"],
  },
  {
    step: "04",
    title: "Gourmet Main Course",
    tagline: "Slow-Cooked Curries & Royal Recipes",
    description: "Rich Dal Makhani simmered overnight, signature Jungle Mutton Curry, Kadhai Paneer, and fragrant saffron Dum Biryani.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    badge: "Lavish Buffet",
    highlights: ["Slow-Simmered Gravies", "Chef Signature Curry", "Unlimited Servings"],
  },
  {
    step: "05",
    title: "Artisanal Breads & Rice",
    tagline: "Hot Naans & Fragrant Basmati",
    description: "Butter-dripping Garlic Naans, Chur Chur Naan, Laccha Paratha, and Hyderabadi Dum Biryani served straight from the tandoor.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    badge: "Made Fresh",
    highlights: ["Tandoor Fresh", "Stuffed Options", "Pure Ghee Glaze"],
  },
  {
    step: "06",
    title: "Tropical Mocktails & Coolers",
    tagline: "Refreshed Botanical Blends",
    description: "Handcrafted Jungle Passion Mojitos, Smoked Chili Lemonade, Green Apple Spritzers, and cooling Khas Soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    badge: "Unlimited Drinks",
    highlights: ["Crushed Fresh Mint", "Botanical Syrups", "Chilled Spritzers"],
  },
  {
    step: "07",
    title: "Dessert Oasis & Live Gelato",
    tagline: "Sweet Finale & Liquid Nitrogen Delights",
    description: "Warm Gulab Jamuns, Belgian Chocolate Fondue with Marshmallows, Live Nitrogen Ice Creams, and assorted pastries.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    badge: "Grand Finale",
    highlights: ["Live Ice Cream Counter", "Chocolate Fondue", "15+ Sweet Treats"],
  },
];

export default function FeaturedSpecialties({ onOpenBooking }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="specialties" className="relative py-24 bg-[#0B1E13] overflow-hidden">
      {/* Background Decorative glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#E07A2B]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-3.5 py-1 text-xs font-bold text-[#E07A2B] uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5" /> The Culinary Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              The <span className="text-[#E07A2B] italic">7-Course</span> Jungle Buffet
            </h2>
            <p className="mt-3 text-base text-[var(--jb-cream-muted)] max-w-xl">
              From live tabletop grills to liquid nitrogen desserts, explore every phase of our signature dining ritual.
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 hover:border-[#E07A2B] hover:bg-[#E07A2B] hover:text-white transition-all shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 hover:border-[#E07A2B] hover:bg-[#E07A2B] hover:text-white transition-all shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((item) => (
            <div
              key={item.step}
              className="glass-card group relative min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-[#1A1614]/80 p-5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#E07A2B]/50"
            >
              {/* Image banner */}
              <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-black mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-transparent to-black/40" />

                {/* Step indicator */}
                <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1E13]/90 font-display text-sm font-bold text-[#E07A2B] border border-[#E07A2B]/30 backdrop-blur-md">
                  {item.step}
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 rounded-full bg-[#E07A2B] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  {item.badge}
                </div>
              </div>

              {/* Text Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#E07A2B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#E07A2B] mt-1">{item.tagline}</div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--jb-cream-muted)]">
                    {item.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] font-medium text-white/70"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 rounded-3xl border border-[#E07A2B]/30 bg-gradient-to-r from-[#1A1614] via-[#0B1E13] to-[#133825] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E07A2B]/20 text-[#E07A2B] border border-[#E07A2B]/40 shrink-0">
              <Award className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-white">All 7 Courses Included in One Single Price</h4>
              <p className="text-xs text-[var(--jb-cream-muted)] mt-1">
                No hidden charges. Enjoy unlimited refills across all live grills, main buffets, and desserts.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn-ember shrink-0 rounded-2xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            Reserve Buffet Table
          </button>
        </div>

      </div>
    </section>
  );
}
