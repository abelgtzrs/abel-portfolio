import Typical from 'react-typical';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p className="typing-effect">
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
      <p>
        When I’m not solving code problems, I’m probably gaming, listening to <strong>The Strokes</strong>, 
        or generating insane greentexts. Stick around to see my work!
      </p>
    </section>
  );
}

export default About;
