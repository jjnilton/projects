// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import Context from "./store/context";

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
};

const dark = {
  colors: {
    primary: "black",
    secondary: "white",
  },
  filter: "grayscale(1) contrast(1) brightness(0) invert()",
};

function App() {
  const { theme } = useContext(Context);
  const currentTheme = theme === "light" ? light : dark;
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
