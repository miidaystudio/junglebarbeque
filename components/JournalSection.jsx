"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Send, Sparkles } from "lucide-react";

export default function JournalSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const articles = [
    {
      id: 1,
      title: "The 47 Batches: How We Dialed The Volcanic Gooey Center",
      category: "BEHIND THE OVEN",
      date: "SEPTEMBER 18, 2026",
      readTime: "4 MIN READ",
      snippet: "It took 47 iterations of butter temperature and dough chilling times to get a cookie that is crunchy on the perimeter and molten inside.",
      color: "#EB4823",
      image: "/images/good-ingredients.jpg",
    },
    {
      id: 2,
      title: "5 Unexpected Cookie & Specialty Coffee Pairings",
      category: "PAIRING LAB",
      date: "AUGUST 30, 2026",
      readTime: "3 MIN READ",
      snippet: "Why Ethiopian light roasts pair like magic with our Lemon Blueberry Shortbread, and dark roast cold brews balance dark fudge.",
      color: "#FFD233",
      image: "/images/cookie-stack.jpg",
    },
    {
      id: 3,
      title: "How to Reheat a Day-Old Cookie to Fresh-Baked Glory in 25 Seconds",
      category: "COOKIE HACKS",
      date: "JULY 14, 2026",
      readTime: "2 MIN READ",
      snippet: "The secret is a light water mist before popping into a 350°F toaster oven or 15s in the microwave with a damp towel.",
      color: "#68A843",
      image: "/images/bakery-story.jpg",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="journal" className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FBF6EE] border-t-2 border-black overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2A60B0] text-white font-['Dela_Gothic_One'] text-xs uppercase px-4 py-1.5 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
              <span>🗞️ THE CRUMB DISPATCH</span>
            </div>
            <h2 className="font-['Dela_Gothic_One'] text-3xl sm:text-5xl lg:text-6xl text-[#191817] uppercase tracking-tight leading-[1.05]">
              STORIES FROM <br className="hidden sm:inline" />
              THE BAKEHOUSE.
            </h2>
          </div>

          <p className="font-['Outfit'] font-medium text-base sm:text-lg text-[#444] max-w-md leading-relaxed">
            Baking experiments, crazy flavor notes, and the wild journey of defying traditional cookie rules.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-[#FEFCF6] border-3 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* PHOTO THUMBNAIL */}
                <div className="relative w-full h-52 border-b-2 border-black overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className="font-['Dela_Gothic_One'] text-[10px] text-white px-3 py-1 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      style={{ backgroundColor: article.color }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#888] font-['Outfit'] uppercase">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-['Dela_Gothic_One'] text-lg sm:text-xl text-[#191817] leading-snug group-hover:text-[#EB4823] transition-colors">
                    {article.title}
                  </h3>

                  <p className="font-['Outfit'] text-xs sm:text-sm text-[#555] font-medium leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
              </div>

              {/* FOOTER LINK */}
              <div className="p-6 pt-0 flex items-center justify-between font-['Outfit'] font-black text-xs uppercase tracking-wider text-[#191817] group-hover:text-[#EB4823]">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* NEWSLETTER SCRAPBOOK BOX */}
        <div className="relative bg-[#FFD233] border-3 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Red washi tape top center */}
          <div className="washi-tape absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 -rotate-1" />

          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="font-['Caveat'] text-3xl font-bold text-[#191817] -rotate-2">
              💌 Join 25,000+ cookie lovers
            </div>

            <h3 className="font-['Dela_Gothic_One'] text-2xl sm:text-4xl text-[#191817] uppercase tracking-tight">
              GET SECRET DROPS & 10% OFF YOUR FIRST BOX
            </h3>

            <p className="font-['Outfit'] text-sm sm:text-base text-[#333] font-medium">
              We send wild flavor drop alerts, experimental kitchen testing invites, and zero spam.
            </p>

            {subscribed ? (
              <div className="bg-[#68A843] text-white font-['Dela_Gothic_One'] text-sm sm:text-base py-4 px-6 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                🎉 YOU&apos;RE ON THE VIP LIST! USE CODE &apos;KOOKY10&apos; FOR 10% OFF!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-white border-2 border-black rounded-2xl px-5 py-4 text-sm text-[#191817] placeholder-[#888] font-['Outfit'] font-medium focus:outline-none focus:ring-2 focus:ring-[#EB4823] flex-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                />
                <button
                  type="submit"
                  className="bg-[#EB4823] hover:bg-[#D43916] text-white font-['Outfit'] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>JOIN CLUB</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
