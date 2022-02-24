import { render, screen } from "@testing-library/react";
import ProfileCard from "./index";

const profile = {
  city: "Fushë-Muhurr",
  company: "Yadel",
  email: "iorton0@imdb.com",
  firstName: "Ingaberg",
  grades: ["78", "100", "92", "86", "89", "88", "91", "87"],
  id: "1",
  lastName: "Orton",
  pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
  skill: "Oracle",
  avg: "88.875",
};

test("render ProfileCard component.", () => {
  render(<ProfileCard profile={profile} />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeInTheDocument();
  const tagInput = screen.getByPlaceholderText("Add a tag");
  expect(tagInput).toBeInTheDocument();
});
