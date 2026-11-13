import type { ReactNode } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiPython,
  SiAngular,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux
} from 'react-icons/si';
import { Icon } from '@iconify/react';
import javaIcon from '../assets/java-logo-svgrepo-com.svg'
import jsIcon from '../assets/javascript-svgrepo-com.svg'
import tsIcon from '../assets/typescript-svgrepo-com.svg'

type Skill = {
  name: string;
  icon: ReactNode;
  type?: 'image' | 'icon';
};

const languages: Skill[] = [
  { name: 'Java', icon: <img src={javaIcon} alt="Java" className="skill-icon" />, type: 'image' },
  { name: 'Python', icon: <SiPython className="skill-icon" />, type: 'icon' },
  { name: 'JavaScript', icon: <img src={jsIcon} alt="JavaScript" className="skill-icon" />, type: 'image' },
  { name: 'TypeScript', icon: <img src={tsIcon} alt="TypeScript" className="skill-icon" />, type: 'image' }
];

const frameworks: Skill[] = [
  { name: 'React', icon: <SiReact className="skill-icon" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="skill-icon" /> },
  { name: 'Angular', icon: <SiAngular className="skill-icon" /> }
];

const databases: Skill[] = [
  { name: 'PostgreSQL', icon: <SiPostgresql className="skill-icon" /> }
];

const tools: Skill[] = [
  { name: 'Git', icon: <SiGit className="skill-icon" /> },
  { name: 'GitHub', icon: <SiGithub className="skill-icon" /> },
  { name: 'Postman', icon: <SiPostman className="skill-icon" /> },
  { name: 'Linux', icon: <SiLinux className="skill-icon" /> }
];

function Skills() {
  return (
    <section className="skills" id="skills">
    <h2 className="section-title">Skills</h2>

    <div className="skills-content">

      <div className="skill-category">

        <h3>Languages</h3>

        <div className='skill-list'>
          {languages.map((language) => (
          <div key={language.name} className="skill-item">
            {language.icon}
            <span className='skill-name'>{language.name}</span>
          </div>
        ))}

        </div>
      </div>
      
      <div className="skill-category">
        <h3>Frameworks & Libraries</h3>

        <div className='skill-list'>
          {frameworks.map((framework) => (
          <div key={framework.name} className="skill-item">
            {framework.icon}
            <span className='skill-name'>{framework.name}</span>
          </div>
        ))}

        </div>
      </div>

      <div className="skill-category">
        <h3>Databases</h3>

        <div className='skill-list'>
          {databases.map((database) => (
          <div key={database.name} className="skill-item">
            {database.icon}
            <span className='skill-name'>{database.name}</span>
          </div>
        ))}

        </div>
      </div>

      <div className="skill-category">
        <h3>Tools and Platforms</h3>

        <div className='skill-list'>
          {tools.map((tool) => (
          <div key={tool.name} className="skill-item">
            {tool.icon}
            <span className='skill-name'>{tool.name}</span>
          </div>
        ))}

        </div>
      </div>
    </div>

      <div className="skills-index">
        <span>03</span>
        <span className="index-line"></span>
        <span>05</span>
      </div>
    </section>
  );
}

export default Skills;