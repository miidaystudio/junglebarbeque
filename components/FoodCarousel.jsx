"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import DishPlate from "./DishPlate";

const DISHES = [
  { variant: "salad", label: "Garden Salad" },
  { variant: "bowl", label: "Buddha Bowl" },
  { variant: "soup", label: "Pumpkin Soup" },
  { variant: "curry", label: "Jungle Curry" },
];

export default function FoodCarousel() {
  const wrapRef = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addItem = (el) => el && itemsRef.current.push(el);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { y: 60, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={wrapRef} className="relative z-10 -mt-16 flex justify-center px-6 sm:-mt-20">
      <div className="flex w-full max-w-4xl items-center justify-between gap-3 sm:gap-6">
        <button
          aria-label="Previous"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--jb-gold)] text-xs font-bold shadow-md"
        >
          ‹
        </button>

        {DISHES.map((d, i) => (
          <div
            key={d.variant}
            ref={addItem}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className={`overflow-hidden rounded-full shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-2 ${
                i % 2 === 1 ? "mt-6" : ""
              }`}
            >
              <DishPlate variant={d.variant} size={110} ring={false} className="h-16 w-16 sm:h-28 sm:w-28" />
            </div>
            <span className="hidden text-xs font-semibold text-[var(--jb-canopy)] sm:block">
              {d.label}
            </span>
          </div>
        ))}

        <button
          aria-label="Next"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--jb-gold)] text-xs font-bold shadow-md"
        >
          ›
        </button>
      </div>
    </div>
  );
}
