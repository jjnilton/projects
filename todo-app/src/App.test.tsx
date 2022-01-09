import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders main app screen', () => {
  test('renders main app screen', () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders the header', () => {
    const { container } = render(<App />);
    const headerElement = container.querySelector('main > header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the new to-do element', () => {
    const { container } = render(<App />);
    const formElement = container.querySelector('main > form');
    expect(formElement).toBeInTheDocument();
  });

  test('renders the filter to-do element', () => {
    render(<App />);
    const filterElement = screen.getByRole('group');
    expect(filterElement).toBeInTheDocument();
  });

  test('renders the to-do list heading text', () => {
    const { container } = render(<App />);
    const headingElement = container.querySelector('main > h2');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the to-do search element', () => {
    const { container } = render(<App />);
    const searchElement = container.querySelector('main > h2 + div');
    expect(searchElement).toBeInTheDocument();
  });

  test('renders empty todo message element', () => {
    const { container } = render(<App />);
    const emptyToDoElement = container.querySelector('main > h2 + div + div > p');
    expect(emptyToDoElement).toBeInTheDocument();
  });
});
