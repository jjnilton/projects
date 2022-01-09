import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import NewToDo from '../components/NewToDo';

describe('renders the new to-do component', () => {
  test('is a form and two children elements', () => {
    const { container } = render(<NewToDo addNewToDo={() => {}} />);
    const newToDoElement = container.firstChild;
    expect(newToDoElement?.nodeName).toEqual('FORM');
    expect(newToDoElement?.childNodes.length).toEqual(2);
  });

  test('has a label with the text "New To-Do", an input and a button', () => {
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

describe('todo input and button interaction', () => {
  test('add one item to the to-do list', () => {
    const { container } = render(<App />);
    const newToDoInput = container.querySelector('#content')!;
    const addToDoButton = container.querySelector('#add')!;
    fireEvent.change(newToDoInput, { target: { value: 'First to-do.' } });
    fireEvent.click(addToDoButton);
    const firstToDoItem = container.querySelector('ul p:nth-child(3)')!;
    expect(firstToDoItem).toHaveTextContent('First to-do.');
  });

  test('add two items to the to-do list', () => {
    const { container } = render(<App />);
    const newToDoInput = container.querySelector('#content')!;
    const addToDoButton = container.querySelector('#add')!;
    fireEvent.change(newToDoInput, { target: { value: 'First to-do.' } });
    fireEvent.click(addToDoButton);
    fireEvent.change(newToDoInput, { target: { value: 'Second to-do.' } });
    fireEvent.click(addToDoButton);
    const firstToDoItem = container.querySelector('ul p:nth-child(3)')!;
    expect(firstToDoItem).toHaveTextContent('Second to-do.');
  });

  test('add one item to the to-do list, delete one item', async () => {
    const { container } = render(<App />);
    const newToDoInput = container.querySelector('#content')!;
    const addToDoButton = container.querySelector('#add')!;
    fireEvent.change(newToDoInput, { target: { value: 'First to-do.' } });
    fireEvent.click(addToDoButton);
    const deleteButton = container.querySelector('ul .MuiCardActions-root > button:last-of-type')!;
    fireEvent.click(deleteButton);
    const modalDeleteButton = screen.findByText('Delete Permanently');
    fireEvent.click(await modalDeleteButton);
    const toDoList = container.querySelector('ul');
    expect(toDoList).toBeEmptyDOMElement;
  });
});
