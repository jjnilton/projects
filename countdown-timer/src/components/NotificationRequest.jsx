import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import Modal from "./UI/Modal";
import classes from "./NotificationRequest.module.css";

const NotificationRequest = () => {
  const { notificationEnabled, hideNotificationRequest, enableNotification } =
    useContext(TimerContext);

  const [visible, setVisible] = useState(true);
  const [notificationDenied, setNotificationDenied] = useState(false);

  const handleAllowNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        enableNotification();
      }
      if (permission === "denied") {
        setNotificationDenied(true);
      }
    });
  };

  const handleHideNotificationRequest = () => {
    setVisible(false);
    setTimeout(() => {
      hideNotificationRequest();
    }, 500);
  };

  return (
    <Modal visible={visible}>
      <div className={classes["notification-request"]}>
        <h3>Notification Control</h3>
        {!notificationEnabled && !notificationDenied ? (
          <>
            <p>
              This app uses browser notifications to notify when an timer is
              complete.
            </p>
            <p>Do you want to enable this feature?</p>
          </>
        ) : (
          ""
        )}
        {!notificationEnabled && notificationDenied ? (
          <>
            <p>Ok! You won't receive browser notifications.</p>{" "}
            <p>
              If you change your mind, you can change the notification
              permission in your browser settings.
            </p>
          </>
        ) : (
          ""
        )}
        {notificationEnabled && (
          <>
            <p>Notifications permissions were granted!</p>
            <p>
              You will receive a notification when an event timer is complete.
            </p>
          </>
        )}
        {!notificationEnabled && !notificationDenied ? (
          <button onClick={handleAllowNotification}>Enable</button>
        ) : (
          ""
        )}
        <button onClick={handleHideNotificationRequest}>Dismiss</button>
      </div>
    </Modal>
  );
};

export default NotificationRequest;
