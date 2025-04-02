import Typical from 'react-typical';
import Loader from '../components/Loader.jsx';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section chaotic">
      <h2 className="section-title glitchy-header">About Me</h2>

      <div className="ascii-border">
        <p className="typing-effect glitchy-text">
          <Typical
            steps={[
              'Hello, I’m Abel...', 1500,
              'I’m a full-stack developer...', 1500,
              'I hate coding, playing Elden Ring, and The Strokes...', 1500,
              'Currently building The Abel Experience™...', 1500,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </p>
        
        <div className="loader-container">
          <Loader />
        </div>

        <p className="bio-text">
          I'm a developer working with React and full-stack tools like Node.js, Express, and MongoDB.
          I’m focused on building clean, functional apps with solid UI/UX and maintainable code.
        </p>
      </div>
    </section>
  );
}

export default About;
