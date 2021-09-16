import { useContext, useEffect } from "react";
import classes from "./App.module.css";
import Alert from "./components/Alert";
import NewTimer from "./components/NewTimer";
import NotificationRequest from "./components/NotificationRequest";
import NotificationStatus from "./components/NotificationStatus";
import Timers from "./components/Timers";
import TimerContext from "./store/timer-context";

function App() {
  const timerContext = useContext(TimerContext);

  // attemp to prevent rendering an empty element
  useEffect(() => {
    if (timerContext.alert || timerContext.notifyRequest) {
      document.getElementById("modal").style = "display: block";
    } else {
      document.getElementById("modal").style = "display: none";
    }
  }, [timerContext]);

  return (
    <>
      {!timerContext.notificationEnabled &&
      !timerContext.notifyRequest &&
      timerContext.isLoaded ? (
        <NotificationStatus></NotificationStatus>
      ) : (
        ""
      )}
      <main className={classes.app}>
        {timerContext.notifyRequest && (
          <NotificationRequest></NotificationRequest>
        )}
        {timerContext.alert && <Alert></Alert>}
        <NewTimer></NewTimer>
        <Timers></Timers>
        <footer>
          <a href="">Source</a>
        </footer>
      </main>
    </>
  );
}

export default App;
