import { useContext, useEffect, useState } from "react";
import TimerContext from "../store/timer-context";
import Timer from "./Timer";
import classes from "./Timers.module.css";

const ActiveTimers = () => {
  const { timers, clearExpired, notificationModal, alert } = useContext(TimerContext);
  const [activeTimers, setActiveTimers] = useState();
  const [visible, setVisible] = useState(true);

  const getTimeLeft = (timerDate) => {
    return Math.floor((new Date(...timerDate) - new Date()) / 1000);
  };

  const activeTimersArray = [...timers]
    .sort((a, b) => (new Date(...a.dateTime) < new Date(...b.dateTime) ? -1 : 1))
    .filter((timer) => getTimeLeft(timer.dateTime) > 0);

  const expiredTimersArray = timers.filter(
    (timer) => getTimeLeft(timer.dateTime) < 0
  );

  const expiredTimers = expiredTimersArray.reverse().map((timer) => {
    return (
      <li key={timer.id}>
        <div className={classes.name}>{timer.name}</div>
        <div className={classes.date}>
          {new Date(...timer.dateTime).toLocaleString(undefined, {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </div>
      </li>
    );
  });

  // add timer instantly
  useEffect(() => {
    setActiveTimers(
      activeTimersArray.map((timer) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timers]);

  // update timers each 1s
  useEffect(() => {
    let timer;
    if (!!activeTimers && activeTimers.length > 0) {
      timer = setInterval(() => {
        setActiveTimers(
          activeTimersArray.map((timer) => {
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
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTimers]);

  const handleClearExpiredTimers = () => {
    setVisible(false);
    setTimeout(() => {
      clearExpired();
      setVisible(true);
    }, 500);
  };

  return (
    <div className={classes.timers}>
      <div className={classes.active}>
        <h2>Active Event Timers</h2>
        {activeTimers?.length === 0 ? (
          <p>Go ahead an add a timer for your event!</p>
        ) : (
          <ul>{activeTimers}</ul>
        )}
      </div>
      <div className={classes.expired}>
        <h2>Expired Event Timers</h2>
        {expiredTimers.length === 0 ? (
          <p>Expired event timers will appear here.</p>
        ) : (
          <ul className={!visible ? classes.disappear : undefined}>
            {expiredTimers}
          </ul>
        )}
        <button
          disabled={expiredTimers.length < 1}
          onClick={handleClearExpiredTimers}
          tabIndex={alert || notificationModal ? "-1" : "0"}
        >
          Clear expired timers
        </button>
      </div>
    </div>
  );
};

export default ActiveTimers;
