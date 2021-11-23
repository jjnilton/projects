import ToDo from "../models/toDo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import classes from "./NewToDo.module.scss";
import { useState } from "react";

type Props = {
  addNewToDo: (toDo: ToDo) => void;
};

const NewToDo = ({ addNewToDo }: Props): JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const content = formData.get("content") as string;

    if (content.trim().length > 0) {
      addNewToDo({
        id: new Date().getTime().toString(),
        content: content,
        completed: false,
        date: new Date().toISOString(),
      });

      setSuccess(true);
      formElement.reset();
    } else {
      console.log("error");
      setError(true);
    }
  };

  const handleSuccessClose = () => {
    setSuccess(false);
    setError(false);
  };

  const handleErrorClose = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        fullWidth
        id="content"
        name="content"
        label="New To-Do"
        type="text"
        variant="filled"
        required
      />
      <Button variant="contained" startIcon={<AddIcon></AddIcon>} type="submit">
        Add
      </Button>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={(event, reason) => {
          if (reason !== "clickaway") {
            handleSuccessClose();
          }
        }}
      >
        <Alert onClose={handleSuccessClose} variant="filled" severity="success">
          New To-Do added successfully.
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={(event, reason) => {
          if (reason !== "clickaway") {
            handleErrorClose();
          }
        }}
      >
        <Alert onClose={handleErrorClose} variant="filled" severity="error">
          Invalid To-Do content.
        </Alert>
      </Snackbar>
    </form>
  );
};

export default NewToDo;
