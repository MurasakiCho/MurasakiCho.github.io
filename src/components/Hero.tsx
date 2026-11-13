function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/*<p className="eyebrow">
          <span className="status-dot"></span>
          COMPUTER SCIENCE GRADUATE | SOFTWARE DEVELOPER
        </p>*/}

         <h1>
          I'm Briana,
          <br />
          a <em>Software Developer,</em>
          <br />
          bringing digital ideas to life.
        </h1>

        <p className="hero-description">
          I'm Briana, a developer passionate about
          building software, solving problems, and
          understanding the technology behind it all.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore my work ↗
          </a>

          <a href="#contact" className="button-secondary">
            Let's connect ↗
          </a>

        </div>
      </div>

      <div className="hero-index">
        <span>01</span>
        <span className="index-line"></span>
        <span>05</span>
      </div>

    </section>
  );
}

export default Hero;