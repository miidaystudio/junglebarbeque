"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";
import DishPlate from "./DishPlate";

const ARTICLES = [
  {
    title: "Tasty Food For You",
    variant: "grill",
    copy: "Tasty Food For You offers a vibrant menu with fresh, flavorful dishes catering to various tastes. Enjoy a cozy ambiance and exceptional service for a delightful dining experience.",
  },
  {
    title: "Breakfast For You",
    variant: "noodles",
    copy: "Breakfast For You serves a delicious variety of morning favorites, from hearty classics to healthy options. Enjoy fresh ingredients, cozy vibes, and friendly service to start your day right.",
  },
];

export default function LatestNews() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const addCard = (el) => el && cardsRef.current.push(el);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="news" ref={sectionRef} className="bg-white px-6 pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--jb-canopy)] sm:text-4xl">
          Latest News
        </h2>
        <div className="rule mx-auto mt-4" />

        <div className="mt-14 grid grid-cols-1 gap-10 text-left sm:grid-cols-2">
          {ARTICLES.map((a, i) => (
            <article
              key={a.title}
              ref={addCard}
              className={`overflow-hidden rounded-3xl bg-[var(--jb-mist)] shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                i === 1 ? "sm:mt-10" : ""
              }`}
            >
              <div className="flex aspect-[16/10] items-center justify-center bg-[var(--jb-canopy)]/5">
                <DishPlate variant={a.variant} ring={false} size={180} className="h-28 w-28 sm:h-36 sm:w-36" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-medium text-[var(--jb-canopy)]">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--jb-ink)]/70">
                  {a.copy}
                </p>
                <button
                  aria-label={`Read more about ${a.title}`}
                  className="mx-auto mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--jb-canopy)] text-[var(--jb-gold)]"
                >
                  →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
