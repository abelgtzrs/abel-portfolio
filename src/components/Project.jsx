import { useState } from 'react';
import '../styles/Project.css';

function Project({ title, deployed, github, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="project-inner">
        <div className="project-front">
          <h3>{title}</h3>
          <p>
            <a href={deployed} target="_blank" rel="noopener noreferrer">
              View Deployed App
            </a>{' '}
            |{' '}
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <div className="project-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
