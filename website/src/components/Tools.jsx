import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";
import ReactLogo from "../logos/reactjs.svg";
import NextLogo from "../logos/nextjs.svg";
import ReduxLogo from "../logos/reduxjs.svg";
import StyledComponentsLogo from "../logos/styled-components.png";
import GitLogo from "../logos/git.svg";
import NodeLogo from "../logos/nodejs.svg";

const content = {
  title : {
    en: "Tools",
    pt: "Ferramentas"
  },
  intertitle: {
    en: "The tools I've been using to develop web applications",
    pt: "As ferramentas que venho usando para desenvolver aplicações web"
  },
  tools: [
    {
      name: "React.js",
      image: ReactLogo,
      description: {
        en: "What I'm currently using to create user interfaces, and constantly learning.",
        pt: "O que eu estou usando atualmente para criar interfaces de usuário, e aprendendo constantemente.",
      },
    },
    {
      name: "Next.js",
      image: NextLogo,
      description: {
        en: "The framework that helps me when I need a full-stack solution that expands on React.js.",
        pt: "O framework que me ajuda quando eu preciso de uma solução full-stack, expandindo o React.js.",
      },
    },
    {
      name: "Redux.js",
      image: ReduxLogo,
      description: {
        en: "The state management library that helps me when the Context API is not enough.",
        pt: "A biblioteca de gerenciamento de estado que me ajuda quando a API de Contexto do React não é suficiente.",
      },
    },
    {
      name: "Styled Components",
      image: StyledComponentsLogo,
      description: {
        en: "A library that makes it easier writing CSS in JS.",
        pt: "Uma biblioteca que facilita a escrita de CSS em JS.",
      },
    },
    {
      name: "Node.js",
      image: NodeLogo,
      description: {
        en: "For when I need to use JavaScript on the server-side.",
        pt: "Para quando eu preciso usar o JavaScript no lado do servidor..",
      },
    },
    {
      name: "Git",
      image: GitLogo,
      description: {
        en: "The system that I use for version control.",
        pt: "O sistema que uso para controle de versão.",
      },
    },
  ],
};

const StyledTools = styled.section`
  & > ul {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0;
    text-align: center;
    & > li {
      list-style-type: none;
      & > img {
        width: 100px;
        filter: ${({ theme }) => theme.filter};
        transition: filter 500ms;
        margin: 0 auto;
        display: block;
        &:hover:not(img[alt="Next.js"]) {
          filter: unset;
        }
      }
    }
  }
`;

const Tools = () => {
  const { lang } = useContext(Context);

  const toolsItems = content.tools.map((item) => {
    return (
      <li key={item.name}>
        <img src={item.image} alt={item.name} />
        <div>{item.name}</div>
        <p>{item.description[lang]}</p>
      </li>
    );
  });

  return (
    <>
      <StyledTools>
        <h3>{content.title[lang]}</h3>
        {/* <p>{content.intertitle[lang]}</p> */}
        <ul>{toolsItems}</ul>
      </StyledTools>
    </>
  );
};

export default Tools;
