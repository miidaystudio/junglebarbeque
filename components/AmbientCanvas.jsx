"use client";

import { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let lastScrollY = window.scrollY;
    let scrollImpulse = 0;

    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollImpulse = (currentScrollY - lastScrollY) * 0.15;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Embers (#e07a2b) & Ambient Dust Particles (#d8c29d)
    const particleCount = 60;
    const particles = [];

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const isEmber = Math.random() > 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isEmber ? Math.random() * 2.2 + 0.8 : Math.random() * 1.4 + 0.5,
          color: isEmber ? "#e07a2b" : "#d8c29d",
          alpha: Math.random() * 0.65 + 0.2,
          speedY: isEmber ? Math.random() * 0.8 + 0.4 : Math.random() * 0.3 + 0.1,
          speedX: (Math.random() - 0.5) * 0.4,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          phase: Math.random() * Math.PI * 2,
          isEmber,
        });
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    }

    window.addEventListener("resize", resize);
    resize();

    function render(time) {
      ctx.clearRect(0, 0, width, height);

      scrollImpulse *= 0.92;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y -= p.speedY + scrollImpulse;
        p.x += p.speedX + Math.sin(time * 0.001 + p.phase) * 0.35;

        // Mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (1 - dist / 120) * 1.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Loop boundaries
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        } else if (p.y > height + 20) {
          p.y = -10;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        const flicker = Math.sin(time * p.pulseSpeed + p.phase) * 0.25 + p.alpha;
        const currentAlpha = Math.max(0.1, Math.min(0.9, flicker));

        if (p.isEmber) {
          // Ember Radial Glow
          const glowRad = p.radius * 3.5;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRad);
          grad.addColorStop(0, "rgba(224, 122, 43, 0.8)");
          grad.addColorStop(0.5, "rgba(224, 122, 43, 0.25)");
          grad.addColorStop(1, "rgba(224, 122, 43, 0)");

          ctx.fillStyle = grad;
          ctx.globalAlpha = currentAlpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRad, 0, Math.PI * 2);
          ctx.fill();

          // Core bright center
          ctx.fillStyle = "#FFF7ED";
          ctx.globalAlpha = Math.min(1, currentAlpha * 1.3);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Ambient Sand Dust
          ctx.fillStyle = "#d8c29d";
          ctx.globalAlpha = currentAlpha * 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
