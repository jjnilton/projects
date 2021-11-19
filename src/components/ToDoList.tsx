import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "../models/toDo";
import classes from "./ToDoList.module.scss";
import ToDoListFilter from "./ToDoListFilter"

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
  const toDoCount: number = toDoList.length;
  const completedCount: number = toDoList.filter(toDo => toDo.completed).length;

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

  const handleFilterChange = (filter: string): void => {
    setFilter(filter);
  };


  return (
    <>
      <ToDoListFilter filter={filter} onSetFilter={handleFilterChange} toDoCount={toDoCount} completedCount={completedCount}></ToDoListFilter>
      <ul className={classes.list}>
        {filterToDoListItems(toDoListItems, filter)}
      </ul>
    </>
  );
};

export default ToDoList;
