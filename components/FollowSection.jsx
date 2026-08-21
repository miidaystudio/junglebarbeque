"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsapSetup";

export default function FollowSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      phoneRef.current,
      { y: 80, opacity: 0, rotate: 6 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );

    // gentle parallax float while scrolling through
    gsap.to(phoneRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--jb-fern)] px-6 py-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(230,183,61,0.12), transparent 40%)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:justify-between">
        <div ref={textRef} className="max-w-md text-center md:text-left">
          <p className="eyebrow text-[var(--jb-gold)]">Get the</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Follow Us
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            Follow us on Instagram for the latest updates, exclusive content,
            and behind-the-scenes looks! Stay connected with us.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-6 inline-block rounded-full px-8 py-3 text-sm"
          >
            @junglebarbeque
          </a>
        </div>

        <div ref={phoneRef} className="relative w-56 shrink-0 sm:w-64">
          <div className="relative rounded-[2.5rem] border-4 border-[var(--jb-canopy)] bg-[var(--jb-canopy)] p-2 shadow-2xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#12563f] via-[#0e3b2e] to-[#1c6b4d]">
              <div className="flex items-center gap-2 px-4 py-3">
                <div className="h-6 w-6 rounded-full bg-[var(--jb-gold)]" />
                <div className="h-2 w-20 rounded bg-white/40" />
              </div>
              <div className="grid grid-cols-3 gap-0.5 px-1 pb-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square"
                    style={{
                      background:
                        i % 3 === 0
                          ? "linear-gradient(135deg,#e6b73d,#c9482f)"
                          : i % 3 === 1
                          ? "linear-gradient(135deg,#7fae4f,#12563f)"
                          : "linear-gradient(135deg,#8a5a30,#e6b73d)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
