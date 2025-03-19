import styled from 'styled-components';

/**
 * Styled text component with dynamic styles.
 */
export const StyledText = styled.p<{
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  italic?: boolean;
  color?: string;
}>`
  font-size: ${({ size }) =>
    size === 'small' ? '14px' : size === 'large' ? '22px' : '16px'};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  color: ${({ color }) => color || '#333'};
  margin: 5px 0;
`;
