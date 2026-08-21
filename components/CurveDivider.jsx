// Renders a smooth curve transitioning from `from` (top) into `to` (bottom).
// direction "down" bulges downward, "up" bulges upward.
export default function CurveDivider({ from, to, direction = "down", flat = false }) {
  const path =
    direction === "down"
      ? "M0,0 C360,140 1080,140 1440,0 L1440,0 L0,0 Z"
      : "M0,140 C360,0 1080,0 1440,140 L1440,140 L0,140 Z";

  return (
    <div style={{ background: from }} className="relative">
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className={flat ? "curve-up" : "curve-down"}
        style={{ height: "9vw", minHeight: 48, maxHeight: 130 }}
      >
        <path d={path} fill={to} />
      </svg>
    </div>
  );
}
