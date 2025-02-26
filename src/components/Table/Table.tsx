import React, { useState } from "react";
import * as S from "./Table.styles"; // Import all styled components as S
import { TableProps } from "./Table.types";

/**
 * **Table Component**
 *
 * A flexible Table component that supports:
 * - Adding rows dynamically.
 * - Removing rows individually.
 * - A header and footer that remain visible.
 * - A `disabled` state that prevents interaction.
 *
 * 
 *
 *
 * 
 */

export const Table: React.FC<TableProps & { disabled?: boolean }> = ({ disabled = false }) => {
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 30, country: "Canada" },
    { id: 2, name: "Jane Smith", age: 25, country: "USA" },
  ]);

  const addRow = () => {
    setRows([...rows, { id: Date.now(), name: "New User", age: 0, country: "Unknown" }]);
  };

  const removeRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <S.StyledTable style={{ opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : "auto" }}>
      <S.StyledTableHeader>
        <S.StyledTableRow>
          <S.StyledTableCell>Name</S.StyledTableCell>
          <S.StyledTableCell>Age</S.StyledTableCell>
          <S.StyledTableCell>Country</S.StyledTableCell>
          <S.StyledTableCell>Action</S.StyledTableCell>
        </S.StyledTableRow>
      </S.StyledTableHeader>
      <tbody>
        {rows.map((row) => (
          <S.StyledTableRow key={row.id}>
            <S.StyledTableCell>{row.name}</S.StyledTableCell>
            <S.StyledTableCell>{row.age}</S.StyledTableCell>
            <S.StyledTableCell>{row.country}</S.StyledTableCell>
            <S.StyledTableCell>
              <S.StyledButton onClick={() => removeRow(row.id)} disabled={disabled}>
                Remove
              </S.StyledButton>
            </S.StyledTableCell>
          </S.StyledTableRow>
        ))}
      </tbody>
      <S.StyledTableFooter>
        <S.StyledTableRow>
          <S.StyledTableCell>Total</S.StyledTableCell>
          <S.StyledTableCell colSpan={2}>{rows.length} people</S.StyledTableCell>
          <S.StyledTableCell>
            <S.StyledButton onClick={addRow} disabled={disabled}>
              Add Row
            </S.StyledButton>
          </S.StyledTableCell>
        </S.StyledTableRow>
      </S.StyledTableFooter>
    </S.StyledTable>
  );
};
