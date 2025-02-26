import styled from "styled-components";

/**
 * **Table Styles**
 * Styled components for all table elements.
 */

export const StyledTable = styled.table`
  width: 100%;
  max-width: 800px; /* Ensures table isn't too small */
  margin: 20px auto;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ccc;
`;

/**
 * **Styled Header**
 * Applies consistent styling to the table header.
 */
export const StyledTableHeader = styled.thead`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-align: left;
  height: 50px;
`;

/**
 * **Styled Footer**
 * Makes the footer section distinct.
 */
export const StyledTableFooter = styled.tfoot`
  background-color: #f1f1f1;
  font-weight: bold;
  text-align: left;
  height: 50px;
`;

/**
 * **Button Styling**
 * Applies consistent styling to table buttons.
 */
export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
