import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text Component", () => {
  test("renders text correctly", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  test("applies bold styling", () => {
    render(<Text bold>Bold Text</Text>);
    expect(screen.getByText("Bold Text")).toHaveStyle("font-weight: bold");
  });

  test("applies italic styling", () => {
    render(<Text italic>Italic Text</Text>);
    expect(screen.getByText("Italic Text")).toHaveStyle("font-style: italic");
  });

  test("applies color correctly", () => {
    render(<Text color="#ff0000">Colored Text</Text>);
    expect(screen.getByText("Colored Text")).toHaveStyle("color: #ff0000");
  });

  test("renders different sizes", () => {
    render(<Text size="small">Small Text</Text>);
    expect(screen.getByText("Small Text")).toHaveStyle("font-size: 14px");
  });
});
