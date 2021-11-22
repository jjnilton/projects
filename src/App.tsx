import { useEffect, useRef, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.scss";
import ToDo from "./models/toDo";
import Header from "./components/Header";
import { Box, createTheme, Drawer, ThemeProvider } from "@mui/material";
import Settings from "./components/Settings";

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const mountRef = useRef(false);
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDrawerVisibility = () => {
    setDrawerVisibility((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const addNewToDo = (toDo: ToDo) => {
    setToDos((prevToDos) => {
      return prevToDos.concat(toDo);
    });
  };

  const removeToDo = (id: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((item) => item.id !== id);
    });
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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Drawer
        anchor="right"
        open={drawerVisibility}
        onClose={toggleDrawerVisibility}
      >
        <Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode}></Settings>
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
          ></ToDoList>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
