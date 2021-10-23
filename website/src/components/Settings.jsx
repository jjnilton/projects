import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const StyledSettings = styled.section`
  background-color: white;
  /* color: black;
  border: 2px solid black; */
  margin: 5px 0;
  display: grid;
  /* justify-items: right; */
  grid-template-columns: max-content max-content;
  gap: 5px;

  div.theme-switcher {
    label {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2em;
    }
    input {
      display: none;
    }
    button {
      border: none;
      background-color: none;
      font-size: 1.2em;
      background-color: black;
      color: white;
      border: 2px solid black;
      cursor: pointer;
    }
  }

  div.language-switcher {
    display: grid;
    border: 2px solid black;
    width: 100px;
    position: relative;
    cursor: pointer;
    div.lang {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    div.thing-that-move {
      display: grid;
      align-items: center;
      background-color: black;
      font-size: 0.75em;
      text-align: center;
      color: white;
      position: absolute;
      height: 100%;
      width: 50px;
      transition: transform 1s;
      transform: ${(props) => props.lang === "en" && "translateX(48px)"};
    }
  }

  div.theme-toggler {
    background-color: gray;
    color: white;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    padding: 5px 3px;
    gap: 5px;
    label {
      font-size: 0.75em;
    }
    label[for="light"] {
      background-color: white;
      color: black;
      border: 2px solid black;
      width: 32px;
      height: 32px;
      display: inline-block;
    }
    label[for="dark"] {
      background-color: black;
      border: 2px solid white;
      width: 32px;
      height: 32px;
      display: inline-block;
    }
    input {
      display: none;
    }
  }
`;

const Settings = () => {
  const { setLanguage, setTheme, theme, lang } = useContext(Context);

  const handleLangChange = () => {
    // console.log(event.target.innerText);
    // setLanguage(event.target.innerText);
    // move this logic to provider
    if (lang === "en") {
      setLanguage("pt");
    } else {
      setLanguage("en");
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
      <div className="language-switcher" onClick={handleLangChange}>
        <div className="lang">
          <div>en</div>
          <div>pt</div>
        </div>
        <div className="thing-that-move">lang</div>
        {/* <div onClick={handleLangChange}>pt</div> */}
      </div>
      {/* <div>
        <span onClick={handleThemeChange}>light</span>
        <span> | </span>
        <span onClick={handleThemeChange}>dark</span>
      </div> */}
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌛︎" : "🌞︎"}
        </button>
      </div>
      {/* <div className="theme-toggler">
        <label htmlFor="light">light</label>
        <input
          type="radio"
          name="theme"
          id="light"
          value="light"
          aria-label="Switch to light theme"
          onChange={alternateHandleThemeChange}
        />
        <label htmlFor="dark">dark</label>
        <input
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          aria-label="Switch to dark theme"
          onChange={alternateHandleThemeChange}
        />
      </div> */}
    </StyledSettings>
  );
};

export default Settings;
