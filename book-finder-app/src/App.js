import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Calibri', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e8dbaa;
    background: linear-gradient(#e8dbaa, white);
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    display: grid;
    grid-template-rows: max-content 1fr;
    min-height: 100vh;
  }

`;

function App() {
  const [y, setY] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setY(window.scrollY)
    }
  }, [])

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <BackToTop y={y}></BackToTop>
      <Footer></Footer>
    </>
  );
}

export default App;
