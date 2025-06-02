import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  beforeAll(() => {
    console.log("before all");
  });
  beforeEach(() => {
    console.log("before each");
  });

  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after each");
  });
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should load button in contact component", () => {
    render(<Contact />);
    const Submitbutton = screen.getByText("Submit");
    expect(Submitbutton).toBeInTheDocument();
  });

  test("should load input name in contact component", () => {
    render(<Contact />);
    const inputname = screen.getByPlaceholderText("name");
    expect(inputname).toBeInTheDocument();
  });
  test("should load 2 input boxes", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
  });
});
