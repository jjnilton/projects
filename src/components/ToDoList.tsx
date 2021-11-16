import ToDoItem from "./TodoItem";
import ToDo from "../models/toDo";

type Props = {
  toDoList: Array<ToDo>;
  removeToDo: (toDoId: string) => void;
};

const ToDoList = ({ toDoList, removeToDo }: Props): JSX.Element => {
  const toDoListItems = toDoList.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        toDo={item}
        removeToDo={removeToDo.bind(null, item.id)}
      ></ToDoItem>
    );
  });

  return <ul>{toDoListItems}</ul>;
};

export default ToDoList;
