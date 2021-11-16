import ToDo from "../models/toDo";

type Props = {
  toDo: ToDo,
  removeToDo: () => void;
};

const ToDoItem = ({ toDo, removeToDo }: Props): JSX.Element => {
  return <li onClick={removeToDo}>{toDo.id} {toDo.content} {toDo.completed}</li>;
};

export default ToDoItem;
