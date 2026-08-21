"use client";

import { useEffect, useRef } from "react";

export default function EmberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, active: false };
    
    // Scroll tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Embers definition
    const embersCount = 45;
    const embers = [];

    // Leaves definition
    const leavesCount = 18;
    const leaves = [];

    function initParticles() {
      embers.length = 0;
      leaves.length = 0;

      // Initialize Embers
      for (let i = 0; i < embersCount; i++) {
        embers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.8,
          color: Math.random() > 0.4 ? "#E07A2B" : Math.random() > 0.5 ? "#F59E0B" : "#FF5500",
          alpha: Math.random() * 0.7 + 0.3,
          speedY: Math.random() * 0.7 + 0.3,
          speedX: (Math.random() - 0.5) * 0.4,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Initialize Leaves
      for (let i = 0; i < leavesCount; i++) {
        leaves.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 7 + 6,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          speedY: Math.random() * 0.5 + 0.2,
          speedX: Math.sin(Math.random() * Math.PI) * 0.3,
          alpha: Math.random() * 0.35 + 0.15,
          color: Math.random() > 0.5 ? "#133825" : "#1B4D33",
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

    // Draw single leaf shape
    function drawLeaf(x, y, size, angle, color, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.strokeStyle = "rgba(224, 122, 43, 0.2)";
      ctx.lineWidth = 0.5;

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.8, -size * 0.3, 0, size);
      ctx.quadraticCurveTo(-size * 0.8, -size * 0.3, 0, -size);
      ctx.fill();
      ctx.stroke();

      // Leaf vein line
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.lineTo(0, size * 0.8);
      ctx.stroke();

      ctx.restore();
    }

    // Animation Render Loop
    function render(time) {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity
      scrollVelocity *= 0.92;

      // --- Render Embers ---
      for (let i = 0; i < embers.length; i++) {
        const p = embers[i];

        // Normal upward movement + scroll impulse effect
        p.y -= p.speedY + scrollVelocity * 0.05;
        p.x += p.speedX + Math.sin(time * 0.001 + p.phase) * 0.3;

        // Cursor Repulsion Force
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 2;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Reset if drifted out of screen bounds
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        } else if (p.y > height + 30) {
          p.y = -10;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        // Flicker/Pulse glow opacity
        const flicker = Math.sin(time * p.pulseSpeed + p.phase) * 0.25 + p.alpha;
        const currentAlpha = Math.max(0.1, Math.min(1, flicker));

        // Draw Ember Radial Glow
        const glowRadius = p.radius * 4;
        const radialGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        radialGradient.addColorStop(0, p.color);
        radialGradient.addColorStop(0.5, "rgba(224, 122, 43, 0.4)");
        radialGradient.addColorStop(1, "rgba(224, 122, 43, 0)");

        ctx.fillStyle = radialGradient;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Ember Core
        ctx.fillStyle = "#FFF7ED";
        ctx.globalAlpha = Math.min(1, currentAlpha * 1.2);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Render Leaves ---
      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i];

        // Falling movement + scroll push
        l.y += l.speedY + scrollVelocity * 0.08;
        l.x += l.speedX + Math.sin(time * 0.0008 + l.rotation) * 0.4;
        l.rotation += l.rotationSpeed;

        // Mouse attraction/drift for leaves
        if (mouse.active) {
          const dx = l.x - mouse.x;
          const dy = l.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const push = (1 - dist / 150) * 1.5;
            l.x += (dx / dist) * push;
            l.y += (dy / dist) * push;
          }
        }

        // Reset bounds
        if (l.y > height + 30) {
          l.y = -20;
          l.x = Math.random() * width;
        } else if (l.y < -30) {
          l.y = height + 20;
        }

        drawLeaf(l.x, l.y, l.size, l.rotation, l.color, l.alpha);
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
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
