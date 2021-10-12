import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../public/css/fontello.css";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #eee;
  }
  
  #__next {
    display: grid;
    grid-template-rows: max-content 1fr;
    height: 100vh;
  }
`;

const theme = {
  colors: {
    primary: "red",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
