import React, { useContext } from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";

const audio = new Audio("/beep-06.mp3");

const Alert = () => {
  const { hideAlert, lastEvent } = useContext(TimerContext);
  audio.play();

  if (Notification.permission === "granted") {
    new Notification("Event Countdown Timer", {
      body: `Event ${lastEvent} completed.`,
    });
  }

  const handleDismissAlert = () => {
    hideAlert();
  };

  return (
    <Modal backDropClick={handleDismissAlert}>
      <div>
        <p> Timer {lastEvent} complete.</p>
        <button onClick={handleDismissAlert}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default Alert;
