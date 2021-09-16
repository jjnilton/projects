import { useContext, useEffect } from "react";
import classes from "./App.module.css";
import Alert from "./components/Alert";
import NewTimer from "./components/NewTimer";
import NotificationRequest from "./components/NotificationRequest";
import NotificationStatus from "./components/NotificationStatus";
import Timers from "./components/Timers";
import TimerContext from "./store/timer-context";

function App() {
  const {notificationEnabled, notifyRequest, isLoaded, alert} = useContext(TimerContext);

  // attemp to prevent rendering an empty element
  useEffect(() => {
    if (alert || notifyRequest) {
      document.getElementById("modal").style = "display: block";
    } else {
      document.getElementById("modal").style = "display: none";
    }
  }, [alert, notifyRequest]);

  return (
    <>
      {!notificationEnabled &&
      !notifyRequest &&
      isLoaded ? (
        <NotificationStatus></NotificationStatus>
      ) : (
        ""
      )}
      <main className={classes.app}>
        {notifyRequest && (
          <NotificationRequest></NotificationRequest>
        )}
        {alert && <Alert></Alert>}
        <NewTimer></NewTimer>
        <Timers></Timers>
        <footer>
          <a href="http://">Source</a>
        </footer>
      </main>
    </>
  );
}

export default App;
