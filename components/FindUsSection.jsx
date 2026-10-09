"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Sparkles } from "lucide-react";

export default function FindUsSection() {
  const [activeCity, setActiveCity] = useState("nyc");

  const locations = [
    {
      cityId: "nyc",
      cityName: "NEW YORK CITY",
      spotName: "Kooky Flagship SoHo",
      address: "142 Spring Street, New York, NY 10012",
      hours: "Mon – Sun: 8:00 AM – 11:00 PM",
      phone: "+1 (212) 555-KOOK",
      status: "🟢 OVEN HOT & BAKING",
      flavorOfTheDay: "Matcha Marshmallow Meltdown",
      color: "#EB4823",
      badge: "FLAGSHIP BAKERY",
    },
    {
      cityId: "la",
      cityName: "LOS ANGELES",
      spotName: "Silver Lake Cookie Lab",
      address: "3920 Sunset Blvd, Los Angeles, CA 90029",
      hours: "Tue – Sun: 9:00 AM – 10:00 PM",
      phone: "+1 (323) 555-4420",
      status: "🟢 WARM BATCH OUT IN 15 MIN",
      flavorOfTheDay: "Salted Caramel Pretzel Pop",
      color: "#FFD233",
      badge: "OUTDOOR PATIO",
    },
    {
      cityId: "london",
      cityName: "LONDON",
      spotName: "Shoreditch Bakehouse",
      address: "28 Redchurch St, London E2 7DD, UK",
      hours: "Wed – Sun: 10:00 AM – 9:00 PM",
      phone: "+44 20 7946 0991",
      status: "🟢 FRESH CROISSANT COOKIES READY",
      flavorOfTheDay: "Choc Chunk Daydream",
      color: "#68A843",
      badge: "POP-UP SHOP",
    },
    {
      cityId: "online",
      cityName: "NATIONWIDE DELIVERY",
      spotName: "Direct Oven-To-Door",
      address: "Shipped across US, UK & Canada in insulated cookie tins",
      hours: "Same-day bake & dispatch on all orders placed before 2 PM",
      phone: "support@kookykind.com",
      status: "🟢 SHIPS IN 24 HOURS",
      flavorOfTheDay: "Pick Any 6 or 12 Mix",
      color: "#2A60B0",
      badge: "ONLINE STORE",
    },
  ];

  const selectedLoc = locations.find(l => l.cityId === activeCity) || locations[0];

  return (
    <section id="find-us" className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F4EDE2] border-t-2 border-black overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EB4823] text-white font-['Dela_Gothic_One'] text-xs uppercase px-4 py-1.5 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
              <span>📍 IRL STORES & STOCKISTS</span>
            </div>
            <h2 className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl lg:text-6xl text-[#191817] uppercase tracking-tight leading-[1.05]">
              TRACK DOWN THE <br className="hidden sm:inline" />
              KOOKY COOKIES.
            </h2>
          </div>

          <p className="font-['Outfit'] font-medium text-base sm:text-lg text-[#444] max-w-md leading-relaxed">
            Grab a warm cookie straight off the tray at our bakeries, or get a box delivered anywhere nationwide.
          </p>
        </div>

        {/* CITY TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {locations.map((loc) => (
            <button
              key={loc.cityId}
              onClick={() => setActiveCity(loc.cityId)}
              className={`font-['Outfit'] font-black text-xs sm:text-sm tracking-wider uppercase px-5 py-3 rounded-2xl border-2 border-black transition-all cursor-pointer ${
                activeCity === loc.cityId
                  ? "bg-[#191817] text-[#FEFCF6] shadow-[4px_4px_0px_0px_rgba(235,72,35,1)] translate-x-0.5 translate-y-0.5"
                  : "bg-[#FEFCF6] text-[#191817] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAF4EC]"
              }`}
            >
              {loc.cityName}
            </button>
          ))}
        </div>

        {/* LOCATION SHOWCASE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: STORE DETAILS */}
          <div className="lg:col-span-7 bg-[#FEFCF6] border-3 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Tape decoration */}
            <div className="washi-tape absolute -top-3 left-10 w-24 h-5 rotate-1" />

            <div className="space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-['Dela_Gothic_One'] text-xs uppercase px-3 py-1 bg-[#FFD233] text-[#191817] rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {selectedLoc.badge}
                </span>

                <span className="font-['Outfit'] font-black text-xs text-[#2E7D32] bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#2E7D32]/30">
                  {selectedLoc.status}
                </span>
              </div>

              <div>
                <h3 className="font-['Dela_Gothic_One'] text-2xl sm:text-3xl lg:text-4xl text-[#191817] uppercase tracking-tight">
                  {selectedLoc.spotName}
                </h3>
              </div>

              {/* DETAILS LIST */}
              <div className="space-y-3 font-['Outfit'] text-sm sm:text-base text-[#333]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#EB4823] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{selectedLoc.address}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#68A843] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{selectedLoc.hours}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2A60B0] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{selectedLoc.phone}</span>
                </div>
              </div>

              {/* SPECIAL FLAVOR OF THE DAY */}
              <div className="bg-[#FAF4EC] border-2 border-dashed border-black/30 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-['Outfit'] font-black text-xs uppercase text-[#888]">
                    TODAY&apos;S FRESH BATCH STAR
                  </div>
                  <div className="font-['Dela_Gothic_One'] text-base sm:text-lg text-[#191817]">
                    🍪 {selectedLoc.flavorOfTheDay}
                  </div>
                </div>
                <span className="font-['Caveat'] text-2xl font-bold text-[#EB4823] -rotate-6">
                  Extra Gooey!
                </span>
              </div>

            </div>

            {/* ACTION ROW */}
            <div className="mt-8 pt-6 border-t-2 border-black/10 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => alert(`Directions opened for ${selectedLoc.spotName}`)}
                className="bg-[#191817] hover:bg-[#333] text-white font-['Outfit'] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FFD233]" />
                <span>GET DIRECTIONS</span>
              </button>

              <a 
                href="#cookies"
                className="font-['Outfit'] font-black text-xs sm:text-sm uppercase tracking-wider text-[#191817] underline underline-offset-4 hover:text-[#EB4823] py-2 px-3"
              >
                ORDER FOR STORE PICKUP ↗
              </a>
            </div>

          </div>

          {/* RIGHT: VINTAGE COLLAGE MAP GRAPHIC */}
          <div className="lg:col-span-5 bg-[#191817] text-white border-3 border-black rounded-3xl p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,210,51,1)] relative overflow-hidden min-h-[380px]">
            
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              <div className="inline-block bg-[#FFD233] text-[#191817] font-['Dela_Gothic_One'] text-[10px] uppercase px-3 py-1 rounded-md">
                COOKIE RADAR
              </div>
              <h4 className="font-['Dela_Gothic_One'] text-2xl uppercase tracking-tight text-white">
                WANT KOOKY KIND IN YOUR FAVORITE LOCAL CAFE?
              </h4>
              <p className="font-['Outfit'] text-xs sm:text-sm text-[#CCC] leading-relaxed">
                Tell your local coffee spot to stock our fresh bake boxes or apply for our wholesale partner program.
              </p>
            </div>

            {/* INTERACTIVE REQUEST BOX */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter your city or favorite cafe..."
                  className="bg-white/10 border border-white/30 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/50 font-['Outfit'] focus:outline-none focus:border-[#FFD233] flex-1"
                />
                <button 
                  onClick={() => alert("Thanks! We've added this spot to our cookie expansion radar! 🍪")}
                  className="bg-[#FFD233] hover:bg-[#E6BC24] text-[#191817] font-['Outfit'] font-black text-xs uppercase px-4 py-2.5 rounded-xl border border-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                >
                  REQUEST
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
