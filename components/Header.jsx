"use client";

import { useState, useEffect } from "react";
import { Flame, MapPin, ChevronDown, PhoneCall, Calendar, Menu, X } from "lucide-react";

export default function Header({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("Noida Sector 34");
  const [locationDropdown, setLocationDropdown] = useState(false);

  const locations = [
    { name: "Noida Sector 34", label: "Logix City Centre Mall" },
    { name: "Connaught Place", label: "Outer Circle, CP Delhi" },
    { name: "Cyber Hub", label: "DLF Phase 2, Gurugram" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-nav py-3.5 shadow-2xl shadow-black/60" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d8c29d] to-[#b8a078] p-2 shadow-lg shadow-[#d8c29d]/20 group-hover:scale-105 transition-transform">
              <Flame className="h-6 w-6 text-[#0c120e] animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-[#d8c29d] blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-white sm:text-2xl leading-none">
                JUNGLE <span className="text-[#d8c29d]">BARBEQUE</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#8e9f93] mt-0.5">
                Luxury Botanical Dining
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#8e9f93]">
            <a href="#home" className="hover:text-[#d8c29d] transition-colors">
              Sanctuary
            </a>
            <a href="#specialties" className="hover:text-[#d8c29d] transition-colors">
              7-Course Menu
            </a>
            <a href="#dishes" className="hover:text-[#d8c29d] transition-colors">
              Staggered Showcase
            </a>
            <a href="#story" className="hover:text-[#d8c29d] transition-colors">
              Botanical Story
            </a>
            <a href="#testimonials" className="hover:text-[#d8c29d] transition-colors">
              Reviews
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Location Picker */}
            <div className="relative">
              <button
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[#d8c29d] hover:border-[#d8c29d]/50 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[#e07a2b]" />
                <span>{activeLocation}</span>
                <ChevronDown className="h-3 w-3 text-[#8e9f93]" />
              </button>

              {locationDropdown && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/15 bg-[#161c18]/95 p-2 shadow-2xl backdrop-blur-xl z-50">
                  <div className="px-3 py-1.5 text-[9px] uppercase font-bold tracking-wider text-[#8e9f93]">
                    Select Outlet Location
                  </div>
                  {locations.map((loc) => (
                    <button
                      key={loc.name}
                      onClick={() => {
                        setActiveLocation(loc.name);
                        setLocationDropdown(false);
                      }}
                      className={`w-full rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                        activeLocation === loc.name
                          ? "bg-[#d8c29d]/20 font-bold text-[#d8c29d]"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-semibold">{loc.name}</div>
                      <div className="text-[10px] text-[#8e9f93]">{loc.label}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Helpline */}
            <a
              href="tel:+919266910090"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#d8c29d] hover:border-[#d8c29d] transition-colors"
              aria-label="Call for inquiry"
            >
              <PhoneCall className="h-4 w-4" />
            </a>

            {/* Book Table Button */}
            <button
              onClick={onOpenBooking}
              className="btn-sand flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0c120e]"
            >
              <Calendar className="h-4 w-4" /> Book Table
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-sand rounded-full px-3.5 py-1.5 text-xs font-bold text-[#0c120e]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#d8c29d]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0c120e]/95 px-6 py-6 backdrop-blur-2xl text-left">
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-white">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Sanctuary
            </a>
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="text-[#8e9f93]">
              7-Course Menu
            </a>
            <a href="#dishes" onClick={() => setMobileMenuOpen(false)} className="text-[#8e9f93]">
              Staggered Showcase
            </a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-[#8e9f93]">
              Botanical Story
            </a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-[#8e9f93]">
              Reviews
            </a>

            <div className="mt-4 border-t border-white/10 pt-4 space-y-3">
              <div className="text-[10px] text-[#8e9f93] uppercase tracking-wider font-bold">Select Outlet</div>
              <div className="grid grid-cols-1 gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => {
                      setActiveLocation(loc.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`rounded-xl border p-3 text-left text-xs font-semibold ${
                      activeLocation === loc.name
                        ? "border-[#d8c29d] bg-[#d8c29d]/20 text-[#d8c29d]"
                        : "border-white/10 bg-white/5 text-white/80"
                    }`}
                  >
                    {loc.name} ({loc.label})
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-sand w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider text-[#0c120e] mt-2"
              >
                Book Table Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
