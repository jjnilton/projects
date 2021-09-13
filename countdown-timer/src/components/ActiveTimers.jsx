import { useContext, useReducer } from "react";
import TimerContext from "../store/timer-context";
import Timer from "./Timer";

const ActiveTimers = (props) => {
  const timerContext = useContext(TimerContext);

  const timers = timerContext.timers
    .filter((timer) => new Date(`${timer.date} ${timer.time}`) > new Date())
    .map((timer) => {
      return (
        <Timer
          key={timer.id}
          id={timer.id}
          name={timer.name}
          date={timer.date}
          time={timer.time}
          forceUpdate={props.forceUpdate}
        ></Timer>
      );
    });

    console.log("active users rendered")

  return (
    <div>
      <h2>Active Timers</h2>
      <ul>{timers}</ul>
    </div>
  );
};

export default ActiveTimers;
