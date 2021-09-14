import TimerContext from "./timer-context";
import { useState, useEffect } from "react";

const TimerProvider = (props) => {
  const [timers, setTimers] = useState([]);
  const [alert, setAlert] = useState(false);
  const [lastEvent, setLastEvent] = useState();
  const [notifyRequest, setNotifyRequest] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAddTimer = (timer) => {
    setTimers((prevTimers) => {
      const updatedTimers = [
        ...prevTimers,
        {
          id:
            prevTimers.length < 1
              ? 0
              : prevTimers[prevTimers.length - 1].id + 1,
          ...timer,
        },
      ];
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      return updatedTimers;
    });
  };

  const handleDeleteTimer = (timerId) => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.filter((timer) => timer.id !== timerId);
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      return updatedTimers;
    });
  };

  const handleClearExpiredTimers = () => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.filter(
        (timer) => new Date(timer.dateTime) > new Date()
      );
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      return updatedTimers;
    });
  };

  const showAlert = () => {
    setAlert(true);
  };

  const hideAlert = () => {
    setAlert(false);
  };

  const hideNotificationRequest = () => {
    setNotifyRequest(false);
  };

  const enableNotification = () => {
    setNotificationEnabled(true);
  };

  const handleLastEvent = (eventId) => {
    setLastEvent(eventId);
  };

  useEffect(() => {
    if (!!localStorage.getItem("timers")) {
      setTimers(JSON.parse(localStorage.getItem("timers")));
    }

    if (Notification.permission === "default") {
      setNotifyRequest(true);
    }

    if (Notification.permission === "granted") {
      setNotificationEnabled(true);
    }

    setIsLoaded(true);
  }, []);

  const timerContext = {
    timers,
    addTimer: handleAddTimer,
    alert,
    showAlert,
    hideAlert,
    lastEvent,
    handleLastEvent,
    notifyRequest,
    hideNotificationRequest,
    notificationEnabled,
    enableNotification,
    isLoaded,
    clearExpired: handleClearExpiredTimers,
    deleteTimer: handleDeleteTimer,
  };

  return (
    <TimerContext.Provider value={timerContext}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
