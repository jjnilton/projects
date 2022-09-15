import { createGlobalStyle } from "styled-components";
import "./_app.css";

const GlobalStyle = createGlobalStyle`

  html { 
    box-sizing: border-box;
    @media (max-width: 320px) {
      min-width: 320px;
    }
    height: 100%;
    background: linear-gradient(to right, #F1A10A, #342303);
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
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
