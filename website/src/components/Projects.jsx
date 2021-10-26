import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";
import WordFrequencyAppScreenshot from "../screenshots/word-frequency-app.png";
import LoremIpsumGeneratorDarkScreenshot from "../screenshots/lorem-ipsum-generator-dark.png";
import LoremIpsumGeneratorLightScreenshot from "../screenshots/lorem-ipsum-generator-light.png";
import BookFinderAppScreenshot from "../screenshots/book-finder-app.png";
import EventCountdownTimerScreenshot from "../screenshots/event-countdown-timer.png";

const StyledProjects = styled.article``;

const projects_data = [
  {
    name: "Word Frequency App & API",
    description: {
      en: "A web app and API that checks the frequency of words in a text, and displays the data in a table and a chart.",
      pt: "Uma aplicação web e API que verifica a frequência de palavras em um texto, e exibe os dados em uma tabela e em um gráfico.",
    },
    tags: ["Next.js", "Styled Components", "Chart.js"],
    source: "https://github.com/jjnilton/projects/blob/main/word-frequency",
    live: "https://word-frequency-app.vercel.app/",
    image: WordFrequencyAppScreenshot,
  },
  {
    name: "Lorem Ipsum Generator",
    description: {
      en: "A web app that generates a Lorem Ipsum placeholder text, based on the quantity of characters, words, or paragraphs specified.",
      pt: "Uma aplicação web que gera um texto de Lorem Ipsum, baseado na quantidade de caracteres, palavras ou parágrafos.",
    },
    tags: ["React", "Styled Components", "Clipboard API"],
    source:
      "https://github.com/jjnilton/projects/blob/main/lorem-ipsum-generator",
    live: "https://jjnilton.github.io/projects/lorem-ipsum-generator/build",
    image: {
      light: LoremIpsumGeneratorLightScreenshot,
      dark: LoremIpsumGeneratorDarkScreenshot,
    },
  },
  {
    name: "Book Finder App",
    description: {
      en: "A web app that allows to search books using the OpenLibrary.org API, and displays the results in a grid layout.",
      pt: "Uma aplicação web que permite pesquisar livros usando a API da OpenLibrary.org, e exibe os resultados num grid.",
    },
    tags: ["React", "Redux", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: BookFinderAppScreenshot,
  },
  {
    name: "Event Countdown Timer",
    description: {
      en: "A web app that allows creating multiple countdown timers, and notifies the user when the date is reached.",
      pt: "Uma aplicação web que permite criar múltiplos timers, e notifica o usuário quando a data é alcançada.",
    },
    tags: ["React", "Styled Components", "Web APIs"],
    source:
      "https://github.com/jjnilton/projects/blob/main/event-countdown-timer",
    live: "https://jjnilton.github.io/projects/event-countdown-timer/build",
    image: EventCountdownTimerScreenshot,
  },
];

const StyledProjectList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
`;

const ProjectList = () => {
  const projectsList = projects_data.map((project, index) => {
    return <ProjectItem key={index} project={project}></ProjectItem>;
  });
  return <StyledProjectList>{projectsList}</StyledProjectList>;
};

const StyledProjectItem = styled.li`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  display: grid;
  gap: 16px;
  grid-template-rows: max-content max-content max-content 1fr max-content;

  img {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    justify-self: center;
    min-width: 100%;
    max-width: 320px;
    width: 100%;
  }

  h3 {
    margin: 0;
  }

  div.links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  a {
    display: block;
    padding: 5px;
    text-decoration: none;
    text-align: center;
    transition: background-color .2s, color .2s, border-color .2s;
  }
  a:first-child {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    /* font-family: monospace; */
    & > span {
      font-family: 'Fira Mono', monospace;
    }
    & > span::before {
      content: '\f121';
      font-family: 'fontello';
      margin-right: 5px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
  a:last-child {
    color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledTags = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: baseline;
  li {
    list-style-type: none;
    padding: 2px 4px;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    font-size: 0.8em;
  }
`;

const Tags = (props) => {
  const tagListItems = props.tags.map((tag, index) => {
    return <li key={index}>{tag}</li>;
  });

  return <StyledTags>{tagListItems}</StyledTags>;
};

const ProjectItem = (props) => {
  const { lang, theme } = useContext(Context);
  return (
    <StyledProjectItem>
      <img
        src={
          theme === "light"
            ? props.project.image.light || props.project.image
            : props.project.image.dark || props.project.image
        }
        alt={`${props.project.name} screenshot`}
      />
      <h3>{props.project.name}</h3>
      <div>{props.project.description[lang]}</div>
      <Tags tags={props.project.tags}></Tags>
      <div className="links">
        <a href={props.project.source}><span>Source</span></a>
        <a href={props.project.live}><span>Live</span></a>
      </div>
    </StyledProjectItem>
  );
};

const content = {
  title: {
    en: "Projects",
    pt: "Projetos",
  },
  subtitle: {
    en: "The latest projects I worked on",
    pt: "Os últimos projetos que trabalhei",
  },
};

const Projects = () => {
  const { lang } = useContext(Context);
  return (
    <StyledProjects id="projects">
      <h2>{content.title[lang]}</h2>
      {/* <p>{content.subtitle[lang]}</p> */}
      <ProjectList></ProjectList>
    </StyledProjects>
  );
};

export default Projects;
