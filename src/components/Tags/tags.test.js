import { render, screen } from "@testing-library/react";
import Tags from "./index";

test("render Tags component when Tags array is empty.", () => {
  render(<Tags tags={[]} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
  const listItemElements = screen.queryAllByRole("listitem");
  expect(listItemElements.length).toBe(0);
});

test("render Tags component when Tags array is not empty.", () => {
  const tags = ["75", "25", "32"];
  render(<Tags tags={tags} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
  const listItemElements = screen.queryAllByRole("listitem");
  expect(listItemElements.length).toBe(tags.length);
});
