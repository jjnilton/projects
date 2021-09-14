import { useContext } from "react";
import TimerContext from "../store/timer-context";

const Timer = (props) => {
  const timeLeft = props.timeLeft;
  const timerContext = useContext(TimerContext);

  // maybe replace with dayjs or momentjs
  let remainingTime = timeLeft;
  let seconds = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let minutes = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let hours = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let days = Math.floor(remainingTime % 24);

  // have to prepend zero
  const timeLeftString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds |  ${props.timeLeft}`;

  if (timeLeft < 1) {
    let timeout = setTimeout(() => {
      clearTimeout(timeout);
      timerContext.handleLastEvent(props.id)
      timerContext.showAlert();
      // timerContext.showModal();
    }, 1000)
  }

  console.log("render timer")

  return (
    <li>
      {props.id}, {props.name}, {props.date}, {props.time}, {timeLeftString}
    </li>
  );
};

export default Timer;
