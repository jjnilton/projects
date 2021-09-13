import { useEffect, useState } from "react";

const initialState = {
  id: "timerId",
  name: "timerName",
  date: "a date",
  time: "hh:mm:ss",
  status: "?",
};

const Timer = (props) => {
  const [countdown, setCountdown] = useState();
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    const enteredDate = props.date;
    const enteredTime = props.time;

    const enteredFullDate = `${enteredDate} ${enteredTime}`;

    const timerDate = new Date(enteredFullDate);

    const timeLeft = Math.floor((timerDate - Date.now()) / 1000);

    setCountdown(timeLeft);
    setIntervalId(
      setInterval(() => {
        setCountdown((prevCountdown) => {
          return (prevCountdown -= 1);
        });
      }, 1000)
    );
  }, []);

  useEffect(() => {
    if (countdown < 0) {
      console.log("cleaning interval", props.id);
      props.forceUpdate();
      clearInterval(intervalId);
    }
  });

  // maybe replace with dayjs or momentjs
  let remainingTime = countdown;
  let seconds = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let minutes = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let hours = Math.floor(remainingTime % 60);
  remainingTime = remainingTime / 60;
  let days = Math.floor(remainingTime % 24);

  // have to prepend zero
  const timeLeftString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds ${countdown}`;

  return (
    <li>
      {props.id}, {props.name}, {props.date}, {props.time}, {timeLeftString}
    </li>
  );
};

export default Timer;
