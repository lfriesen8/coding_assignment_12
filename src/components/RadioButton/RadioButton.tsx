import React from "react";
import { StyledRadioWrapper, StyledRadio, StyledLabel } from "./RadioButton.styles";
import { RadioButtonProps } from "./RadioButton.types";

/**
 * **Radio Button Component**
 *
 * A reusable radio button component.
 *
 * @component
 * @param {string} label - Label for the radio button.
 * @param {string} name - Name attribute for grouping radio buttons.
 * @param {string} value - Value associated with this radio button.
 * @param {boolean} [checked] - Whether the radio button is selected.
 * @param {(value: string) => void} [onChange] - Callback when selection changes.
 */
export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <StyledRadioWrapper>
      <StyledRadio 
        type="radio" 
        name={name} 
        value={value} 
        checked={checked} 
        onChange={(e) => onChange && onChange(e.target.value)} 
      />
      <StyledLabel>{label}</StyledLabel>
    </StyledRadioWrapper>
  );
};
