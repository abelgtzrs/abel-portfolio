import "../styles/Resume.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaNpm,
  FaServer,
  FaPython,
  FaPhp,
  FaCuttlefish, // Temporary for Redux
  FaCogs, // For general backend tools
  FaMicrosoft, // For C#
} from "react-icons/fa";

function Resume() {
  const skills = [
    // Front-End
    { name: "HTML5", icon: <FaHtml5 />, category: "front-end" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "front-end" },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare />, category: "front-end" },
    { name: "React.js", icon: <FaReact />, category: "front-end" },
    { name: "Redux", icon: <FaCuttlefish />, category: "front-end" }, // Placeholder

    // Back-End
    { name: "Node.js", icon: <FaNodeJs />, category: "back-end" },
    { name: "Express.js", icon: <FaServer />, category: "back-end" },
    { name: "MongoDB", icon: <FaDatabase />, category: "back-end" },
    { name: "MySQL", icon: <FaDatabase />, category: "back-end" },
    { name: "PostgreSQL", icon: <FaDatabase />, category: "back-end" },
    { name: "C#", icon: <FaMicrosoft />, category: "back-end" },
    { name: "Python", icon: <FaPython />, category: "back-end" },
    { name: "PHP", icon: <FaPhp />, category: "back-end" },

    // Dev Tools
    { name: "Git & GitHub", icon: <FaGitAlt />, category: "dev-tools" },
    { name: "NPM", icon: <FaNpm />, category: "dev-tools" },
    { name: "Database Design", icon: <FaCogs />, category: "dev-tools" },
  ];

  const frontEndSkills = skills.filter((skill) => skill.category === "front-end");
  const backEndSkills = skills.filter((skill) => skill.category === "back-end");
  const devToolsSkills = skills.filter((skill) => skill.category === "dev-tools");

  return (
    <section className="resume-section fade-in">
      <h2 className="section-title">Resume</h2>

      <div className="resume-card">
        <p className="resume-intro">
          Download my resume, or check out my highlighted skills below!
        </p>

        <a className="resume-download" href="/assets/resume.pdf" download>
          Download Resume (PDF)
        </a>

        <h3 className="resume-subtitle">Front-End Proficiencies</h3>
        <ul className="skills-grid">
          {frontEndSkills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="resume-subtitle">Back-End Proficiencies</h3>
        <ul className="skills-grid">
          {backEndSkills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>

        <h3 className="resume-subtitle">Dev Tools & Other</h3>
        <ul className="skills-grid">
          {devToolsSkills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
