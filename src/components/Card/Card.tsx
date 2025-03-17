import React from "react";
import {
  StyledCard,
  CardImage,
  CardTitle,
  CardDescription,
  CardButton,
} from "./Card.styles";
import { CardProps } from "./Card.types";

/**
 * **Card Component**
 *
 * A versatile, reusable card that can display an image, title, description, and button.
 *
 * @component
 * @param {string} title - The title of the card.
 * @param {string} description - The card description text.
 * @param {string} [image] - Optional image URL.
 * @param {string} [buttonLabel] - Optional button text.
 * @param {() => void} [onButtonClick] - Click handler for the button.
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <StyledCard>
      {image && <CardImage src={image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {buttonLabel && (
        <CardButton onClick={() => onButtonClick && onButtonClick()}>
          {buttonLabel}
        </CardButton>
      )}
    </StyledCard>
  );
};
