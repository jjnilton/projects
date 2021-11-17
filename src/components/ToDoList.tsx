import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import ToDo from "../models/toDo";

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

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="radio"
          name="filter"
          id="all"
          value="all"
          onChange={handleFilterChange}
          defaultChecked
        />
        <label htmlFor="all">All</label>
        <input
          type="radio"
          name="filter"
          id="active"
          value="active"
          onChange={handleFilterChange}
        />
        <label htmlFor="active">Active</label>
        <input
          type="radio"
          name="filter"
          id="completed"
          value="completed"
          onChange={handleFilterChange}
        />
        <label htmlFor="completed">Completed</label>
      </div>
      <ul>{filterToDoListItems(toDoListItems, filter)}</ul>
    </>
  );
};

export default ToDoList;
