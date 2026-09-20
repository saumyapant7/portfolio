export default function Home() {
  return (
    <main className="shell section">
      <p className="label reveal">01 · Scaffold</p>
      <h1 className="reveal" style={{ ["--i" as string]: 1, fontSize: "var(--text-display)" }}>
        Design system in place<span className="mark" aria-hidden />
      </h1>
      <p className="reveal mt-6 max-w-[58ch]" style={{ ["--i" as string]: 2 }}>
        Hum palette, Garden type and motion. Content lands next.
      </p>
      <p className="reveal mt-8" style={{ ["--i" as string]: 3 }}>
        <a className="btn" href="#">
          Push button <span className="btn__arrow">→</span>
        </a>
      </p>
    </main>
  );
}
