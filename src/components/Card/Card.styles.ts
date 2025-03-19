import styled from 'styled-components';

/**
 * **StyledCard**
 * The main card container with padding and a subtle shadow.
 */
export const StyledCard = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  background: white;
  padding: 16px;
`;

/**
 * **CardImage**
 * Styles the optional card image.
 */
export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

/**
 * **CardTitle**
 * Styles the title of the card.
 */
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

/**
 * **CardDescription**
 * Styles the description text.
 */
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

/**
 * **CardButton**
 * Optional button for interaction.
 */
export const CardButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;
