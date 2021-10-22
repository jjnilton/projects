import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 64px;
  ul {
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }

  li {
    margin: 0;
    padding: 5px;
    list-style-type: none;
    border: 2px solid black;
  }

  div.logo {
    display: grid;
    font-family: monospace;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <div>J</div>
        <div>N</div>
        <div>R</div>
        <div>J</div>
      </div>
      {/* to replace with nav */}
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About/Resume</li>
        <li>Contact</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
