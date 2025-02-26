import { render, screen } from "@testing-library/react";
import { Page } from "./Page";

describe("Page Component", () => {
  test("renders without crashing", () => {
    render(<Page />);
    expect(screen.getByText("Pages in Storybook")).toBeInTheDocument();
  });
});