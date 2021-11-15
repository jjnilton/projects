import { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import "./App.css";

interface ToDo {
  id: string;
  content: string;
}

function App() {
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

  const addNewToDo = (toDo: ToDo) => {
    setToDos((prevToDos) => {
      return prevToDos.concat(toDo);
    });
    console.log('added new todo', toDo)
  };

  return (
    <div className="App">
      <NewToDo addNewToDo={addNewToDo}></NewToDo>
      <ToDoList toDoList={toDos}></ToDoList>
    </div>
  );
}

export default App;
