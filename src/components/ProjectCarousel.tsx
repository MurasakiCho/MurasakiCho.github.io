// imports the actual projects array
// tracks which slide number you are currently on
// renders <Projectslide project={projects} />
import ProjectSlide from "./ProjectSlide";
import { projects } from "../data/projects";
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight, Dot } from 'lucide-react';

export default function ProjectCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    return(

       <section className="project-carousel">
        
            <div className="carousel-track" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {projects.map((project) => (
                    <div className="carousel-slide" key={project.name}>
                        <ProjectSlide project={project} />
                    </div>
                ))}
            </div>
            
            <div className="carousel-buttons">
                <button onClick={() => setActiveIndex((activeIndex - 1 + projects.length) % projects.length)}>
                    <CircleChevronLeft />
                </button>

                <div className="transition-dots">
                    {projects.map((project, index) =>

                        <button 
                            key={project.name} 
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? "active" : ""}
                        >
                            <Dot />
                        </button>

                    )}
                </div>
                
                <button onClick={() => setActiveIndex((activeIndex + 1) % projects.length)}>
                    <CircleChevronRight />
                </button>
                
            </div>
            
            <div className="counter">
                <p>{activeIndex + 1}/{projects.length}</p>
            </div>
            
        </section>
        
    )
}