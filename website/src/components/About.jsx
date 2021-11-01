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
    en: "I'm a web developer based in Feira de Santana – BA, Brazil. I'm currently focused on developing applications with JavaScript, using React.js and its ecosystem.",
    pt: "Eu sou um desenvolvedor web de Feira de Santana – BA, Brasil. Atualmente eu estou focado em desenvolver aplicações com JavaScript, usando o React.js e seu ecossistema.",
  },
  extra_presentation: {
    en: "When I'm not programming, you can find me listening to some music, reading fantasy or sci-fi stories, or playing video games.",
    pt: "Quando eu não estou programando, você pode me encontrar ouvindo música, lendo histórias de fantasia ou ficção científica ou jogando video games.",
  },
  setup: {
    title: {
      en: "Tools",
      pt: "Ferramentas",
    },
  },
};

const links = {
  hosting: <a href="https://netlify.com/">Netlify</a>,
  stack: <a href="https://reactjs.org/">React.js</a>,
  editor: {
    primary: <a href="https://code.visualstudio.com/">Visual Studio Code</a>,
    secondary: <a href="https://www.vim.org/">Vim</a>,
  },
  terminal: {
    emulator: <a href="https://github.com/Microsoft/Terminal">Terminal</a>,
    shells: {
      primary: (
        <a href="https://github.com/PowerShell/PowerShell">PowerShell</a>
      ),
      secondary: <a href="https://www.gnu.org/software/bash/">Bash</a>,
    },
  },
  communication: {
    primary: <a href="https://matrix.org/">Matrix</a>,
    secondary: <a href="https://ircv3.net/">IRC</a>,
  },
  browser: <a href="https://firefox.com/">Firefox</a>,
  other: {
    primary: <a href="https://www.gnu.org/software/emacs/">Emacs</a>,
    secondary: <a href="https://orgmode.org/">Org Mode</a>,
  },
};

const setupItems = {
  hosting: {
    en: (
      <>
        This website is hosted on {links.hosting}, and uses the {links.stack}{" "}
        library.
      </>
    ),
    pt: (
      <>
        Este website é hospedado na {links.hosting}, e usa a biblioteca{" "}
        {links.stack}.
      </>
    ),
  },
  editor: {
    en: (
      <>
        Editor: I write code mostly with {links.editor.primary}, but sometimes
        with {links.editor.secondary} too.
      </>
    ),
    pt: (
      <>
        Editor: Eu escrevo códigos com o {links.editor.primary}, mas às vezes com
        o {links.editor.secondary} também.
      </>
    ),
  },
  terminal: {
    en: (
      <>
        Terminal: {links.terminal.emulator} with {links.terminal.shells.primary}
        , or {links.terminal.shells.secondary}.
      </>
    ),
    pt: (
      <>
        Terminal: {links.terminal.emulator} com {links.terminal.shells.primary},
        ou {links.terminal.shells.secondary}.
      </>
    ),
  },
  communications: {
    en: (
      <>
        Communication: You can find me on {links.communication.primary} and{" "}
        {links.communication.secondary}.
      </>
    ),
    pt: (
      <>
        Comunicação: Você pode me na{" "}
        <a href={links.communication.primary}>Matrix</a> ou no{" "}
        <a href={links.communication.secondary}>IRC</a>.{" "}
      </>
    ),
  },
  browser: {
    en: <>Browser: I currently use {links.browser} as my default browser.</>,
    pt: (
      <>
        Navegador: Atualmente eu uso o {links.browser} como meu navegador
        padrão.
      </>
    ),
  },
  other: {
    en: (
      <>
        Everything else: {links.other.primary} and {links.other.primary}.
      </>
    ),
    pt: (
      <>
        Todo o resto: {links.other.primary} e {links.other.secondary}.
      </>
    ),
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
  p {
    text-align: justify;
    /* text-align: center; */
    @media (max-width: 560px) {
      /* hyphens: auto; */
    }
  }

  /* section.summary {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    ul {
      padding: 0;
      & > li {
        list-style-type: none;
      }
    }
  } */
`;

const About = () => {
  const { lang } = useContext(Context);

  const setupListItems = Object.values(setupItems).map((item, index) => {
    return <li key={index}>{item[lang]}</li>;
  });

  return (
    <StyledAbout id="about">
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
      {/* refactor setup in a component */}
      <h3>{content.setup.title[lang]}</h3>
      <ul>{setupListItems}</ul>
    </StyledAbout>
  );
};

export default About;
