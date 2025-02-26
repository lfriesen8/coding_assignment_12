import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

/**
 * **Button Component Tests**
 */
describe("Button Component", () => {
  test("Button renders with correct text", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeVisible();
  });

  test("Disabled button has grey background", () => {
    render(<Button label="Disabled" disabled />);
    expect(screen.getByText("Disabled")).toHaveStyle("background-color: #ccc");
  });

  test("Button click event fires correctly", async () => {
    const mockClick = jest.fn();
    render(<Button label="Click Me" onClick={mockClick} />);
    await userEvent.click(screen.getByText("Click Me"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
