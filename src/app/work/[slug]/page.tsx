import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, statusLabel } from "@/data/projects";
import { profile } from "@/data/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CardMark } from "@/components/CardMark";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.filter((p) => p.status !== "coming-soon").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — ${profile.name}` : profile.name };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];
  const meta = p.meta ?? {};
  const metaRows = (
    [
      ["Role", meta.role],
      ["Platforms", meta.platforms],
      ["Timeline", meta.timeline],
      ["Data", meta.data],
    ] as const
  ).filter(([, v]) => v);

  return (
    <>
      <Nav />
      <main className="shell proj">
        <header className="proj__head">
          <Link className="back" href="/#work">
            ← All work
          </Link>
          <p className="proj__tags">
            <span className={`status status--${p.status}`}>{statusLabel[p.status]}</span>
            <span className="label">{p.type === "lab" ? "AI lab" : "Work"} · {p.tags.join(" · ")}</span>
          </p>
          <h1 className="proj__title reveal">{p.title}</h1>
          <p className="proj__lead reveal" style={{ ["--i" as string]: 1 }}>
            {p.summary}
          </p>
        </header>

        {metaRows.length > 0 && (
          <dl className="meta reveal" style={{ ["--i" as string]: 2 }}>
            {metaRows.map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="proj__body">
          <article className="prose">
            {(p.sections ?? []).length === 0 ? (
              <section>
                <h2>Write-up coming soon</h2>
                <p>
                  This project is scheduled for {meta.timeline ?? "later this year"}. The full
                  write-up, visuals and downloads land here when it ships.
                </p>
              </section>
            ) : (
              p.sections!.map((s) => (
                <section key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.body.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                  {s.caption && <p className="figure-slot label">{s.caption}</p>}
                </section>
              ))
            )}
          </article>

          <aside className="proj__side">
            <div className={`card card--${p.accent} side-card`}>
              <CardMark accent={p.accent} className="card__rise" />
              {p.heroNumber && (
                <p className="side-card__num">
                  <strong className="hl hl--coral">{p.heroNumber.value}</strong>
                  <span>{p.heroNumber.label}</span>
                </p>
              )}
            </div>
            {p.downloads && p.downloads.length > 0 && (
              <div className="side-list">
                <p className="label">Downloads</p>
                <ul className="plain">
                  {p.downloads.map((d) => (
                    <li key={d.label}>
                      <a href={d.href}>{d.label} →</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="side-list">
              <p className="label">Walkthrough</p>
              <p className="side-list__text">
                {p.video ? "Episode on AI Ad Insider." : "Episode on AI Ad Insider, coming with the write-up."}
              </p>
            </div>
          </aside>
        </div>

        {next && next !== p && (
          <div className="next-up">
            <div>
              <p className="label">Next project</p>
              <strong className="next-up__title">{next.title}</strong>
            </div>
            {next.status === "coming-soon" ? (
              <span className="status status--coming-soon">Coming soon</span>
            ) : (
              <Link className="btn" href={`/work/${next.slug}`}>
                Read it <span className="btn__arrow">→</span>
              </Link>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
