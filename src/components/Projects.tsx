import ProjectCarousel from "./ProjectCarousel";

function Projects() {
    return(
        <section className="projects" id="projects">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-slideshow">
            <ProjectCarousel />
        </div>
        

        <div className="skills-index">
            <span>04</span>
            <span className="index-line"></span>
            <span>05</span>
        </div>
    </section>
    )
}

export default Projects;