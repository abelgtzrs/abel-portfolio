import Project from '../components/Project.jsx';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project Trippit',
      tech: 'HTML, JavaScript, CSS',
      github: 'https://github.com/abelgutierrezdev/project-trippit',
      deployed: 'https://abelgutierrezdev.github.io/project-trippit/',
    },
    {
      title: 'Readme Generator',
      tech: 'Node.js',
      github: 'https://github.com/abelgutierrezdev/readme-generator',
    },
    {
      title: 'Vehicle Builder',
      tech: 'Node.js, TypeScript',
      github: 'https://github.com/abelgutierrezdev/vehicle-builder',
    },
    {
      title: 'Employee Tracker',
      tech: 'Node.js, PostgreSQL',
      github: 'https://github.com/abelgutierrezdev/employee-tracker',
    },
    {
      title: 'Weather Dashboard',
      tech: 'Express.js API',
      github: 'https://github.com/abelgutierrezdev/weather-dashboard',
      deployed: 'https://abelgutierrezdev.github.io/weather-dashboard/',
    },
    {
      title: 'The Abel Experience™',
      tech: 'React, Express, PostgreSQL',
      github: 'https://github.com/abelgutierrezdev/the-abel-experience',
      deployed: 'https://theabelexperience.netlify.app/',
    },
  ];

  return (
    <section className="portfolio-section fade-in">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((proj) => (
          <Project key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
