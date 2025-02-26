import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label Component", () => {
  test("renders the label with correct text", () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("applies disabled styling", () => {
    render(<Label text="Disabled Label" disabled />);
    const label = screen.getByText("Disabled Label");
    expect(label).toHaveStyle("color: #ccc");
  });

  test("associates label with input", () => {
    render(<Label text="Associated Label" htmlFor="input-id" />);
    expect(screen.getByText("Associated Label")).toHaveAttribute("for", "input-id");
  });
});
