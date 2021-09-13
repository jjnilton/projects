import "./App.css";
import NewTimer from "./components/NewTimer";
import TimerProvider from "./store/TimerProvider";
import ActiveTimers from "./components/ActiveTimers";
import ExpiredTimers from "./components/ExpiredTimers";
import {useReducer} from "react";
import TimerList from "./components/TimerList";

function App() {

  return (
    <TimerProvider>
      <div className="App">
        <h2>Create New Timer</h2>
        <NewTimer></NewTimer>
        <TimerList></TimerList>
      </div>
    </TimerProvider>
  );
}

export default App;
