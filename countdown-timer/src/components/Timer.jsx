import { useContext } from "react";
import TimerContext from "../store/timer-context";
import classes from "./Timers.module.css";

const Timer = (props) => {
  const timeLeft = props.timeLeft;
  const { handleLastEvent, showAlert, deleteTimer} = useContext(TimerContext);

  let remainingTime = timeLeft;
  let seconds = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let minutes = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let hours = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let days = Math.floor(remainingTime % 24);

  // prepend zero
  const pz = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  const timeLeftString = `${pz(days)} days, ${pz(hours)} hours, ${pz(
    minutes
  )} minutes, ${pz(seconds)} seconds`;

  if (timeLeft < 1) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      handleLastEvent(props);
      showAlert();
    }, 1000);
  }

  const handleDeleteTimer = () => {
    deleteTimer(props.id);
  };

  return (
    <li>
      <div className={classes.event}>
        <div className={classes.info}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.date}>
            {new Date(props.dateTime).toLocaleString(undefined, {
              month: "short",
              year: "numeric",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <div className={classes.countdown}>{timeLeftString}</div>
      </div>
      <button onClick={handleDeleteTimer}>Delete</button>
    </li>
  );
};

export default Timer;
