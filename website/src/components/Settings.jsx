import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const StyledSettings = styled.section`
  margin: 10px 0;
  display: grid;
  justify-content: right;
  grid-template-columns: max-content max-content max-content;
  gap: 10px;
  height: 48px;

  div.theme-switcher {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    display: grid;
    align-items: center;
    button {
      width: 48px;
      height: 100%;
      border: none;
      background-color: none;
      font-size: 1.2em;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      /* border: 2px solid ${({ theme }) => theme.colors.primary}; */
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  div.language-switcher {
    display: grid;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    width: 128px;
    position: relative;
    cursor: pointer;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    div.lang {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }

    div.thing-that-move {
      display: grid;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      font-size: 0.75em;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
      /* border: 1px solid ${({ theme }) => theme.colors.secondary}; */
      position: absolute;
      height: 100%;
      width: 64px;
      line-height: 1.25em;
      transition: transform 1s;
      transform: ${(props) => props.lang === "en" && "translateX(60px)"};
    }
  }

  div.lang-switcher {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* border: 2px solid black; */
    gap: 2px;
    & div {
      padding: 0 5px;
      height: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      width: 48px;
    }
    /* refactor this */
    div:first-child {
      background-color: ${(props) =>
        props.lang === "en"
          ? ({ theme }) => theme.colors.primary
          : ({ theme }) => theme.colors.primary};
      color: ${(props) =>
        props.lang === "en"
          ? ({ theme }) => theme.colors.secondary
          : ({ theme }) => theme.colors.secondary};
      border: 2px solid
        ${(props) =>
          props.lang === "en"
            ? ({ theme }) => theme.colors.primary
            : ({ theme }) => theme.colors.secondary};
      font-weight: ${(props) => props.lang === "en" && "bold"};
      cursor: ${(props) => props.lang === "pt" && "pointer"};
    }
    div:last-child {
      background-color: ${(props) =>
        props.lang === "pt"
          ? ({ theme }) => theme.colors.primary
          : ({ theme }) => theme.colors.primary};
      color: ${(props) =>
        props.lang === "pt"
          ? ({ theme }) => theme.colors.secondary
          : ({ theme }) => theme.colors.secondary};
      border: 2px solid
        ${(props) =>
          props.lang === "pt"
            ? ({ theme }) => theme.colors.primary
            : ({ theme }) => theme.colors.secondary};
      font-weight: ${(props) => props.lang === "pt" && "bold"};
      cursor: ${(props) => props.lang === "en" && "pointer"};
    }
  }
`;

const Settings = () => {
  const { setLanguage, setTheme, theme, lang } = useContext(Context);

  const handleLangChange = () => {
    // move this logic to provider
    if (lang === "en") {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  };

  const handleLangChange2 = (event) => {
    if (event.target.innerText !== lang) {
      setLanguage(event.target.innerText);
    }
  };

  // console.log(navigator.languages)
  // ☽ 🌛︎ 🌕︎ 🌑︎ 🜚 ☉ 🌞︎ ☼ 💡

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <StyledSettings lang={lang}>
      <div className="lang-switcher">
        <div onClick={handleLangChange2}>en</div>
        <div onClick={handleLangChange2}>pt</div>
      </div>
      <div className="language-switcher" onClick={handleLangChange}>
        <div className="lang">
          <div>en</div>
          <div>pt</div>
        </div>
        <div className="thing-that-move">
          {lang === "en" ? "switch language" : "mudar idioma"}
        </div>
      </div>
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌛︎" : "🌞︎"}
        </button>
      </div>
    </StyledSettings>
  );
};

export default Settings;
