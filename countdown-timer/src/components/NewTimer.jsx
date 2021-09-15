import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./NewTimer.module.css";

const NewTimer = () => {
  const { addTimer } = useContext(TimerContext);
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const date = formData.get("date");
    let time = formData.get("time");

    let validName = false;
    if (name.trim().length > 0 && name.trim().length < 50) {
      validName = true;
      console.log("name is valid");
    } else {
      setNameError(true);
    }

    if (time.trim().length < 1 || time.trim() < 1) {
      time = "00:00";
    }

    const dateTime = `${date} ${time}`.trim();

    let validDate = false;
    if (!isNaN(new Date(dateTime)) && new Date(dateTime) > new Date()) {
      validDate = true;
    } else {
      setDateError(true);
    }

    if (validName && validDate) {
      addTimer({ name, dateTime });
    }
  };

  const handleInputFocus = () => {
    setNameError(false);
    setDateError(false);
  };

  return (
    <div className={classes["new-timer"]}>
      <h2>Create New Event Timer</h2>
      <form name="new-timer" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name of the event"
          onFocus={handleInputFocus}
        />
        {nameError && (
          <div className={classes.error}>Name can't be empty nor too long.</div>
        )}
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" onFocus={handleInputFocus} />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input id="time" name="time" type="time" onFocus={handleInputFocus} />
        </div>
        {dateError && (
          <div className={classes.error}>Date has to be set to the future.</div>
        )}
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default NewTimer;
