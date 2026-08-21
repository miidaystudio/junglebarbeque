"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";

const menuCourses = [
  {
    id: 1,
    tag: "Appetizer",
    title: "Artisan Green & Crisp Dips",
    desc: "Start with our fresh tossed artisan salads, organic micro-greens, and charcoal-roasted pita crisps.",
    img: "/r1.png",
    fallbacks: ["/r1.jpg", "/recipe-1.png", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"],
    align: "left",
  },
  {
    id: 2,
    tag: "Signature Grill",
    title: "Live Sizzling Meat Platter",
    desc: "Prime cutlet skewers seared over embedded table coals with charred lemon, garlic & mountain herbs.",
    img: "/r2.png",
    fallbacks: ["/r2.jpg", "/recipe-2.png", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"],
    align: "right",
  },
  {
    id: 3,
    tag: "Side Dish",
    title: "Wood-Fired Salmon & Veggies",
    desc: "Fresh wild salmon steak, charred cauliflower florets, roasted bell peppers, and avocado cooler.",
    img: "/r3.png",
    fallbacks: ["/r3.jpg", "/recipe-3.png", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"],
    align: "left",
  },
  {
    id: 4,
    tag: "Dessert",
    title: "Live Liquid Nitrogen Finale",
    desc: "Finish your feast with our chef's dessert selection: live -196°C gelato, hot chocolate fondue & pastries.",
    img: "/r1.png",
    fallbacks: ["/r1.jpg", "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"],
    align: "right",
  },
];

function CourseCard({ item, onOpenBooking }) {
  const [imgSrc, setImgSrc] = useState(item.img);
  const [fallbackStep, setFallbackStep] = useState(0);

  const handleImageError = () => {
    if (fallbackStep < item.fallbacks.length) {
      setImgSrc(item.fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  const isLeft = item.align === "left";

  return (
    <div className={`menu-course-item flex flex-col md:flex-row items-center gap-10 lg:gap-14 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} py-10`}>
      {/* Dish Circular Cutout (Larger Size: w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96) */}
      <div
        className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.85)] bg-black/40 flex-shrink-0 group cursor-pointer"
        onClick={onOpenBooking}
      >
        <Image
          src={imgSrc}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Course Text Info */}
      <div className={`flex flex-col ${isLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"} text-center space-y-4 max-w-md`}>
        <span className="font-serif italic text-2xl sm:text-3xl text-[#d4af37]">
          {item.tag}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
          {item.title}
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
          {item.desc}
        </p>
        <button
          onClick={onOpenBooking}
          className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold hover:text-white transition cursor-pointer pt-2"
        >
          ORDER COURSE ⟶
        </button>
      </div>
    </div>
  );
}

export default function OurMenuSection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Scattered Salt/Spice Dust Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 900;
    };
    resize();
    window.addEventListener("resize", resize);

    const dust = Array.from({ length: 40 }, () => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 900),
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dust.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > height) p.y = 0;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP ScrollTrigger Sequence: Diagonal Gliding Courses
  useGSAP(
    () => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const courseItems = gsap.utils.toArray(".menu-course-item");
      courseItems.forEach((item, index) => {
        const isLeft = index % 2 === 0;
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: isLeft ? -80 : 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="menu-flow-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#121212] text-[#f4ede4] overflow-hidden select-none"
    >
      {/* Background Salt/Spice Dust Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="font-serif italic text-2xl text-[#d4af37]">Discover</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
            Our Menu
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            Staggered 7-course live grilling ritual crafted for family gatherings.
          </p>
        </div>

        {/* Diagonal Zig-Zag Courses List */}
        <div className="space-y-16">
          {menuCourses.map((course) => (
            <CourseCard key={course.id} item={course} onOpenBooking={onOpenBooking} />
          ))}
        </div>

        {/* Explore Full Menu Action */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-3 px-9 py-4 rounded-full bg-[#d4af37] text-[#121212] text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>EXPLORE FULL 7-COURSE MENU</span>
            <span>⟶</span>
          </button>
        </div>

      </div>
    </section>
  );
}
