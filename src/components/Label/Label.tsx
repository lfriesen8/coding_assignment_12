import React from 'react';
import { StyledLabel } from './Label.styles';
import { LabelProps } from './Label.types';

/**
 * **Label Component**
 *
 * A simple label component for forms or UI elements.
 *
 * @component
 * @param {string} text - The text content of the label.
 * @param {boolean} [disabled] - Whether the label is disabled.
 * @param {string} [htmlFor] - The `for` attribute (associates label with an input).
 */
export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  htmlFor,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
