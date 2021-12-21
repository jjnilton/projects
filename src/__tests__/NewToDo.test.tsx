import { render } from "@testing-library/react";
import NewToDo from "../components/NewToDo";

describe("renders the new to-do component", () => {
  test("is a form and two children elements", () => {
    const { container } = render(<NewToDo addNewToDo={() => {}} />);
    const newToDoElement = container.firstChild;
    expect(newToDoElement?.nodeName).toEqual("FORM");
    expect(newToDoElement?.childNodes.length).toEqual(2);
  });

  test("has a label with the text 'New To-Do', an input and a button", () => {
    const { container } = render(<NewToDo addNewToDo={() => {}} />);
    const labelElement = container.querySelector('form label');
    const inputElement = container.querySelector('form input');
    const buttonElement = container.querySelector('form > button');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('New To-Do');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
