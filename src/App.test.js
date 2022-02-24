import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows search fields", () => {
  render(<App />);
  const searchNameField = screen.getByTestId("search-name");
  expect(searchNameField).toBeInTheDocument();
  const dearchTagField = screen.getByTestId("search-tag");
  expect(dearchTagField).toBeInTheDocument();
});
