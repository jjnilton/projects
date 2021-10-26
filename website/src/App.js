// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import Context from "./store/context";
import "./fontello/css/fontello.css";

const GlobalStyle = createGlobalStyle`
  *::selection {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  #root {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    transition: background-color .5s, color .5s;
    padding: 10px;
  }
`;

const light = {
  colors: {
    primary: "white",
    secondary: "black",
  },
  filter: "grayscale(1) contrast(2) brightness(0)",
  icon: "'\\e815'"
};

const dark = {
  colors: {
    primary: "black",
    secondary: "white",
  },
  filter: "grayscale(1) contrast(1) brightness(0) invert()",
  icon: "'\\e811'"
};

function App() {
  const { theme, setTheme } = useContext(Context);
  let currentTheme = theme === "light" ? light : dark;

  useEffect(() => {
    console.log(window.navigator.languages);

    if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setTheme(event.matches ? "dark" : "light");
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
