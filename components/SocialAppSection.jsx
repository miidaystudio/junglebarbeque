"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";
import { MessageCircle, QrCode, Sparkles, Star, Flame, Gift } from "lucide-react";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function SocialAppSection({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const phoneContainerRef = useRef(null);

  const [phoneSrc, setPhoneSrc] = useState("/junglebarbeque-mobile.png");
  const [fallbackStep, setFallbackStep] = useState(0);

  const fallbacks = [
    "/phone-mockup.png",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  ];

  const handlePhoneError = () => {
    if (fallbackStep < fallbacks.length) {
      setPhoneSrc(fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  // Local Ambient Canvas Layer (Radial Light Waves & Golden-Sage Dust Particles)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 700;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Floating Dust Particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * (width || 800),
      y: Math.random() * (height || 700),
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle mouse-following ambient radial light
      const grad = ctx.createRadialGradient(
        mouseX || width / 2,
        mouseY || height / 2,
        20,
        mouseX || width / 2,
        mouseY || height / 2,
        350
      );
      grad.addColorStop(0, "rgba(229, 181, 103, 0.08)");
      grad.addColorStop(1, "rgba(8, 19, 12, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render dust particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(229, 181, 103, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP ScrollTrigger & Motion System
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // 1. Left Content Fade-Slide
      tl.from(".social-content-left", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        // 2. Phone 3D Entrance
        .from(
          ".phone-mockup-frame",
          {
            y: 80,
            rotationY: -18,
            rotationX: 8,
            scale: 0.9,
            opacity: 0,
            duration: 1.4,
            ease: "expo.out",
          },
          "-=0.7"
        )
        // 3. Orbiting Glass Badges Pop-in
        .from(
          ".orbit-badge",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );

      // 4. Continuous Float Loop on Phone
      gsap.to(".phone-float-wrapper", {
        y: -12,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  // Magnetic 3D Cursor Tilt
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card._xTo = gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power2.out" });
    card._yTo = gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power2.out" });
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;

    if (card._xTo) card._xTo(rotateY);
    if (card._yTo) card._yTo(rotateX);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    if (card._xTo) card._xTo(0);
    if (card._yTo) card._yTo(0);
  };

  return (
    <section
      ref={containerRef}
      id="follow-app-section"
      className="relative py-28 px-6 md:px-14 lg:px-20 bg-[#060e09] text-[#f4ede4] overflow-hidden select-none border-y border-white/5"
    >
      {/* Background Ambient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN (6 Cols): Typography & Interactive Action Cluster */}
        <div className="social-content-left lg:col-span-6 flex flex-col items-start text-left space-y-8">
          
          {/* Pulse Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e5b567]/30 bg-[#121c15]/80 px-4 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#e5b567] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e5b567]">
              STAY IN THE FLAME
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f4ede4] tracking-tight leading-[1.1]">
            Get the App & <br />
            <span className="italic text-[#e5b567]">Follow the Wild Feast</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
            Follow us on Instagram for daily chef reels, exclusive table booking perks, secret menu reveals, and behind-the-scenes live grill stories.
          </p>

          {/* Interactive Action Cluster */}
          <div className="space-y-4 w-full max-w-md pt-2">
            
            {/* Primary Gold CTA */}
            <a
              href="https://www.instagram.com/junglebarbeque/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#e5b567] text-[#060e09] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-[#e5b567]/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>FOLLOW @JUNGLEBARBEQUE</span>
            </a>

            {/* Glassmorphic WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919324997412"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#25D366]/60 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-[#25D366] flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>RESERVE ON WHATSAPP</span>
              </a>

              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] text-neutral-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mr-2" />
                Avg reply &lt; 5m
              </div>
            </div>

            {/* Quick-Scan Pill */}
            <div
              onClick={onOpenBooking}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center justify-between text-xs cursor-pointer hover:border-[#e5b567]/40 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#e5b567]/15 border border-[#e5b567]/30 flex items-center justify-center text-[#e5b567]">
                  <QrCode className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block">Digital Menu & Table Booking</span>
                  <span className="text-[10px] text-neutral-400">Scan or tap to skip the queue</span>
                </div>
              </div>
              <span className="text-[#e5b567] text-sm">➜</span>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (6 Cols): 3D Interactive Social Phone Showcase */}
        <div
          ref={phoneContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 flex justify-center items-center relative py-6 cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          {/* Phone Float Wrapper */}
          <div className="phone-float-wrapper relative">
            
            {/* iPhone Mockup Frame */}
            <div className="phone-mockup-frame relative w-[280px] sm:w-[320px] h-[540px] sm:h-[600px] rounded-[48px] p-3 bg-gradient-to-b from-[#1a251e] via-[#0d1610] to-[#050906] border-[3px] border-white/15 shadow-[0_35px_80px_rgba(0,0,0,0.95)] overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
              
              {/* Dynamic Screen Container */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#070e0a]">
                <Image
                  src={phoneSrc}
                  alt="Jungle Barbeque Mobile App & Instagram Showcase"
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  onError={handlePhoneError}
                  priority
                />
                
                {/* Soft Screen Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e0a]/80 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>

            {/* Orbiting Glass Badges Around Phone */}
            
            {/* Badge 1 (Top Left) */}
            <div className="orbit-badge absolute -top-4 -left-6 sm:-left-12 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 z-20">
              <Flame className="h-4 w-4 text-[#e07a2b] animate-bounce" />
              <span className="text-[11px] font-semibold text-white tracking-wide">
                50k+ Forest Foodies
              </span>
            </div>

            {/* Badge 2 (Middle Right) */}
            <div className="orbit-badge absolute top-1/3 -right-6 sm:-right-12 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 z-20">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <div className="text-left">
                <span className="text-[11px] font-bold text-white block">4.9 Star Rating</span>
                <span className="text-[9px] text-neutral-400">Google & Zomato</span>
              </div>
            </div>

            {/* Badge 3 (Bottom Left) */}
            <div className="orbit-badge absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-2 z-20">
              <Gift className="h-4 w-4 text-[#e5b567]" />
              <span className="text-[11px] font-semibold text-white tracking-wide">
                Weekend Buffet Vouchers
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
