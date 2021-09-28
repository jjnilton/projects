import { useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import LoggedOut from "./components/LoggedOut";

// const parseEntities = txt => new DOMParser().parseFromString(txt, 'text/html').body.innerText;

function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const loggedOut = useSelector((state) => state.login.loggedOut);
  const username = useSelector((state) => state.login.username);

  return (
    <>
      <div className="App">
        <Header></Header>
        {loggedIn && !loggedOut && <Dashboard></Dashboard>}
        {!loggedIn && !loggedOut && <Login></Login>}
        {!loggedIn && loggedOut && <LoggedOut username={username}></LoggedOut>}
      </div>
      <footer><a href="https://github.com/jjnilton/projects/tree/main/localized-hello">Source</a></footer>
    </>
  );
}

export default App;
