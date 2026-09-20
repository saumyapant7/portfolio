# design.md — Saumya's portfolio design system

Locked system for this project. Hallmark reads this file first; every page and
component defers to it. Route: **custom (tuned)** — Hum's palette, surfaces,
buttons and motion register, carrying Garden's typography and Garden's
reveal choreography.

## Theme: "Hum × Garden"

- **Paper band:** light, warm cream `oklch(97% 0.012 95)` (Hum calibration). Never pure white.
- **Ink:** `oklch(20% 0.012 250)` near-black with cool tilt. Never pure black. Body ink at ~88% opacity, links 95%, hover 100%.
- **Accents (multi, each owns a surface):**
  - pear `oklch(86% 0.18 95)` — primary action, the character mark
  - cyan `oklch(66% 0.18 235)` — links, hover tints
  - coral `oklch(68% 0.24 18)` — ONE high-energy moment per page
  - mint `oklch(80% 0.16 150)` and lavender `oklch(74% 0.16 305)` — at most one use each per page
- Accents never blend in a gradient.

## Typography (from Garden)

- **Display:** Young Serif 400, roman, sentence case, tracking `-0.006em`
- **Body:** Hanken Grotesk 400/500/600
- **Labels / mono:** Geist Mono, UPPERCASE, tracking `0.14em` (herbarium specimen tags)
- ≤3 type levels. No italics for emphasis; emphasis by weight (500) or the clipped-background highlighter.

## Surfaces (from Hum)

- `--radius-card: 20px`, `--radius-pill: 999px`, `--radius-input: 12px`. No square corners.
- Cards: colour-shift tint at rest (~6% of their accent), deepen to ~12% on hover, lift 4px, layered shadow (contact + ambient).
- Buttons: the Hum `.btn` push system — solid colour edge + soft cast shadow; lift on hover, press DOWN on `:active`. No `scale()`.
- Section bands: cream / pear-tint / cyan-tint / coral-tint alternate by meaning. One content shell width everywhere.

## Motion (from Garden, with Hum's character moment)

- One orchestrated reveal on load: `.reveal` opacity 0 + translateY(10px) → none, 420ms `--ease-out`, stagger `--i × 70ms`.
- Grid cards reveal once on viewport enter (IntersectionObserver, threshold 0.18, `rootMargin 0 0 -8%`), never re-fire.
- Card hover: lift 4px + shadow deepen, and one inner element "rises" (Garden's vial-fill move) — a single gesture.
- One character mark in pear that pulses at rest (4s) and reacts on hover.
- `prefers-reduced-motion`: collapse to fast fades; everything readable with motion off.

## Structure

- Macrostructure: Portfolio Grid (18) as the spine, with an off-centre hero — never the centred stack.
- Nav: N9 edge-aligned minimal. Footer: Ft6 letter-close (sign-off in first person).
- One off-grid moment per page and one designed exception.

## Voice

Warm, direct, sentence case, verbs over nouns. Max one em-dash per paragraph. Honest numbers only. Mono labels like `01 · WORK`, `SELECTED · 2022 — 2026`.
