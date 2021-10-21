import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    display: grid;
    grid-template-rows: max-content 1fr;
    height: 100vh;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
