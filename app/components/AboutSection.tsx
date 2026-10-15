export function AboutSection() {
  return (
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
          I'm still learning, still building, and very interested in working
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
  );
}
