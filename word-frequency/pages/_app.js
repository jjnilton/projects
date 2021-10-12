import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../public/css/fontello.css";
import Head from "next/head";

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

  #__next {
    display: grid;
    grid-template-rows: max-content 1fr;
    height: 100vh;
  }
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
      <Head>
              <title>Word Frequency App</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <link rel="stylesheet" href="css/fontello.css" />
            </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
