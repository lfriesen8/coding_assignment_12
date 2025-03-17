import React from "react";
import { StyledButton } from "./Button.styles";

/**
 * **Button Component**
 *
 * A reusable button component that supports different sizes, states, and styles.
 *
 * @component
 * @param {string} label - The button text.
 * @param {boolean} [primary] - Determines if it's a primary button.
 * @param {boolean} [disabled] - Disables the button.
 * @param {"small" | "medium" | "large"} [size] - The size of the button.
 * @param {string} [backgroundColor] - Optional background color.
 * @param {() => void} [onClick] - Click handler function.
 */
export type ButtonProps = {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  disabled = false,
  size = "medium",
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      primary={primary}
      disabled={disabled}
      size={size}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
};
