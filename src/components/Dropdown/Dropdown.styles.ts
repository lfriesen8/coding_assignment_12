import styled from 'styled-components';

/**
 * Defines the props that StyledDropdown accepts.
 */
interface StyledDropdownProps {
  disabled?: boolean;
}

/**
 * Styled wrapper for the dropdown component.
 */
export const StyledDropdown = styled.div<StyledDropdownProps>`
  display: inline-block;
  width: 200px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

/**
 * Styled select element.
 */
export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: none;
    border-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  }
`;
