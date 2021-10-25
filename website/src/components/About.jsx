import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  section : {
    title: {
      en: "About",
      pt: "Sobre"
    }
  },
  presentation: {
    en: "I'm a web developer, and systems analyst based on City - XX, Country. I'm currently focused on building web applications with JavaScript, more specifically with React.js and its ecosystem.",
    pt: "Eu sou um desenvolvedor frontend e analistas de sistemas de Cidade - XX, País. Atualmente eu estou focado em construir aplicações web com JavaScript, mais especificamente com React.js e seu ecossistema."
  },
  extra_presentation: {
    en: "When I'm not programming, you can find me [doing other stuff].",
    pt: "Quando eu não estou programando, você pode me encontrar [fazendo outras coisas]."
  }
};

const StyledAbout = styled.section`
  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      transition: background-color 0.2s, color 0.2s;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
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
  const {lang} = useContext(Context);
  return (
    <StyledAbout>
      <h2>{content.section.title[lang]}</h2>
      {/* <section className="summary">
        <img src="https://fakeimg.pl/250x250" alt="" />
        <ul>
          <li>👨‍💻 Frontend Developer, Systems Analyst</li>
          <li>📍⠀ City - XX, Country</li>
          <li>🎓 BSc., Information Systems</li>
        </ul>
      </section> */}
      <p>
        {content.presentation[lang]}
      </p>
      <p>{content.extra_presentation[lang]}</p>
      <h3>Setup</h3>
      <ul>
        <li>
          This website is hosted on <a href="https://">GitHub Pages</a>, and
          uses the <a href="https://">React.js</a> Library with{" "}
          <a href="https://">Styled Components</a>.
        </li>
        <li>
          Editor: I write code mostly with{" "}
          <a href="https://">Visual Studio Code</a>, but sometimes with{" "}
          <a href="https://">Vim</a> too.
        </li>
        <li>
          Terminal: <a href="https://">Windows Terminal</a> with{" "}
          <a href="https://">PowerShell</a>, or <a href="https://">Bash</a>.
        </li>
        <li>
          Communication: You can find me on <a href="https://">Matrix</a> and{" "}
          <a href="https://">IRC</a>.
        </li>
        <li>
          Browser: I currently use <a href="https://">Firefox</a> as my default
          browser.
        </li>
        <li>
          Everything else: <a href="https://">Emacs</a> and{" "}
          <a href="https://">Org Mode</a>.
        </li>
      </ul>
    </StyledAbout>
  );
};

export default About;
