import { useContext, useEffect, useRef, useState } from "react";
import TimerContext from "../store/timer-context";
import classes from "./NewTimer.module.css";

const NewTimer = () => {
  const { addTimer, timers, alert, notificationModal, statusBar } =
    useContext(TimerContext);
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [sameDateError, setSameDateError] = useState(false);
  const [bringAttention, setBringAttention] = useState(false);
  const [success, setSuccess] = useState(false);
  const nameRef = useRef();
  const hasTried = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const date = formData.get("date");
    let time = formData.get("time");

    let validName = false;
    if (name.trim().length > 0 && name.trim().length < 50) {
      validName = true;
    } else {
      setNameError(true);
    }

    if (time.trim().length < 1 || time.trim() < 1) {
      time = "00:00";
    }

    const dateTime = `${date} ${time}`.trim();
    
    

    let validDate = false;

    if (!isNaN(new Date(dateTime)) && new Date(dateTime) > new Date()) {
      const found = timers.find((timer) => {
        return (
          new Date(timer.dateTime).getTime() === new Date(dateTime).getTime()
        );
      });
      if (!!found) {
        setSameDateError(true);
      } else {
        validDate = true;
      }
    } else {
      setDateError(true);
    }

    if (validName && validDate) {
      addTimer({ name, dateTime });
      event.target.reset();
      nameRef.current.focus();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } else {
      if (!hasTried.current) {
        hasTried.current = true;
      } else {
        setBringAttention(true);
        setTimeout(() => {
          setBringAttention(false);
        }, 500);
      }
    }
  };

  const handleInputFocus = () => {
    setNameError(false);
    setDateError(false);
    setSameDateError(false);
  };

  useEffect(() => {
    if (!alert && !notificationModal) {
      setTimeout(() => {
        try {
          nameRef.current.focus();
        } catch (err) {
          console.log(err)
        }
        
      }, 1);
    }
  }, [alert, notificationModal, statusBar]);

  return (
    <div
      className={[
        classes["new-timer"],
        success ? classes.success : undefined,
      ].join(" ")}
    >
      <h2>Create New Event Timer</h2>
      <form name="new-timer" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name of the event"
          onFocus={handleInputFocus}
          tabIndex={alert || notificationModal ? "-1" : "0"}
          ref={nameRef}
          autoComplete="off"
        />
        {nameError && (
          <div
            className={[
              classes.error,
              bringAttention ? classes.attention : undefined,
            ].join(" ")}
          >
            Name can't be empty nor too long.
          </div>
        )}
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            onFocus={handleInputFocus}
            tabIndex={alert || notificationModal ? "-1" : "0"}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            name="time"
            type="time"
            onFocus={handleInputFocus}
            tabIndex={alert || notificationModal ? "-1" : "0"}
            step="60"
          />
        </div>
        {dateError && (
          <div
            className={[
              classes.error,
              bringAttention ? classes.attention : undefined,
            ].join(" ")}
          >
            Date has to be set to the future.
          </div>
        )}
        {sameDateError && (
          <div
            className={[
              classes.error,
              bringAttention ? classes.attention : undefined,
            ].join(" ")}
          >
            Can't set two events at the exactly the same time.
          </div>
        )}
        <button
          type="submit"
          tabIndex={alert || notificationModal ? "-1" : "0"}
        >
          {success ? "Added" : "Start"}
        </button>
      </form>
    </div>
  );
};

export default NewTimer;
