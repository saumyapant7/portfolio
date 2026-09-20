import Link from "next/link";

/* N9 · Edge-aligned minimal: wordmark hard-left, one CTA hard-right. The space between is the design. */
export function Nav() {
  return (
    <header className="nav-edge">
      <Link href="/" className="wordmark">
        Saumya Pant<span className="mark" aria-hidden />
      </Link>
      <Link className="btn btn--outline btn--sm" href="/#contact">
        Book a free audit <span className="btn__arrow">→</span>
      </Link>
    </header>
  );
}
