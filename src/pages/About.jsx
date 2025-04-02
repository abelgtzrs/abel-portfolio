import { Typewriter } from 'react-simple-typewriter';
import Loader from '../components/Loader.jsx';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section chaotic">
      <h2 className="section-title glitchy-header">About Me</h2>

      <div className="ascii-border">
        <p className="typing-effect glitchy-text">
        <Typewriter
  words={[
    'Hello, I’m Abel...',
    'I’m a full-stack developer...',
    'I hate coding, playing Elden Ring, and The Strokes...',
    'Currently building The Abel Experience™...',
  ]}
  loop={0}
  cursor
  cursorStyle="_"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
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
