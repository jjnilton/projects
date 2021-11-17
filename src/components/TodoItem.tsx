import { FormEvent, useState } from "react";
import ToDo from "../models/toDo";

type Props = {
  toDo: ToDo;
  removeToDo: () => void;
  updateToDo: (
    toDoId: string,
    newContent?: string,
    completed?: boolean
  ) => void;
};

const ToDoItem = ({ toDo, removeToDo, updateToDo }: Props): JSX.Element => {
  const [editable, setEditable] = useState<boolean>(false);

  const toggleEditable = (): void => {
    console.log("toggling editable");
    setEditable((prevState) => !prevState);
  };

  const updateToDoContent = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    console.log("toggling savetodo");
    const formData = new FormData(event.target as HTMLFormElement);
    const content = formData.get("new-content") as string;
    if (content !== toDo.content) {
      console.log("really saving...");
      updateToDo(toDo.id, content);
    }
    setEditable((prevState) => !prevState);
  };

  const updateToDoStatus = () => {
    console.log(toDo.completed);
    updateToDo(toDo.id, undefined, !toDo.completed)
  };

  return (
    <li>
      {toDo.id} {toDo.completed.toString()} {toDo.date}
      <input
        type="checkbox"
        defaultChecked={toDo.completed}
        onChange={updateToDoStatus}
      />
      {editable ? (
        <form id="edit-form" onSubmit={updateToDoContent}>
          <input
            id="new-content"
            name="new-content"
            defaultValue={toDo.content}
          />
        </form>
      ) : (
        <div>{toDo.content}</div>
      )}
      {editable && (
        <button form="edit-form" type="submit">
          Save
        </button>
      )}
      {!editable && (
        <button type="button" onClick={toggleEditable}>
          Edit
        </button>
      )}
      <button type="button" onClick={removeToDo}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
