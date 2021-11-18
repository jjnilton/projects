import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "../models/toDo";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import classes from './ToDoList.module.scss';


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
        className={classes['button-group']}
        sx={{ backgroundColor: 'background.default' }}
      >
        <ToggleButton
          selected={filter === "all" ? true : false}
          value="all"
        >
          All
        </ToggleButton>
        <ToggleButton
          selected={filter === "active" && true}
          value="active"
        >
          Active
        </ToggleButton>
        <ToggleButton
          selected={filter === "completed" && true}
          value="completed"
        >
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
      <ul className={classes.list}>{filterToDoListItems(toDoListItems, filter)}</ul>
    </>
  );
};

export default ToDoList;
