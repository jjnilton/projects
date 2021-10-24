import styled from "styled-components";

const StyledAbout = styled.section`

  a {
    color: ${({theme}) => theme.colors.secondary};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      transition: background-color .2s, color .2s;
      background-color: ${({theme}) => theme.colors.secondary};
      color: ${({theme}) => theme.colors.primary};
    }
  }

  section.summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    ul {
      padding: 0;
      & > li {
        list-style-type: none;
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>About</h2>
      {/* <section className="summary">
        <img src="https://fakeimg.pl/250x250" alt="" />
        <ul>
          <li>👨‍💻 Frontend Developer, Systems Analyst</li>
          <li>📍⠀ City - XX, Country</li>
          <li>🎓 BSc., Information Systems</li>
        </ul>
      </section> */}
      <p>I'm a frontend web developer, and systems analyst based on City - XX, Country.</p>
      <p>When I'm not programming, you can find me doing other stuff.</p>
      <h3>Setup</h3>
      <ul>
        <li>
          This website is hosted on <a href="https://">GitHub Pages</a>, and uses the{" "}
          <a href="https://">React.js</a> Library with <a href="https://">Styled Components</a>.
        </li>
        <li>
          Editor: I write code mostly with <a href="https://">Visual Studio Code</a>, but sometimes
          with <a href="https://">Vim</a> too.
        </li>
        <li>Terminal: <a href="https://">Windows Terminal</a> with <a href="https://">PowerShell</a>, or <a href="https://">Bash</a>.</li>
        <li>Communication: You can find me on <a href="https://">Matrix</a> and <a href="https://">IRC</a>.</li>
        <li>Browser: <a href="https://">Firefox</a>.</li>
        <li><a href="https://">Emacs</a> for everything else.</li>
      </ul>
    </StyledAbout>
  );
};

export default About;
