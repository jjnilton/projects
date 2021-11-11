import { createGlobalStyle } from "styled-components";
import "./_app.css";

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
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    background: linear-gradient(to right, #F1A10A, #342303);
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
