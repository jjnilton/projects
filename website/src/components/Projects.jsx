import styled from "styled-components";

const StyledProjects = styled.article``;

const projects_data = [
  {
    name: "Word Frequency App & API",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["Next.js", "Styled Components", "Chart.js", "Node.js"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Lorem Ipsum Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Book Finder App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Redux", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Product Landing Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 334px));
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
  padding: 5px;
  list-style-type: none;
  border: 2px solid black;
  display: grid;
  gap: 10px;
  grid-template-rows: max-content max-content max-content 1fr max-content;

  img {
    border: 2px solid black;
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
    background-color: black;
    color: white;
    /* font-family: monospace; */
  }
  a:last-child {
    color: black;
    border: 2px solid black;
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
  return (
    <StyledProjectItem>
      <img src={props.project.image} alt={`${props.project.name} screenshot`} />
      <h3>{props.project.name}</h3>
      <div>{props.project.description}</div>
      <Tags tags={props.project.tags}></Tags>
      <div className="links">
        <a href={props.project.source}>{"</>"} Source</a>
        <a href={props.project.live}>Live</a>
      </div>
    </StyledProjectItem>
  );
};

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <ProjectList></ProjectList>
    </StyledProjects>
  );
};

export default Projects;
