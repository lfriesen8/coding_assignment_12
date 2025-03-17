import React from "react";
import { StyledImage } from "./Img.styles";
import { ImgProps } from "./Img.types";

/**
 * **Img Component**
 *
 * A reusable image component that supports various sizes and styling.
 *
 * @component
 * @param {string} src - Image source URL.
 * @param {string} alt - Alternative text for the image.
 * @param {string | number} [width] - Width of the image.
 * @param {string | number} [height] - Height of the image.
 * @param {string} [borderRadius] - Rounds the corners of the image.
 */
export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};
