import { useContext } from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";

const NotificationRequest = () => {
  const timerContext = useContext(TimerContext);
  
  console.log(timerContext.notificationEnabled)

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      timerContext.enableNotification();
    });
  };

  const handleBackDropClick = () => {
    console.log("can't dismiss")
  }

  const handleHideNotificationRequest = () => {
    timerContext.hideNotificationRequest();
  }

  return (
    <Modal backDropClick={handleBackDropClick}>
      <div>
        <p>
          This app uses browser notifications to notify when an timer is
          complete.
        </p>
        <p>Do you want to enable this feature?</p>
        {timerContext.notificationEnabled ? <div>Enabled</div> : <button onClick={handleAllowNotification}>Allow notification</button>}
        <button onClick={handleHideNotificationRequest}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default NotificationRequest;
