import React, { useContext, useEffect, useState } from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";
import classes from "./Alert.module.css";

const audio = new Audio("/beep-06.mp3");

const Alert = () => {
  const { hideAlert, lastEvent } = useContext(TimerContext);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    audio.play();
    if (Notification.permission === "granted") {
      new Notification("Event Countdown Timer", {
        body: `Event ${lastEvent.name} completed.`,
      });
    }
  }, []);

  const handleDismissAlert = () => {
    setVisible(false);
    setTimeout(() => {
      hideAlert();
    }, 500);
  };

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
        <button onClick={handleDismissAlert}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default Alert;
