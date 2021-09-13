import { useContext, useReducer, useState } from "react";
import TimerContext from "../store/timer-context";
import Timer from "./Timer";

const ExpiredTimers = (props) => {
  const timerContext = useContext(TimerContext);

  const expiredTimers = timerContext.timers
    .filter((timer) => {
      return new Date(`${timer.date} ${timer.time}`) < new Date();
    })
    .map((timer) => {
      return (
        <li>{timer.name}, {timer.date}, {timer.time}</li>
      );
    });

  console.log("expired rendered");

  return (
    <div>
      <h2>Expired Timers</h2>
      <ul>{expiredTimers}</ul>
    </div>
  );
};

export default ExpiredTimers;
