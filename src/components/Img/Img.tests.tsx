import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

describe("Img Component", () => {
  test("renders an image with the correct src and alt", () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
  });

  test("applies custom width, height, and borderRadius", () => {
    render(
      <Img
        src="https://via.placeholder.com/150"
        alt="Styled Image"
        width={200}
        height={200}
        borderRadius="10px"
      />,
    );
    const image = screen.getByAltText("Styled Image");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
    expect(image).toHaveStyle("border-radius: 10px");
  });
});
