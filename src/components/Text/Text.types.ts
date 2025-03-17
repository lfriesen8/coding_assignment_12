/**
 * **TextProps**
 * Defines the properties for the `Text` component.
 */
export type TextProps = {
  children: string; // The text content
  size?: "small" | "medium" | "large"; // The text size
  bold?: boolean; // Whether the text is bold
  italic?: boolean; // Whether the text is italic
  color?: string; // Custom text color
};
