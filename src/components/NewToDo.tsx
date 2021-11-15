interface ToDo {
  id: string;
  content: string;
}

type Props = {
  addNewToDo: (toDo: ToDo) => void;
};

const NewToDo = ({ addNewToDo }: Props): JSX.Element => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const content = formData.get("content") as string;

    addNewToDo({ id: new Date().getTime().toString(), content: content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">New To-Do</label>
      <input id="content" name="content" type="text" />
      <button>Submit</button>
    </form>
  );
};

export default NewToDo;
