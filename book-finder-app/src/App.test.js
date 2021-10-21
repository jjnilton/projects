import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"

test("renders the search component", () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByPlaceholderText("Search...");
  expect(linkElement).toBeInTheDocument();
});
