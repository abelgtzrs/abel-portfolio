import Project from '../components/Project.jsx';
import '../styles/Portfolio.css';
import { motion } from 'framer-motion';

function Portfolio() {
  const projects = [
    {
      title: 'Project Trippit',
      tech: 'HTML, JavaScript, CSS',
      github: 'https://github.com/abelgtzrs/Project-Trippit',
      deployed: 'https://abelgtzrs.github.io/Project-Trippit/',
    },
    {
      title: 'Readme Generator',
      tech: 'Node.js',
      github: 'https://github.com/abelgtzrs/readmeGen',
    },
    {
      title: 'Vehicle Builder',
      tech: 'Node.js, TypeScript',
      github: 'https://github.com/abelgtzrs/Vehicle-Builder',
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
      github: 'https://github.com/abelgtzrs/theAeblExp3rience',
      deployed: '#',
    },
  ];

  return (
    <motion.section className="portfolio-section" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 1, ease: 'easeInOut' }}>
    <section className="portfolio-section fade-in">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((proj) => (
          <Project key={proj.title} {...proj} />
        ))}
      </div>
    </section>
    </motion.section>
  );
}

export default Portfolio;
