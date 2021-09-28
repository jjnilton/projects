import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ServiceList from "./components/ServiceList.jsx";
import { updateData } from "./store/store.js";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #app {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    & main {
      max-width: 600px;
      min-width: 300px;
      margin: 0 auto;
      padding: 20px;
      & > .past-incidents {
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
        & > a {
          color: #eee;
          align-self: flex-end;
        }
        & > button {
          background-color: #222;
          color: white;
          border: none;
          padding: 3px 6px;
          border-radius: 5px;
          cursor: pointer;
          :active {
            background-color: #999;
          }
        }
      }
    }
    & footer {
      background: #111;
      padding: 5px;
      text-align: center;
      & a {
        color: white;
      }
    }
  }
`;

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const fetchStatus = async () => {
    dispatch(updateData({data: [], status: false}))
    const response = await fetch("https://www.githubstatus.com/", {
      headers: { accept: "application/json" },
    });
    const jsonResponse = await response.json();
    dispatch(updateData({data: jsonResponse, status: true}));
  };

  const handleRefresh = () => {
    console.log("handling refresh")
    fetchStatus();
  }

  useEffect(() => {
    fetchStatus();
  // eslint-disable-next-line
  }, []);

  let components = [];
  let status = "";
  if (data.isLoaded) {
    status = data.value.status.description;
    components = data.value.components;
  }

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div id="app">
        {data.isLoaded ? (
          <>
            <Header status={status}></Header>
            <main>
              <div className="past-incidents">
                <button onClick={handleRefresh}>⟳ Get Current Status</button>
                <a href="https://www.githubstatus.com/history">
                  Past incidents
                </a>
              </div>
              <ServiceList services={components}></ServiceList>
            </main>
          </>
        ) : (
          <Loading></Loading>
        )}
        <footer>
          <a href="https://github.com/jjnilton/projects/tree/main/github-status">Source</a>
        </footer>
      </div>
    </>
  );
}

export default App;
