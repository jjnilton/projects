import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  section: {
    title: {
      en: "About",
      pt: "Sobre",
    },
  },
  presentation: {
    en: "I'm a web developer, based in City - XX, Country. I'm currently focused on building web applications with JavaScript, more specifically with React.js and its ecosystem.",
    pt: "Eu sou um desenvolvedor web, de Cidade - XX, País. Atualmente eu estou focado em construir aplicações web com JavaScript, mais especificamente com React.js e seu ecossistema.",
  },
  extra_presentation: {
    en: "When I'm not programming, you can find me [doing other stuff].",
    pt: "Quando eu não estou programando, você pode me encontrar [fazendo outras coisas].",
  },
  setup: {
    title: {
      en: "Setup",
      pt: "Setup?",
    },
  },
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

const Setup = (props) => {
  const lang = props.lang;

  // to refactor
  let website = (
    <li>
      This website is hosted on <a href="https://">GitHub Pages</a>, and uses
      the <a href="https://">React.js</a> library.
    </li>
  );
  let editor = (
    <li>
      Editor: I write code mostly with <a href="https://">Visual Studio Code</a>
      , but sometimes with <a href="https://">Vim</a> too.
    </li>
  );
  let terminal = (
    <li>
      Terminal: <a href="https://">Windows Terminal</a> with{" "}
      <a href="https://">PowerShell</a>, or <a href="https://">Bash</a>.
    </li>
  );
  let communication = (
    <li>
      Communication: You can find me on <a href="https://">Matrix</a> and{" "}
      <a href="https://">IRC</a>.
    </li>
  );
  let browser = (
    <li>
      Browser: I currently use <a href="https://">Firefox</a> as my default
      browser.
    </li>
  );
  let everythingElse = (
    <li>
      Everything else: <a href="https://">Emacs</a> and{" "}
      <a href="https://">Org Mode</a>.
    </li>
  );

  if (lang === "pt") {
    website = (
      <li>
        Este website é hospedado na <a href="https://">GitHub Pages</a>, e usa a
        biblioteca <a href="https://">React.js</a>.
      </li>
    );
    editor = (
      <li>
        Editor: Eu escrevo códigos com o{" "}
        <a href="https://">Visual Studio Code</a>, mas às vezes com o{" "}
        <a href="https://">Vim</a> também.
      </li>
    );
    terminal = (
      <li>
        Terminal: <a href="https://">Windows Terminal</a> com{" "}
        <a href="https://">PowerShell</a>, ou <a href="https://">Bash</a>.
      </li>
    );
    communication = (
      <li>
        Communication: Você pode me na <a href="https://">Matrix</a> ou no{" "}
        <a href="https://">IRC</a>.
      </li>
    );
    browser = (
      <li>
        Navegador: Atualmente eu uso o <a href="https://">Firefox</a> como meu
        navegador padrão.
      </li>
    );
    everythingElse = (
      <li>
        Todo o resto: <a href="https://">Emacs</a> e{" "}
        <a href="https://">Org Mode</a>.
      </li>
    );
  }

  const listItems = [
    website,
    editor,
    terminal,
    communication,
    browser,
    everythingElse,
  ].map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>);

  return (
    <>
      <h3>{content.setup.title[lang]}</h3>
      <ul>{listItems}</ul>
    </>
  );
};

const About = () => {
  const { lang } = useContext(Context);
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
      <p>{content.presentation[lang]}</p>
      <p>{content.extra_presentation[lang]}</p>
      <Setup lang={lang}></Setup>
    </StyledAbout>
  );
};

export default About;
