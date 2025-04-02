import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Portfolio.css';

function Project({ title, tech, github, deployed }) {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h3>{title}</h3>
        <p className="project-tech">{tech}</p>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          {deployed && (
            <a href={deployed} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
