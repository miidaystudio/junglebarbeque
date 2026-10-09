"use client";

import { ArrowUp, Sparkles } from "lucide-react";

export default function KookyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#191817] text-[#FEFCF6] pt-16 pb-12 px-6 md:px-12 lg:px-16 border-t-3 border-black overflow-hidden font-sans">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* TOP ROW: BIG LOGO & BACK TO TOP */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl tracking-tight text-white">
              KOOKY
            </span>
            <span className="text-[#EB4823] text-3xl sm:text-5xl font-black">✦</span>
            <span className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl tracking-tight text-[#FFD233]">
              KIND
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-[#FEFCF6] text-[#191817] font-['Outfit'] font-black text-xs uppercase px-5 py-3 rounded-full border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,210,51,1)] hover:bg-[#FFD233] hover:translate-y-[-2px] transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* MIDDLE GRID: NAVIGATION COLUMNS & SOCIALS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-12 border-b border-white/15 text-sm font-['Outfit']">
          
          {/* COL 1: SHOP */}
          <div className="space-y-4">
            <div className="font-['Dela_Gothic_One'] text-xs uppercase tracking-wider text-[#FFD233]">
              SHOP FLAVORS
            </div>
            <ul className="space-y-2.5 text-sm text-[#D5D0C5] font-medium">
              <li><a href="#cookies" className="hover:text-[#FFD233] transition-colors">Choc Chunk Daydream</a></li>
              <li><a href="#cookies" className="hover:text-[#FFD233] transition-colors">Matcha Marshmallow</a></li>
              <li><a href="#cookies" className="hover:text-[#FFD233] transition-colors">Salted Caramel Pretzel</a></li>
              <li><a href="#cookies" className="hover:text-[#FFD233] transition-colors">Custom 6-Pack Box</a></li>
              <li><a href="#cookies" className="hover:text-[#FFD233] transition-colors">Party 12-Pack Tins</a></li>
            </ul>
          </div>

          {/* COL 2: ABOUT & CRAFT */}
          <div className="space-y-4">
            <div className="font-['Dela_Gothic_One'] text-xs uppercase tracking-wider text-[#EB4823]">
              EXPLORE
            </div>
            <ul className="space-y-2.5 text-sm text-[#D5D0C5] font-medium">
              <li><a href="#about" className="hover:text-[#FFD233] transition-colors">Our Story & Manifesto</a></li>
              <li><a href="#good-stuff" className="hover:text-[#FFD233] transition-colors">Good Stuff & Ingredients</a></li>
              <li><a href="#find-us" className="hover:text-[#FFD233] transition-colors">Store Locator & Stockists</a></li>
              <li><a href="#journal" className="hover:text-[#FFD233] transition-colors">Bakehouse Journal</a></li>
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Wholesale Program</a></li>
            </ul>
          </div>

          {/* COL 3: HELP & FAQS */}
          <div className="space-y-4">
            <div className="font-['Dela_Gothic_One'] text-xs uppercase tracking-wider text-[#68A843]">
              COOKIE CARE
            </div>
            <ul className="space-y-2.5 text-sm text-[#D5D0C5] font-medium">
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Shipping & Delivery FAQs</a></li>
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Reheating Instructions</a></li>
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Allergen Information</a></li>
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Corporate Gifting</a></li>
              <li><a href="#" className="hover:text-[#FFD233] transition-colors">Track Your Cookie Box</a></li>
            </ul>
          </div>

          {/* COL 4: SOCIALS */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="font-['Dela_Gothic_One'] text-xs uppercase tracking-wider text-[#FFD233]">
              HANG OUT WITH US
            </div>
            <p className="text-xs sm:text-sm text-[#AAA] font-medium leading-relaxed max-w-sm">
              Tag us in your cookie stretches and chocolate pulls on Instagram & TikTok with <strong className="text-white">#KookyKindCookies</strong>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2A2928] border border-white/20 flex items-center justify-center hover:bg-[#EB4823] hover:border-black transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#2A2928] border border-white/20 flex items-center justify-center hover:bg-[#2A60B0] hover:border-black transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#2A2928] border border-white/20 flex items-center justify-center hover:bg-[#C62828] hover:border-black transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-[#888]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} KOOKY KIND INC. ALL RIGHTS RESERVED.</span>
            <span>✿</span>
            <span className="text-[#FFD233]">BAKED FOR PURE JOY.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Bite</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
