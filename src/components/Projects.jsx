import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import './Projects.css';

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Website', 
    img: proj1,
    description: 'A modern e-commerce platform with shopping cart and payment integration.',
    technologies: ['Figma', 'React', 'CSS'],
    liveLink: '#',
    githubLink: '#'
  },
  { 
    id: 2, 
    title: 'Portfolio Website', 
    img: proj2,
    description: 'Personal portfolio website showcasing my design and development skills.',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveLink: '#',
    githubLink: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="project-link">Live Demo</a>
                <a href={project.githubLink} className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}