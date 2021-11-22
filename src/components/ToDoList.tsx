import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "../models/toDo";
import classes from "./ToDoList.module.scss";
import ToDoListFilter from "./ToDoListFilter";
import { InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  const completedCount: number = toDoList.filter(
    (toDo) => toDo.completed
  ).length;
  const [search, setSearch] = useState<string>("");

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

  const searchToDoListItems = (toDoListItems: JSX.Element[], query: string) => {
    const queryRegex = new RegExp(query, "g");
    const results = toDoListItems.filter((toDoComponent) => {
      return toDoComponent.props.toDo.content.match(queryRegex);
    });
    if (results.length > 0) {
      return results;
    }
    return <Typography sx={{ color: 'text.primary' }}>No To-Dos found.</Typography>;
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <ToDoListFilter
        filter={filter}
        onSetFilter={handleFilterChange}
        toDoCount={toDoCount}
        completedCount={completedCount}
      ></ToDoListFilter>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: "text.primary", textTransform: "capitalize" }}
      >
        {filter} To-Dos
      </Typography>
      <Paper
        sx={{
          width: "100%",
          "& > div": { width: "100%" },
          display: "grid",
          gridTemplateColumns: "max-content 1fr",
          alignItems: "center",
          padding: 1,
        }}
      >
        <SearchIcon></SearchIcon>
        <InputBase
          placeholder="Search To-Dos"
          sx={{
            "& .MuiInputBase-input": {
              padding: 1,
              paddingLeft: 1,
              transition: "width 1s",
              width: "100%",
            },
          }}
          value={search}
          onChange={handleSearch}
        ></InputBase>
      </Paper>
      <ul className={classes.list}>
        {searchToDoListItems(
          filterToDoListItems(toDoListItems, filter),
          search
        )}
      </ul>
    </>
  );
};

export default ToDoList;
