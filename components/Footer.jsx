"use client";

import { useState } from "react";
import { Flame, MapPin, Phone, Mail, Clock, Send, Heart, CheckCircle2, Globe } from "lucide-react";

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#1A1614] pt-20 pb-10 text-[var(--jb-cream)] border-t border-[#E07A2B]/30 overflow-hidden">
      {/* Top Ember Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E07A2B] to-transparent shadow-[0_0_15px_#E07A2B]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA Section */}
        <div className="mb-16 rounded-3xl border border-white/10 bg-[#0B1E13]/90 p-8 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-3.5 py-1 text-xs font-bold text-[#E07A2B] uppercase tracking-widest mb-2">
                <Flame className="h-3.5 w-3.5 animate-pulse" /> VIP Buffet Club
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Get Exclusive Offers & Private Dining Invites
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--jb-cream-muted)]">
                Subscribe to receive seasonal menu launches, weekend discount passes, and anniversary coupons.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/60 p-4 text-emerald-300 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>Welcome to the Jungle BBQ VIP Club! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full flex-1 rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3.5 text-xs text-white placeholder-white/40 outline-none focus:border-[#E07A2B] transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn-ember flex items-center justify-center gap-2 shrink-0 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    <Send className="h-4 w-4" /> Join Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#E07A2B] to-[#C45E12] p-2 shadow-lg shadow-[#E07A2B]/30">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  JUNGLE <span className="text-[#E07A2B]">BARBEQUE</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[var(--jb-cream-muted)] mt-0.5">
                  7-Course Buffet Experience
                </span>
              </div>
            </a>

            <p className="text-xs text-[var(--jb-cream-muted)] leading-relaxed max-w-sm">
              North India&rsquo;s premier jungle-themed buffet featuring embedded tabletop charcoal grills, live chaat counters, and a grand 100+ item spread.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Open Today: 12:00 PM – 11:30 PM (All Outlets)
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-[#E07A2B] hover:text-[#E07A2B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-[#E07A2B] hover:text-[#E07A2B] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.847 9 4.857V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:border-[#E07A2B] hover:text-[#E07A2B] transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Outlets */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Restaurant Outlets
            </h4>
            <ul className="space-y-3 text-xs text-[var(--jb-cream-muted)]">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Logix Mall, Noida</strong>
                  3rd Floor, Sector 34, Noida, UP
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Connaught Place, Delhi</strong>
                  Block M, Outer Circle, New Delhi
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Cyber Hub, Gurugram</strong>
                  Building 10, DLF Phase 2, Gurugram
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--jb-cream-muted)]">
              <li>
                <a href="#home" className="hover:text-[#E07A2B] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-[#E07A2B] transition-colors">
                  7-Course Menu
                </a>
              </li>
              <li>
                <a href="#dishes" className="hover:text-[#E07A2B] transition-colors">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#E07A2B] transition-colors">
                  Canopy Story
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#E07A2B] transition-colors">
                  Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Inquiries */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Timings & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-[var(--jb-cream-muted)]">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Lunch Session</strong>
                  12:00 PM – 04:00 PM
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dinner Session</strong>
                  07:00 PM – 11:30 PM
                </div>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Phone className="h-4 w-4 text-[#E07A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Inquiry / Helpline</strong>
                  <a href="tel:+919266910090" className="hover:text-[#E07A2B] font-mono">
                    +91 92669 10090
                  </a>
                </div>
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="btn-ember mt-4 w-full rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider text-white"
            >
              Book A Table
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Jungle Barbeque. All Rights Reserved. Crafted with passion.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Hygiene Certification
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
