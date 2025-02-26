import React from "react";
import { StyledHeroImage, Overlay, HeroText, HiddenImg } from "./HeroImage.styles";
import type { HeroImageProps } from "./HeroImage.types";

/**
 * **HeroImage Component**
 *
 * A large, full-width image with optional text and an overlay.
 *
 * @component
 * @param {string} src - Image source URL.
 * @param {string} alt - Alternative text for accessibility.
 * @param {string | number} [height] - Height of the hero section.
 * @param {string} [overlayColor] - Background overlay color (e.g., "rgba(0,0,0,0.5)").
 * @param {string} [text] - Optional text over the image.
 * @param {string} [textColor] - Color of the text.
 */
export const HeroImage: React.FC<HeroImageProps> = ({ 
  src, 
  alt, 
  height = "300px", 
  overlayColor = "rgba(0,0,0,0.5)", 
  text, 
  textColor = "#fff" 
}) => {
  return (
    <StyledHeroImage height={height} style={{ backgroundImage: `url(${src})` }}>
      {/* Invisible img for accessibility */}
      <HiddenImg src={src} alt={alt} />
      <Overlay color={overlayColor} />
      {text && <HeroText color={textColor}>{text}</HeroText>}
    </StyledHeroImage>
  );
};
