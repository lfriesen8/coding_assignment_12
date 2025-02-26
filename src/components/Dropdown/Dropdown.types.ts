/**
 * **DropdownProps**
 * Defines the properties for the `Dropdown` component.
 */
export type DropdownProps = {
    options: string[]; // Array of dropdown options
    defaultValue?: string; // Default selected value
    onChange?: (value: string) => void; // Callback when selection changes
  };
  