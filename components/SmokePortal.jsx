"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapSetup";
import { Flame, Trees, Sparkles, Compass } from "lucide-react";

export default function SmokePortal({ onOpenBooking }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1,
        },
      });

      // 1. Background image zooms out from scale 1.25 down to scale 1.0
      tl.fromTo(
        "#portal-bg",
        { scale: 1.28 },
        { scale: 1.0, ease: "none", duration: 1 }
      )
        // 2. Dissolve smoke cloud layers
        .fromTo(
          "#smoke-layer-1",
          { opacity: 0.95 },
          { opacity: 0.1, ease: "none", duration: 0.8 },
          0
        )
        .fromTo(
          "#smoke-layer-2",
          { opacity: 0.85, scale: 1.15 },
          { opacity: 0, scale: 1.0, ease: "none", duration: 0.9 },
          0
        )
        // 3. Stagger reveal title & content
        .fromTo(
          "#portal-badge",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.4 },
          0.3
        )
        .fromTo(
          "#portal-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.4
        )
        .fromTo(
          "#portal-desc",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.4 },
          0.6
        )
        .fromTo(
          "#portal-cta",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4 },
          0.7
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0c120e] text-[#d8c29d]"
    >
      {/* 1. Architectural Interior Image (#portal-bg) */}
      <div id="portal-bg" className="absolute inset-0 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Jungle Barbeque Architectural Botanical Canopy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Dark Gradient Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c120e] via-[#0c120e]/60 to-black/40" />
      </div>

      {/* 2. Smoke Cloud Overlay Layer 1 */}
      <div
        id="smoke-layer-1"
        className="pointer-events-none absolute inset-0 bg-radial from-[#161c18]/90 via-[#0c120e]/95 to-[#0c120e]"
      />

      {/* 3. Smoke Cloud Overlay Layer 2 */}
      <div
        id="smoke-layer-2"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e07a2b]/20 via-[#161c18]/80 to-[#0c120e]"
      />

      {/* 4. Foreground Pinned Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl space-y-6">
          
          {/* Badge */}
          <div id="portal-badge" className="inline-flex items-center gap-2 rounded-full border border-[#d8c29d]/30 bg-[#161c18]/80 px-4 py-1.5 backdrop-blur-md">
            <Flame className="h-4 w-4 text-[#e07a2b] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c29d]">
              The Live-Fire Botanical Sanctuary
            </span>
          </div>

          {/* Headline */}
          <h2
            id="portal-title"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Step Through the Smoke <br />
            <span className="italic text-[#d8c29d]">into the Canopy.</span>
          </h2>

          {/* Description */}
          <p
            id="portal-desc"
            className="mx-auto max-w-2xl text-base sm:text-xl text-[#8e9f93] font-light leading-relaxed"
          >
            An architectural immersion where wood-fired charcoal smoke rises beneath lush botanical ceilings, serving 100+ fine-dining delicacies directly to your table.
          </p>

          {/* CTA & Stats Pill */}
          <div id="portal-cta" className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="btn-sand rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c120e] shadow-2xl"
            >
              Reserve Sanctuary Table
            </button>
            <div className="flex items-center gap-3 rounded-full border border-[#d8c29d]/20 bg-[#161c18]/60 px-5 py-3 text-xs text-[#8e9f93] backdrop-blur-md">
              <Compass className="h-4 w-4 text-[#d8c29d]" />
              <span>Tabletop Charcoal Beds • Unlimited 7-Course Feast</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
