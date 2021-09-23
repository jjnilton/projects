import styled from "styled-components";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";
import Form from "./components/Form";
import Warning from "./components/Warning";
import Result from "./components/Result";
import Footer from "./components/Footer";

const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${props => props.darkTheme ? "black" : "white"};
    transition: color .5s, background-color .5s;
  }

  #root {
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: max-content max-content 1fr;
    height: 100vh;
    padding: 10px;
  }

`

const Wrapper = styled.main`

`;

const App = () => {
  const [result, setResult] = useState([]);
  const [warning, setWarning] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleResult = (result) => {
    setResult(result);
  };

  const handleWarning = (boolean) => {
    setWarning(boolean);
  };

  const handleDarkTheme = (event) => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme(true)
    }
  }, [])

  return (
    <>
      <GlobalStyles darkTheme={darkTheme}></GlobalStyles>
      <Header darkTheme={darkTheme}></Header>
      <ThemeToggler handleDarkTheme={handleDarkTheme} darkTheme={darkTheme}></ThemeToggler>
      <Wrapper>
        <Form result={handleResult} warning={handleWarning} darkTheme={darkTheme}></Form>
        {warning && <Warning darkTheme={darkTheme}></Warning>}
        <Result result={result} darkTheme={darkTheme}></Result>
      </Wrapper>
      <Footer darkTheme={darkTheme}></Footer>
    </>
  );
};

export default App;
