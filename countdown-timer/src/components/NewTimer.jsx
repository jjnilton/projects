import { useContext } from "react";
import TimerContext from "../store/timer-context";

const NewTimer = () => {
  const { addTimer } = useContext(TimerContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const date = formData.get("date");
    const time = formData.get("time");

    const eventObject = {
      name, date, time
    }

    console.log( eventObject )

    addTimer({ name, date, time });
  };

  return (
    <form name="new-timer" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="date">Date</label>
      <input id="date" name="date" type="date" />
      <label htmlFor="time">Time</label>
      <input id="time" name="time" type="time"/>
      <button>Start</button>
    </form>
    
  );
};

export default NewTimer;
