import { useContext, useState } from "react";
import TimerContext from "../store/timer-context";

const NewTimer = () => {
  const { addTimer } = useContext(TimerContext);
  const [hasError, setHasError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const date = formData.get("date").replace(/-/g, "/");
    const time = formData.get("time");

    let validName = false;
    if (name.trim().length > 0) {
      validName = true;
      console.log("name is valid");
    } else {
      setNameError(true);
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
    } else {
      setHasError(true);
    }
  };

  const handleInputFocus = () => {
    setHasError(false);
    setNameError(false);
    setDateError(false);
  };

  return (
    <div>
      <h2>Create New Event Timer</h2>
      <form name="new-timer" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onFocus={handleInputFocus} />
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" onFocus={handleInputFocus} />
        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="time" onFocus={handleInputFocus} />
        <button>Start</button>
        {hasError && (
          <div className="error-messages">
            Errors:
            {nameError && <div>Name can't be empty.</div>}
            {dateError && <div>Date has to be set to the future.</div>}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewTimer;
