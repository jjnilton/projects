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

  return (
    <div className="App">
      <NewToDo addNewToDo={addNewToDo}></NewToDo>
      <ToDoList toDoList={toDos} removeToDo={removeToDo}></ToDoList>
    </div>
  );
}

export default App;
