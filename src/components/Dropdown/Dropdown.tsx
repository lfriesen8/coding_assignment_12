import React from "react";
import { StyledDropdown, StyledSelect } from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.types";

/**
 * **Dropdown Component**
 *
 * A reusable dropdown/select component that supports a disabled state.
 *
 * @component
 * @param {string[]} options - Array of dropdown options.
 * @param {string} [defaultValue] - Default selected option.
 * @param {(value: string) => void} [onChange] - Callback when selection changes.
 * @param {boolean} [disabled] - Whether the dropdown is disabled.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  onChange,
  disabled = false,
}) => {
  return (
    <StyledDropdown>
      <StyledSelect
        defaultValue={defaultValue}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled} //  Properly pass disabled to <select>
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledDropdown>
  );
};
