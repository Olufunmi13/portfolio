import { useState } from "react";
import { Project } from "../types";

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  const [active, setActive] = useState("ALL");
  const filtered = projects.filter(
    (p) => active === "ALL" || p.type.includes(active)
  );

  return (
    <section className="work-section" id="work">
      <div className="section-head">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h2>
            Less talk.
            <br />
            <em>More making.</em>
          </h2>
        </div>
        <p>
          A few projects I've built, explored, and learned from. Each one
          started with a problem worth making simpler.
        </p>
      </div>
      <div className="filters" aria-label="Filter projects">
        {["ALL", "FINTECH", "BOOKING", "HEALTHCARE", "GAMING", "FASHION"].map(
          (f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={active === f ? "filter active" : "filter"}
            >
              {f}
              <span>
                {f === "ALL"
                  ? "05"
                  : String(
                      projects.filter((p) => p.type.includes(f)).length
                    ).padStart(2, "0")}
              </span>
            </button>
          )
        )}
      </div>
      <div className="project-list">
        {filtered.map((p) => (
          <article className={`project project-${p.color}`} key={p.n}>
            <a
              className="project-art screenshot-art"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title}`}
            >
              <img
                className="project-screenshot"
                src={p.image}
                alt={`${p.title} website hero screenshot`}
                loading={p.n === "01" ? "eager" : "lazy"}
              />
              <div className="art-top">
                <span>{p.tag}</span>
                <span>F/O — {p.n}</span>
              </div>
              <div className="mobile-peek">
                <img
                  src={p.mobile}
                  alt={`${p.title} mobile screenshot`}
                  loading="lazy"
                />
              </div>
              <span className="art-index">{p.n} / 05</span>
              <span className="view-live">VIEW LIVE ↗</span>
            </a>
            <div className="project-info">
              <div className="project-heading">
                <span className="project-number">({p.n})</span>
                <h3>{p.title}</h3>
                <span className="project-year">{p.year}</span>
                <a
                  className="project-arrow"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                >
                  ↗
                </a>
              </div>
              <div className="project-detail">
                <p>{p.desc}</p>
                <div className="project-tags">
                  <span>{p.type}</span>
                  <span>{p.stack}</span>
                  <a
                    className="fullpage-link"
                    href={p.full}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FULL PAGE ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
