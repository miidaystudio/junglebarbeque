"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import DishPlate from "./DishPlate";

const MEALS = [
  { title: "Breakfast", variant: "noodles" },
  { title: "Lunch", variant: "platter" },
  { title: "Dinner", variant: "grill" },
];

export default function PopularRecipes() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const addCard = (el) => el && cardsRef.current.push(el);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="recipes" ref={sectionRef} className="bg-white px-6 pb-24 pt-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--jb-canopy)] sm:text-4xl">
          Our Best Popular Recipes
        </h2>
        <div className="rule mx-auto mt-4" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {MEALS.map((m) => (
            <div key={m.title} ref={addCard} className="group flex flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-3xl bg-[var(--jb-mist)] shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex aspect-[4/5] items-center justify-center">
                  <DishPlate variant={m.variant} ring={false} size={280} className="h-40 w-40 sm:h-56 sm:w-56" />
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-medium tracking-wide text-[var(--jb-canopy)]">
                {m.title}
              </h3>
              <button
                aria-label={`Explore ${m.title}`}
                className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--jb-canopy)] text-[var(--jb-gold)] transition-transform group-hover:scale-110"
              >
                →
              </button>
            </div>
          ))}
        </div>

        <button className="btn-gold mt-14 rounded-full px-10 py-3.5 text-sm">
          Order Now
        </button>
      </div>
    </section>
  );
}
