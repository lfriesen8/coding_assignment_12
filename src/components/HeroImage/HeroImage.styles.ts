import styled from 'styled-components';

/**
 * **StyledHeroImage**
 * Styles the hero section background.
 */
export const StyledHeroImage = styled.div<{ height: string | number }>`
  background-size: cover;
  background-position: center;
  height: ${({ height }) => height || '300px'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

/**
 * **Hidden Image for Accessibility**
 */
export const HiddenImg = styled.img`
  display: none;
`;

/**
 * **Overlay**
 * Adds a semi-transparent overlay over the image.
 */
export const Overlay = styled.div<{ color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ color }) => color};
`;

/**
 * **HeroText**
 * Styled text over the hero image.
 */
export const HeroText = styled.h1<{ color: string }>`
  position: relative;
  z-index: 2;
  font-size: 2rem;
  color: ${({ color }) => color};
  text-align: center;
`;
