import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import userEvent from "@testing-library/user-event";

test("renders the search component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searchElement = screen.getByPlaceholderText("Search...");
  expect(searchElement).toBeInTheDocument();
});

test("search input works as intended", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searchElement = screen.getByPlaceholderText("Search...");
  userEvent.type(searchElement, "nine princes in amber");
  expect(searchElement).toHaveValue("nine princes in amber");
});

test("disables button while loading", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searchButton = screen.getByText("Search");
  const searchElement = screen.getByPlaceholderText("Search...");
  userEvent.click(searchButton);
  expect(searchElement).toBeDisabled();
});
