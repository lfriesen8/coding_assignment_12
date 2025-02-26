import styled from "styled-components";
import { ImgProps } from "./Img.types";

/**
 * **Styled Image Component**
 * Provides custom styles for the `Img` component.
 */
export const StyledImage = styled.img<ImgProps>`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width || "auto")};
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height || "auto")};
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  object-fit: cover;
  display: block;
`;
