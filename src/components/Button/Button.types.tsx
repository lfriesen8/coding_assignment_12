/**
 * Type definitions for the Button component.
 */
export type ButtonProps = {
    label: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    backgroundColor?: string; 
    onClick?: () => void;
  };
  