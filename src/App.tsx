import React, { useEffect, useRef, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.scss";
import ToDo from "./models/toDo";
import Header from "./components/Header";
import {
  Alert,
  AlertColor,
  Box,
  createTheme,
  Drawer,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import Settings from "./components/Settings";

export interface SnackbarMessage {
  severity: string;
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const mountRef = useRef(false);
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [safeDelete, setSafeDelete] = useState(true);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(
    undefined,
  );

  const toggleDrawerVisibility = () => {
    setDrawerVisibility((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const toggleSafeDelete = () => {
    setSafeDelete((prevState) => !prevState);
  };

  const addNewToDo = (toDo: ToDo) => {
    setToDos((prevToDos) => {
      return prevToDos.concat(toDo);
    });
    setSnackPack((prev) => [...prev, { severity: 'success', message: 'To-Do Added.', key: new Date().getTime() }]);

  };

  const removeToDo = (id: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== id);
    });
    setSnackPack((prev) => [...prev, { severity: 'error', message: 'To-Do Deleted.', key: new Date().getTime() }]);
    
  };

  const updateToDo = (id: string, newContent?: string, completed?: boolean) => {
    const updatedToDos = [...toDos];
    const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);

    if (newContent && completed !== undefined) {
      updatedToDos[toDoIndex] = {
        ...updatedToDos[toDoIndex],
        content: newContent,
        completed: completed!,
      };
    } else if (newContent) {
      updatedToDos[toDoIndex] = {
        ...updatedToDos[toDoIndex],
        content: newContent,
      };
    } else if (completed !== updatedToDos[toDoIndex].completed) {
      updatedToDos[toDoIndex] = {
        ...updatedToDos[toDoIndex],
        completed: completed!,
      };
    }

    setToDos(updatedToDos);
  };

  useEffect(() => {
    if (
      localStorage.getItem("toDos") &&
      localStorage.getItem("toDos")!.length > 0
    ) {
      const localToDos = JSON.parse(localStorage.getItem("toDos")!);
      setToDos(localToDos);
    }
  }, []);

  useEffect(() => {
    if (mountRef.current) {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    } else {
      mountRef.current = true;
    }
  }, [toDos]);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleCloseSnackbar = () => {
    setSnackBarVisible(false);
  };

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setSnackBarVisible(true);
    } else if (snackPack.length && messageInfo && snackBarVisible) {
      setSnackBarVisible(false);
    }
  }, [snackPack, messageInfo, snackBarVisible])

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Drawer
        anchor="right"
        open={drawerVisibility}
        onClose={toggleDrawerVisibility}
      >
        <Settings
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSafeDelete={toggleSafeDelete}
          safeDelete={safeDelete}
          toggleDrawerVisibility={toggleDrawerVisibility}
        ></Settings>
      </Drawer>
      <Box
        component="div"
        sx={{ backgroundColor: "background.default", height: "100%" }}
      >
        <Box
          component="main"
          className="App"
          sx={{ backgroundColor: "background.default" }}
        >
          <Header toggleDrawerVisibility={toggleDrawerVisibility}></Header>
          <NewToDo addNewToDo={addNewToDo}></NewToDo>
          <ToDoList
            toDoList={toDos}
            removeToDo={removeToDo}
            updateToDo={updateToDo}
            safeDelete={safeDelete}
          ></ToDoList>
        </Box>
      </Box>
      <Snackbar
        open={snackBarVisible}
        autoHideDuration={3000}
        TransitionProps={{ onExited: handleExited }}
        onClose={(event: React.SyntheticEvent, reason: string) => {
          if (reason === "clickaway") {
            return;
          }
        }}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled" severity={messageInfo?.severity as AlertColor}>
          {messageInfo?.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
