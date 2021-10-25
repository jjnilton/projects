import { useContext, useState } from "react";
import styled from "styled-components";
import Context from "../store/context";
import Settings from "./Settings";

const menuOption = {
  projects: { en: "Projects", pt: "Projetos" },
  about: { en: "About", pt: "Sobre" },
  contact: { en: "Contact", pt: "Contato" },
};

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
    grid-template-columns: repeat(3, 96px);
  }

  li {
    margin: 0;
    padding: 5px;
    list-style-type: none;
    border: 2px solid ${({theme}) => theme.colors.secondary};
    text-align: center;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};
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
  const { lang } = useContext(Context);
  return (
    <StyledNav $visibility={props.visibility}>
      <ul>
        <li>{menuOption.about[lang]}</li>
        <li>{menuOption.projects[lang]}</li>
        <li>{menuOption.contact[lang]}</li>
      </ul>
      <Settings></Settings>
    </StyledNav>
  );
};

const StyledHamburgerMenu = styled.button`
  border: 2px solid black;
  background-color: white;
  padding: 5px;
  width: 96px;
  cursor: pointer;
  margin-left: auto;
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
