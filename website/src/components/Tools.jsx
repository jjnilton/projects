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
  title: {
    en: "And more tools...",
    pt: "E mais ferramentas...",
  },
  intertitle: {
    en: "The tools I've been using to develop web applications",
    pt: "As ferramentas que venho usando para desenvolver aplicações web",
  },
  tools: [
    {
      name: "React.js",
      image: ReactLogo,
      description: {
        en: "What I'm currently using to create user interfaces",
        pt: "O que uso atualmente para criar interfaces de usuário",
      },
    },
    {
      name: "Next.js",
      image: NextLogo,
      description: {
        en: "The framework I use when I need a full-stack solution",
        pt: "O framework que uso quando como solução full-stack",
      },
    },
    {
      name: "Redux.js",
      image: ReduxLogo,
      description: {
        en: "A library that makes state managament really easy",
        pt: "Uma biblioteca que facilita o gerenciamento de estados",
      },
    },
    {
      name: "Styled Components",
      image: StyledComponentsLogo,
      description: {
        en: "A library that makes it easier writing CSS in JavaScript",
        pt: "Uma biblioteca que facilita a escrita de CSS em JavaScript",
      },
    },
    {
      name: "Node.js",
      image: NodeLogo,
      description: {
        en: "For when I need to use JavaScript on the server-side",
        pt: "Para quando eu preciso usar o JavaScript no lado do servidor",
      },
    },
    {
      name: "Git",
      image: GitLogo,
      description: {
        en: "The system that I use for version control in my projects",
        pt: "O sistema de controle de versão que uso nos meus projetos",
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
        <h4>{content.title[lang]}</h4>
        {/* <p>{content.intertitle[lang]}</p> */}
        <ul>{toolsItems}</ul>
      </StyledTools>
    </>
  );
};

export default Tools;
