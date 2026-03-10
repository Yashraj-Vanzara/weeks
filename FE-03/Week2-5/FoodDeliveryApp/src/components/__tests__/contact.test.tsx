import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";
describe("Contact Us page test cases",()=>{
test("Should render the contact us page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument()
});


test("Should render the button in contact us page", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument()
});
})

