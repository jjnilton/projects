import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./NotificationStatus.module.css";

const NotificationStatus = () => {
  const { enableNotification } = useContext(TimerContext);
  const [notificationStatusIsShown, setNotificationStatusIsShown] =
    useState(true);
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
      setNotificationStatusIsShown(false);
    }, 500);
  };

  return (
    notificationStatusIsShown && (
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
