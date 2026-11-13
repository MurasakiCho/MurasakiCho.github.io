import placeholderImg from '../assets/me.png';

function About () {
  return (
    
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img src={placeholderImg} alt="Briana" className="about-image" />
        <p className="about-description">
          I'm a Computer Science graduate with a passion for building software 
          and understanding the technology behind it. I enjoy taking ideas from 
          concept to implementation, whether that's developing full-stack 
          applications, designing APIs, or working with databases. <br /><br />

          I'm naturally curious about how things work beneath the surface. I enjoy
          breaking down complex problems, exploring different approaches, and 
          continuously expanding my understanding of the tools and technologies I 
          work with. <br /><br />

          Currently, I'm focused on growing as a software developer, 
          strengthening my technical foundation, and exploring areas like 
          machine learning and data-driven systems. I believe there's always 
          something new to learn, and I enjoy the process of turning that 
          curiosity into something tangible.
        </p>
      </div>

      <div className="about-index">
        <span>02</span>
        <span className="index-line"></span>
        <span>05</span>
      </div>
    </section>
  );
}

export default About;