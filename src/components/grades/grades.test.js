import { render, screen } from "@testing-library/react";
import Grades from "./index";

test("render grades component when grades array is empty.", () => {
  render(<Grades grades={[]} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
  const listItemElements = screen.queryAllByRole("listitem");
  expect(listItemElements.length).toBe(0);
});

test("render grades component when grades array is not empty.", () => {
  const grades = ["75", "25", "32"];
  render(<Grades grades={grades} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
  const listItemElements = screen.queryAllByRole("listitem");
  expect(listItemElements.length).toBe(grades.length);
});
