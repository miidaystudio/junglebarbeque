"use client";

import { useState } from "react";
import { Flame, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";

export default function EditorialFooter({ onOpenBooking }) {
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
    <footer className="relative bg-[#0c120e] pt-20 pb-12 text-[#d8c29d] border-t border-[#d8c29d]/20 overflow-hidden">
      {/* Top Sand Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d8c29d] to-transparent shadow-[0_0_15px_#d8c29d]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d8c29d] to-[#b8a078] p-2 shadow-lg shadow-[#d8c29d]/20">
                <Flame className="h-6 w-6 text-[#0c120e]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  JUNGLE <span className="text-[#d8c29d]">BARBEQUE</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#8e9f93] mt-0.5">
                  Luxury Botanical Dining
                </span>
              </div>
            </a>

            <p className="text-xs text-[#8e9f93] font-light leading-relaxed max-w-sm">
              North India&rsquo;s premier fine-dining sanctuary blending wood-fired tabletop grills, live-fire pitmasters, and an opulent 7-course buffet spread.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3.5 py-1.5 rounded-full border border-emerald-500/30 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Open Daily: 12:00 PM – 11:30 PM (All Outlets)
            </div>
          </div>

          {/* Outlets */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Sanctuary Outlets
            </h4>
            <ul className="space-y-3 text-xs text-[#8e9f93]">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Logix Mall, Noida</strong>
                  3rd Floor, Sector 34, Noida
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Connaught Place, Delhi</strong>
                  Block M, Outer Circle, CP
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Cyber Hub, Gurugram</strong>
                  Building 10, DLF Phase 2
                </div>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              Dining Sessions
            </h4>
            <ul className="space-y-3 text-xs text-[#8e9f93]">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Lunch Session</strong>
                  12:00 PM – 04:00 PM
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dinner Session</strong>
                  07:00 PM – 11:30 PM
                </div>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Phone className="h-4 w-4 text-[#d8c29d] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Helpline</strong>
                  <a href="tel:+919266910090" className="hover:text-[#d8c29d] font-mono">
                    +91 92669 10090
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white mb-4">
              VIP Sanctuary Pass
            </h4>
            <p className="text-xs text-[#8e9f93] mb-3">
              Receive private dining invitations and seasonal pitmaster menu updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/30">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Subscribed to VIP Pass!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[#161c18] px-3.5 py-2.5 text-xs text-white placeholder-white/40 outline-none focus:border-[#d8c29d]"
                />
                <button
                  type="submit"
                  className="btn-sand w-full flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider text-[#0c120e]"
                >
                  <Send className="h-3.5 w-3.5" /> Join VIP List
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e9f93]">
          <div>
            &copy; {new Date().getFullYear()} Jungle Barbeque. All Rights Reserved. Crafted for Fine Dining.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Culinary Service
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
