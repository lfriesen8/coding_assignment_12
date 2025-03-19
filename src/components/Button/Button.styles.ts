import styled from 'styled-components';
import { ButtonProps } from './Button.types';

/**
 * Styled button component with dynamic styling based on props.
 */
export const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  /* ✅ Removed label from styled props */
  padding: ${({ size }) =>
    size === 'small'
      ? '5px 10px'
      : size === 'large'
        ? '15px 30px'
        : '10px 20px'};
  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'large' ? '18px' : '16px'};
  border-radius: 5px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* ✅ Now uses backgroundColor prop if provided, otherwise falls back to primary color logic */
  background-color: ${({ backgroundColor, primary, disabled }) =>
    disabled
      ? '#ccc'
      : backgroundColor
        ? backgroundColor
        : primary
          ? '#007bff'
          : '#555'};

  color: white;
  transition:
    background 0.3s,
    transform 0.1s ease-in-out;

  &:hover {
    background-color: ${({ backgroundColor, primary, disabled }) =>
      disabled
        ? '#ccc'
        : backgroundColor
          ? backgroundColor
          : primary
            ? '#0056b3'
            : '#333'};
    transform: ${({ disabled }) =>
      disabled ? 'none' : 'scale(1.05)'}; /* ✅ Adds slight hover effect */
  }

  &:active {
    transform: ${({ disabled }) =>
      disabled ? 'none' : 'scale(0.95)'}; /* ✅ Click effect */
  }
`;
