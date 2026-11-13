import type { Project } from '../data/projects';
import { ExternalLink } from 'lucide-react';


function ProjectSlide ({project} : {project: Project}) {
    return(
        <section className='project-slide'>
            <div className='slide-title'>

                <h2>{project.name}</h2>
                {project.github && (
                    <a href={project.github} target='_blank' rel="noopener noreferrer">
                        <ExternalLink />
                    </a> 
                )}
                
            </div>

            <div className='slide-content'>
                <div className='slide-screenshot'>
                    <img src={project.screenshot} alt={`${project.name} application screenshot`} />
                </div>

                <div className='slide-details'>

                    <h3>Overview</h3>
                    <p>{project.description}</p>

                    <div className='tech-tags'>
                        <h3>Technology</h3>
                        {project.tech.map((t) => (
                        <span key={t} className='tag'>
                            {t}
                        </span>
                    ))}
                    </div>
                    
                    <h3>Highlights</h3>
                    <ul className='slide-highlights'>
                        {project.highlights.map((h) => (
                            
                            <li key={h}>{h}</li>
                            
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default ProjectSlide;
