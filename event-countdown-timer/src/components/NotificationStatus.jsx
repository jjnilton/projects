import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./NotificationStatus.module.css";

const NotificationStatus = () => {
  const { enableNotification, hideStatusBar, showStatusBar } =
    useContext(TimerContext);
  const [visible, setVisible] = useState(true);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setVisible(false);
        setTimeout(() => {
          enableNotification();
        }, 500);
      }
      if (permission === "denied") {
        alert(
          "Notifications are disabled. You can enable in your browser settings."
        );
      }
    });
  };

  const handleDisplayNotificationStatus = () => {
    setVisible(false);
    setTimeout(() => {
      hideStatusBar();
    }, 500);
  };

  return (
    showStatusBar && (
      <div
        className={`${classes["notification-status"]} ${
          !visible ? classes.disappear : undefined
        }`}
      >
        <div>Notifications are disabled.</div>
        <button onClick={handleAllowNotification}>Enable</button>
        <button onClick={handleDisplayNotificationStatus}>Dismiss</button>
      </div>
    )
  );
};

export default NotificationStatus;
