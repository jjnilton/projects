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

  & > div:first-of-type {
    font-weight: bold;
    font-size: 1.5em;
    grid-row: 1/1;
    & > a {
      color: unset;
      text-decoration: none;
      &::before {
        font-family: "fontello";
        content: "\f120";
        margin-right: 5px;
      }
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
    box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.tertiary};
    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondary};
      display: block;
      padding: 5px;
    }
    margin: 0;
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
        <li>
          <a href="#about">{menuOption.about[lang]}</a>
        </li>
        <li>
          <a href="#projects">{menuOption.projects[lang]}</a>
        </li>
        <li>
          <a href="#contact">{menuOption.contact[lang]}</a>
        </li>
      </ul>
      <Settings></Settings>
    </StyledNav>
  );
};

const StyledHamburgerMenu = styled.button`
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.tertiary};
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
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
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
      <div>
        <a href={window.location.origin + window.location.pathname}>jnrj</a>
      </div>
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
