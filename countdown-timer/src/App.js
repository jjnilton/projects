import { useContext } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NewTimer from "./components/NewTimer";
import NotificationRequest from "./components/NotificationRequest";
import NotificationStatus from "./components/NotificationStatus";
import Timers from "./components/Timers";
import TimerContext from "./store/timer-context";

function App() {
  const timerContext = useContext(TimerContext);

  return (
    <>
      {!timerContext.notificationEnabled &&
      !timerContext.notifyRequest &&
      timerContext.isLoaded ? (
        <NotificationStatus></NotificationStatus>
      ) : (
        ""
      )}

      <div className="App">
        {timerContext.notifyRequest && (
          <NotificationRequest></NotificationRequest>
        )}
        {timerContext.alert && <Alert></Alert>}
        <NewTimer></NewTimer>
        <Timers></Timers>
        <footer>
          <a href="">Source</a>
        </footer>
      </div>
    </>
  );
}

export default App;
