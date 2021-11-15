interface ToDo {
  id: string;
  content: string;
}

type Props = {
  toDo: ToDo;
};

const ToDoItem = ({ toDo }: Props): JSX.Element => {
  return <li>{toDo.content}</li>;
};

export default ToDoItem;
