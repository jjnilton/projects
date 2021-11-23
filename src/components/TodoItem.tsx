import { FormEvent, useState } from "react";
import ToDo from "../models/toDo";
import classes from "./ToDoItem.module.scss";

// UI
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DeleteConfirmation from "./DeleteConfirmation";

type Props = {
  toDo: ToDo;
  removeToDo: () => void;
  updateToDo: (
    toDoId: string,
    newContent?: string,
    completed?: boolean
  ) => void;
  safeDelete: boolean;
};

const ToDoItem = ({
  toDo,
  removeToDo,
  updateToDo,
  safeDelete,
}: Props): JSX.Element => {
  const [editable, setEditable] = useState<boolean>(false);
  const [deleteConfirmationVisibility, setDeleteConfirmationVisibility] =
    useState(false);

  const toggleEditable = (): void => {
    setEditable((prevState) => !prevState);
  };

  const updateToDoContent = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const content = formData.get("new-content") as string;
    if (content !== toDo.content && content.trim().length > 0) {
      updateToDo(toDo.id, content);
    }
    setEditable((prevState) => !prevState);
  };

  const updateToDoStatus = () => {
    updateToDo(toDo.id, undefined, !toDo.completed);
  };

  const toggleDeleteConfirmationVisibility = () => {
    setDeleteConfirmationVisibility((prevState) => !prevState);
  };

  const handleRemove = () => {
    if (safeDelete) {
      setDeleteConfirmationVisibility(true);
    } else removeToDo();
  };

  return (
    <li>
      <DeleteConfirmation
        dialogVisibility={deleteConfirmationVisibility}
        toggleDialog={toggleDeleteConfirmationVisibility}
        removeToDo={removeToDo}
      ></DeleteConfirmation>
      <Card
        sx={{
          backgroundColor: toDo.completed
            ? "action.disabledBackground"
            : undefined,
          "&:hover": {
            backgroundColor: "action.hover",
          },
        }}
      >
        <CardContent className={classes.content}>
          <Typography sx={{ fontSize: 12 }} color="text.disabled">
            {toDo.id}
          </Typography>
          <Tooltip title={new Date(toDo.date).toString()}>
            <Typography
              className={classes.date}
              sx={{ fontSize: 14 }}
              color="text.secondary"
            >
              {new Date(toDo.date).toDateString()}
            </Typography>
          </Tooltip>
          {editable ? (
            <form id="edit-form" onSubmit={updateToDoContent}>
              <TextField
                id="new-content"
                name="new-content"
                defaultValue={toDo.content}
                label="Edit task"
                fullWidth
                multiline
              />
            </form>
          ) : (
            <Typography
              className={classes.todo}
              sx={{
                textDecoration: toDo.completed ? "line-through" : undefined,
                color: toDo.completed ? "text.secondary" : undefined,
                transition: "all .5s",
              }}
            >
              {toDo.content}
            </Typography>
          )}
          <Tooltip
            title={`Mark as ${toDo.completed ? "incomplete" : "complete"}`}
          >
            <Checkbox
              className={classes.checkbox}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              checked={toDo.completed}
              onChange={updateToDoStatus}
            />
          </Tooltip>
          <CardActions>
            {editable && (
              <Button
                variant="contained"
                startIcon={<SaveIcon></SaveIcon>}
                form="edit-form"
                type="submit"
                color="info"
              >
                Save
              </Button>
            )}
            {!editable && (
              <Button
                variant="contained"
                startIcon={<EditIcon></EditIcon>}
                onClick={toggleEditable}
              >
                Edit
              </Button>
            )}
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleRemove}
            >
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </li>
  );
};

export default ToDoItem;
