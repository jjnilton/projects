import { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css";
import ToDo from "./models/toDo";

function App() {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

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

  const updateToDo = (id: string, newContent: string) => {
    const updatedToDos = [...toDos];
    const toDoIndex = toDos.findIndex(toDo => toDo.id === id);
    updatedToDos[toDoIndex] = {...updatedToDos[toDoIndex], content: newContent};
    setToDos(updatedToDos);
  };

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
