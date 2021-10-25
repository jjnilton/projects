import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const StyledProjects = styled.article``;

const projects_data = [
  {
    name: "Word Frequency App & API",
    description: {
      en: "A web app and API that checks the frequency of words in a text, and displays the data in a table and a chart.",
      pt: "Uma aplicação web e API que verifica a frequência das palavras em um texto, e exibe os dados em uma tabela e em um gráfico.",
    },
    tags: ["Next.js", "Styled Components", "Chart.js"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Lorem Ipsum Generator",
    description: {
      en: "A web app that generates a Lorem Ipsum placeholder text, based on the quantity of characters, words, or paragraphs specified.",
      pt: "Uma aplicação web que gera um texto de Lorem Ipsum, baseado na quantidade de caracteres, palavras ou parágrafos.",
    },
    tags: ["React", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
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
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Product Landing Page",
    description: {
      en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
      pt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    },
    tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
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
  gap: 10px;
  grid-template-rows: max-content max-content max-content 1fr max-content;

  img {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    justify-self: center;
    min-width: 200px;
    max-width: 320px;
    width: 100%;
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
  }
  a:first-child {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    /* font-family: monospace; */
  }
  a:last-child {
    color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const StyledTags = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: flex-end;
  li {
    list-style-type: none;
    padding: 2px;
    margin: 0;
    border: 2px solid black;
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
  const { lang } = useContext(Context);
  return (
    <StyledProjectItem>
      <img src={props.project.image} alt={`${props.project.name} screenshot`} />
      <h3>{props.project.name}</h3>
      <div>{props.project.description[lang]}</div>
      <Tags tags={props.project.tags}></Tags>
      <div className="links">
        <a href={props.project.source}>{"</>"} Source</a>
        <a href={props.project.live}>Live</a>
      </div>
    </StyledProjectItem>
  );
};

const Projects = () => {
  const { lang } = useContext(Context);
  return (
    <StyledProjects>
      <h2>{lang === "en" ? "Projects" : "Projetos"}</h2>
      <ProjectList></ProjectList>
    </StyledProjects>
  );
};

export default Projects;
