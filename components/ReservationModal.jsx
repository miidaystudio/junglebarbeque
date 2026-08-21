"use client";

import { useState } from "react";
import { X, Calendar, Clock, Users, MapPin, Flame, CheckCircle2, Sparkles } from "lucide-react";

export default function ReservationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "Logix Mall, Noida Sector 34",
    date: new Date().toISOString().split("T")[0],
    time: "07:30 PM",
    guests: "2 Diners",
    name: "",
    phone: "",
    specialRequest: "",
  });
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = "JB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="glass-card relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-[#E07A2B]/40 bg-[#0B1E13] p-6 text-[var(--jb-cream)] shadow-2xl sm:p-8">
        {/* Glow decorative accent */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#E07A2B]/20 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#E07A2B] hover:text-white transition-all"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E07A2B]/30 bg-[#E07A2B]/10 px-3.5 py-1 text-xs font-semibold text-[#E07A2B]">
                <Flame className="h-3.5 w-3.5 animate-pulse" /> Live Tabletop Barbeque
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-white">
                Reserve Your Feast
              </h2>
              <p className="mt-1 text-sm text-[var(--jb-cream-muted)]">
                Experience India&rsquo;s finest 7-course jungle buffet. Instant confirmation guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Location Select */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  <MapPin className="h-3.5 w-3.5 text-[#E07A2B]" /> Select Outlet
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3 text-sm text-white outline-none focus:border-[#E07A2B] transition-colors"
                >
                  <option value="Logix Mall, Noida Sector 34">Logix Mall, Noida Sector 34</option>
                  <option value="Connaught Place, Central Delhi">Connaught Place, Central Delhi</option>
                  <option value="Cyber Hub, Gurugram Phase 2">Cyber Hub, Gurugram Phase 2</option>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                    <Calendar className="h-3.5 w-3.5 text-[#E07A2B]" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3 text-sm text-white outline-none focus:border-[#E07A2B] transition-colors"
                  />
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                    <Clock className="h-3.5 w-3.5 text-[#E07A2B]" /> Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3 text-sm text-white outline-none focus:border-[#E07A2B] transition-colors"
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="02:00 PM">02:00 PM (Lunch)</option>
                    <option value="07:30 PM">07:30 PM (Dinner)</option>
                    <option value="09:00 PM">09:00 PM (Dinner Prime)</option>
                    <option value="10:15 PM">10:15 PM (Late Grill)</option>
                  </select>
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                  <Users className="h-3.5 w-3.5 text-[#E07A2B]" /> Guest Count
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["2 Diners", "4 Diners", "6 Diners", "8+ Group"].map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setFormData({ ...formData, guests: g })}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                        formData.guests === g
                          ? "border-[#E07A2B] bg-[#E07A2B] text-white shadow-md shadow-[#E07A2B]/30"
                          : "border-white/15 bg-[#1A1614] text-white/80 hover:border-white/40"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone Input */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-[#E07A2B] transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-[#1A1614] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-[#E07A2B] transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-ember mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold uppercase tracking-wider text-white shadow-lg"
              >
                <Sparkles className="h-5 w-5" /> Confirm Live Buffet Reservation
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E07A2B]/20 text-[#E07A2B] border border-[#E07A2B]/40">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white">Table Reserved!</h3>
            <p className="mt-2 text-sm text-[var(--jb-cream-muted)]">
              We look forward to hosting you in our jungle canopy dining room.
            </p>

            <div className="my-6 rounded-2xl border border-white/15 bg-[#1A1614]/80 p-5 text-left text-sm space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Booking ID:</span>
                <span className="font-mono font-bold text-[#E07A2B]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Guest Name:</span>
                <span className="font-medium text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">Outlet:</span>
                <span className="font-medium text-white">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Slot & Guests:</span>
                <span className="font-medium text-white">
                  {formData.date} at {formData.time} ({formData.guests})
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 mb-6">
              A SMS and WhatsApp confirmation with directions has been sent to {formData.phone}.
            </p>

            <button
              onClick={handleReset}
              className="btn-ember w-full rounded-xl py-3 text-sm font-bold uppercase tracking-wider text-white"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
