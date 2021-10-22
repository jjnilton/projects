import styled from "styled-components";

const StyledProjects = styled.article``;

const projects_data = [
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Styled Components"],
    source: "https://source",
    live: "https://live",
    image: "https://fakeimg.pl/320x180/",
  },
  {
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.",
    tags: ["React", "Styled Components"],
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
  grid-template-columns: repeat(2, 1fr);
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

  div.links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  a {
    display: block;
    padding: 5px;
    text-decoration: none;
  }
  a:first-child {
    background-color: black;
    color: white;
  }
  a:last-child {
    color: black;
    border: 2px solid black;
  }
`;

const StyledTags = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 5px;

  li {
    list-style-type: none;
    padding: 2px;
    margin: 0;
    border: 2px solid black;
  }
`;

const Tags = (props) => {
  console.log(props.tags);

  const tagListItems = props.tags.map((tag) => {
    return <li>{tag}</li>;
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
        <a href={props.project.source}>{'</>'} Source</a>
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
