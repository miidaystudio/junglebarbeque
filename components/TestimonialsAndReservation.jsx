"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsapSetup";
import { Star, ChevronLeft, ChevronRight, Quote, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, Flame } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Dr. Ananya Roy",
    role: "Food & Lifestyle Critic",
    outlet: "Noida Sector 34",
    comment: "The live tabletop charcoal grill combined with the botanical sanctuary atmosphere makes Jungle Barbeque the most captivating buffet experience in Delhi NCR.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  },
  {
    id: 2,
    name: "Karan Malhotra",
    role: "Corporate Executive",
    outlet: "Cyber Hub Gurugram",
    comment: "Hosted our annual leadership dinner here. The Mutton Galouti Kebabs and Liquid Nitrogen dessert counter were absolute highlights!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
  },
  {
    id: 3,
    name: "Meera & Siddharth",
    role: "Anniversary Diners",
    outlet: "Connaught Place Delhi",
    comment: "Flawless hospitality, warm ambient lighting, and endless refills on fresh skewers right at your table. Simply unmatched!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
  },
];

export default function TestimonialsAndReservation() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [formData, setFormData] = useState({
    outlet: "Logix Mall, Noida Sector 34",
    date: new Date().toISOString().split("T")[0],
    time: "07:30 PM",
    guests: "2 Diners",
    name: "",
    phone: "",
    specialRequest: "",
  });

  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#reservation-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: "#reservation-card",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const nextReview = () => setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const currentReview = reviews[activeReviewIndex];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const randomRef = "JB-LUX-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  return (
    <section ref={containerRef} className="relative py-28 bg-[#0c120e] text-[#d8c29d] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-[#e07a2b]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* PART 1: Horizontal Glassmorphic Review Slider */}
        <div className="space-y-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c29d]/30 bg-[#161c18]/80 px-4 py-1.5 backdrop-blur-md">
            <Quote className="h-4 w-4 text-[#d8c29d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d8c29d]">
              Verified Guest Impressions
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Acclaimed by <span className="italic text-[#d8c29d]">Connoisseurs</span>
          </h2>

          <div className="glass-card relative max-w-4xl mx-auto overflow-hidden rounded-3xl p-8 sm:p-12 text-left shadow-2xl border border-[#d8c29d]/20">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar */}
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#d8c29d] p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="font-serif text-lg sm:text-xl font-medium italic text-white leading-relaxed">
                  &ldquo;{currentReview.comment}&rdquo;
                </p>

                <div>
                  <div className="font-serif text-lg font-bold text-[#d8c29d]">{currentReview.name}</div>
                  <div className="text-xs text-[#8e9f93]">{currentReview.role} • {currentReview.outlet}</div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeReviewIndex === idx ? "w-8 bg-[#d8c29d]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevReview}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c29d]/20 bg-[#161c18] text-white hover:bg-[#d8c29d] hover:text-[#0c120e] transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c29d]/20 bg-[#161c18] text-white hover:bg-[#d8c29d] hover:text-[#0c120e] transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* PART 2: Embedded Table Reservation System */}
        <div id="reservation-card" className="max-w-4xl mx-auto">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-[#d8c29d]/30 bg-[#161c18]/90 shadow-2xl">
            
            <div className="mb-8 text-center space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e07a2b]/40 bg-[#e07a2b]/10 px-3.5 py-1 text-xs font-bold text-[#e07a2b]">
                <Flame className="h-3.5 w-3.5 animate-pulse" /> Live Tabletop Charcoal Grills
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Reserve Your Sanctuary Table
              </h3>
              <p className="text-xs sm:text-sm text-[#8e9f93]">
                Instant reservation confirmation. Complimentary welcome botanical drink included.
              </p>
            </div>

            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Outlet */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93]">
                      <MapPin className="h-3.5 w-3.5 text-[#d8c29d]" /> Outlet Location
                    </label>
                    <select
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white outline-none focus:border-[#d8c29d]"
                    >
                      <option value="Logix Mall, Noida Sector 34">Logix Mall, Noida Sector 34</option>
                      <option value="Connaught Place, Delhi">Connaught Place, Delhi</option>
                      <option value="Cyber Hub, Gurugram">Cyber Hub, Gurugram</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93]">
                      <Calendar className="h-3.5 w-3.5 text-[#d8c29d]" /> Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white outline-none focus:border-[#d8c29d]"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93]">
                      <Clock className="h-3.5 w-3.5 text-[#d8c29d]" /> Time Slot
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white outline-none focus:border-[#d8c29d]"
                    >
                      <option value="12:30 PM">12:30 PM (Lunch)</option>
                      <option value="02:00 PM">02:00 PM (Lunch Prime)</option>
                      <option value="07:30 PM">07:30 PM (Dinner)</option>
                      <option value="09:15 PM">09:15 PM (Dinner Prime)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93]">
                      <Users className="h-3.5 w-3.5 text-[#d8c29d]" /> Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white outline-none focus:border-[#d8c29d]"
                    >
                      <option value="2 Diners">2 Diners</option>
                      <option value="4 Diners">4 Diners</option>
                      <option value="6 Diners">6 Diners</option>
                      <option value="8+ Large Group">8+ Large Group</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93] block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white placeholder-white/40 outline-none focus:border-[#d8c29d]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#8e9f93] block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#0c120e] px-4 py-3 text-xs text-white placeholder-white/40 outline-none focus:border-[#d8c29d]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-sand w-full rounded-xl py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0c120e] shadow-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" /> Confirm Table Booking
                </button>
              </form>
            ) : (
              /* Confirmation View */
              <div className="py-6 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8c29d]/20 text-[#d8c29d] border border-[#d8c29d]">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="font-serif text-3xl font-bold text-white">Reservation Confirmed!</h4>
                <p className="text-xs text-[#8e9f93]">
                  Your table at Jungle Barbeque has been secured. A confirmation SMS & WhatsApp message has been sent to {formData.phone}.
                </p>

                <div className="my-4 rounded-2xl border border-white/10 bg-[#0c120e] p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#8e9f93]">Reference Code:</span>
                    <span className="font-mono font-bold text-[#d8c29d]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#8e9f93]">Guest Name:</span>
                    <span className="text-white font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#8e9f93]">Outlet:</span>
                    <span className="text-white font-medium">{formData.outlet}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e9f93]">Date & Slot:</span>
                    <span className="text-white font-medium">{formData.date} at {formData.time} ({formData.guests})</span>
                  </div>
                </div>

                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="btn-outline-sand px-6 py-2.5 rounded-xl text-xs font-semibold"
                >
                  Make Another Reservation
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
