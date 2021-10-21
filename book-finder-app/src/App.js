import Main from "./components/Main";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
    grid-template-rows: 1fr;
    height: 100vh;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
