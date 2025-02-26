import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders a hero image with text", () => {
    render(
      <HeroImage src="https://via.placeholder.com/1200x400" alt="Test Hero" text="Hello World" />
    );
    const heroText = screen.getByText("Hello World");
    expect(heroText).toBeInTheDocument();
  });

  test("renders a hero image without text", () => {
    render(<HeroImage src="https://via.placeholder.com/1200x400" alt="No Text" />);
    expect(screen.queryByText("No Text")).not.toBeInTheDocument();
  });
});
