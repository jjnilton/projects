import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";
import classes from "./Alert.module.css";

const audio = new Audio("beep-06.mp3");

const Alert = () => {
  const { hideAlert, lastEvent } = useContext(TimerContext);
  const [visible, setVisible] = useState(true);
  const notification = useRef();
  const dismissRef = useRef();

  const handleDismissAlert = useCallback(() => {
    if (Notification.permission === "granted") {
      notification.current.close();
    }
    setVisible(false);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      hideAlert();
    }, 500);
  }, [hideAlert]);

  useEffect(() => {
    audio.play();
    if (Notification.permission === "granted") {
      notification.current = new Notification("Event Countdown Timer", {
        body: `Event ${lastEvent.name} completed.`,
      });
      notification.current.onclose = () => {
        handleDismissAlert();
      };
    }
  }, [lastEvent, handleDismissAlert]);

  useEffect(() => {
    setTimeout(() => {
      dismissRef.current.focus()
    }, 1)
  })

  return (
    <Modal backDropClick={handleDismissAlert} visible={visible}>
      <div className={classes.alert}>
        <h3>Event Date Reached</h3>
        <p>
          Timer <span>{lastEvent.name}</span> complete at{" "}
          <span>
            {new Date(lastEvent.dateTime).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </span>
          .
        </p>
        <button onClick={handleDismissAlert} ref={dismissRef}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default Alert;
