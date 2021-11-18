import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "../models/toDo";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import classes from "./ToDoList.module.scss";

type Props = {
  toDoList: Array<ToDo>;
  removeToDo: (toDoId: string) => void;
  updateToDo: (
    toDoId: string,
    newContent?: string,
    completed?: boolean
  ) => void;
};

const ToDoList = ({ toDoList, removeToDo, updateToDo }: Props): JSX.Element => {
  const [filter, setFilter] = useState<string>("all");

  const toDoListItems = toDoList.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        toDo={item}
        removeToDo={removeToDo.bind(null, item.id)}
        updateToDo={updateToDo}
      ></ToDoItem>
    );
  });

  const filterToDoListItems = (
    toDoListItems: JSX.Element[],
    filter: string
  ) => {
    if (filter === "completed") {
      return toDoListItems.filter(
        (toDoComponent) => toDoComponent.props.toDo.completed
      );
    } else if (filter === "active") {
      return toDoListItems.filter(
        (toDoComponent) => !toDoComponent.props.toDo.completed
      );
    } else return toDoListItems;
  };

  const handleFilterChange = (event: React.MouseEvent<HTMLElement>) => {
    const buttonElement = event.target as HTMLButtonElement;
    setFilter(buttonElement.value);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={handleFilterChange}
        className={classes["button-group"]}
        sx={{ backgroundColor: "background.default" }}
      >
        <Tooltip title="Show all To-Dos">
          <ToggleButton selected={filter === "all" ? true : false} value="all">
            All
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Show only active To-Dos">
          <ToggleButton selected={filter === "active" && true} value="active">
            Active
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Show only completed To-Dos">
          <ToggleButton
            selected={filter === "completed" && true}
            value="completed"
          >
            Completed
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
      <ul className={classes.list}>
        {filterToDoListItems(toDoListItems, filter)}
      </ul>
    </>
  );
};

export default ToDoList;
