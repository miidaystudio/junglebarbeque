// A small library of hand-styled circular "plate" illustrations built from
// gradients + SVG so the design doesn't depend on external stock photography.

const PALETTES = {
  salad: { plate: "#f4efe4", food: ["#7fae4f", "#c6482f", "#e8b73d", "#4f7a3c"] },
  bowl: { plate: "#efe6d8", food: ["#8fbf5a", "#c9482f", "#e6b73d", "#7a4b2c"] },
  soup: { plate: "#1c2a20", food: ["#e6b73d", "#f2cf6b", "#c9822f"] },
  curry: { plate: "#0e3b2e", food: ["#e6b73d", "#c9482f", "#7fae4f"] },
  noodles: { plate: "#fbf7ec", food: ["#e6b73d", "#c9482f", "#7fae4f", "#8a5a30"] },
  platter: { plate: "#eef2ea", food: ["#c9482f", "#e6b73d", "#7fae4f", "#8a5a30"] },
  grill: { plate: "#f2ede0", food: ["#8a5a30", "#c9482f", "#e6b73d"] },
};

export default function DishPlate({ variant = "salad", size = 140, ring = true, className = "" }) {
  const p = PALETTES[variant] || PALETTES.salad;
  const id = `g-${variant}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={`${variant} dish illustration`}
    >
      <defs>
        <radialGradient id={id} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {ring && <circle cx="100" cy="100" r="98" fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="4" />}
      <circle cx="100" cy="100" r="92" fill={p.plate} />
      <circle cx="100" cy="100" r="92" fill={`url(#${id})`} />

      {/* scattered food elements */}
      {p.food.map((c, i) => {
        const angle = (i / p.food.length) * Math.PI * 2 + 0.5;
        const r = 30 + (i % 3) * 12;
        const x = 100 + Math.cos(angle) * r;
        const y = 100 + Math.sin(angle) * r * 0.7;
        const size = 14 + (i % 3) * 6;
        return <circle key={i} cx={x} cy={y} r={size} fill={c} opacity="0.92" />;
      })}
      <circle cx="100" cy="100" r="14" fill={p.food[0]} opacity="0.85" />
    </svg>
  );
}
