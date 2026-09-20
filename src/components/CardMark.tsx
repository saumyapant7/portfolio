import type { Accent } from "@/data/projects";

/* One abstract shape per card, drawn in SVG (no stock icons). The whole mark
 * rides `.card__rise` so it lifts on hover like Garden's honey fill. */
export function CardMark({ accent, className = "" }: { accent: Accent; className?: string }) {
  const c = `var(--color-${accent})`;
  const d = `var(--color-${accent}-deep)`;
  const common = { className, width: 88, height: 64, viewBox: "0 0 88 64", "aria-hidden": true } as const;

  switch (accent) {
    case "coral": // scorecard bars
      return (
        <svg {...common}>
          <rect x="4" y="34" width="14" height="30" rx="5" fill={c} />
          <rect x="24" y="18" width="14" height="46" rx="5" fill={d} />
          <rect x="44" y="26" width="14" height="38" rx="5" fill={c} />
          <rect x="64" y="6" width="14" height="58" rx="5" fill={d} />
        </svg>
      );
    case "pear": // a coin with a rupee-ish notch
      return (
        <svg {...common}>
          <circle cx="44" cy="32" r="28" fill={c} />
          <circle cx="44" cy="32" r="16" fill={d} />
          <circle cx="44" cy="32" r="6" fill="var(--color-paper)" />
        </svg>
      );
    case "cyan": // dashboard tiles
      return (
        <svg {...common}>
          <rect x="6" y="6" width="34" height="24" rx="8" fill={c} />
          <rect x="48" y="6" width="34" height="24" rx="8" fill={d} />
          <rect x="6" y="36" width="76" height="22" rx="8" fill={c} opacity="0.75" />
        </svg>
      );
    case "mint": // ranked list ticks
      return (
        <svg {...common}>
          <rect x="8" y="8" width="72" height="12" rx="6" fill={d} />
          <rect x="8" y="26" width="52" height="12" rx="6" fill={c} />
          <rect x="8" y="44" width="34" height="12" rx="6" fill={c} opacity="0.7" />
        </svg>
      );
    case "lavender": // a play-button pebble
    default:
      return (
        <svg {...common}>
          <rect x="10" y="4" width="68" height="56" rx="20" fill={c} />
          <path d="M38 20l20 12-20 12z" fill="var(--color-paper)" />
        </svg>
      );
  }
}
