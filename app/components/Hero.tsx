export function Hero() {
  return (
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
          I'm Olufunke - a frontend developer who cares about how things{" "}
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
  );
}
