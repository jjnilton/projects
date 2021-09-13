import ActiveTimers from "./ActiveTimers"
import ExpiredTimers from "./ExpiredTimers"
import { useReducer } from "react";

const TimerList = () => {
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  const handleUpdate = () => {
    forceUpdate()
  }

  return (
    <>
    <ActiveTimers forceUpdate={handleUpdate}></ActiveTimers>
    <ExpiredTimers></ExpiredTimers>
    </>
  )
}
export default TimerList;