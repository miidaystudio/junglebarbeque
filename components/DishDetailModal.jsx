"use client";

import { X, Flame, Star, Utensils, Sparkles, Heart } from "lucide-react";

export default function DishDetailModal({ dish, onClose, onBookTable }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="glass-card relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#E07A2B]/40 bg-[#0B1E13] text-[var(--jb-cream)] shadow-2xl">
        {/* Header Image banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1A1614]">
          <img
            src={dish.image}
            alt={dish.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E13] via-[#0B1E13]/40 to-transparent" />

          {/* Badges overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {dish.badges?.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-full border border-[#E07A2B]/50 bg-[#0B1E13]/80 px-3 py-1 text-xs font-bold text-[#E07A2B] backdrop-blur-md"
              >
                <Flame className="h-3 w-3" /> {badge}
              </span>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-[#E07A2B] hover:text-white transition-all backdrop-blur-md"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="eyebrow text-[#E07A2B] font-bold">{dish.category}</span>
            <h2 className="font-display text-2xl font-bold sm:text-3xl text-white mt-0.5">
              {dish.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-[#1A1614]/70 p-4 text-center">
            <div>
              <span className="text-xs text-white/60 block uppercase font-medium">Spice Level</span>
              <span className="text-sm font-bold text-[#E07A2B] mt-0.5 inline-block">
                {dish.spice || "Balanced 🔥"}
              </span>
            </div>
            <div className="border-x border-white/10">
              <span className="text-xs text-white/60 block uppercase font-medium">Rating</span>
              <div className="flex items-center justify-center gap-1 mt-0.5 text-sm font-bold text-amber-400">
                <Star className="h-4 w-4 fill-amber-400" /> {dish.rating || "4.9"}
              </div>
            </div>
            <div>
              <span className="text-xs text-white/60 block uppercase font-medium">Buffet Course</span>
              <span className="text-sm font-bold text-emerald-400 mt-0.5 inline-block">
                {dish.course || "Unlimited Course"}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#E07A2B] mb-2 flex items-center gap-1.5">
              <Utensils className="h-4 w-4" /> Chef&rsquo;s Tasting Notes
            </h3>
            <p className="text-sm leading-relaxed text-[var(--jb-cream-muted)]">
              {dish.description}
            </p>
          </div>

          {/* Ingredients list tags */}
          {dish.ingredients && (
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/70 mb-2">
                Key Spices & Marinade
              </h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                if (onBookTable) onBookTable();
              }}
              className="btn-ember flex-1 flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
            >
              <Sparkles className="h-4 w-4" /> Reserve Table to Taste
            </button>
            <button
              onClick={onClose}
              className="btn-outline-cream px-6 py-3.5 rounded-xl text-sm font-semibold"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
