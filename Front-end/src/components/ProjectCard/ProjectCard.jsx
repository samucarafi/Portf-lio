const ProjectCard = ({ project }) => (
  <a target="_blank" href={project.link} className="project-card">
    <div className="project-title">{project.title}</div>
    <div className="project-description">{project.description}</div>
    <div className="tech-tags">
      {project.technologies.map((tech, index) => (
        <span key={index} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  </a>
);
export default ProjectCard;
