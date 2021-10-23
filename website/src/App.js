// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import Context from "./store/context";

const light = {
  colors: {
    primary: "gray",
  },
};

const dark = {
  colors: {
    primary: "black",
  },
};

function App() {
  const { theme } = useContext(Context);
  const currentTheme = theme === 'light' ? light : dark;
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
