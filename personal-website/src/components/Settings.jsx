import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const StyledSettings = styled.section`
  margin: 10px 0;
  display: grid;
  justify-content: right;
  grid-template-columns: max-content max-content;
  gap: 10px;
  height: 32px;

  @media (max-width: 560px) {
    height: 48px;
  }

  /* theme switcher */
  & > div:last-child {
    button {
      box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.tertiary};
      width: 32px;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
      display: grid;
      place-items: center;
      place-content: center;
      & > span::before {
        content: ${({ theme }) => theme.icon};
        font-family: "fontello";
        font-size: 1.5em;
      }
      @media (hover: hover) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      @media (max-width: 560px) {
        width: 48px;
      }
    }
  }

  /* languague switcher */
  & > div:first-child {
    display: grid;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.tertiary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    width: 96px;
    position: relative;
    cursor: pointer;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    & > div:first-child {
      display: grid;
      grid-template-columns: 0.3fr 0.3fr;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }

    & > div:last-child {
      display: grid;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      font-size: 0.7em;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid black;
      position: absolute;
      height: 100%;
      width: 64px;
      line-height: 1em;
      transition: transform 1s;
      transform: ${(props) => props.lang === "en" && "translateX(28px)"};
      @media (max-width: 560px) {
        font-size: 0.7em;
        line-height: 1em;
        word-spacing: 64px;
      }
    }
  }

  /* refactor this */
  /*
  div.lang-switcher {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    gap: 2px;
    & div {
      padding: 0 5px;
      height: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      width: 48px;
    }

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
  */
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

  // const handleLangChange2 = (event) => {
  //   if (event.target.innerText !== lang) {
  //     setLanguage(event.target.innerText);
  //   }
  // };

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
      {/* <div className="lang-switcher">
        <div onClick={handleLangChange2}>en</div>
        <div onClick={handleLangChange2}>pt</div>
      </div> */}
      <div onClick={handleLangChange}>
        <div className="lang">
          <div>en</div>
          <div>pt</div>
        </div>
        <div>
          {lang === "en" ? (
            <span>switch to portuguese</span>
          ) : (
            <span>mudar para inglês</span>
          )}
        </div>
      </div>
      <div>
        <button onClick={toggleTheme}>
          <span
            title={
              theme === "dark" ? "Active light theme" : "Active dark theme"
            }
          ></span>
        </button>
      </div>
    </StyledSettings>
  );
};

export default Settings;
