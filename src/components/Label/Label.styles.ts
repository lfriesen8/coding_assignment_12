import styled from "styled-components";

/**
 * Styled label component with dynamic styles.
 */
export const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: block;
  margin-bottom: 5px;
`;
