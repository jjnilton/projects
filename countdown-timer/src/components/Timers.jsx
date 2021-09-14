import { useContext, useEffect, useState } from "react";
import TimerContext from "../store/timer-context";
import Timer from "./Timer";

const ActiveTimers = (props) => {
  const { timers } = useContext(TimerContext);
  const [actives, setActives] = useState();

  const getTimeLeft = (timerDate) => {
    return Math.floor((new Date(timerDate) - new Date()) / 1000);
  };

  const activeTimers = timers.filter(
    (timer) => getTimeLeft(timer.dateTime) > 0
  );

  console.log(activeTimers)

  const expiredTimers = timers.filter(
    (timer) => getTimeLeft(timer.dateTime) < 0
  );

  const expiredTimersElements = expiredTimers.map((timer) => {
    return (
      <li>
        {timer.id} {timer.name} {timer.dateTime}
      </li>
    );
  });

  // add timer instantly
  useEffect(() => {
    setActives(
      activeTimers.map((timer) => {
        return (
          <Timer
            key={timer.id}
            id={timer.id}
            name={timer.name}
            dateTime={timer.dateTime}
            timeLeft={getTimeLeft(timer.dateTime)}
          ></Timer>
        );
      })
    );
  }, [timers]);

  // update timers each 1s
  useEffect(() => {
    let timer;
    if (!!actives && actives.length > 0) {
      timer = setInterval(() => {
        setActives(
          activeTimers.map((timer) => {
            return (
              <Timer
                key={timer.id}
                id={timer.id}
                name={timer.name}
                dateTime={timer.dateTime}
                timeLeft={getTimeLeft((timer.dateTime))}
              ></Timer>
            );
          })
        );
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [actives]);

  console.log("render timers")

  return (
    <div>
      <h2>Active Timers</h2>
      <ul>{actives}</ul>
      <h2>Expired Timers</h2>
      <ul>{expiredTimersElements}</ul>
      <button>Clear expired timers</button>
    </div>
  );
};

export default ActiveTimers;
