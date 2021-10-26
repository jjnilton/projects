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
    grid-row: 1/1;
    & > a {
      color: unset;
      text-decoration: none;
    }
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
    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
    }
    margin: 0;
    padding: 5px;
    list-style-type: none;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    text-align: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.2s, color 0.2s;
    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        & > a {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
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
        <li><a href="#about">{menuOption.about[lang]}</a></li>
        <li><a href="#projects">{menuOption.projects[lang]}</a></li>
        <li><a href="#contact">{menuOption.contact[lang]}</a></li>
      </ul>
      <Settings></Settings>
    </StyledNav>
  );
};

const StyledHamburgerMenu = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1em;
  font-family: inherit;
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
      <div className="logo"><a href="http://localhost:3000">jnrj</a></div>
      {/* to replace with nav */}
      <HamburgerMenu
        toggleNavVisibility={handleNavVisibility}
        visibility={visibility}
      ></HamburgerMenu>
      <Nav visibility={visibility}></Nav>
    </StyledHeader>
  );
};

export default Header;
