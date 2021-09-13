import TimerContext from "./timer-context";
import { useState, useReducer, useEffect } from "react";

const TimerProvider = (props) => {
  const [timers, setTimers] = useState([]);

  const handleAddTimer = (timer) => {
    setTimers(prevTimers => {
      return [...prevTimers, {id: prevTimers.length < 1 ? 0 : prevTimers[prevTimers.length - 1].id + 1, ...timer} ]
    })
  }

  // useEffect(() => {
  //   localStorage.setItem("timers", JSON.stringify(timers))
  // }, [timers])

  const timerContext = {
    timers,
    addTimer: handleAddTimer
  }

  return (
    <TimerContext.Provider value={timerContext}>{props.children}</TimerContext.Provider>
  )
}

export default TimerProvider;