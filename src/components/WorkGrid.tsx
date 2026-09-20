"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, statusLabel, type Project } from "@/data/projects";
import { CardMark } from "./CardMark";

type Filter = "all" | "work" | "lab";

/* Portfolio Grid: filter bar above, colour-shift cards, card-fade on filter change. */
export function WorkGrid({ initial = "all", limit }: { initial?: Filter; limit?: number }) {
  const [filter, setFilter] = useState<Filter>(initial);
  const list = projects
    .filter((p) => filter === "all" || p.type === filter)
    .slice(0, limit ?? projects.length);

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter projects">
        {(["all", "work", "lab"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            className="filter"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "Everything" : f === "work" ? "Work" : "AI lab"}
          </button>
        ))}
      </div>
      <ul className="work-grid" key={filter}>
        {list.map((p, i) => (
          <li key={p.slug} className="reveal reveal--scroll in-view" style={{ ["--i" as string]: i }}>
            <ProjectCard p={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const soon = p.status === "coming-soon";
  const inner = (
    <>
      <div className="card__top">
        <span className={`status status--${p.status}`}>{statusLabel[p.status]}</span>
        <span className="label">{p.type === "lab" ? "Lab" : "Work"}</span>
      </div>
      <div className="card__specimen">
        <CardMark accent={p.accent} className="card__rise" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{p.title}</h3>
        <p className="card__summary">{p.summary}</p>
        <p className="card__foot">
          <span className="label">{p.stack ?? p.tags.join(" · ")}</span>
          {!soon && <span className="card__cta">Read it →</span>}
        </p>
      </div>
    </>
  );
  const cls = `card card--${p.accent}${soon ? " card--soon" : ""}`;
  return soon ? (
    <div className={cls}>{inner}</div>
  ) : (
    <Link href={`/work/${p.slug}`} className={cls}>
      {inner}
    </Link>
  );
}
