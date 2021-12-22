import { useState } from 'react';
import {
  CircularProgress, Collapse, Fade, Typography, Box,
} from '@mui/material';
import {
  CSSTransition,
  Transition,
  TransitionGroup,
  TransitionStatus,
} from 'react-transition-group';
import ToDoItem from './ToDoItem';
import ToDo from '../models/toDo';
import classes from './ToDoList.module.scss';
import ToDoListFilter from './ToDoListFilter';
import SearchToDoList from './SearchToDoList';

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
  const [filter, setFilter] = useState<string>('all');
  const toDoCount: number = toDoList.length;
  const completedCount: number = toDoList.filter(
    (toDo) => toDo.completed,
  ).length;
  const [search, setSearch] = useState<string>('');
  const [sortOldestFirst, setSortOldestFirst] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  if (sortOldestFirst) {
    toDoList.sort((a, b) => (a.id < b.id ? -1 : 1));
  } else {
    toDoList.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  const handleSortOldestFirst = (value: boolean) => {
    setLoadingVisible(true);

    setTimeout(() => {
      setLoading(true);
    }, 1);

    setTimeout(() => {
      setLoading(false);
      setLoadingVisible(false);
      setSortOldestFirst(value);
    }, 1000);
  };

  const toDoListItems = toDoList.map((item) => (
    <ToDoItem
      key={item.id}
      toDo={item}
      removeToDo={removeToDo}
      updateToDo={updateToDo}
      safeDelete={safeDelete}
    />
  ));

  const filterToDoListItems = (
    todoListItemsElements: JSX.Element[],
    filterName: string,
  ) => {
    if (filterName === 'completed') {
      return todoListItemsElements.filter(
        (toDoComponent) => toDoComponent.props.toDo.completed,
      );
    } if (filterName === 'active') {
      return todoListItemsElements.filter(
        (toDoComponent) => !toDoComponent.props.toDo.completed,
      );
    } return todoListItemsElements;
  };

  const handleFilterChange = (filterName: string): void => {
    setFilter(filterName);
  };

  const handleSearchQuery = (query: string) => {
    setSearch(query);
  };

  const searchToDoListItems = (
    toDoListItemsElements: JSX.Element[],
    query: string,
  ): JSX.Element[] => {
    const queryRegex = new RegExp(query, 'g');
    const results = toDoListItemsElements.filter((toDoComponent) => (
      toDoComponent.props.toDo.content.match(queryRegex)));
    return results;
  };

  const defaultStyle = {
    transition: 'opacity 1000ms ease-in-out',
    opacity: 0,
  };

  const transitionStyles: { [id: string]: React.CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <ToDoListFilter
        filter={filter}
        onSetFilter={handleFilterChange}
        toDoCount={toDoCount}
        completedCount={completedCount}
      />
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: 'text.primary', textTransform: 'capitalize' }}
      >
        {filter}
        {' '}
        To-Dos
      </Typography>
      <Box sx={{ display: 'flex ', gap: 1, alignItems: 'center' }}>
        <SearchToDoList
          toDoListItems={toDoListItems}
          searchQuery={search}
          setSearchQuery={handleSearchQuery}
          sortOldestFirst={sortOldestFirst}
          handleSortOldestFirst={handleSortOldestFirst}
        />
      </Box>
      {loadingVisible && (
        <Transition
          in={loading}
          timeout={1000}
        >
          {(state: TransitionStatus) => (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                margin: 'auto',
                marginTop: '33.3%',
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Transition>
      )}
      <CSSTransition
        in={!loading}
        timeout={1000}
        classNames={classes}
      >
        <Box>
          <TransitionGroup component="ul" style={{ display: 'grid', gap: '10px' }}>
            {searchToDoListItems(
              filterToDoListItems(toDoListItems, filter),
              search,
            ).map((item) => (
              item.props.toDo && (
                <Collapse key={item.key} component="li">
                  <ToDoItem
                    key={item.props.toDo.id}
                    toDo={item.props.toDo}
                    removeToDo={removeToDo}
                    updateToDo={updateToDo}
                    safeDelete={safeDelete}
                  />
                </Collapse>
              )
            ))}
          </TransitionGroup>
          {searchToDoListItems(
            filterToDoListItems(toDoListItems, filter),
            search,
          ).length < 1 && (
          <Fade in timeout={1000}>
            <Typography color="text.primary" style={{ textAlign: 'center', marginTop: '1em' }}>
              {search.length > 0 || filter !== 'all'
                ? 'Sorry, no To-Dos found.'
                : 'Your To-Do list is empty. Try adding a new To-Do.'}
            </Typography>
          </Fade>
          )}
        </Box>
      </CSSTransition>
    </>
  );
};

export default ToDoList;
