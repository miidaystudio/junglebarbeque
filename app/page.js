"use client";

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import CurvedDishOrbit from "@/components/CurvedDishOrbit";
import OurMenuSection from "@/components/OurMenuSection";
import SocialAppSection from "@/components/SocialAppSection";
import EventsSection from "@/components/EventsSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import ReservationFooterSection from "@/components/ReservationFooterSection";

export default function JungleBarbequePage() {
  const containerRef = useRef(null);

  const scrollToReservation = () => {
    const el = document.getElementById("reservation-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#121212] text-[#f4ede4] overflow-x-hidden font-sans">
      {/* 1. HERO SECTION (3D Hero Food Slider & Navbar) */}
      <section id="hero">
        <HeroSection onOpenBooking={scrollToReservation} />
      </section>

      {/* 2. 3D CURVED DISH INFINITY ORBIT WITH CANVAS FLAME RIPPLE */}
      <CurvedDishOrbit onOpenBooking={scrollToReservation} />

      {/* 3. OUR MENU DIAGONAL ZIG-ZAG SCROLL FLOW & SALT DUST CANVAS */}
      <OurMenuSection onOpenBooking={scrollToReservation} />

      {/* 4. 3D INTERACTIVE SOCIAL APP & CONNECT HUB */}
      <SocialAppSection onOpenBooking={scrollToReservation} />

      {/* 5. UPCOMING EVENTS & WEEKEND BARBEQUE CARD */}
      <EventsSection onOpenBooking={scrollToReservation} />

      {/* 6. LATEST NEWS & JOURNAL SECTION */}
      <LatestNewsSection onOpenBooking={scrollToReservation} />

      {/* 7. FULL-BLEED TABLE RESERVATION & EDITORIAL FOOTER */}
      <ReservationFooterSection />
    </main>
  );
}
