import { useContext } from "react";
import TimerContext from "../store/timer-context";

const NotificationStatus = () => {
  const timerContext = useContext(TimerContext);

  console.log(timerContext.notifyRequest);
  console.log(timerContext.notificationEnabled);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        timerContext.enableNotification();
      }
    });
  };

  console.log("rendering notification status")

  return (
    <div>
      <div>Notifications are not/enabled</div>
      <button onClick={handleAllowNotification}>Enable</button>
    </div>
  );
};

export default NotificationStatus;
