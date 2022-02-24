import { render, screen } from "@testing-library/react";
import InputField from "./index";

test("render grades component when grades array is empty.", () => {
  const props = {
    onChange: jest.fn,
    value: "any",
    placeholder: "Seach by",
    onKeyDown: jest.fn,
  };
  render(<InputField {...props} />);
  const inputElement = screen.getByPlaceholderText(props.placeholder);
  expect(inputElement).toBeInTheDocument();
});
