import React from "react";
import { StyledText } from "./Text.styles";
import { TextProps } from "./Text.types";

/**
 * **Text Component**
 *
 * A flexible text component for displaying content with different sizes, styles, and weights.
 *
 * @component
 * @param {string} children - The text content.
 * @param {"small" | "medium" | "large"} [size] - The text size.
 * @param {boolean} [bold] - Whether the text is bold.
 * @param {boolean} [italic] - Whether the text is italic.
 * @param {string} [color] - Custom text color.
 */
export const Text: React.FC<TextProps> = ({ children, size = "medium", bold, italic, color }) => {
  return (
    <StyledText size={size} bold={bold} italic={italic} color={color}>
      {children}
    </StyledText>
  );
};
