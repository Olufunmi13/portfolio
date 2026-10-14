"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    n: "01",
    title: "Style Headquarters Atelier",
    type: "FASHION",
    year: "LIVE",
    stack: "Fashion · Brand experience · Responsive UI",
    color: "ink",
    tag: "DRESSED FOR ROYALTY",
    desc: "A fashion-led digital experience built to put the collection and its personality first.",
    image: "/projects/stylehq-hero.webp",
    mobile: "/projects/stylehq-mobile.webp",
    full: "/projects/stylehq-full.webp",
    url: "https://stylehq.vercel.app/",
  },
  {
    n: "02",
    title: "Innovate Health Africa",
    type: "HEALTHCARE",
    year: "LIVE",
    stack: "Healthcare · Research · Content-rich web",
    color: "green",
    tag: "RESEARCH WITH IMPACT",
    desc: "A digital home for healthcare innovation, research, programmes, and partnerships across Africa.",
    image: "/projects/innovate-health-hero.webp",
    mobile: "/projects/innovate-health-mobile.webp",
    full: "/projects/innovate-health-full.webp",
    url: "https://www.innovatehealth.africa",
  },
  {
    n: "03",
    title: "ChessKindle",
    type: "GAMING",
    year: "LIVE",
    stack: "Chess · Learning · Responsive UI",
    color: "purple",
    tag: "FIND YOUR NEXT MOVE",
    desc: "A chess learning experience connecting players with tutors who can help their game move forward.",
    image: "/projects/chesskindle-hero.webp",
    mobile: "/projects/chesskindle-mobile.webp",
    full: "/projects/chesskindle-full.webp",
    url: "https://www.chesskindle-fe.onrender.com",
  },
  {
    n: "04",
    title: "Inkbooking Tattoo Studio",
    type: "BOOKING",
    year: "LIVE",
    stack: "Appointment booking · Responsive UI",
    color: "ink",
    tag: "MAKE SPACE FOR THE ART",
    desc: "A focused booking experience that helps visitors take the next step toward their next tattoo.",
    image: "/projects/inkbooking-hero.webp",
    mobile: "/projects/inkbooking-mobile.webp",
    full: "/projects/inkbooking-full.webp",
    url: "https://www.inkbookingtattoer.com",
  },
  {
    n: "05",
    title: "Taxflow",
    type: "FINTECH",
    year: "LIVE",
    stack: "Fintech · Tax tools · Product landing page",
    color: "teal",
    tag: "KNOW YOUR REAL TAX",
    desc: "A fintech product experience explaining a simpler way to understand tax and income.",
    image: "/projects/taxflow-hero.webp",
    mobile: "/projects/taxflow-mobile.webp",
    full: "/projects/taxflow-full.webp",
    url: "https://taxflow.com.ng",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("ALL");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-head, .project, .about-left, .about-right, .contact-top, .contact-section h2, .contact-bottom, footer",
    );
    targets.forEach((node) => node.classList.add("reveal-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -35px 0px" },
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const filtered = projects.filter(
    (p) => active === "ALL" || p.type.includes(active),
  );
  return (
    <main>
      <div className="topline">
        <a className="wordmark" href="#top">
          F / O<span className="green-dot">●</span>
        </a>
        <span className="top-note">
          INDEPENDENT DEVELOPER <span className="slash">/</span>NG
        </span>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            WORK <sup>05</sup>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            SAY HELLO ↗
          </a>
        </nav>
      </div>
      <section className="hero" id="top">
        <div className="hero-meta">
          <span>FRONTEND DEVELOPER</span>
          <span className="availability">
            <i /> OPEN TO THE RIGHT THING
          </span>
        </div>
        <h1>
          I make the
          <br />
          <span className="headline-second">internet</span>{" "}
          <span className="work-word">
            WORK<span className="star">✳</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            I’m Olufunke - a frontend developer who cares about how things{" "}
            <em>feel</em> as much as how they function.
          </p>
          <div className="hero-side">
            <span className="hand-drawn-arrow">↘</span>
            <a href="#work" className="round-link">
              <span>
                SCROLL TO
                <br />
                SEE THE WORK
              </span>
              <b>↓</b>
            </a>
          </div>
        </div>
        <div className="hero-stamp">
          <span>BUILT WITH</span>
          <b>
            CARE<span>✳</span>
          </b>
          <span>AND A LITTLE OBSESSION</span>
        </div>
      </section>
      <div className="ticker" aria-label="Design minded development">
        <div className="ticker-track">
          GOOD IDEAS, BUILT WELL <b>✳</b> DETAILS ARE THE DIFFERENCE <b>✳</b>{" "}
          GOOD IDEAS, BUILT WELL <b>✳</b> DETAILS ARE THE DIFFERENCE <b>✳</b>
          GOOD IDEAS, BUILT WELL <b>✳</b> UNDERPROMISE AND OVERDELIVER <b>✳</b>
          &nbsp;
        </div>
      </div>
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
            A few projects I’ve built, explored, and learned from. Each one
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
                        projects.filter((p) => p.type.includes(f)).length,
                      ).padStart(2, "0")}
                </span>
              </button>
            ),
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
      <section className="about-section" id="about">
        <div className="about-left">
          <span className="eyebrow">02 / A LITTLE ABOUT ME</span>
          <h2>
            Curious by
            <br />
            default.
            <br />
            <em>Developer</em>
            <br />
            by choice.
          </h2>
          <div className="about-doodle">✳</div>
        </div>
        <div className="about-right">
          <p className="about-lede">
            I like turning a messy brief into something clear, useful, and just
            a bit delightful.
          </p>
          <p>
            I work across the details that make a website feel considered: the
            structure, the responsive behaviour, the little interactions, and
            the moments where a user needs things to simply make sense.
          </p>
          <p>
            I’m still learning, still building, and very interested in working
            with people who care about the craft.
          </p>
          <div className="toolbox">
            <span className="eyebrow">TECHNOLOGIES I WORK WITH</span>
            <div className="tool-tags">
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>Git / GitHub</span>
              <span>Supabase</span>
              <span>Responsive UI</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-top">
          <span className="eyebrow">03 / YOUR TURN</span>
          <span className="contact-aside">HAVE A GOOD ONE IN MIND?</span>
        </div>
        <h2>
          Let’s make
          <br />
          <em>something</em>
          <br />
          matter.
        </h2>
        <div className="contact-bottom">
          <p>
            Have a project, a role, or a problem that needs a thoughtful
            frontend? I’m listening.
          </p>
          <a className="email-button" href="mailto:oluwatuyiolufunke@gmail.com">
            HELLO DEV, let's work ↗
          </a>
        </div>
        <div className="contact-scribble">no boring stuff, please.</div>
      </section>
      <footer>
        <a className="wordmark" href="#top">
          F / O<span className="green-dot">●</span>
        </a>
        <span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span>
        <div>
          <a
            href="https://github.com/olufunmi13"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB ↗
          </a>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
        <span className="footer-year">© 2026</span>
      </footer>
    </main>
  );
}
