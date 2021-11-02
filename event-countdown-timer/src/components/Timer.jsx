import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./Timers.module.css";

const Timer = (props) => {
  const timeLeft = props.timeLeft;
  const { handleLastEvent, showAlert, deleteTimer, notificationModal, alert } = useContext(TimerContext);

  const [visible, setVisible] = useState(true);

  let remainingTime = timeLeft;
  let seconds = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let minutes = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let hours = Math.floor(remainingTime % 24);
  remainingTime = remainingTime / 24;
  let days = Math.floor(remainingTime);

  // prepend zero
  const pz = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  const timeLeftString = (
    <>
      {days > 0 ? (
        <>
          <span>{pz(days)}</span> days,{" "}
        </>
      ) : (
        ""
      )}
      {hours > 0 ? (
        <>
          <span>{pz(hours)}</span> hours,{" "}
        </>
      ) : (
        ""
      )}
      {minutes > 0 ? (
        <>
          <span>{pz(minutes)}</span> minutes,{" "}
        </>
      ) : (
        ""
      )}
      {seconds >= 0 ? (
        <>
          <span>{pz(seconds)}</span> seconds
        </>
      ) : (
        ""
      )}
    </>
  );

  if (timeLeft < 1) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      handleLastEvent(props);
      showAlert();
    }, 1000);
  }

  const handleDeleteTimer = () => {
    setVisible(false);
    setTimeout(() => {
      deleteTimer(props.id);
    }, 500);
  };

  return (
    <li className={!visible ? classes.disappear : undefined}>
      <div className={classes.event}>
        <div className={classes.info}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.date}>
            {new Date(...props.dateTime).toLocaleString(undefined, {
              month: "short",
              year: "numeric",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <button onClick={handleDeleteTimer} tabIndex={alert || notificationModal ? "-1" : "0"}>Delete</button>
        <div className={classes.countdown}>{timeLeftString}</div>
      </div>
    </li>
  );
};

export default Timer;
