import { useContext, useEffect } from "react";
import classes from "./App.module.css";
import Alert from "./components/Alert";
import NewTimer from "./components/NewTimer";
import NotificationRequest from "./components/NotificationRequest";
import NotificationStatus from "./components/NotificationStatus";
import Timers from "./components/Timers";
import TimerContext from "./store/timer-context";

function App() {
  const {
    notificationModal,
    alert,
    notificationEnabled,
    isLoaded,
    showStatusBar,
    statusBar,
  } = useContext(TimerContext);

  // attempt to prevent rendering an empty element
  useEffect(() => {
    if (alert || notificationModal) {
      document.getElementById("modal").style = "display: block";
    } else {
      document.getElementById("modal").style = "display: none";
    }
  }, [alert, notificationModal]);

  useEffect(() => {
    if (!notificationEnabled && !notificationModal && isLoaded) {
      showStatusBar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationEnabled, notificationModal, isLoaded]);

  return (
    <>
      {statusBar ? <NotificationStatus></NotificationStatus> : ""}
      <main className={classes.app}>
        {notificationModal && <NotificationRequest></NotificationRequest>}
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
