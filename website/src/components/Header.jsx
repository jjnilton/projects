import styled from 'styled-components';

const StyledHeader = styled.header`

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

`;

const Header = () => {
  return (
    <StyledHeader>
      <div>Logo</div>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About/Resume</li>
        <li>Contact</li>
      </ul>
    </StyledHeader>
  )
}

export default Header;