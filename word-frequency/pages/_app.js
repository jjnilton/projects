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
    background-color: #eee;
    font-family: sans-serif;
  }

  /* #__next {
    display: grid;
    grid-template-rows: max-content 1fr;
    height: 100vh;
    min-width: 300px;
  } */
`;

const theme = {
  colors: {
    primary: "#0070f3",
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
