import styled from "styled-components";

/**
 * Styled wrapper for the dropdown component.
 */
export const StyledDropdown = styled.div`
  display: inline-block;
  width: 200px;
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
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
