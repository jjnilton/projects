import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDo from "../models/toDo";
import classes from "./ToDoList.module.scss";
import ToDoListFilter from "./ToDoListFilter";
import { Collapse, Fade, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TransitionGroup } from "react-transition-group";
import { Box } from "@mui/material";

type Props = {
  toDoList: Array<ToDo>;
  removeToDo: (toDoId: string) => void;
  updateToDo: (
    toDoId: string,
    newContent?: string,
    completed?: boolean
  ) => void;
  safeDelete: boolean;
};

const ToDoList = ({
  toDoList,
  removeToDo,
  updateToDo,
  safeDelete,
}: Props): JSX.Element => {
  const [filter, setFilter] = useState<string>("all");
  const toDoCount: number = toDoList.length;
  const completedCount: number = toDoList.filter(
    (toDo) => toDo.completed
  ).length;
  const [search, setSearch] = useState<string>("");

  toDoList.sort((a, b) => (a.id > b.id ? -1 : 1));

  const toDoListItems = toDoList.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        toDo={item}
        removeToDo={removeToDo.bind(null, item.id)}
        updateToDo={updateToDo}
        safeDelete={safeDelete}
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

  const searchToDoListItems = (
    toDoListItems: JSX.Element[],
    query: string
  ): JSX.Element[] => {
    const queryRegex = new RegExp(query, "g");
    const results = toDoListItems.filter((toDoComponent) => {
      return toDoComponent.props.toDo.content.match(queryRegex);
    });
    return results;
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
        <SearchIcon color="disabled"></SearchIcon>
        <InputBase
          placeholder="Search To-Dos"
          aria-label="Search To-Dos"
          title="Search To-Dos"
          disabled={toDoListItems.length < 1}
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
      <Box>
        <TransitionGroup component="ul" className={classes.list}>
          {searchToDoListItems(
            filterToDoListItems(toDoListItems, filter),
            search
          ).map((item) => {
            return (
              item.props.toDo && (
                <Collapse key={item.key}>
                  {
                    <ToDoItem
                      key={item.props.toDo.id}
                      toDo={item.props.toDo}
                      removeToDo={removeToDo.bind(null, item.props.toDo.id)}
                      updateToDo={updateToDo}
                      safeDelete={safeDelete}
                    ></ToDoItem>
                  }
                </Collapse>
              )
            );
          })}
        </TransitionGroup>
        {searchToDoListItems(filterToDoListItems(toDoListItems, filter), search)
          .length < 1 && (
          <Fade in={true} timeout={1000}>
            <Typography color="text.primary">
              {search.length > 0 ? "Sorry, no To-Dos found." : "Your To-Do list is empty, try adding a new To-Do."}
            </Typography>
          </Fade>
        )}
      </Box>
    </>
  );
};

export default ToDoList;
