"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function ReservationFooterSection() {
  const containerRef = useRef(null);

  const [bgImgSrc, setBgImgSrc] = useState("/interior.png");
  const [fallbackStep, setFallbackStep] = useState(0);

  const fallbacks = [
    "/interior.jpg",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  ];

  const handleBgError = () => {
    if (fallbackStep < fallbacks.length) {
      setBgImgSrc(fallbacks[fallbackStep]);
      setFallbackStep((prev) => prev + 1);
    }
  };

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [bookingData, setBookingData] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "07:30 PM",
    guests: "2 Diners",
    name: "",
    phone: "",
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const randomId = "JB-MB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomId);
    setBookingConfirmed(true);
  };

  return (
    <section ref={containerRef} id="reservation-section" className="relative text-[#f4ede4] overflow-hidden select-none">
      
      {/* Full-Bleed Ambient Restaurant Photography Backdrop */}
      <div className="relative py-28 px-6 md:px-14 lg:px-20 min-h-[600px] flex items-center justify-center">
        <Image
          src={bgImgSrc}
          alt="Jungle Barbeque Interior Sanctuary"
          fill
          sizes="100vw"
          className="object-cover"
          onError={handleBgError}
          priority
        />
        {/* Soft Dark Matte Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/90 via-[#0d0f0e]/85 to-[#070e0a]" />

        {/* Interactive Reservation Form Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="font-serif italic text-2xl text-[#d4af37]">Reservation</span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight mb-8">
            Book Your Table
          </h2>

          <div className="bg-[#121212]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.8)] text-left">
            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                      Dining Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full bg-[#0d0f0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                      Timing Slot
                    </label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full bg-[#0d0f0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#d4af37]"
                    >
                      <option value="12:30 PM">12:30 PM (Lunch Prime)</option>
                      <option value="02:00 PM">02:00 PM (Lunch)</option>
                      <option value="07:30 PM">07:30 PM (Dinner Prime)</option>
                      <option value="09:15 PM">09:15 PM (Dinner)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                      Party Size
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                      className="w-full bg-[#0d0f0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#d4af37]"
                    >
                      <option value="2 Diners">2 Diners</option>
                      <option value="4 Diners">4 Diners</option>
                      <option value="6 Diners">6 Diners</option>
                      <option value="8+ Large Group">8+ Large Group</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vinay Sachdeva"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full bg-[#0d0f0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 93249 97412"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="w-full bg-[#0d0f0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#d4af37] text-[#121212] font-bold text-xs uppercase tracking-[0.25em] hover:bg-white transition-all duration-300 shadow-xl cursor-pointer"
                >
                  CONFIRM ONLINE BOOKING
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 mx-auto text-[#d4af37]" />
                <h4 className="font-serif text-3xl text-white">RESERVATION CONFIRMED</h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Your table at Jungle Barbeque (Kandivali West) has been reserved. Booking ID: <span className="font-mono text-[#d4af37] font-bold">{bookingRef}</span>.
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs text-neutral-300 uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 4-Column Editorial Minimal Footer */}
      <footer id="footer-contact" className="pt-20 pb-12 px-6 md:px-14 lg:px-20 bg-[#070e0a] text-neutral-400 text-xs border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-left">
          
          {/* Col 1: Brand & Heritage */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif text-2xl text-[#d4af37] font-semibold">Jungle Barbeque</h3>
            <p className="leading-relaxed text-neutral-400 max-w-sm">
              An authentic culinary journey of live tabletop grilling, 7-course buffet dining, and botanical sanctuary ambiance.
            </p>
            <p className="text-neutral-300 flex items-start gap-2 pt-2">
              <MapPin className="h-4 w-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <span>2nd Floor, Raghuleela Mega Mall, Behind Poisar Bus Depot, Kandivali West, Mumbai 400067</span>
            </p>
          </div>

          {/* Col 2: Working Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold mb-2">Working Hours</h4>
            <div className="space-y-1.5 text-neutral-300">
              <p className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>Monday – Sunday</span>
              </p>
              <p className="font-mono text-white text-xs pl-5">12:00 PM – 11:30 PM</p>
            </div>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold mb-2">Contact & Bookings</h4>
            <p className="flex items-center gap-2 text-neutral-300">
              <Phone className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>+91 93249 97412</span>
            </p>
            <p className="flex items-center gap-2 text-neutral-300">
              <Mail className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>info@junglebarbeque.com</span>
            </p>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-[11px] text-neutral-500">
          © 2026 Jungle Barbeque. All rights reserved. Kandivali West, Mumbai.
        </div>
      </footer>

    </section>
  );
}
