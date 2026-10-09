"use client";

import { useState } from "react";
import KookyHeroSection from "@/components/KookyHeroSection";
import CookiesSection from "@/components/CookiesSection";
import AboutStorySection from "@/components/AboutStorySection";
import FindUsSection from "@/components/FindUsSection";
import GoodStuffSection from "@/components/GoodStuffSection";
import JournalSection from "@/components/JournalSection";
import KookyFooter from "@/components/KookyFooter";
import { ShoppingBag, X, Sparkles, Check } from "lucide-react";

export default function KookyKindPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setToastMessage(`Added "${item.name}" to your box! 🍪`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const totalCartPrice = cartItems.reduce((acc, item) => {
    const num = parseFloat(item.price?.replace("$", "") || "4.50");
    return acc + num;
  }, 0);

  return (
    <main className="relative min-h-screen bg-[#FBF6EE] text-[#191817] overflow-x-hidden font-sans selection:bg-[#FFD233] selection:text-[#191817]">
      
      {/* 1. HERO SECTION & NAVBAR */}
      <section id="hero">
        <KookyHeroSection 
          cartCount={cartItems.length} 
          onOpenCart={() => setIsCartOpen(true)}
          onAddToCart={handleAddToCart}
        />
      </section>

      {/* 2. COOKIES CATALOG & FLAVOR SHOWCASE */}
      <CookiesSection onAddToCart={handleAddToCart} />

      {/* 3. OUR STORY & THE NON-RECIPE MANIFESTO */}
      <AboutStorySection />

      {/* 4. IRL BAKEHOUSE LOCATIONS & STOCKISTS */}
      <FindUsSection />

      {/* 5. GOOD STUFF & SUSTAINABILITY PHILOSOPHY */}
      <GoodStuffSection />

      {/* 6. JOURNAL, EDITORIALS & NEWSLETTER */}
      <JournalSection />

      {/* 7. RETRO COLLAGE FOOTER */}
      <KookyFooter />

      {/* FLOATING TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#191817] text-[#FEFCF6] border-2 border-black rounded-2xl px-5 py-3.5 shadow-[5px_5px_0px_0px_rgba(255,210,51,1)] flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 font-['Outfit']">
          <div className="w-8 h-8 rounded-full bg-[#68A843] flex items-center justify-center text-white flex-shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm">{toastMessage}</div>
            <div className="text-[11px] text-[#FFD233] font-semibold">Box Count: {cartItems.length} cookies</div>
          </div>
        </div>
      )}

      {/* CART SLIDEOVER DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="w-full max-w-md bg-[#FEFCF6] border-l-3 border-black h-full p-6 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300 font-['Outfit']"
          >
            {/* DRAWER HEADER */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍪</span>
                  <h3 className="font-['Dela_Gothic_One'] text-xl uppercase tracking-tight text-[#191817]">
                    YOUR COOKIE BOX ({cartItems.length})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#FAF4EC] hover:bg-[#EB4823] hover:text-white border-2 border-black flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ITEMS LIST */}
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="text-5xl">📦</div>
                  <h4 className="font-['Dela_Gothic_One'] text-lg uppercase text-[#191817]">
                    YOUR BOX IS EMPTY
                  </h4>
                  <p className="text-xs text-[#666] max-w-xs mx-auto">
                    Looks like you haven&apos;t added any gooey rule-breaking cookies yet.
                  </p>
                  <a
                    href="#cookies"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block bg-[#EB4823] text-white font-black text-xs uppercase px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mt-4"
                  >
                    EXPLORE FLAVORS ↗
                  </a>
                </div>
              ) : (
                <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                  {cartItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#FBF6EE] border-2 border-black rounded-2xl p-3 flex items-center justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🍪</span>
                        <div>
                          <div className="font-bold text-sm text-[#191817]">{item.name}</div>
                          <div className="text-xs font-semibold text-[#EB4823]">{item.price || "$4.50"}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setCartItems(prev => prev.filter((_, i) => i !== idx));
                        }}
                        className="text-xs font-bold text-[#888] hover:text-[#EB4823] px-2 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* DRAWER FOOTER */}
            {cartItems.length > 0 && (
              <div className="pt-6 border-t-2 border-black space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm uppercase text-[#666]">SUBTOTAL:</span>
                  <span className="font-['Dela_Gothic_One'] text-2xl text-[#191817]">
                    ${totalCartPrice.toFixed(2)}
                  </span>
                </div>

                <div className="text-[11px] text-[#2E7D32] bg-[#E8F5E9] p-2 rounded-xl border border-[#2E7D32]/20 font-bold text-center">
                  🎉 {cartItems.length >= 6 ? "FREE EXPRESS SHIPPING UNLOCKED!" : `Add ${6 - cartItems.length} more cookies for FREE Shipping!`}
                </div>

                <button
                  onClick={() => alert(`Proceeding to checkout with ${cartItems.length} cookies ($${totalCartPrice.toFixed(2)})! 🍪`)}
                  className="w-full py-4 bg-[#EB4823] hover:bg-[#D43916] text-white font-black text-sm uppercase tracking-wider rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  CHECKOUT NOW (${totalCartPrice.toFixed(2)}) ↗
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}
