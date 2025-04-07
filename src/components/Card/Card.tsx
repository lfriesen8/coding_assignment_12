import React from 'react';
import {
  StyledCard,
  CardTitle,
  CardDescription,
  CardButton,
  CardImage,
} from './Card.styles';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  techList,
  buttonLabel = 'View',
  onButtonClick,
}) => {
  return (
    <StyledCard>
      {image && <CardImage src={image} alt={title} />} {/* ✅ use real URL */}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {techList && (
        <p>
          <strong>Tech:</strong> {techList.join(', ')}
        </p>
      )}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardButton>{buttonLabel}</CardButton>
        </a>
      ) : (
        buttonLabel && (
          <CardButton onClick={() => onButtonClick && onButtonClick()}>
            {buttonLabel}
          </CardButton>
        )
      )}
    </StyledCard>
  );
};
