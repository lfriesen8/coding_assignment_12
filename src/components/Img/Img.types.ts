/**
 * **ImgProps**
 * Defines the properties for the `Img` component.
 */
export type ImgProps = {
  src: string; // Image source URL
  alt: string; // Alternative text for accessibility
  width?: string | number; // Image width (px or %)
  height?: string | number; // Image height (px or %)
  borderRadius?: string; // Rounds the corners
};
