"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { Sparkles, Clock, Calendar, ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "Featured Story",
    date: "Aug 2026",
    readTime: "3 min read",
    title: "The Secret Behind Our 14-Hour Oak Wood Smoking",
    summary:
      "Explore how our pitmasters marinate succulent cuts in wild mountain herbs and slow-smoke them over oak wood charcoal.",
    img: "/n1.jpg",
    fallbacks: [
      "/news-1.png",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    category: "Chef's Special",
    date: "Aug 2026",
    readTime: "4 min read",
    title: "Weekend Live Barbeque: The 7-Course Sizzling Experience",
    summary:
      "Unveil the weekend buffet ritual featuring live tandoori skewers, custom pani puri counters, and nitrogen ice cream finales.",
    img: "/n2.jpg",
    fallbacks: [
      "/news-2.png",
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    category: "Farm to Table",
    date: "Aug 2026",
    readTime: "2 min read",
    title: "Botanical Herbs & Mountain Marinades: Our Kitchen Secrets",
    summary:
      "Discover the fresh herbs, micro-greens, and cold-pressed oil dressings hand-picked daily for our signature salad bars.",
    img: "/r2.jpg",
    fallbacks: [
      "/r2.png",
      "/recipe-2.png",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

function NewsCard({ item, onOpenBooking }) {
  const [imgSrc, setImgSrc] = useState(item.img);
  const [fallbackStep, setFallbackStep] = useState(0);
  const cardRef = useRef(null);

  const handleImageError = () => {
    if (fallbackStep < item.fallbacks.length) {
      setImgSrc(item.fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const imgEl = cardRef.current.querySelector(".news-card-img");
      const arrowEl = cardRef.current.querySelector(".news-card-arrow");
      if (imgEl) {
        animate(imgEl, {
          scale: 1.06,
          duration: 400,
          ease: "outQuad",
        });
      }
      if (arrowEl) {
        animate(arrowEl, {
          rotate: 45,
          backgroundColor: "#e5b567",
          color: "#070e0a",
          duration: 300,
          ease: "outQuad",
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      const imgEl = cardRef.current.querySelector(".news-card-img");
      const arrowEl = cardRef.current.querySelector(".news-card-arrow");
      if (imgEl) {
        animate(imgEl, {
          scale: 1,
          duration: 400,
          ease: "outQuad",
        });
      }
      if (arrowEl) {
        animate(arrowEl, {
          rotate: 0,
          backgroundColor: "#1b2b20",
          color: "#e5b567",
          duration: 300,
          ease: "outQuad",
        });
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenBooking}
      className="news-card-item opacity-0 group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] hover:border-[#e5b567]/40 rounded-[32px] p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer"
    >
      {/* Frameless Image Showcase */}
      <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-black/40 mb-6 shadow-inner">
        <div className="news-card-img relative w-full h-full">
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            onError={handleImageError}
          />
        </div>
        
        {/* Soft Vignette Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a]/80 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="rounded-full bg-[#e5b567]/20 border border-[#e5b567]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#e5b567] backdrop-blur-md">
            {item.category}
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-mono text-neutral-300 backdrop-blur-md border border-white/10 flex items-center gap-1">
            <Clock className="h-3 w-3 text-[#e5b567]" /> {item.readTime}
          </span>
        </div>

        {/* Date Chip */}
        <span className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1">
          <Calendar className="h-3 w-3 text-[#e5b567]" /> {item.date}
        </span>
      </div>

      {/* Card Info & Summary */}
      <div className="space-y-3 text-left flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#f4ede4] group-hover:text-[#e5b567] transition-colors leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3 mb-6">
            {item.summary}
          </p>
        </div>

        {/* Bottom Action Strip */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors duration-300">
            Read Full Article
          </span>
          <div className="news-card-arrow w-10 h-10 rounded-full bg-[#1b2b20] border border-[#e5b567]/30 flex items-center justify-center text-[#e5b567] shadow-md transition-all">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LatestNewsSection({ onOpenBooking }) {
  const containerRef = useRef(null);

  // anime.js v4 Scroll & Stagger Sequence using IntersectionObserver
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;

            // 1. Header Reveal
            animate(".news-header-anim", {
              translateY: [40, 0],
              opacity: [0, 1],
              delay: stagger(100),
              duration: 900,
              ease: "outExpo",
            });

            // 2. Staggered 3-Card Entrance
            animate(".news-card-item", {
              translateY: [60, 0],
              opacity: [0, 1],
              delay: stagger(180, { start: 200 }),
              duration: 900,
              ease: "outCubic",
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="news-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#060e09]/70 text-[#f4ede4] overflow-hidden select-none border-t border-white/5"
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="news-header-anim opacity-0 inline-flex items-center gap-2 rounded-full border border-[#e5b567]/30 bg-[#121c15]/80 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#e5b567]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e5b567]">
              UPDATES & STORIES
            </span>
          </div>

          <h2 className="news-header-anim opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] tracking-tight">
            LATEST <span className="italic text-[#e5b567]">NEWS & JOURNAL</span>
          </h2>

          <p className="news-header-anim opacity-0 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-lg mx-auto">
            Stories from our pits, seasonal botanical harvest updates, and culinary inspirations directly from our master chefs.
          </p>
        </div>

        {/* 3-Card Asymmetric Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} onOpenBooking={onOpenBooking} />
          ))}
        </div>

        {/* Bottom View All Action */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-[#e5b567] text-[#08130c] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-[#e5b567]/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>VIEW ALL JOURNAL ARTICLES</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
