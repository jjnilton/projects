import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";

const NotificationStatus = () => {
  const timerContext = useContext(TimerContext);
  const [notificationStatusIsShown, setNotificationStatusIsShown] = useState(true);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        timerContext.enableNotification();
      }
      if (permission === "denied") {
        alert("You can enable in your browser settings.")
      }
    });
  };

  const handleDisplayNotificationStatus = () => {
    setNotificationStatusIsShown(false);
  }

  return (
    notificationStatusIsShown &&
    <div>
      <div>Notifications are disabled.</div>
      <button onClick={handleAllowNotification}>Enable</button>
      <button onClick={handleDisplayNotificationStatus}>Dismiss</button>
    </div>
  );
};

export default NotificationStatus;
