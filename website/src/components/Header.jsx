import { useState } from "react";
import styled from "styled-components";
import Settings from "./Settings";

const StyledHeader = styled.header`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  justify-content: space-between;

  div.logo {
    font-weight: bold;
    font-size: 1.5em;
  }

  /* div.logo {
    display: grid;
    font-family: monospace;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    font-weight: bold;
  } */

  div.logo {
    grid-row: 1 / 1;
  }

  @media (max-width: 560px) {
    row-gap: 10px;
  }
`;

const StyledNav = styled.nav`
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
    width: 100%;
  }

  @media (max-width: 560px) {
    grid-column: 1 / -1;

    display: ${(props) => !props.$visibility && "none"};
    ul {
      grid-template-columns: unset;
    }
  }
`;

const Nav = (props) => {
  return (
    <StyledNav $visibility={props.visibility}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About/Resume</li>
        <li>Contact</li>
      </ul>
      <Settings></Settings>
    </StyledNav>
  );
};

const StyledHamburgerMenu = styled.button`
  border: 2px solid black;
  background-color: white;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  @media (min-width: 560px) {
    display: none;
  }
`;

const HamburgerMenu = (props) => {
  return (
    <StyledHamburgerMenu onClick={props.toggleNavVisibility}>
      Menu
    </StyledHamburgerMenu>
  );
};

const Header = () => {
  const [visibility, setVisibility] = useState(false);

  const handleNavVisibility = () => {
    setVisibility((prevVisibility) => {
      return !prevVisibility;
    });
  };

  return (
    <StyledHeader>
      <div className="logo">jnrj</div>
      {/* to replace with nav */}
      <HamburgerMenu toggleNavVisibility={handleNavVisibility}></HamburgerMenu>
      <Nav visibility={visibility}></Nav>
    </StyledHeader>
  );
};

export default Header;
