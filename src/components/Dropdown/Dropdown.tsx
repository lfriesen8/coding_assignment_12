import React from "react";
import { StyledDropdown, StyledSelect } from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.types";

/**
 * **Dropdown Component**
 *
 * A reusable dropdown/select component.
 *
 * @component
 * @param {string[]} options - Array of dropdown options.
 * @param {string} [defaultValue] - Default selected option.
 * @param {(value: string) => void} [onChange] - Callback when selection changes.
 */
export const Dropdown: React.FC<DropdownProps> = ({ options, defaultValue, onChange }) => {
  return (
    <StyledDropdown>
      <StyledSelect defaultValue={defaultValue} onChange={(e) => onChange && onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledDropdown>
  );
};
