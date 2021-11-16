import ToDoItem from "./TodoItem";
import ToDo from "../models/toDo";

type Props = {
  toDoList: Array<ToDo>;
  removeToDo: (toDoId: string) => void;
  updateToDo: (toDoId: string, newContent: string) => void;
};

const ToDoList = ({ toDoList, removeToDo, updateToDo }: Props): JSX.Element => {
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

  return <ul>{toDoListItems}</ul>;
};

export default ToDoList;
