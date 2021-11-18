import ToDo from "../models/toDo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import classes from "./NewToDo.module.scss";

type Props = {
  addNewToDo: (toDo: ToDo) => void;
};

const NewToDo = ({ addNewToDo }: Props): JSX.Element => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const content = formData.get("content") as string;

    addNewToDo({
      id: new Date().getTime().toString(),
      content: content,
      completed: false,
      date: new Date().toISOString(),
    });
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
    </form>
  );
};

export default NewToDo;
