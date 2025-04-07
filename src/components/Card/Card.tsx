import React from 'react';
import {
  StyledCard,
  CardTitle,
  CardDescription,
  CardButton,
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
  // Ensure fallback in case the image fails
  const imageSrc = image?.startsWith('/') ? image : `/${image}`;

  return (
    <StyledCard>
      {image && (
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      )}

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

