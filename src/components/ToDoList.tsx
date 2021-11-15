import ToDoItem from "./TodoItem";

interface ToDo {
  id: string;
  content: string;
}

type Props = {
  toDoList: Array<ToDo>;
};

const ToDoList = ({ toDoList }: Props): JSX.Element => {
  const toDoListItems = toDoList.map((item) => {
    return <ToDoItem toDo={item}></ToDoItem>;
  });

  return <ul>{toDoListItems}</ul>;
};

export default ToDoList;
