import { useContext } from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";
import classes from "./NotificationRequest.module.css"

const NotificationRequest = () => {
  const {notificationEnabled, hideNotificationRequest, enableNotification} = useContext(TimerContext);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      enableNotification();
    });
  };

  const handleHideNotificationRequest = () => {
    hideNotificationRequest();
  };

  return (
    <Modal>
      <div className={classes["notification-request"]}>
        {!notificationEnabled ? <h3>Enable Notifications</h3> : <h3>Notifications Enabled!</h3>}
        {!notificationEnabled ? <><p>This app uses browser notifications to notify when an timer is complete.</p><p>Do you want to enable this feature?</p></> : <p>Enjoy your notifications!</p>}
        {!notificationEnabled &&
          <button onClick={handleAllowNotification}>Enable</button>
        }
        <button onClick={handleHideNotificationRequest}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default NotificationRequest;
