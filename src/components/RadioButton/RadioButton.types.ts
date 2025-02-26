/**
 * **RadioButtonProps**
 * Defines the properties for the `RadioButton` component.
 */
export type RadioButtonProps = {
    label: string; // Label for the radio button
    name: string; // Name attribute for grouping
    value: string; // Value of the radio button
    checked?: boolean; // Whether it's selected
    onChange?: (value: string) => void; // Callback when selected
  };
  