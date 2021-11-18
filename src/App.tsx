import { useEffect, useRef, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css";
import ToDo from "./models/toDo";

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const mountRef = useRef(false);

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

  return (
    <div className="App">
      <NewToDo addNewToDo={addNewToDo}></NewToDo>
      <ToDoList
        toDoList={toDos}
        removeToDo={removeToDo}
        updateToDo={updateToDo}
      ></ToDoList>
    </div>
  );
}

export default App;
