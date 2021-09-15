import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./NotificationStatus.module.css";

const NotificationStatus = () => {
  const { enableNotification } = useContext(TimerContext);
  const [notificationStatusIsShown, setNotificationStatusIsShown] =
    useState(true);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        enableNotification();
      }
      if (permission === "denied") {
        alert("Notifications are disabled. You can enable in your browser settings.");
      }
    });
  };

  const handleDisplayNotificationStatus = () => {
    setNotificationStatusIsShown(false);
  };

  return (
    notificationStatusIsShown && (
      <div className={classes["notification-status"]}>
        <div>Notifications are disabled.</div>
        <button onClick={handleAllowNotification}>Enable</button>
        <button onClick={handleDisplayNotificationStatus}>Dismiss</button>
      </div>
    )
  );
};

export default NotificationStatus;
