import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Weather Dashboard', deployed: '#', github: '#' },
    { title: 'E-Commerce Backend', deployed: '#', github: '#' },
    { title: 'Employee Tracker', deployed: '#', github: '#' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
